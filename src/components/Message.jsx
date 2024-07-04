import React from "react";

const Message = ({ text, self }) => {
  return (
    <div className={`flex mb-2 ${self && "justify-end"}`}>
      <span
        className={`${
          self ? "bg-blue-950 text-white" : "bg-white"
        } p-3 rounded-md`}
      >
        {text}
      </span>
    </div>
  );
};

export default Message;
