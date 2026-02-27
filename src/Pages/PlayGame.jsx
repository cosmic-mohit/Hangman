import { useLocation, useNavigate } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText.jsx";
import LetterButtons from "../components/LetterButtons/LetterButtons.jsx";
import Hangman from "../components/Hangman/Hangman";
import { ScoreContext } from "../context/ScoreContext.jsx";
import React, { useState, useEffect, useContext } from "react";
import db from "../assets/db.json";
import CelebrationPopup from "../components/Celebration/CelebrationPopup.jsx";

function PlayGame() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { score, setScore } = useContext(ScoreContext);

  const [revealedIndices, setRevealedIndices] = useState([]);
  const [showCelebration, setShowCelebration] = useState(false);

  const [currentWord, setCurrentWord] = useState(
    state?.word?.toUpperCase() || ""
  );
  const [currentHint, setCurrentHint] = useState(state?.hint || "");

  const [step, setStep] = useState(0);
  const [gameStatus, setGameStatus] = useState("playing");

  const MAX_STEPS = 6;

  // 🎯 Load New Word
  function loadNewWord() {
    const wordsArray = db.words;
    const randomItem =
      wordsArray[Math.floor(Math.random() * wordsArray.length)];

    setCurrentWord(randomItem.word.toUpperCase());
    setCurrentHint(randomItem.hint);

    setRevealedIndices([]);
    setStep(0);
    setGameStatus("playing");
  }

  // 🎯 Handle Letter Click
  function handleLetterClick(letter) {
    if (gameStatus !== "playing") return;

    const upperWord = currentWord.toUpperCase();

    const index = upperWord
      .split("")
      .findIndex(
        (char, idx) =>
          char === letter && !revealedIndices.includes(idx)
      );

    if (index !== -1) {
      setRevealedIndices((prev) => [...prev, index]);
    } else {
      setStep((prev) => prev + 1);
    }
  }

  // 🎯 Game Logic
  useEffect(() => {
    if (!currentWord) return;

    const totalLetters = currentWord.replace(/ /g, "").length;

    // ✅ Win
    if (
      revealedIndices.length === totalLetters &&
      totalLetters > 0
    ) {
      setScore((prev) => prev + 1);
      setShowCelebration(true);

      setTimeout(() => {
        setShowCelebration(false);
        loadNewWord();
      }, 1200);
    }

    // ❌ Lose
    if (step >= MAX_STEPS) {
      setGameStatus("lost");
    }
  }, [revealedIndices, step]);

  const handleRestart = () => {
    navigate("/");
  };

  return (
    <div className="text-center mt-6 flex flex-col items-center min-h-screen bg-gray-50">

      <h2 className="text-xl font-semibold mb-2">
        🏆 Score: {score}
      </h2>

      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        🎯 Play Game
      </h1>

      <div className="flex flex-row items-start gap-10">

        <Hangman step={step} />

        <div className="flex flex-col items-center">

          {currentHint && (
            <div className="text-gray-500 italic mb-2 text-lg">
              💡 Hint: {currentHint}
            </div>
          )}

          <div className="my-4 text-2xl font-mono tracking-widest text-gray-700">
            <MaskedText
              text={currentWord}
              revealedIndices={revealedIndices}
            />
          </div>

          {gameStatus === "playing" && (
            <LetterButtons onLetterClick={handleLetterClick} />
          )}
        </div>
      </div>

      {/* Lose Modal */}
      {gameStatus === "lost" && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl shadow-xl p-10 w-80 text-center">
            <h2 className="text-3xl font-bold mb-4 text-red-600">
              ❌ You Lose!
            </h2>

            <p className="text-gray-700 mb-4">
              The word was:{" "}
              <span className="underline">{currentWord}</span>
            </p>

            <button
              onClick={handleRestart}
              className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              🔁 Back to Home
            </button>
          </div>
        </div>
      )}

      {/* 🎉 Celebration Popup */}
      <CelebrationPopup
        show={showCelebration}
        message="Correct!"
      />
    </div>
  );
}

export default PlayGame;