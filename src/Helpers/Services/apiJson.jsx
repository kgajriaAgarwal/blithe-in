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

    
}