
import React, { useState, useEffect } from "react";
import './App.css';


function App() {
  const [value, setValue] = useState("");
  const [messageList, setMessageList] = useState([]);


  const addMessage = () => {
    const newAuthor = "User"
    const message = {
      value: value,
      author: newAuthor
    }
    setMessageList(oldMessages => [...oldMessages, message]);
  }

  const botMessage = () => {
    const newAuthor = "Bot"
    const message = {
      value: "Добрый день",
      author: newAuthor
    }
    setMessageList(oldMessages => [...oldMessages, message]);
  }

  useEffect(() => {
    setTimeout(() => {
      if (messageList.length !== 0 && messageList[messageList.length - 1].author !== "Bot") {
        botMessage()
      }
    }, 1000);
  }, [messageList]);

  const changeMessage = (changedMessage) => {
    const newMessageValue = changedMessage.target.value
    setValue(newMessageValue)
  }

  return (
    <div className="mainWrapper">
      <h1>Messanger</h1>
      <div className="messageList">
        {messageList.map((message, i) => (
          <div key={i}><div>{message.author}: {message.value}</div></div>
        ))}
      </div>

      <div className="inputWrapper">
        <input
          className="input"
          onChange={changeMessage} />
        <button onClick={addMessage}>Отправить</button>
      </div>
    </div>
  );
}

export default App;