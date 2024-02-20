import { createSlice } from "@reduxjs/toolkit";

//초기값
const initialState = "카리나";

const memberSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    selectMember: (state, action) => {
      return (state = action.payload);
    },
  },
});

//actions
export const { selectMember } = memberSlice.actions;

//reducer
export default memberSlice.reducer;
