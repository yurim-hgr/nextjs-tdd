import { useState, ChangeEvent } from "react";

interface NewSearchFormProps {
  onSend: (newSearch: string) => void;
}

const NewSearchForm: React.FC<NewSearchFormProps> = ({ onSend }) => {
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
        Search
      </button>
    </>
  );
};

export default NewSearchForm;
