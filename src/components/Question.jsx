import React from "react";


export default function Question({ questionIndex ,question, options, onAnswer }){


    return (
        <div>
            <h2>{questionIndex}. {question}</h2>
            {options.map((option) => {
                return (
                    <button key={option} onClick={() => {
                        onAnswer(option);
                    }}>
                        {option}
                    </button>
                );
            })}
        </div>
    );
}