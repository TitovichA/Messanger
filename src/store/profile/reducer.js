import { PROFILENAME } from "./types";


const initialState = {
  showName: false,
  name: "Default",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILENAME:
      return {
        ...state,
        showName: !state.showName,
      };
    default:
      return state;
  }
};