import { useState } from "react";
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