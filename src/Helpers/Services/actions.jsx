import mainApiService from "./apiService";
import { setLocalStorage, showErrorToast } from "../../Helpers/Common/utils";

// Action to perform Login
export const actionLogin = async (data) => {
  const response = await mainApiService("actionLogin", data);
  if (response.data &&(response.status === 201 || response.status === 200)) {
  return response;
  }else{
    showErrorToast(response.data.errors[0])
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
      showErrorToast(response.data.errors[0])
    }
};

