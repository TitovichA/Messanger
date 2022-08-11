import React, { useState } from "react";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/ListItemText';
import { ChatIconStyled } from "./styles";

export function ChatItem() {

    const [contacts, setContacts] = useState([{ name: "Sam" }, { name: "Brendon" }, { name: "Marina" }
    ]);



    return (

        <Box>  {contacts.map((contact, index) => {
            return (<ListItem contact={contact.name} key={index} component="div" disablePadding>
                <ListItemButton>
                <ChatIconStyled/>
                    <ListItemText  primary={`${contact.name}`} />
                </ListItemButton>

            </ListItem>
            )})}
                </Box>
    );
}

