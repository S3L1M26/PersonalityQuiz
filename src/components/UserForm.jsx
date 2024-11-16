import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";

export default function UserForm(){
    const [inputName, setInputName] = useState("");
    const { name, setName } = useContext(UserContext);

    function handleSubmit(e){
        e.preventDefault();
        //console.log(inputName);
        console.log(name);
        setInputName("");
        window.history.pushState({}, '', '/quiz');
        const navEvent = new PopStateEvent("popstate");
        window.dispatchEvent(navEvent);
    }

    function handleChange(e){
        const inputValue = e.target.value;
        setInputName(inputValue);
        setName(inputValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" value={inputName} onChange={handleChange} required/>
            <input type="submit" value="Start Quiz"/>
        </form>
    );

}