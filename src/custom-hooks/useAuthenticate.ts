import {useReducer} from 'react';

import authReducer from '../context/authReducer';
import {
  setToken,
  setLoading,
  setError,
  logoutUser,
  setErrorMessage,
} from '../context/actionCreators';

import request from '../utils/request';
import {saveToken, deleteFromLocalforage} from '../utils/storage';
import {LoginFormValues, AuthType} from '../types';

const initialAuthState = {
  error: false,
  loading: false,
  token: '',
  loggedOut: null,
  errorMessage: '',
};

function useAuthentication(): AuthType {
  const [auth, dispatch] = useReducer(authReducer, initialAuthState);

  //Login method
  async function login(
    credentials: LoginFormValues,
    navigateToDashboard: any,
  ): Promise<void> {
    dispatch(setLoading(true));
    try {
      //API Call
      const response = await request.post('/auth/login', credentials);

      //setToken in global state
      dispatch(setToken(response.data.token));

      //save token in browser storage
      await saveToken(response.data.token);

      // navigateToDashboard('transactions');
    } catch (error) {
      dispatch(setError(true));

      if (error.response) {
        dispatch(setErrorMessage(error.response.data.message));
      } else if (error.request) {
        dispatch(setErrorMessage('Please Try again'));
      } else {
        dispatch(setErrorMessage('Process Failed!'));
      }
      // console.log(error.config);
      dispatch(setLoading(false));
    }
    dispatch(setLoading(false));
  }

  //Logout method
  const logOut = async () => {
    try {
      await deleteFromLocalforage('token');
      await deleteFromLocalforage('id');
      dispatch(logoutUser(true));
    } catch (error) {
      console.log(error.message, 'ERRO MESSAGE');
      dispatch(setError(error.message));
      dispatch(setError(true));
    }
  };

  return {auth, login, logOut};
}

export default useAuthentication;
