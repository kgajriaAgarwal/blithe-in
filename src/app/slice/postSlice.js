import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { showSuccessToast } from "../../Helpers/Common/utils";
import {
  actionAddComment,
  actionBookmarkPost,
  actionDeleteComment,
  actionDeletePost,
  actionDislikePost,
  actionDownvoteComment,
  actionEditComment,
  actionEditPost,
  actionGetAllBookmarks,
  actionGetAllComments,
  actionLikePost,
  actionRemoveBookmarkPost,
  actionUpvoteComment,
  createPost,
  getAllPosts,
  getAllUsers,
  getPostById,
  getPostByUsername,
  getUserById,
} from "../../Helpers/Services/actions";

const initialState = {
  status: "idle", // 'idle' | 'loading' | 'suceeded' | 'failed'
  error: "null",
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
  async (postId, thunkAPI) => {
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
  async (username, thunkAPI) => {
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
  async (data, thunkAPI) => {
    try {
      const response = await createPost({ postData: data });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

////actionDeletePost
export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (post_id, thunkAPI) => {
    try {
      const response = await actionDeletePost({ postId: post_id });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//actionEditPost
export const editPost = createAsyncThunk(
  "post/editPost",
  async (data, thunkAPI) => {
    try {
      const response = await actionEditPost({
        postData: data?.postData,
        postId: data?.postId,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const likePost = createAsyncThunk(
  "post/likePost",
  async (post_id, thunkAPI) => {
    try {
      const response = await actionLikePost({ postId: post_id });
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const dislikePost = createAsyncThunk(
  "post/dislikePost",
  async (post_id, thunkAPI) => {
    try {
      const response = await actionDislikePost({ postId: post_id });
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//likeAndDislikePost
export const likeAndDislikePost = createAsyncThunk(
  "post/likeAndDislikePost",
  async (data, thunkAPI) => {
    try {
      const response = data?.isLike
      ? await actionLikePost({ postId: data?.postId })
      : await actionDislikePost({ postId: data?.postId });
    return response.data;
     
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//actionGetAllBookmarks
export const getAllBookmarks = createAsyncThunk(
  "post/getAllBookmarks",
  async (_, thunkAPI) => {
    try {
      const response = await actionGetAllBookmarks();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//bookmarkingPost
export const bookmarkingPost = createAsyncThunk(
  "post/bookmarkingPost",
  async (data, thunkAPI) => {
    try {
      const response = data?.isBookmark
      ? await actionBookmarkPost({ postId: data?.postId })
      : await actionRemoveBookmarkPost({ postId: data?.postId });
    return response.data;
     
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//COMMENTS ROUTE
//GET ALL COMMNETS //actionGetAllComments
export const getComments = createAsyncThunk(
  "post/getComments",
  async (post_id, thunkAPI) => {
    try {
      const response = await actionGetAllComments({ postId: post_id });
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//ADD COMMENT
export const addComment = createAsyncThunk(
  "post/addComment",
  async (data, thunkAPI) => {
    try {
      const response = await actionAddComment({
        postId: data?.postId,
        commentData: data?.commentData,
      });
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//EDIT COMMENT
export const editComment = createAsyncThunk(
  "post/editComment",
  async (data, thunkAPI) => {
    try {
      const response = await actionEditComment({
        postId: data?.postId,
        commentId: data?.commentId,
        commentData: data?.commentData,
      });
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//actionDeleteComment
export const deleteComment = createAsyncThunk(
  "post/deleteComment",
  async (data, thunkAPI) => {
    try {
      const response = await actionDeleteComment({
        postId: data?.postId,
        commentId: data?.commentId,
      });
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const upvoteComment = createAsyncThunk(
  "post/upvoteComment",
  async (data, thunkAPI) => {
    try {
      const response = await actionUpvoteComment({
        postId: data?.postId,
        commentId: data?.commentId,
      });
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const downvoteComment = createAsyncThunk(
  "post/downvoteComment",
  async (data, thunkAPI) => {
    try {
      const response = await actionDownvoteComment({
        postId: data?.postId,
        commentId: data?.commentId,
      });
      return response?.data;
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
      showSuccessToast("Post created successfully!!");
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
      showSuccessToast("Post deleted successfully!!");
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
      showSuccessToast("Post updated successfully!!");
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

    //likePost
    [likeAndDislikePost.pending]: (state, action) => {
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
    [likeAndDislikePost.fulfilled]: (state, action) => {
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
    [likeAndDislikePost.rejected]: (state, action) => {
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

    //bookmarkingPost
    [bookmarkingPost.pending]: (state, action) => {
      state.bookmarks = {
        status: "loading",
        data: {},
        error: {},
      };
    },
    [bookmarkingPost.fulfilled]: (state, action) => {
      state.bookmarks = {
        status: "idle",
        data: action.payload,//state.allPosts = action.payload.posts;
        error: {},
      };
    },
    [bookmarkingPost.rejected]: (state, action) => {
      state.bookmarks = {
        status: "idle",
        data: {},
        error: action.error.message,
      };
    },

    //actionGetAllBookmarks
    [getAllBookmarks.pending]: (state, action) => {
      state.bookmarks = {
        status: "loading",
        data: {},
        error: {},
      };
    },
    [getAllBookmarks.fulfilled]: (state, action) => {
      state.bookmarks = {
        status: "idle",
        data: action.payload,//state.allPosts = action.payload.posts;
        error: {},
      };
    },
    [getAllBookmarks.rejected]: (state, action) => {
      state.bookmarks = {
        status: "idle",
        data: {},
        error: action.error.message,
      };
    },

    //COMMENT ROUTE
    //getComments
    [getComments.pending]: (state, action) => {
      state.comments = {
        status: "loading",
        data: {},
        error: {},
      };
    },
    [getComments.fulfilled]: (state, action) => {
      state.comments = {
        status: "idle",
        data: action.payload,
        error: {},
      };
    },
    [getComments.rejected]: (state, action) => {
      state.comments = {
        status: "idle",
        data: {},
        error: action.error.message,
      };
    },

    //addComment
    [addComment.pending]: (state, action) => {
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
    [addComment.fulfilled]: (state, action) => {
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
      showSuccessToast("comment added successfully!!");
    },
    [addComment.rejected]: (state, action) => {
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

    //editComment
    [editComment.pending]: (state, action) => {
      state.comments = {
        status: "loading",
        data: {},
        error: {},
      };
    },
    [editComment.fulfilled]: (state, action) => {
      state.comments = {
        status: "idle",
        data: action.payload,
        error: {},
      };
      showSuccessToast("comment updated successfully!!");
    },
    [editComment.rejected]: (state, action) => {
      state.comments = {
        status: "idle",
        data: {},
        error: action.error.message,
      };
    },

    // deleteComment
    [deleteComment.pending]: (state, action) => {
      state.comments = {
        status: "loading",
        data: {},
        error: {},
      };
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.comments = {
        status: "idle",
        data: action.payload,
        error: {},
      };
      showSuccessToast("comment deleted successfully!!");
    },
    [deleteComment.rejected]: (state, action) => {
      state.comments = {
        status: "idle",
        data: {},
        error: action.error.message,
      };
    },

    // upvoteComment
    [upvoteComment.pending]: (state, action) => {
      state.comments = {
        status: "loading",
        data: {},
        error: {},
      };
    },
    [upvoteComment.fulfilled]: (state, action) => {
      state.comments = {
        status: "idle",
        data: action.payload,
        error: {},
      };
      showSuccessToast("comment upvoted!!");
    },
    [upvoteComment``.rejected]: (state, action) => {
      state.comments = {
        status: "idle",
        data: {},
        error: action.error.message,
      };
    },

    // downvoteComment
    [downvoteComment.pending]: (state, action) => {
      state.comments = {
        status: "loading",
        data: {},
        error: {},
      };
    },
    [downvoteComment.fulfilled]: (state, action) => {
      state.comments = {
        status: "idle",
        data: action.payload,
        error: {},
      };
      showSuccessToast("comment downvoted");
    },
    [downvoteComment.rejected]: (state, action) => {
      state.comments = {
        status: "idle",
        data: {},
        error: action.error.message,
      };
    },

  },
});

export default postSlice.reducer;
