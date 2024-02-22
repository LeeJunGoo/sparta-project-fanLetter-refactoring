import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

//초기값 설정
const initialState = {
  letters: [],
  isLoading: true,
  isError: false,
  error: null,
};

export const __getLetter = createAsyncThunk("getLetters", async (payload, thunkAPI) => {
  try {
    //서버 측
    const { data } = await api.get("/letters?_sort=-createdAt");

    //클라이언트 측
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __addLetter = createAsyncThunk("addLetter", async (newLetter, thunkAPI) => {
  try {
    //서버 측 전달
    await api.post("/letters", newLetter);
    const { data } = await api.get("/letters");
    console.log("data", data);
    //reducer로 전달
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __deleteLetter = createAsyncThunk("deleteLetter", async (id, thunkAPI) => {
  try {
    await api.delete(`/letters/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __modifyLetter = createAsyncThunk("modifyLetter", async (payload, thunkAPI) => {
  try {
    await api.patch(`/letters/${payload.id}`, {
      content: payload.inputValue,
    });

    return payload;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

//redux slice 설정
const listSlice = createSlice({
  name: "lists",
  initialState,
  //reducer + action 합쳐진 형태
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__addLetter.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(__addLetter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.letters = action.payload;
        state.isError = false;
        state.error = null;
      })
      .addCase(__addLetter.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(__getLetter.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(__getLetter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.letters = action.payload;
        state.isError = false;
        state.error = null;
      })
      .addCase(__getLetter.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(__deleteLetter.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(__deleteLetter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.letters = state.letters.filter((item) => item.id !== action.payload);
        state.isError = false;
        state.error = null;
      })
      .addCase(__deleteLetter.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(__modifyLetter.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(__modifyLetter.fulfilled, (state, action) => {
        const { id, inputValue } = action.payload;
        state.isLoading = false;
        state.letters = state.letters.map((item) => {
          if (item.id === id) {
            return { ...item, content: inputValue };
          } else {
            return item;
          }
        });
        state.isError = false;
        state.error = null;
      })
      .addCase(__modifyLetter.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export default listSlice.reducer;
