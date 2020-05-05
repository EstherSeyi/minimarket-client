const initialState = {
  data: [],
  loading: false,
};

export default function markets(state = initialState, action: any) {
  switch (action.type) {
    case 'SET_MARKETS':
      return {
        ...state,
        data: action.payload,
      };
    case 'SET_LOADING':
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
