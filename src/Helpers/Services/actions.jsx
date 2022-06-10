import mainApiService from "./apiService";
import { setLocalStorage, showErrorToast } from "../../Helpers/Common/utils";

// Action to perform Login
export const actionLogin = async (data) => {
  const response = await mainApiService("actionLogin", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
  return response;
  }else{
    console.log("response.data.errors:", response.data.errors);
    // showErrorToast(response.data.errors[0])
    showErrorToast("Unexpected error")
  }
};

// Action to perform Signup
export const actionSignup = async (data) => {
  const response = await mainApiService("actionSignup", data);
  if (response.data.encodedToken) {
    setLocalStorage("authData", response.data.encodedToken);
  }
  // dispatch({ type: Actions.LOGIN, data: response.data });
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      showErrorToast("Unexpected error")
    }
};

//USERS ROUTE

//action to get All users
export const getAllUsers = async (data) => {
  const response = await mainApiService("getAllUsers", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      showErrorToast("Unexpected error")
  }
};

//action to get USER BY ID
export const getUserById = async (data) => {
  const response = await mainApiService("getUserById", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      showErrorToast("Unexpected error")
  }
};

//actionFollowUser
export const actionFollowUser = async (data) => {
  const response = await mainApiService("actionFollowUser", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      showErrorToast("Unexpected error")
  }
};

//actionUnFollowUser
export const actionUnFollowUser = async (data) => {
  const response = await mainApiService("actionUnFollowUser", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      showErrorToast("Unexpected error")
  }
};


//POSTS ROUTE
//GET ALL POSTS
export const getAllPosts = async (data) => {
  const response = await mainApiService("getAllPosts", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      showErrorToast("Unexpected error")
  }
};

//GET POST BY ID
export const getPostById = async (data) => {
  const response = await mainApiService("getPostById", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      showErrorToast("Unexpected error")
  }
};

//getPostByUsername
export const getPostByUsername = async (data) => {
  const response = await mainApiService("getPostByUsername", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      showErrorToast("Unexpected error")
  }
};


//This API call creates a new post to the user's db.
export const createPost = async (data) => {
  const response = await mainApiService("createPost", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      showErrorToast("Unexpected error")
  }
};


//actionDeletePost
export const actionDeletePost = async (data) => {
  const response = await mainApiService("actionDeletePost", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      showErrorToast("Unexpected error")
  }
};

////actionEditPost
export const actionEditPost = async (data) => {
  const response = await mainApiService("actionEditPost", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      showErrorToast("Unexpected error")
  }
};


//COMMENTS ROUTE
//ACTION - GET ALL COMMENTS
export const actionGetAllComments = async (data) => {
  const response = await mainApiService("actionGetAllComments", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      showErrorToast("Unexpected error")
  }
};

//actionDddComment
export const actionAddComment = async (data) => {
  const response = await mainApiService("actionAddComment", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      showErrorToast("Unexpected error")
  }
};

//actionEditComment
export const actionEditComment = async (data) => {
  const response = await mainApiService("actionEditComment", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      showErrorToast("Unexpected error")
  }
};

//actionDeleteComment
export const actionDeleteComment = async (data) => {
  const response = await mainApiService("actionDeleteComment", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      showErrorToast("Unexpected error")
  }
};

//actionUpvoteComment
export const actionUpvoteComment = async (data) => {
  const response = await mainApiService("actionUpvoteComment", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      showErrorToast("Unexpected error")
  }
};

//actionDownvoteComment
export const actionDownvoteComment = async (data) => {
  const response = await mainApiService("actionDownvoteComment", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      showErrorToast("Unexpected error")
  }
};

//actionLikeComment
export const actionLikePost = async (data) => {
  const response = await mainApiService("actionLikePost", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      showErrorToast("Unexpected error")
  }
};

export const actionDislikePost = async (data) => {
  const response = await mainApiService("actionDislikePost", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      showErrorToast("Unexpected error")
  }
};

//actionGetAllBookmarks
export const actionGetAllBookmarks = async (data) => {
  const response = await mainApiService("actionGetAllBookmarks", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      showErrorToast("Unexpected error")
  }
};

//actionBookmarkPost
export const actionBookmarkPost = async (data) => {
  const response = await mainApiService("actionBookmarkPost", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      showErrorToast("Unexpected error")
  }
};



//actionRemoveBookmarkPost
export const actionRemoveBookmarkPost = async (data) => {
  const response = await mainApiService("actionRemoveBookmarkPost", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      showErrorToast("Unexpected error")
  }
};
