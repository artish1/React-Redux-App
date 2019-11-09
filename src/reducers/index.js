import {
  FETCH_WORD_FAIL,
  FETCH_WORD_START,
  FETCH_WORD_SUCCESS
} from "../actions/index";

const initialState = {
  isFetching: false,
  error: "",
  wordData: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORD_START:
      return { ...state, isFetching: true };
    case FETCH_WORD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        wordData: action.payload
      };
    case FETCH_WORD_FAIL:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};
