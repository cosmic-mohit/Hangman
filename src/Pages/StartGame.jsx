import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";

<<<<<<< HEAD
function StartGame(){
    return (
        <>
            <h1>Start Game</h1>
            <TextInputFormContainer />
            <Link to="/play" className="text-blue-400">click here to play</Link>
        </>
    );
}

export default StartGame;
=======
function StartGame() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl shadow-xl p-10 text-center transition-transform transform hover:scale-[1.02] hover:shadow-2xl">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 tracking-wide">
          🎮 Start Game
        </h1>

        <TextInputFormContainer />

      </div>
    </div>
  );
}

export default StartGame;
>>>>>>> bddeb74 (update the ui and win loss logic also added play with friends and plaly with computer features)
