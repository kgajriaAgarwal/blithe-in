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
      console.log("response.data.errors:", response.data.errors);
      // showErrorToast(response.data.errors[0])
    }
};

//USERS

//action to get All users
export const getAllUsers = async (data) => {
  const response = await mainApiService("getAllUsers", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      console.log("response.data.errors:", response.data.errors);
      // showErrorToast(response.data.errors[0])
  }
};

//action to get All users
export const getUserById = async (data) => {
  const response = await mainApiService("getUserById", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      console.log("response.data.errors:", response.data.errors);
      // showErrorToast(response.data.errors[0])
  }
};

//POSTS
export const getAllPosts = async (data) => {
  const response = await mainApiService("getAllPosts", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      console.log("response.data.errors:", response.data.errors);
      // showErrorToast(response.data.errors[0])
  }
};

//getPostById
export const getPostById = async (data) => {
  const response = await mainApiService("getPostById", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      console.log("response.data.errors:", response.data.errors);
      // showErrorToast(response.data.errors[0])
  }
};

//getPostByUsername
export const getPostByUsername = async (data) => {
  const response = await mainApiService("getPostByUsername", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      console.log("response.data.errors:", response.data.errors);
      // showErrorToast(response.data.errors[0])
  }
};


//This API call creates a new post to the user's db.
export const createPost = async (data) => {
  const response = await mainApiService("createPost", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      console.log("response.data.errors:", response.data.errors);
      // showErrorToast(response.data.errors[0])
  }
};


//actionDeletePost
export const actionDeletePost = async (data) => {
  const response = await mainApiService("actionDeletePost", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      console.log("response.data.errors:", response.data.errors);
      // showErrorToast(response.data.errors[0])
  }
};

////actionEditPost
export const actionEditPost = async (data) => {
  const response = await mainApiService("actionEditPost", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
    return response;
    }else{
      console.log("response.data.errors:", response.data.errors);
      // showErrorToast(response.data.errors[0])
  }
};