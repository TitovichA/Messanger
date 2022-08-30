import { TOGGLE_VISIBLE_PROFILE, UPDATE_FORM } from "./types";


const initialState = {
  firstName: "firstName",
  lastName: "lastName",
  phone: "phone",
  isVisibleProfile: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_VISIBLE_PROFILE:
      return {
        ...state,
        isVisibleProfile: !state.isVisibleProfile,
      };

    case UPDATE_FORM:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

