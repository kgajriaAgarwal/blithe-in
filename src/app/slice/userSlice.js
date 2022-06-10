import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { actionFollowUser, actionUnFollowUser, getAllUsers, getUserById } from "../../Helpers/Services/actions"; 
// import { updateUser } from "../Auth/authSlice";

const initialState = {
  allUsers: [],
  userStatus: "",
  notFollowing: [],
  status:'idle', // 'idle' | 'loading' | 'suceeded' | 'failed'
  error:'null'
};

export const getUsers = createAsyncThunk(
    "user/getUsers",
    async (_, thunkAPI) => {
      try {
          const response = await getAllUsers();
          return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  //getUserById
  export const getUserDetailsByID = createAsyncThunk(
    "user/getUserDetailsByID",
    
    async ( username , thunkAPI) => {
      try {
          const response = await getUserById({ username});
          return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );


    //getUserById
    export const followUser = createAsyncThunk(
      "user/followUser",
      
      async ( data, thunkAPI) => {
        try {
          const response = data?.isFollowed
            ?  await actionUnFollowUser({ followUserId: data?.userId })
            :await actionFollowUser({ followUserId: data?.userId });
          return response.data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error);
        }
      }
    );

  const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [getUsers.pending]: (state, action) => {
        state.users = {
          status: "loading",
          data: {},
          error: {},
        };
      },
      [getUsers.fulfilled]: (state, action) => {
        state.users = {
          status: "idle",
          data: action.payload,
          allUsers: action.payload.users,
          error: {},
        };
      },
      [getUsers.rejected]: (state, action) => {
        state.users = {
          status: "idle",
          data: {},
          error: action.error.message,
        };
      },
  
      //getUserDetailsByID
      [getUserDetailsByID.pending]: (state, action) => {
        state.userDetails = {
          status: "loading",
          data: {},
          error: {},
        };
      },
      [getUserDetailsByID.fulfilled]: (state, action) => {
        state.userDetails = {
          status: "idle",
          data: action.payload,
          error: {},
        };
      },
      [getUserDetailsByID.rejected]: (state, action) => {
        state.userDetails = {
          status: "idle",
          data: {},
          error: action.error.message,
        };
      },

      //followUser
      [followUser.pending]: (state, action) => {
        state.userDetails = {
          status: "loading",
          data: {},
          error: {},
        };
      },
      [followUser.fulfilled]: (state, action) => {
        state.userDetails = {
          status: "idle",
          data: action.payload,
          error: {},
        };
      },
      [followUser.rejected]: (state, action) => {
        state.userDetails = {
          status: "idle",
          data: {},
          error: action.error.message,
        };
      },


    }
  })
  
  export default userSlice.reducer;