import React from "react"
import { ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { memo } from "react";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

export const Chat = memo(({ title, selected, deleteConversationByName }) => {
  return (
    <ListItemButton selected={selected}>
      <ListItemIcon>
        <CancelRoundedIcon onClick={(e) => deleteConversationByName(title, e)}></CancelRoundedIcon>
        <AccountCircle />
      </ListItemIcon>

      <div>
        <ListItemText primary={title} />
      </div>
    </ListItemButton>
  );
});