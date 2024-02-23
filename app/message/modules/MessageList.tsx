import React from "react";

interface MessageListProps {
  data: string[];
}

const MessageList: React.FC<MessageListProps> = ({ data }) => {
  return (
    <ul>
      {data.map((message: string) => (
        <li key={message}>{message}</li>
      ))}
    </ul>
  );
};

export default MessageList;
