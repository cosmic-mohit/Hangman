import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import StartGame from "./Pages/StartGame";
import PlayGame from "./Pages/PlayGame";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        {/* Home Page (Landing Screen) */}
        <Route path="/" element={<HomePage />} />

        {/* Start Game Page */}
        <Route path="/startgame" element={<StartGame />} />

        {/* Play Game Page */}
        <Route path="/play" element={<PlayGame />} />
      </Routes>
    </div>
  );
}

export default App;
