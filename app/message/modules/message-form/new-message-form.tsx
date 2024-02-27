import { useState, ChangeEvent } from "react";

interface NewMessageFormProps {
  onSend: (newMessage: string) => void;
}

const NewMessageForm: React.FC<NewMessageFormProps> = ({ onSend }) => {
  const [inputText, setInputText] = useState<string>("");

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSend = () => {
    setInputText("");
    onSend(inputText);
  };

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
};

export default NewMessageForm;
