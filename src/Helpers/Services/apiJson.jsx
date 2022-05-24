// import { useAuthContext } from "../../Context";

const encodedToken = localStorage.getItem("authData") ? localStorage.getItem("authData") : '';

export const ApiJson = { 

//ACTION TO LOGIN
actionLogin: {
  url: '/auth/login',
  method: 'POST',
  data: {
    "username": "",
    "password": "",
  },
  headers: {
    'Content-Type': 'application/json'
  }, 
  showResultMessage: false,
  showErrorMessage: true,
  },

  //ACTION TO SIGN UP
  actionSignup: {
    url: '/auth/signup',
    method: 'POST',
    data: {
      "firstName":'',
      "lastName":'',
      "password":'',
      "username":''
    },
    headers: {
      'Content-Type': 'application/json'
    }, 
    showResultMessage: false,
    showErrorMessage: true,
    },

    //ACTION TO get All Users
    getAllUsers: {
      url: '/users',
      method: 'GET',
      data: {},
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json', 
      }, 
      showResultMessage: false,
      showErrorMessage: false,
  },

  //Action to get User By Id -- This API call gets a user from the db
  getUserById: {
    url: '/users/:userId',
    method: 'GET',
    data: {},
    headers: {
      // 'Accept': '*/*',
      'Content-Type': 'application/json', 
      // 'Content-Type': 'application/json',
      // 'authorization': encodedToken
    }, 
    showResultMessage: false,
    showErrorMessage: false,
  },


  //POSTS
  getAllPosts: {
    url: '/posts',
    method: 'GET',
    data: {},
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json', 
    }, 
    showResultMessage: false,
    showErrorMessage: false,
  },


  //Action to get Post By Id -- This API call gets a user from the db
  getPostById: {
    url: '/posts/:postId',
    method: 'GET',
    data: {},
    headers: {
      // 'Accept': '*/*',
      // 'Content-Type': 'application/json', 
      // 'Content-Type': 'application/json',
      // 'authorization': encodedToken
      'Content-Type': 'application/json'
    }, 
    showResultMessage: false,
    showErrorMessage: false,
  },

  //Action to get posts by username -- This API call gets posts by username from the db.
  getPostByUsername: {
    url: '/posts/user/:username',
    method: 'GET',
    data: {},
    headers: {
      // 'Accept': '*/*',
      // 'Content-Type': 'application/json', 
      // 'Content-Type': 'application/json',
      // 'authorization': encodedToken
      'Content-Type': 'application/json'
    }, 
    showResultMessage: false,
    showErrorMessage: false,
  },




}