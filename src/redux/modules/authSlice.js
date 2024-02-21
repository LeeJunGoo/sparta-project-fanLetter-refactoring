import { createSlice } from "@reduxjs/toolkit";

//초기값 설정
const initialState = {
  //"!!" => boolean으로 형 변환
  isLogin: !!localStorage.getItem("accessToken"),
  avatar: localStorage.getItem("avatar"),
  nickname: localStorage.getItem("nickname"),
  userId: localStorage.getItem("userId"),
};

//slice: action, reducer
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login: (state, action) => {
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
