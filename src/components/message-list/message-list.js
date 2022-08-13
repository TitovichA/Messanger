import React, { useState, useEffect, useRef } from "react";
// import PropTypes from "prop-types";
import { InputAdornment } from "@mui/material";
import { Message } from "./message";
import { Input, SendIcon } from "./styles";
import styles from "./animation.module.css";

export const MessageList = () => {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState("");

  const ref = useRef();

  const sendMessage = () => {
    if (value) {
      setMessageList([
        ...messageList,
        { author: "User", message: value, date: new Date() },
      ]);
      setValue("");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({
        top: ref.current.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [messageList]);

  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];
    let timerId = null;

    if (messageList.length && lastMessage.author === "User") {
      timerId = setTimeout(() => {
        setMessageList([
          ...messageList,
          { author: "Bot", message: "Hello from Bot", date: new Date() },
        ]);
      }, 500);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [messageList]);

  const AnimationTyping = () => {
    if (value.length >= 1) {
      return (
        <div className={styles.isTyping}>
          <div className={styles.jump1}></div>
          <div className={styles.jump2}></div>
          <div className={styles.jump3}></div>
          <div className={styles.jump4}></div>
          <div className={styles.jump5}></div>
        </div>
      )
    }
  }



  return (
    <>

      <div ref={ref}>
        {messageList.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>
      <AnimationTyping />

      <Input
        fullWidth
        autoFocus
        placeholder="Введите сообщение..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        onKeyDown={AnimationTyping}
        endAdornment={
          <InputAdornment position="end">
            <SendIcon onClick={sendMessage} />
          </InputAdornment>
        }
      />
    </>
  );
};

