import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { ChatListContext } from "../providers/ChatListProvider";
import useAxiosInstance from "../api/axiosInstance.js";
import { useParams } from "react-router-dom";

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

const MessageContainer = ({ conversationLoading }) => {
  return (
    <div className=" h-full overflow-auto px-3 py-2 mb-24">
      {conversationLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Message text="Ha Opu" />
          <Message text="Nasiv, ki obostha?" self={true} />
          <Message text="Obostha valo na" />
        </>
      )}
    </div>
  );
};

const Conversation = () => {
  const { selectedChat } = useContext(ChatListContext);
  const [conversationLoading, setConversationLoading] = useState(true);
  const axiosInstance = useAxiosInstance();
  const { id } = useParams();
  const [conversation, setConversation] = useState([]);

  const retrieveConversation = async () => {
    try {
      const response = await axiosInstance.get(`/conversation/${id}`);
      setConversation(response.data);
    } catch (error) {
      console.log(error);
    }

    setConversationLoading(false);
  };

  useEffect(() => {
    retrieveConversation();
  }, []);

  return (
    <div className="flex flex-col relative h-full">
      <ConversationHeader selectedChat={selectedChat} />

      <MessageContainer conversationLoading={conversationLoading} />

      <ConversationFooter />
    </div>
  );
};

export default Conversation;
