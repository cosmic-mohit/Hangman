const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');

function LetterButtons({text, guessedLetters, onLetterClick}){
    
    const originalLetters = new Set(text.toUpperCase().split(''));
    const guessedLettersSet = new Set(guessedLetters);

const buttonStyle = function buttonStyle(letter){
    if(guessedLettersSet.has(letter)){
        return `${originalLetters.has(letter) ? 'bg-green-500' : 'bg-red-500'}`
    }
    else{
        return 'bg-blue-500'
    }
}

function handleLetterClick(event){
    const charactersOfTheLetter = event.target.value;
    // ?. -> optional chaining operator if onLetterClick fn exist than pass the following parameter to the function
    onLetterClick?.(charactersOfTheLetter);
}

const buttons = ALPHABETS.map(letter => (
    <button 
        key={`button-${letter}`}
        value={letter}
        onClick={handleLetterClick}
        disabled={guessedLettersSet.has(letter)}
        className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}
    >
        { letter }
    </button>
));

return (
    <>
        {buttons}
    </>
);

}



{/* given unique key and the key is letter itself so that e6-slint dnt shw err
    In React, the key prop is used to help React identify which items in a list have changed, been added, or removed. This is especially important when rendering lists of elements.
    
    Significance:
    
    The key should be a unique identifier for each element in the list.
    It helps React optimize rendering by efficiently updating only the changed elements, rather than re-rendering the entire list.
Without a unique key, React may show warnings and could behave unexpectedly when updating lists

*/}
export default LetterButtons;