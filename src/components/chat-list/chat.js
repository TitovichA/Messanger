import React, { useState } from "react";
import { ChatItem } from "./chatItem";
import List from '@mui/material/List';
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";


export const ChatList = () => {

  const [chatList] = useState(["room1", "room2", "room3"]);
  const { roomId } = useParams();


  return (
    <List component="nav">
      {chatList.map((contact, index) => (
        <div key={index}>
          <NavLink to={`/chat/${contact}`}>
            <ChatItem
              contact={contact}
              selected={contact === roomId}
            /> </NavLink> </div>))}
    </List>
  )
};
