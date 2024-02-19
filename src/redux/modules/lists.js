import { createSlice } from "@reduxjs/toolkit";

//초기값 설정
const initialState = [];

//redux slice 설정

const listSlice = createSlice({
  name: "lists",
  initialState,
  //reducer + action 합쳐진 형태
  reducers: {
    //초기 데이터 저장
    setList: (state, action) => {
      return (state = action.payload);
    },

    //추가 기능
    addList: (state, action) => {
      return [action.payload, ...state];
    },

    //삭제 기능
    deleteList: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    //수정 기능
    modifyList: (state, action) => {
      const { id, inputValue } = action.payload;
      console.log(action);

      return state.map((item) => {
        if (item.id === id) {
          return { ...item, content: inputValue };
        } else {
          return item;
        }
      });
    },
  },
});

//export
export const { setList, addList, modifyList, deleteList } = listSlice.actions;

export default listSlice.reducer;
