import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";

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