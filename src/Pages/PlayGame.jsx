import { Link, useLocation, useSearchParams } from 'react-router-dom';
import MaskedText from '../components/MaskedText/MaskedText';
import LetterButtons from '../components/LetterButtons/LetterButtons'
import React, { useState } from 'react';
import Hangman from '../components/Hangman/Hangman';


function PlayGame() {

    const [Params] = useSearchParams();
    console.log(Params.get("text"));  


    const { state } = useLocation();

    const [guessedLetters, setGuessedLetters] = useState([]);

    const [step, setStep] = useState(0);

    function handleLetterClick(letter){
      if(state.words.toUpperCase().includes(letter)){
        console.log("correct letter clicked: " + letter);
      } else{
        console.log("wrong letter clicked: " + letter);
        setStep(step + 1);
      }
      // in case of a array state variable first we need to destructure the old array
      // so that we can create a brand new object 
          setGuessedLetters([...guessedLetters, letter]);


    }

  

  return (
    <>
      <h1>Play Game</h1>

      <MaskedText text={state.words} guessedLetters={guessedLetters} />

      <div>
        <LetterButtons text={state.words} guessedLetters = {guessedLetters} onLetterClick={handleLetterClick} />
      </div>

      <div>
        <Hangman step={step} /> 
      </div>

      

      <Link to="/start" className="text-blue-400">click here to start</Link>
    </>
  );
}

export default PlayGame;


{/* state.words is passed in a state in textinputformcontainer while navigating */}
{/* <a href="/start" className="text-blue-400">click here to start</a> */}