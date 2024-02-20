import { createSlice } from "@reduxjs/toolkit";

//초기값 설정
const initialState = [];

//slice: action, reducer

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return (state = action.payload);
    },
  },
});

//actions
export const { setUser } = authSlice.actions;

//slice ==> configureStore에 전달
export default authSlice.reducer;
