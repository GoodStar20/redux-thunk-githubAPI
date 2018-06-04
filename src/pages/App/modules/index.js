export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';

const initialState = {
  loading: false,
  userdata: null,
  errors: null,
  repos: null,
};

const app = (state = initialState, action) => {
  switch(action.type) {
    case SEARCH_REQUEST:
      return { ...state, loading: true };

    case SEARCH_SUCCESS:
      return { ...state, loading: false, userdata: action.payload, repos: action.repos };

    case SEARCH_ERROR:
      return { ...state, loading: false, errors: action.errors };
    default:
      return state;
  }
};

export default app;