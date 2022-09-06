import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { InputAdornment } from "@mui/material";
import { messagessSelector, sendMessageWithBot } from "../../store/messages";
import { Message } from "./message";
import { Input, SendIcon } from "./styles";


export const MessageList = () => {
  const { roomId } = useParams();

  const selector = useMemo(() => messagessSelector(roomId), [roomId]);

  const messages = useSelector(selector);

  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const ref = useRef();

  const send = useCallback(
    (message, author = "User") => {
      if (message) {
        dispatch(sendMessageWithBot(roomId, { message, author }));
        setValue("");
      }
    },
    [roomId, dispatch]
  );

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      send(value);
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
  }, [messages]);



  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message message={message} key={index} roomId={roomId} />
        ))}
      </div>

      <Input
        autoFocus
        fullWidth
        placeholder="Введите сообщение..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        endAdornment={
          <InputAdornment position="end">
            {value && <SendIcon onClick={() => send(value)} />}
          </InputAdornment>
        }
      />
    </>
  );
};
