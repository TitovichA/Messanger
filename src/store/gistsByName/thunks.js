import { getGistsStart, getGistsSuccess, getGistsError } from "./actions";

export const getGistsByName = (page) => async (dispatch, _, api) => {
  try {
    dispatch(getGistsStart());


    const { data } = await api.searchGistsByNameApi(page);

    dispatch(getGistsSuccess(data));
  } catch (e) {
    dispatch(getGistsError(e));
  }
};