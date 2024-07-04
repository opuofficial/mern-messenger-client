import React from "react";
import ChatPerson from "./ChatPerson";

const ChatList = () => {
  const chatList = ["Nasiv", "Asif", "Emon", "Dev", "Ananda"];

  return (
    <div className="chat-list mt-5">
      {chatList.map((person) => (
        <ChatPerson key={person} person={person} />
      ))}
    </div>
  );
};

export default ChatList;
