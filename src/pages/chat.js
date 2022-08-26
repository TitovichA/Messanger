import React, { useEffect } from 'react';
import { MessageList, Layout, ChatList } from "../components";
import { Routes, Route, useNavigate } from "react-router-dom";


export const ChatPage = () => {
  const navigation = useNavigate();



  useEffect(() => {

    const listenerEsc = ({ code }) => {
      if (code === "Escape") {
        navigation("/chat");
      }
    }

    document.addEventListener("keydown", listenerEsc)

    return () => {
      document.removeEventListener("keydown", listenerEsc)
    }

  }, [navigation])


  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              messages={<h1 style={{ color: "#fff" , textAlign: "center", marginTop: "150px", fontSize: "30px"}}>Выберите чат</h1>}
              chats={<ChatList />}
            />
          }
        />
        <Route
          path=":roomId"
          element={<Layout messages={<MessageList />} chats={<ChatList />} />}
        />
      </Routes>
    </>
  );
};
