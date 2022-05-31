// import { useAuthContext } from "../../Context";

const encodedToken = localStorage.getItem("authData") ? localStorage.getItem("authData") : '';

export const ApiJson = { 

//ACTION TO LOGIN
actionLogin: {
  url: '/api/auth/login',
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
    url: '/api/auth/signup',
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
      url: '/api/users',
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
    url: '/api/users/:userId',
    method: 'GET',
    data: {},
    headers: {
      'Content-Type': 'application/json', 
    }, 
    showResultMessage: false,
    showErrorMessage: false,
  },


  //POSTS
  getAllPosts: {
    url: '/api/posts',
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
    url: '/api/posts/:postId',
    method: 'GET',
    data: {},
    headers: {
      'Content-Type': 'application/json'
    }, 
    showResultMessage: false,
    showErrorMessage: false,
  },

  //Action to get posts by username -- This API call gets posts by username from the db.
  getPostByUsername: {
    url: '/api/posts/user/:username',
    method: 'GET',
    data: {},
    headers: {
      'Content-Type': 'application/json'
    }, 
    showResultMessage: false,
    showErrorMessage: false,
  },

  //createPost
  createPost:{
    url: '/api/posts',
      method: 'POST',
      data: {
        postData:{}
      },
      headers: {
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: true,
  },

  //actionDeletePost
  actionDeletePost:{
    url: '/api/posts/:postId',
      method: 'DELETE',
      data: {},
      headers: {
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: true,
  },

  //actionEditPost --> This API call edits a post of the user.
  actionEditPost:{
    url: '/api/posts/edit/:postId',
      method: 'POST',
      data: {
        postData:{}
      },
      headers: {
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: true,
  },

  //COMMENTS ROUTE
  //actionGetAllComments
  actionGetAllComments: {
    url: '/api/comments/:postId',
    method: 'GET',
    data: {},
    headers: {
      'Content-Type': 'application/json'
    }, 
    showResultMessage: false,
    showErrorMessage: false,
  },


  //actionAddComment --> This API adds a comment to a particualar post.
  actionAddComment:{
    url: '/api/comments/add/:postId',
      method: 'POST',
      data: {
        // commentData:{}
        commentData: {}
      },
      headers: {
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: true,
  },


  //actionEditComment
  actionEditComment:{
    url: '/api/comments/edit/:postId/:commentId',
      method: 'POST',
      data: {
        // commentData:{}
        commentData: {}
      },
      headers: {
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: true,
  },

  //actionDeleteComment
  actionDeleteComment:{
    url: '/api/comments/delete/:postId/:commentId',
      method: 'POST',
      data: {},
      headers: {
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: true,
  },

  //actionUpvoteComment
  actionUpvoteComment:{
    url: '/api/comments/upvote/:postId/:commentId',
      method: 'POST',
      data: {},
      headers: {
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: true,
  },

  //actionDownvoteComment
  actionDownvoteComment:{
    url: '/api/comments/downvote/:postId/:commentId',
      method: 'POST',
      data: {},
      headers: {
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: true,
  },

}