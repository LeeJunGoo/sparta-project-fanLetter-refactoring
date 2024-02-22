import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userInstance } from "api/api";
import { toast } from "react-toastify";

//초기값 설정
const initialState = {
  //"!!" => boolean으로 형 변환
  isLogin: !!localStorage.getItem("accessToken"),
  avatar: localStorage.getItem("avatar"),
  nickname: localStorage.getItem("nickname"),
  userId: localStorage.getItem("userId"),
  isLoading: false,
  isError: false,
  error: null,
};

export const __login = createAsyncThunk("login", async ({ id, password }, thunkAPI) => {
  try {
    const { data } = await userInstance.post("/login?expiresIn=60s", {
      id,
      password,
    });

    const { accessToken, avatar, nickname, userId } = data;

    if (data.success) {
      toast.success("성공");
      return { accessToken, avatar, nickname, userId };
    }
  } catch (error) {
    toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error);
  }
});

//slice: action, reducer
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.isLogin = false;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(__login.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(__login.fulfilled, (state, action) => {
        const { accessToken, avatar, nickname, userId } = action.payload;
        //로컬 스토리지에 저장
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("avatar", avatar);
        localStorage.setItem("nickname", nickname);
        localStorage.setItem("userId", userId);

        //전역 state에 저장
        state.isLogin = true;
        state.avatar = avatar;
        state.nickname = nickname;
        state.userId = userId;

        state.isLoading = false;
      })
      .addCase(__login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

//actions
export const { login, logout } = authSlice.actions;

//slice ==> configureStore에 전달
export default authSlice.reducer;
