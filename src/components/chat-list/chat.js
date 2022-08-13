import React, { useState } from "react";
import { ChatItem } from "./chatItem";


export function ChatList() {

  const [contacts, setContacts] = useState([{ name: "Sam" }, { name: "Brendon" }, { name: "Marina" }
  ]);

  return contacts.map((contact, index) => (<ChatItem contact={contact} key={index} />));

};
