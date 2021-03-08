import {
  FETCH_STOCKS_BEGIN,
  FETCH_STOCKS_SUCCESS,
  FETCH_STOCKS_FAILURE,
} from '../actions/actions';

const initialState = {
  stocks: [],
  error: null,
  waiting: 'wait for it',
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCKS_BEGIN:
      return {
        ...state,
        waiting: 'wait for it',
      };

    case FETCH_STOCKS_SUCCESS:
      return {
        ...state,
        waiting: 'here we are',
        stocks: action.payload,
      };

    case FETCH_STOCKS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        waiting: 'error',
      };

    default:
      return state;
  }
};

export default stockReducer;
