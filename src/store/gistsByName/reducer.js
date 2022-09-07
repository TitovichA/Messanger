import { GET_GISTS_START, GET_GISTS_SUCCESS, GET_GISTS_ERROR } from "./types";

const initialState = {
  gistsBySearch: [],
  pendingBySearch: false,
  errorBySearch: null,
};

export const gistsReducerByName = (state = initialState, action) => {
  switch (action.type) {
    case GET_GISTS_START:
      return { ...state, pendingBySearch: true, errorBySearch: null };
    case GET_GISTS_SUCCESS:
      return { ...state, pendingBySearch: false, gistsBySearch: action.payload };
    case GET_GISTS_ERROR:
      return { ...state, pendingBySearch: false, errorBySearch: action.payload};
    default:
      return state;
  }
};
