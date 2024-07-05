import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { ChatListContext } from "../providers/ChatListProvider";
import useAxiosInstance from "../api/axiosInstance.js";
import { useParams } from "react-router-dom";
import { SocketContext } from "../providers/SocketProvider.jsx";

const ConversationHeader = () => {
  const { selectedChat, setSelectedChat } = useContext(ChatListContext);
  const axiosInstance = useAxiosInstance();
  const { id } = useParams();

  const retrieveUserInfo = async () => {
    try {
      const response = await axiosInstance.get(`/user/info/${id}`);
      setSelectedChat(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    retrieveUserInfo();
  }, []);

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
  const [inputText, setInputText] = useState("");
  const { id } = useParams();
  const { socket } = useContext(SocketContext);

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    const payload = {
      recieverUserId: id,
      message: inputText,
    };

    socket.emit("new-message", payload);
    setInputText("");
  };

  return (
    <div className=" absolute w-full bottom-0  py-5 px-3">
      <div className="flex p-2 bg-white rounded-md">
        <input
          type="text"
          className="flex-1 px-3 outline-none"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="bg-blue-950 text-white font-semibold py-2 px-5 rounded-md"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

const MessageContainer = ({ conversationLoading, conversation }) => {
  return (
    <div className=" h-full overflow-auto px-3 py-2 mb-24">
      {conversationLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {conversation.map((message) => (
            <Message key={message._id} message={message} />
          ))}
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
      console.log(response.data);
      setConversation(response.data);
    } catch (error) {
      console.log(error);
    }

    setConversationLoading(false);
  };

  console.log(conversation);

  useEffect(() => {
    retrieveConversation();
  }, []);

  return (
    <div className="flex flex-col relative h-full">
      <ConversationHeader selectedChat={selectedChat} />

      <MessageContainer
        conversation={conversation}
        conversationLoading={conversationLoading}
      />

      <ConversationFooter />
    </div>
  );
};

export default Conversation;
