import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import StartGame from "./Pages/StartGame";
import PlayGame from "./Pages/PlayGame";
import footer from "./components/Footer/footer.jsx";

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
      {/* <footer className="w-full text-center py-4 mt-auto
                   text-xs tracking-wide text-gray-400">
  Built with ❤️ by Mohit Sengar | © {new Date().getFullYear()}
</footer> */}
<div className="
  fixed bottom-2 right-4
  text-xs text-gray-400
  opacity-70
  hover:opacity-100
  transition
  select-none
">
  © 2026 Mohit Sengar
</div>
    </div>
  );
}

export default App;
