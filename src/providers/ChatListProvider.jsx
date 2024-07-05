import React, { createContext, useState } from "react";

export const ChatListContext = createContext();

const ChatListProvider = ({ children }) => {
  const [chatList, setChatList] = useState([]);
  const [chatListLoading, setChatListLoading] = useState(false);

  const values = {
    chatList,
    setChatList,
    chatListLoading,
    setChatListLoading,
  };

  return (
    <ChatListContext.Provider value={values}>
      {children}
    </ChatListContext.Provider>
  );
};

export default ChatListProvider;
