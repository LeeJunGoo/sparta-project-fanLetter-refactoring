import { createSlice } from "@reduxjs/toolkit";

//초기값 설정
const initialState = [];

//slice: action, reducer

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      //로그인된 정보
      state.push(action.payload);
    },
  },
});

//actions
export const { setUser } = authSlice.actions;

//slice ==> configureStore에 전달
export default authSlice.reducer;
