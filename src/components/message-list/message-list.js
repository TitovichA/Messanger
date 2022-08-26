import React, { useState, useEffect, useRef, useCallback } from "react";
import { InputAdornment } from "@mui/material";
import { Message } from "./message";
import { Input, SendIcon } from "./styles";
import styles from "./animation.module.css";
import { useParams } from "react-router-dom";

export const MessageList = () => {
  const [messageList, setMessageList] = useState({
    room1: [{ message: "Hello", author: "Bot" }],
    room2: [{ message: "Good day", author: "Bot" }],
    room3: [{ message: "Hi", author: "Bot" }],
  });

  const [value, setValue] = useState("");

  const ref = useRef();

  const { roomId } = useParams();
  const messages = messageList[roomId] ?? [];



  const sendMessage = useCallback((message, author="User") => {
    if (message) {

      setMessageList((state) => ({
        ...state,
        [roomId]: [
          ...(state[roomId] ?? []), { message, author }],
      }));
      setValue("");
    }
  }, [roomId]);

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage(value);
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
    const messages = messageList[roomId] ?? [];
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage.author === "User") {
      timerId = setTimeout(() => {
        sendMessage("Type your question", "Bot")
      }, 500);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [messageList, roomId, sendMessage]);

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
        {messages.map((message, index) => (
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

