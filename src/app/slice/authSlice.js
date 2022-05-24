import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { setLocalStorage, showErrorToast, showSuccessToast } from "../../Helpers/Common/utils";
import { actionLogin, actionSignup } from "../../Helpers/Services/actions";


const initialState = {  
    token: localStorage.getItem("authData") || null,
    user: JSON.parse(localStorage.getItem("userData")) || null,
    auth_data: {},
    status:'idle', // 'idle' | 'loading' | 'suceeded' | 'failed'
    error:'null'
};

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ({ username, password }, thunkAPI) => {
      try {
          const response = await actionLogin({username, password});
          return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async ({ password, firstName, lastName, username }, thunkAPI) => {
    try {
      const response = await actionSignup({ password, firstName, lastName, username});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: () => {
      localStorage.removeItem("authData");
      localStorage.removeItem("userData");
      showSuccessToast("User logged out successfully!")
      return {
        user: null,
        token: null,
        auth_data: {},
        status:'idle', // 'idle' | 'loading' | 'suceeded' | 'failed'
        error:'null',
        isLoggedIn : false,
        auth: {}
      };
    },
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.auth = {
        status: "loading",
        data: {},
        error: {},
      };
    },
    [loginUser.fulfilled]: (state, action) => {
      state.auth = {
        status: "idle",
        data: action.payload,
        error: {},
        token: action.payload.encodedToken,
        user:action.payload.foundUser,
      };
      setLocalStorage("authData", action.payload.encodedToken);
      localStorage.setItem("userData", JSON.stringify(action.payload.foundUser));
      showSuccessToast("user logged in successfully!!")
      state.isLoggedIn = true
    },
    [loginUser.rejected]: (state, action) => {
      state.auth = {
        status: "idle",
        data: {},
        error: action.error.message,
      };
      state.isLoggedIn = false
    },

    //SIGNUP
    [signUpUser.pending]: (state, action) => {
      state.auth = {
        status: "loading",
        data: {},
        error: {},
      };
    },
    [signUpUser.fulfilled]: (state, action) => {
      state.auth = {
        status: "idle",
        data: action.payload,
        error: {},
        token: action.payload.encodedToken,
        user:action.payload.createdUser,
      };

      localStorage.setItem("authData", action.payload.encodedToken);
      localStorage.setItem("userData", JSON.stringify(action.payload.createdUser));
      showSuccessToast("user registered successfully!!")
      state.isLoggedIn = true
    },
    [signUpUser.rejected]: (state, action) => {
      state.auth = {
        status: "idle",
        data: {},
        error: action.error.message,
      };
      state.isLoggedIn = false
    },
  }
})


export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;