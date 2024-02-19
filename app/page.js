"use client";

import Image from "next/image";
import styles from "./page.module.css";
import NewMessageForm from "./modules/NewMessageForm";
import MessageList from "./modules/MessageList";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([]);
  function handleSend(newMessage) {
    setMessages([newMessage, ...messages]);
  }

  return (
    <>
      <NewMessageForm onSend={handleSend} />
      <MessageList data={messages} />
    </>
  );
}
