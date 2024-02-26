"use client";

import NewMessageForm from "@/app/message/modules/NewMessageForm";
import MessageList from "@/app/message/modules/MessageList";
import React, { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState<string[]>([]);

  function handleSend(newMessage: string) {
    setMessages([newMessage, ...messages]);
  }

  return (
    <>
      <NewMessageForm onSend={handleSend} />
      <MessageList data={messages} />
    </>
  );
}
