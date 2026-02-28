import { useNavigate } from "react-router-dom";
import { useState } from "react";
import db from "../assets/db.json";

function HomePage() {
  const navigate = useNavigate();

  const handlePlayComputer = () => {
  // Pick a random word from db
  const wordsArray = db.words; // ✅ access the 'words' array
  const randomItem = wordsArray[Math.floor(Math.random() * wordsArray.length)];

  // Navigate to PlayGame with word + hint
  navigate("/play", { state: { word: randomItem.word, hint: randomItem.hint, mode : "computer" } });
};


  const handlePlayFriend = () => {
    navigate("/startgame");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-6">
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl shadow-xl p-10 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Hangman</h1>
        <p className="text-gray-600 mb-8 text-lg">Guess the word before the man hangs! 😬</p>

        <div className="flex flex-col gap-4">
          <button
            onClick={handlePlayFriend}
            className="px-6 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-md hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
          >
            Play with Friends
          </button>

          <button
            onClick={handlePlayComputer}
            className="px-6 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-teal-500 rounded-full shadow-md hover:from-teal-500 hover:to-green-500 transition-all duration-300"
          >
            Play with Computer
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
