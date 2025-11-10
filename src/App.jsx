<<<<<<< HEAD
import './App.css'
import TextInputForm from './components/TextInputForm/TextInputForm'
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer'
import {Route, Routes} from 'react-router-dom'
import StartGame from './Pages/StartGame'
import PlayGame from './Pages/PlayGame'




function App() {
  return (
    <>
       <Routes>
             <Route path='/start' element={<StartGame/>} />
             <Route path='/play' element={<PlayGame/>} />
       </Routes>
    </>
  )
}

export default App
=======
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
>>>>>>> bddeb74 (update the ui and win loss logic also added play with friends and plaly with computer features)
