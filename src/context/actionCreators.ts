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

export const logoutUser = (
  payload: null | boolean,
): {type: string; payload: null | boolean} => ({
  type: 'LOG_OUT',
  payload,
});
