import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';


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