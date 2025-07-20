import getMaskedString from "./MaskingUtility";


function MaskedText({text = "", guessedLetters = []}){
    const maskedText = getMaskedString(text, guessedLetters);
    return(
        <>
            {maskedText.map((letters , idx)=>{
                return (
                    <span key={idx} className="mx-4 text-red-800">
                        {letters}
                    </span>
                )
            })}
        </>
    )
}

export default MaskedText;