import request from '../../utils/request';
import {AppDispatch} from '../../store';

export const setToken = (payload: string): {type: string; payload: string} => ({
  type: 'SET_TOKEN',
  payload,
});
export const setLoading = (
  payload: boolean,
): {type: string; payload: boolean} => ({
  type: 'SET_LOADING',
  payload,
});
export const setError = (
  payload: boolean,
): {type: string; payload: boolean} => ({
  type: 'SET_ERROR',
  payload,
});
export const setErrorMessage = (
  payload: string,
): {type: string; payload: string} => ({
  type: 'SET_ERROR_MESSAGE',
  payload,
});

export const setAuthError = (
  payload: string,
): {type: string; payload: string} => ({
  type: 'SET_AUTH_ERROR',
  payload,
});

export const signout = (): {type: string} => ({
  type: 'LOG_OUT',
});

const loginBoundActionCreator = (
  credentials: {},
  navigateToDashboard: any,
) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    //API Call
    const response = await request.post('/auth/login', credentials);

    //setToken in  state
    dispatch(setToken(response.data.token));

    dispatch(setLoading(false));
    navigateToDashboard();
    return response.data;
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
};

export default loginBoundActionCreator;
