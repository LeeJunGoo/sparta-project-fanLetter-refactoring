import { createSlice } from "@reduxjs/toolkit";

//초기값 설정
const initialState = {
  //"!!" => boolean으로 형 변환
  isLogin: !!localStorage.getItem("accessToken"),
};

//slice: action, reducer
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      const accessToken = action.payload;
      //로컬 스토리지에 JWT토큰 저장
      localStorage.setItem("accessToken", accessToken);
      state.isLogin = true;
    },

    logout: (state, action) => {
      state.isLogin = false;
      localStorage.clear();
    },
  },
});

//actions
export const { login, logout } = authSlice.actions;

//slice ==> configureStore에 전달
export default authSlice.reducer;
