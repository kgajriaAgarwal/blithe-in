import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllPosts, getAllUsers, getPostById, getPostByUsername, getUserById } from "../../Helpers/Services/actions"; 
// import { updateUser } from "../Auth/authSlice";

const initialState = {
  status:'idle', // 'idle' | 'loading' | 'suceeded' | 'failed'
  error:'null'
};

export const getPosts = createAsyncThunk(
    "post/getPosts",
    async (_, thunkAPI) => {
      try {
          const response = await getAllPosts();
          return response.data.posts;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  //getPostById
  export const getPostDetailsByID = createAsyncThunk(
    "post/getPostDetailsByID",
    async ( postId , thunkAPI) => {
      try {
          const response = await getPostById(postId);
          return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  //getPostByUsername
  export const getPostBy_username = createAsyncThunk(
    "post/getPostBy_username",
    async ( username , thunkAPI) => {
      try {
          const response = await getPostByUsername(username);
          return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: {
        [getPosts.pending]: (state, action) => {
        state.posts = {
          status: "loading",
          data: {},
          error: {},
        };
      },
      [getPosts.fulfilled]: (state, action) => {
        state.posts = {
          status: "idle",
          data: action.payload,
          error: {},
        };
      },
      [getPosts.rejected]: (state, action) => {
        state.posts = {
          status: "idle",
          data: {},
          error: action.error.message,
        };
      },
  
      //getUserDetailsByID
      [getPostDetailsByID.pending]: (state, action) => {
        state.postDetails = {
          status: "loading",
          data: {},
          error: {},
        };
      },
      [getPostDetailsByID.fulfilled]: (state, action) => {
        state.postDetails = {
          status: "idle",
          data: action.payload,
          error: {},
        };
      },
      [getPostDetailsByID.rejected]: (state, action) => {
        state.postDetails = {
          status: "idle",
          data: {},
          error: action.error.message,
        };
      },

      //getPostBy_username
      [getPostBy_username.pending]: (state, action) => {
        state.userPosts = {
          status: "loading",
          data: {},
          error: {},
        };
      },
      [getPostBy_username.fulfilled]: (state, action) => {
        state.userPosts = {
          status: "idle",
          data: action.payload,
          error: {},
        };
      },
      [getPostBy_username.rejected]: (state, action) => {
        state.userPosts = {
          status: "idle",
          data: {},
          error: action.error.message,
        };
      },
    }
  })
  
  
  export default postSlice.reducer;