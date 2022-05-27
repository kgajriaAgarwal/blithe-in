import { configureStore } from "@reduxjs/toolkit";
import { authReducer, postModalReducer, postReducer, userReducer } from "../slice";


export const store = configureStore({
    reducer: {
      auth: authReducer,
      user: userReducer,
      post: postReducer,
      postModal: postModalReducer,
    },
  });