import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userAdapter } from "../adapter/usersAdapter";

export const fetchAllUsers = createAsyncThunk("users/get", async () => {
  const users = await fetch(`${process.env.REACT_APP_BASE_URL}/users`).then(
    (data) => data.json()
  );

  return users;
});

const initialState = userAdapter.getInitialState({
  isLoading: false,
  isError: false,
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        userAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchAllUsers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default usersSlice.reducer;
