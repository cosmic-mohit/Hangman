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
