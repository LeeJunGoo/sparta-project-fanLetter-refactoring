import { configureStore } from "@reduxjs/toolkit";
import lists from "../modules/lists";
import members from "../modules/member";
//전역 state 관리 저장소(관리소)
//redux toolkit 설치
const store = configureStore({
  reducer: {
    lists: lists,
    members: members,
  },
});

export default store;
