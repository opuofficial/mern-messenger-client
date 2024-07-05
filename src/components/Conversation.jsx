import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import Message from "./Message";
import { ChatListContext } from "../providers/ChatListProvider";

const ConversationHeader = ({ selectedChat }) => {
  return (
    <div className="py-2 px-3">
      <div className="chat-list-item py-5 flex items-center gap-5 text-xl cursor-pointer border-b">
        <FontAwesomeIcon icon={faUser} />
        <span>{selectedChat.username}</span>
      </div>
    </div>
  );
};

const ConversationFooter = () => {
  return (
    // <div className="absolute bottom-0 right-0 w-full">
    <div className=" absolute w-full bottom-0  py-5 px-3">
      <div className="flex p-2 bg-white rounded-md">
        <input type="text" className="flex-1 px-3 outline-none" />
        <button className="bg-blue-950 text-white font-semibold py-2 px-5 rounded-md">
          Send
        </button>
      </div>
    </div>
  );
};

const MessageContainer = () => {
  return (
    <div className=" h-full overflow-auto px-3 py-2 mb-24">
      <Message text="Ha Opu" />
      <Message text="Nasiv, ki obostha?" self={true} />
      <Message text="Obostha valo na" />
    </div>
  );
};

const Conversation = () => {
  const { selectedChat } = useContext(ChatListContext);

  return (
    <div className="flex flex-col relative h-full">
      <ConversationHeader selectedChat={selectedChat} />

      <MessageContainer />

      <ConversationFooter />
    </div>
  );
};

export default Conversation;
