import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Results({ element, artwork }) {
    const { name, setCurrentQuestion, setName } = useContext(UserContext);

    function restartQuiz(){
        setName("");
        setCurrentQuestion(0);
        window.history.pushState({}, '', '/');
        const navEvent = new PopStateEvent("popstate");
        window.dispatchEvent(navEvent);
    }

    return (
        <div>
            <h2>
                {name}, your character is: {element}
            </h2>
            {artwork ? (
                <div>
                    <h2>{artwork.name}</h2>
                    <img src={artwork.image} alt={artwork.description}/>
                    <p><strong>Race: </strong>{artwork.race}</p>
                    <p><strong>Ki: </strong>{artwork.maxKi}</p>
                </div>
            ) : (
                <p>No artwork found.</p>
            )}
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    );
}