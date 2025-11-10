import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

<<<<<<< HEAD

function TextInputForm({inputType, HandleFormSubmit, HandlerTextInputChange, OnShowHideClickHandler}){
    return (
        <form onSubmit={HandleFormSubmit} >
            <div>
                
                <TextInput
                    type={inputType}
                    label="Enter a word"
                    placeholder="Enter a word here"
                    onChangeHandler={HandlerTextInputChange}
                />

                <Button
                    styleType="danger"
                    text={inputType === "password" ? "show" : "hide"}
                    onClickHandler={OnShowHideClickHandler}
                />

            </div>

            <div>
                <Button
                    type="submit"
                    styleType="primary"
                    text="Submit"
                />
            </div>

            
        </form>
    );
}

export default TextInputForm;
=======
function TextInputForm({
  inputType,
  HandleFormSubmit,
  HandlerTextInputChange,
  OnShowHideClickHandler,
  hintValue,
  HandlerHintChange
}) {
  return (
    <form
      onSubmit={HandleFormSubmit}
      className="flex flex-col  w-full"
    >
      {/* Word input with Show/Hide button inside input wrapper */}
      <div className="relative w-full">
        <TextInput
          type={inputType}
          label="Enter a word"
          placeholder="Enter a word here"
          onChangeHandler={HandlerTextInputChange}
          className="w-full pr-20" // space for button
        />
        <button
          type="button"
          onClick={OnShowHideClickHandler}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 px-3 py-1 bg-gray-200 rounded-lg text-sm hover:bg-gray-300 transition"
        >
          {inputType === "password" ? "Show" : "Hide"}
        </button>
      </div>

      {/* Hint input */}
      <div>
        <TextInput
          type="text"
          label="Hint (optional)"
          placeholder="Enter a hint"
          value={hintValue}
          onChangeHandler={HandlerHintChange}
          className="w-full"
        />
      </div>

      {/* Submit button */}
      <Button
        type="submit"
        styleType="primary"
        text="Submit"
        className="w-full mt-2 py-3 text-lg"
      />
    </form>
  );
}

export default TextInputForm;
>>>>>>> bddeb74 (update the ui and win loss logic also added play with friends and plaly with computer features)
