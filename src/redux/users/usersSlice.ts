import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userAdapter } from "../adapter/usersAdapter";

export const fetchAllUsers = createAsyncThunk("users/fetch", async () => {
  const users = await fetch(`${process.env.REACT_APP_BASE_URL}/users`).then(
    (data) => data.json()
  );

  return users;
});

export const fetchThisUser = createAsyncThunk("this_user/fetch", async () => {
  const user = await fetch(`${process.env.REACT_APP_BASE_URL}/this_user`).then(
    (data) => data.json()
  );

  return user[0];
});

const initialState = userAdapter.getInitialState({
  isLoading: false,
  isError: false,
  thisUserId: "",
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
        userAdapter.addMany(state, action.payload);
      })
      .addCase(fetchThisUser.fulfilled, (state, action) => {
        state.thisUserId = action.payload._id;
      })
      .addCase(fetchAllUsers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default usersSlice.reducer;
