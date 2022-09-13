import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getGists } from "../store/gists";
import { getGistsByName } from "../store/gistsByName";



const buttons = Array.from({ length: 10 }).map((_, index) => index + 1);

export const GistsPage = () => {
  const { gists, pending, error } = useSelector((state) => state.gists);
  const { gistsBySearch, pendingBySearch, errorBySearch } = useSelector((state) => state.gistsByName);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!gists.length) {
      dispatch(getGists());
    }
  }, [dispatch, gists]);



  useEffect(() => {
    if (!gistsBySearch.length) {
      dispatch(getGistsByName());
    }
  }, [dispatch, gistsBySearch]);

  if (errorBySearch) {
    return <h1>error ...</h1>;
  }

  if (error) {
    return <h1>error ...</h1>;
  }

  return (
    <div>
      <h1>GistsPage</h1>

      {buttons.map((btn, index) => {
        return (
          <button onClick={() => dispatch(getGists(btn))} key={index}>
            {btn}
          </button>
        );
      })}
      <hr />

      {pending ? (
        <h1>pending...</h1>
      ) : (
        gists.map((gist, index) => {
          return (
            <div key={index}>
              <h2>{gist.url}</h2>
            </div>
          );
        })
      )}
      <hr />
      <div>

        {pendingBySearch ? (
          <h1>pending...</h1>
        ) : (
          gistsBySearch.map((gist, index) => {
            return (
              <div key={index}>
                <h2>{gist.url}</h2>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
};