import { useState } from "react";
<<<<<<< HEAD
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {

    const [inputType, setInputType] = useState("text");
    const [value, setValue] = useState("");

    const navigate = useNavigate();

  function HandleFormSubmit(event) {
    // prevent default prevents the default behaviour to be executed
    // defaul behaviour of a submit button refreshes the page here it will not
    event.preventDefault();
    console.log("Form submitted");
    console.log(value);

    // navigate("/play");

    if(value){
        // If value is not empty, navigate to the play page
        navigate(`/play`, {state : {words : value}});
    }
  }

  function HandlerTextInputChange(event) {
    console.log("Text input changed");
    console.log(event.target.value);
    setValue(event.target.value);
  }

  function OnShowHideClickHandler() {
    console.log("Show/Hide button clicked");
    if(inputType === "text"){
        setInputType("password")
    }
    else{
        setInputType("text")
    }
    console.log("Input type changed to: " + inputType);
  }

  return (
        <TextInputForm
        inputType={inputType}
        HandleFormSubmit={HandleFormSubmit}
        HandlerTextInputChange={HandlerTextInputChange}
        OnShowHideClickHandler={OnShowHideClickHandler}
        />
  );

}

export default TextInputFormContainer;
=======
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
>>>>>>> bddeb74 (update the ui and win loss logic also added play with friends and plaly with computer features)
