import React from "react";
import './App.css';



export const MessegeComponent = () => {
  const message = "New message";
  return <MessegeElement message={message} />;
};



export const MessegeElement = ({ message }) => {
  return (
    <div className="Messanger">
      <h1>MESSANGER</h1>
      <div>{message}</div>
    </div>
  )
}