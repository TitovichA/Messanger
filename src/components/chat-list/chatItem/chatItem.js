import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ChatIconStyled } from "./styles";
import Box from '@mui/material/ListItemText';



export function ChatItem({contact}) {

    return (
        <Box>
        <ListItem contact={contact.name} key={contact.index} component="div" disablePadding>
            <ListItemButton>
                <ChatIconStyled />
                <ListItemText primary={`${contact.name}`} />
            </ListItemButton>

        </ListItem>
        </Box>
    )

}

