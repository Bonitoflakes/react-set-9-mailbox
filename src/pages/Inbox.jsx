import React, { useContext } from "react";
import { MailContext } from "../contexts/MailContext";
import { Link } from "react-router-dom";

export const Inbox = () => {
  const { isLoading, allMails, markMailasRead } = useContext(MailContext);
  return (
    <>
      <div>{isLoading ? "Loading...." : "Inbox"}</div>
      {allMails.map(({ id, sender, subject, message, read }) => {
        return (
          <div key={id}>
            <h2>Sender: {sender}</h2>
            <h2>Subject: {subject}</h2>
            <button onClick={() => markMailasRead(id)}>{read ? "Mark as Unread" : "Mark as Read"}</button>
            <Link to={`/inbox/${id}`}>View Mail</Link>
          </div>
        );
      })}
    </>
  );
};
