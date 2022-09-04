import React from 'react';
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../../store/messages";
import styles from "./message.module.css";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';


export function Message({ message, roomId }) {
  const dispatch = useDispatch();

  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: message.author === "User",
      })}
    >
      <h3>{message.message}</h3>
      <p>{message.author}</p>
      <p>12.03</p>
      <CancelRoundedIcon style={{ fontSize: "medium" }} onClick={() => dispatch(deleteMessage(roomId, message.id))} />
    </div>
  );
}
