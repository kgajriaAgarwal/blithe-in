import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { actionDeletePost, actionEditPost, createPost, getAllPosts, getAllUsers, getPostById, getPostByUsername, getUserById } from "../../Helpers/Services/actions"; 

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


  //createPost
  export const actionCreatePost = createAsyncThunk(
    "post/actionCreatePost",
    async ( data , thunkAPI) => {
      try {
          const response = await createPost({postData: data});
          return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  ////actionDeletePost
  export const deletePost = createAsyncThunk(
    "post/deletePost",
    async (post_id , thunkAPI) => {
      try {
          const response = await actionDeletePost({postId: post_id});
          return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );


  //actionEditPost
  export const editPost = createAsyncThunk(
    "post/editPost",
    async ( data , thunkAPI) => {
      try {
          const response = await actionEditPost({postData: data?.postData, postId: data?.postId});
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


      //actionCreatePost
      [actionCreatePost.pending]: (state, action) => {
        state.posts = {
          status: "loading",
          data: {},
          error: {},
        };
      },
      [actionCreatePost.fulfilled]: (state, action) => {
        state.posts = {
          status: "idle",
          data: action.payload,
          error: {},
        };
      },
      [actionCreatePost.rejected]: (state, action) => {
        state.posts = {
          status: "idle",
          data: {},
          error: action.error.message,
        };
      },

      //deletePost
      [deletePost.pending]: (state, action) => {
        state.posts = {
          status: "loading",
          data: {},
          error: {},
        };
        state.userPosts = {
          status: "loading",
          data: {},
          error: {},
        };
      },
      [deletePost.fulfilled]: (state, action) => {
        state.posts = {
          status: "idle",
          data: action.payload,
          error: {},
        };
        state.userPosts = {
          status: "idle",
          data: action.payload,
          error: {},
        };
      },
      [deletePost.rejected]: (state, action) => {
        state.posts = {
          status: "idle",
          data: {},
          error: action.error.message,
        };
        state.userPosts = {
          status: "idle",
          data: {},
          error: action.error.message,
        };
      },

      //actionEditPost
      [editPost.pending]: (state, action) => {
        state.posts = {
          status: "loading",
          data: {},
          error: {},
        };
        // state.userPosts
        state.userPosts = {
          status: "loading",
          data: {},
          error: {},
        };
      },
      [editPost.fulfilled]: (state, action) => {
        state.posts = {
          status: "idle",
          data: action.payload,
          error: {},
        };
        state.userPosts = {
          status: "idle",
          data: action.payload,
          error: {},
        };
      },
      [editPost.rejected]: (state, action) => {
        state.posts = {
          status: "idle",
          data: {},
          error: action.error.message,
        };
        state.userPosts = {
          status: "idle",
          data: {},
          error: action.error.message,
        };
      },

    }
  })
  
  
  export default postSlice.reducer;