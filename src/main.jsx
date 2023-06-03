import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./App.jsx";

import { Inbox } from "./pages/Inbox";
import { Sent } from "./pages/Sent";
import { Email } from "./pages/Email";
import { MailContextProvider } from "./contexts/MailContext";

export const CustomRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/inbox/:emailID" element={<Email />} />
        <Route path="/sent" element={<Sent />} />
      </Routes>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MailContextProvider>
        <App />
        <CustomRoutes />
      </MailContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
