import { configureStore } from "@reduxjs/toolkit";
import lists from "../modules/lists";
import members from "../modules/member";
// import authSlice from "../redux/modules/authSlice";

//전역 state 관리 저장소(관리소)
//redux toolkit 설치
const store = configureStore({
  reducer: {
    lists,
    members,
  },
});

export default store;
