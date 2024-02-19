"use client";

import { useState } from "react";

export default function NewMessageForm({ onSend }) {
  const [inputText, setInputText] = useState("");

  function handleTextChange(e) {
    setInputText(e.target.value);
  }

  function handleSend() {
    setInputText("");
    onSend(inputText);
  }

  return (
    <>
      <input
        type="text"
        data-testid="messageText"
        value={inputText}
        onChange={handleTextChange}
      />

      <button data-testid="sendButton" onClick={handleSend}>
        Send
      </button>
    </>
  );
}
