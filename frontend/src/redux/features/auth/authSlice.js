import { createSlice } from "@reduxjs/toolkit";
const status = JSON.parse(localStorage.getItem("status"));

const initialState = {
  isLoggedIn: status ? status : "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_LOGIN(state, action) {
      state.isLoggedIn = action.payload;
      localStorage.setItem("status", JSON.stringify(action.payload));
    },
  },
});

export const { SET_LOGIN } = authSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;
