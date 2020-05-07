const initialState = {
  id: '',
  data: {},
  cordinates: {},
  loading: false,
};

export default function market(state = initialState, action: any) {
  switch (action.type) {
    case 'SET_MARKET':
      return {
        ...state,
        data: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SET_ID':
      return {
        ...state,
        id: action.payload,
      };
    case 'SET_CORDINATES':
      return {
        ...state,
        cordinates: action.payload,
      };
    case 'SIGN_OUT':
      return initialState;

    default:
      return state;
  }
}
