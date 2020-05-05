const initialState = {
  token: '',
  loading: false,
};

export default function authentication(state = initialState, action: any) {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    case 'LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SIGN_OUT':
      return initialState;

    default:
      return state;
  }
}
