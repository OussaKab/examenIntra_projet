import './App.css';
import {useEffect, useState} from "react";
import ViewGuesses from "./components/ViewGuesses/ViewGuesses";
import FormGuess from "./components/Form/FormGuess";
function App() {
    const loadAllData = () => {
        return async () => {
            await fetch("http://localhost:8181/guesses")
                .then(res => res.json())
                .then(v => setGuesses(v))
        };
    }
    const [guesses, setGuesses] = useState([]);
    const [currentGuess, setCurrentGuess] = useState({id:null, nom:null, guess_user:null, guess_machine:null});
    const [computerGuess, setComputerGuess] = useState(-1);
    useEffect(loadAllData(), []);


    return (
        <div className="App">
            <FormGuess setCurrentGuess={setCurrentGuess} currentGuess={currentGuess} setComputerGuess={setComputerGuess} setGuesses={setGuesses}/>
            <div>
                {
                    computerGuess !== -1 ?
                    <div>
                        <h1>{currentGuess.guess_user}</h1>
                        <h1>{currentGuess.guess_user === currentGuess.guess_machine ? "Valide": "Manqué"}</h1>
                    </div>: <div></div>
                }
            </div>
            <ViewGuesses guesses={guesses}/>
        </div>
    );
}

export default App;
