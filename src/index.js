import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider, createTheme } from "@mui/material";
import { Header } from "./components";
import "./global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, ProfilePage, ChatPage } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Segoe UI"',
    ]
  },
});

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat/*" element={<ChatPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>

      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
