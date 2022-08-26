import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { profileNameAction } from "../store/profile/actions";


export const ProfilePage = () => {

  const { showName, name } = useSelector((state) => state);
  const dispatch = useDispatch();

  const setShowName = useCallback(() => {
    dispatch(profileNameAction);
}, [dispatch]);

  return (
    <div>
      <h4>Profile</h4>
      <input
        type="checkbox"
        checked={showName}
        value={showName}
        onChange={setShowName}
      />
      <span>Show Name</span>
      {showName && <div>{name}</div>}
    </div>
  );
};

