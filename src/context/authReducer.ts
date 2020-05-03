import {AuthState, Action} from '../types/';

/**========================REDUCER ======================*/
const reducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
        loggedOut: false,
        authenticated: true,
      };

    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'SET_ERROR_MESSAGE':
      return {
        ...state,
        errorMessage: action.payload,
      };

    case 'SET_AUTH_ERROR':
      return {
        ...state,
        authenticated: false,
        authError: action.payload,
      };

    case 'LOG_OUT':
      return {
        ...state,
        authenticated: null,
        loggedOut: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
