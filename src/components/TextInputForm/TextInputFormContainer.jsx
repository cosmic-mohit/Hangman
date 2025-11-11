import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer() {
  const [inputType, setInputType] = useState("text");
  const [word, setWord] = useState("");
  const [hint, setHint] = useState(""); // ✅ new state for hint
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (word.trim()) {
      navigate("/play", { state: { word: word.trim(), hint: hint.trim() } });
    }
  };

  const handleWordChange = (e) => setWord(e.target.value);
  const handleHintChange = (e) => setHint(e.target.value); // ✅ handler for hint

  const toggleInputType = () =>
    setInputType((prev) => (prev === "text" ? "password" : "text"));

  return (
    <TextInputForm
      inputType={inputType}
      HandleFormSubmit={handleFormSubmit}
      HandlerTextInputChange={handleWordChange}
      HandlerHintChange={handleHintChange} // ✅ pass to form
      OnShowHideClickHandler={toggleInputType}
      hintValue={hint} // ✅ pass current hint
    />
  );
}

export default TextInputFormContainer;
