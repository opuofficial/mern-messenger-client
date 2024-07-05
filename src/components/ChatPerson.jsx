import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChatPerson = ({ person }) => {
  return (
    <div className="chat-list-item py-5 flex items-center gap-5 text-xl cursor-pointer border-b font-semibold">
      <FontAwesomeIcon icon={faUser} />
      <span>{person.username}</span>
    </div>
  );
};

export default ChatPerson;
