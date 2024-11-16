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
            <p>
                <strong>{name}</strong>, your element is: {element}
            </p>
            {artwork ? (
                <div>
                    <h2>{artwork.title}</h2>
                    <img src={artwork.primaryImage} alt={artwork.title}/>
                    <p>{artwork.artistDisplayName}</p>
                    <p>{artwork.objectDate}</p>
                </div>
            ) : (
                <p>No artwork found.</p>
            )}
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    );
}