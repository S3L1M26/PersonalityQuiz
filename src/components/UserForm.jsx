import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "./UserContext";

export default function UserForm(){
    const [inputName, setInputName] = useState("");
    const { setName } = useContext(UserContext);

    function handleSubmit(e){
        setInputName(e.target.value);
        e.preventDefault();
        setName(inputName);
        window.history.pushState({}, '', '/quiz');
        const navEvent = new PopStateEvent("popstate");
        window.dispatchEvent(navEvent);
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text"/>
            <input type="submit" value="Start Quiz"/>
        </form>
    );

}