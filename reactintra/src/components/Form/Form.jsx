import './Form.css';
export default function FormGuess(setCurrentGuess,currentGuess, setComputerGuess, setGuesses) {
    const coupDeDe = () => {
        let computerGuess = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        setComputerGuess(computerGuess);
        setCurrentGuess( {...currentGuess, 'guess_machine':computerGuess});
        saveGuess(currentGuess).then(res => res.json()).then().then(fetchedGuess =>  setGuesses(allGuesses => [...allGuesses, fetchedGuess]));
    };

    const saveGuess = async (guess) => {
        const requestBody = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(guess)
        };
        return await fetch("http://localhost:8181/guesses", requestBody);
    }

    return <div>
        <div>
            <label>Votre nom</label>
            <input type="text" onChange={(e) => setCurrentGuess({...currentGuess, nom: e.target.value})}/>
        </div>
        <div>
            <label>Votre guess</label>
            <input type="text"
               onChange={(e) => setCurrentGuess({...currentGuess, guess_user: parseInt(e.target.value)})}/>
            </div>
            <button onClick={coupDeDe}>coup de dé</button>
</div>;
}
