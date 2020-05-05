const initialState = {
  error: false,
  errorMessage: null,
};

export default function error(state = initialState, action: any) {
  switch (action.type) {
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
    case 'SIGN_OUT':
      return initialState;
    default:
      return initialState;
  }
}
