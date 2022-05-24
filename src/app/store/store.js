import { configureStore } from "@reduxjs/toolkit";
import { authReducer, postReducer, userReducer } from "../slice";
// import authReducer from "../slice/authSlice";


export const store = configureStore({
    reducer: {
      auth: authReducer,
      user: userReducer,
      post: postReducer,
    },
  });