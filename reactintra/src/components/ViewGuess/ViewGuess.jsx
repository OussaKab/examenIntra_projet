import './ViewGuess.css';
export default function ViewGuess({guess}){
    return <tr key={guess.id}>
        <td>{guess.nom}</td>
        <td>{guess.guess_user}</td>
        <td>{guess.guess_machine}</td>
    </tr>
}
