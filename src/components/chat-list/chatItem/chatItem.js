import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ChatIconStyled } from "./styles";
import Box from '@mui/material/ListItemText';
import { memo } from "react";


export const ChatItem = memo(({ contact, selected }) => {



    return (
        <Box>
            <ListItem component="div" disablePadding>
                <ListItemButton
                    selected={selected}
                    
                >
                    <ChatIconStyled />
                    <ListItemText primary={`${contact}`} />
                </ListItemButton>

            </ListItem>
        </Box>
    )

});

