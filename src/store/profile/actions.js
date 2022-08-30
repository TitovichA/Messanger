import { TOGGLE_VISIBLE_PROFILE, UPDATE_FORM } from "./types";

export const toggleVisibleProfile = () => {
  return {type: TOGGLE_VISIBLE_PROFILE};
};

export const updateForm = (profile) => {
  return {type: UPDATE_FORM, payload: profile};
};