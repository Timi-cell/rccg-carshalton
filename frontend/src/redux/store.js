import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/auth/authSlice";
import memberReducer from "../redux/features/member/memberSlice";
import filterReducer from "../redux/features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    member: memberReducer,
    filter: filterReducer,
  },
});
