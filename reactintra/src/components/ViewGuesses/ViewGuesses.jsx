import ViewGuess from "../ViewGuess/ViewGuess";
import './ViewGuesses.css';

export default function ViewGuesses({guesses}){
    return <table>
        <thead>
        <tr>
            <th>Nom</th>
            <th>Guess utilisateur</th>
            <th>Numero Random</th>
        </tr>
        </thead>
        <tbody>
        {guesses.length > 0 ? (
            guesses.map((guess) => <ViewGuess key={guess.id} guess={guess} />)
        ) : (
            <tr>
                <td colSpan={3}>Aucun guess</td>
            </tr>
        )}
        </tbody>
    </table>;
}
