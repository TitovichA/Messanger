import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";


const menu = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Profile",
    to: "/profile",
  },
  {
    title: "Chat",
    to: "/chat",
  },
];


export const Header = () => {
  return (
    <div className={styles.header}>
      {menu.map((menuitem) =>
        <NavLink key={menuitem.to} to={menuitem.to}>
          {menuitem.title}
          {styles.a}
        </NavLink>)}
    </div>
  )
};
