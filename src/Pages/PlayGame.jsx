<<<<<<< HEAD
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
=======
import { useLocation, useNavigate } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText.jsx";
import LetterButtons from "../components/LetterButtons/LetterButtons.jsx";
import React, { useState, useEffect } from "react";
import Hangman from "../components/Hangman/Hangman";

function PlayGame() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const word = state?.word?.toUpperCase() || "";
  const hint = state?.hint || "";

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [step, setStep] = useState(0);
  const [gameStatus, setGameStatus] = useState("playing");
  const MAX_STEPS = 6;

  function handleLetterClick(letter) {
    if (guessedLetters.includes(letter) || gameStatus !== "playing") return;
    if (!word.includes(letter)) setStep((prev) => prev + 1);
    setGuessedLetters((prev) => [...prev, letter]);
  }

  useEffect(() => {
    if (!word) return;

    const allGuessed = word.split("").every(
      (ch) => ch === " " || guessedLetters.includes(ch)
    );

    if (allGuessed) setGameStatus("won");
    else if (step >= MAX_STEPS) setGameStatus("lost");
  }, [guessedLetters, step, word]);

  const handleRestart = () => {
    navigate("/");
  };

  return (
    <div className="text-center mt-6 flex flex-col items-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">🎯 Play Game</h1>

      {/* Main layout */}
      <div className="flex flex-row items-start gap-10">
        {/* Left: Hangman */}
        <Hangman step={step} />

        {/* Right: MaskedText + Hint + LetterButtons */}
        <div className="flex flex-col items-center">
          {hint && (
            <div className="text-gray-500 italic mb-2 text-lg">💡 Hint: {hint}</div>
          )}

          <div className="my-4 text-2xl font-mono tracking-widest text-gray-700">
            <MaskedText text={word} guessedLetters={guessedLetters} />
          </div>

          {gameStatus === "playing" && (
            <div className="flex flex-wrap justify-center max-w-md mt-4">
              <LetterButtons
                text={word}
                guessedLetters={guessedLetters}
                onLetterClick={handleLetterClick}
              />
            </div>
          )}
        </div>
      </div>

      {/* Modal for Win/Lose */}
      {(gameStatus === "won" || gameStatus === "lost") && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl shadow-xl p-10 w-80 text-center animate-fadeIn">
            <h2
              className={`text-3xl font-bold mb-4 ${
                gameStatus === "won" ? "text-green-600" : "text-red-600"
              }`}
            >
              {gameStatus === "won" ? "🎉 You Win!" : "❌ You Lose!"}
            </h2>

            {gameStatus === "lost" && (
              <p className="text-gray-700 mb-4">
                The word was: <span className="underline">{word}</span>
              </p>
            )}

            <button
              onClick={handleRestart}
              className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              🔁 Play Again
            </button>
          </div>
        </div>
      )}
    </div>
>>>>>>> bddeb74 (update the ui and win loss logic also added play with friends and plaly with computer features)
  );
}

export default PlayGame;
<<<<<<< HEAD


{/* state.words is passed in a state in textinputformcontainer while navigating */}
{/* <a href="/start" className="text-blue-400">click here to start</a> */}
=======
>>>>>>> bddeb74 (update the ui and win loss logic also added play with friends and plaly with computer features)
