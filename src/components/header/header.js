import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../../api/firebase";

const menuWithoutSession = [
  {
    title: "Login",
    to: "/login",
  },
  {
    title: "SignUp",
    to: "/signup",
  },
];

const menuWithSession = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Chat",
    to: "/chat",
  },
  {
    title: "Profile",
    to: "/profile",
  },
  {
    title: "Gists",
    to: "/gists",
  },
];


export const Header = ({ email }) => {
  return (
    <div className={styles.header}>
      {!!email && (
        <div>
          <h1>USER: {email}</h1>
          <button
            onClick={() => {
              signOut(auth);
            }}
          >
            x
          </button>
        </div>
      )}


      {!!email &&
        menuWithSession.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {item.title}
          </NavLink>
        ))}

      {!email &&
        menuWithoutSession.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {item.title}
          </NavLink>
        ))}
    </div>
  );
};
