"use client";

import NewMessageForm from "./new-message-form";
import MessageList from "./message-list";
import { useState } from "react";

export default function Message() {
  const [messages, setMessages] = useState<string[]>([]);

  function handleSend(newMessage: string) {
    setMessages([newMessage, ...messages]);
  }

  return (
    <>
      <h1>messageSend</h1>
      <NewMessageForm onSend={handleSend} />
      <MessageList data={messages} />
    </>
  );
}
