import React, { useState, createContext } from "react";

export const UserContext = createContext();

export function UserProvider({ children }){
    const [name, setName] = useState("");
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        {
          question: "What's your favorite way to spend your time?",
          options: ["Training 💪", "Meditating 🧘", "Exploring 🌍", "Relaxing 😌"],
        },
        {
          question: "Which food do you prefer?",
          options: ["Meat 🍖", "Fruits 🍎", "Sweets 🍰", "Anything, as long as it's a lot! 🍽️"],
        },
        {
          question: "What motivates you the most?",
          options: ["Protecting loved ones 🛡️", "Becoming stronger ⚡", "Seeking knowledge 📖", "Adventure 🗺️"],
        },
        {
          question: "How do you react in a crisis?",
          options: ["Take charge 🦸", "Stay calm and think 🤔", "Rely on teamwork 🤝", "Face it head-on 🥊"],
        },
        {
          question: "What's your favorite type of weather?",
          options: ["Sunny ☀️", "Stormy 🌩️", "Calm and breezy 🌬️", "Snowy ❄️"],
        },
        {
          question: "How would your friends describe you?",
          options: ["Loyal 🐾", "Wise 🦉", "Energetic ⚡", "Caring ❤️"],
        },
        {
          question: "Which of these best represents your fighting style?",
          options: ["Brute strength 🥊", "Speed 🌀", "Strategy 🎯", "Balance ⚖️"],
        },
        {
          question: "What would you rather do in your free time?",
          options: ["Train your body 💪", "Read a book 📚", "Enjoy nature 🌳", "Spend time with friends 👫"],
        },
        {
          question: "What's your biggest fear?",
          options: ["Losing a loved one 💔", "Failure 🚫", "Being alone 🙇", "Missing a challenge ⚔️"],
        },
        {
          question: "What role do you take in a group?",
          options: ["Leader 👑", "Support 🛠️", "Strategist 🧠", "Wildcard 🎲"],
        },
      ];
    
      const characterId = {
        Goku: 1,
        Vegeta: 2,
        Gohan: 10,
        Piccolo: 3,
        Krillin: 11,
        Bulma: 4,
        Trunks: 16,
        Gotenks: 15,
      };
    
      const elements = {
        // Pregunta 1: What's your favorite way to spend your time?
        "Training 💪": "Goku",
        "Meditating 🧘": "Piccolo",
        "Exploring 🌍": "Trunks",
        "Relaxing 😌": "Bulma",
      
        // Pregunta 2: Which food do you prefer?
        "Meat 🍖": "Goku",
        "Fruits 🍎": "Piccolo",
        "Sweets 🍰": "Gotenks",
        "Anything, as long as it's a lot! 🍽️": "Vegeta",
      
        // Pregunta 3: What motivates you the most?
        "Protecting loved ones 🛡️": "Gohan",
        "Becoming stronger ⚡": "Vegeta",
        "Seeking knowledge 📖": "Gohan",
        "Adventure 🗺️": "Trunks",
      
        // Pregunta 4: How do you react in a crisis?
        "Take charge 🦸": "Vegeta",
        "Stay calm and think 🤔": "Piccolo",
        "Rely on teamwork 🤝": "Krillin",
        "Face it head-on 🥊": "Goku",
      
        // Pregunta 5: What's your favorite type of weather?
        "Sunny ☀️": "Goku",
        "Stormy 🌩️": "Vegeta",
        "Calm and breezy 🌬️": "Piccolo",
        "Snowy ❄️": "Trunks",
      
        // Pregunta 6: How would your friends describe you?
        "Loyal 🐾": "Krillin",
        "Wise 🦉": "Piccolo",
        "Energetic ⚡": "Gotenks",
        "Caring ❤️": "Gohan",
      
        // Pregunta 7: Which of these best represents your fighting style?
        "Brute strength 🥊": "Goku",
        "Speed 🌀": "Trunks",
        "Strategy 🎯": "Bulma",
        "Balance ⚖️": "Gohan",
      
        // Pregunta 8: What would you rather do in your free time?
        "Train your body 💪": "Vegeta",
        "Read a book 📚": "Gohan",
        "Enjoy nature 🌳": "Piccolo",
        "Spend time with friends 👫": "Krillin",
      
        // Pregunta 9: What's your biggest fear?
        "Losing a loved one 💔": "Gohan",
        "Failure 🚫": "Vegeta",
        "Being alone 🙇": "Piccolo",
        "Missing a challenge ⚔️": "Goku",
      
        // Pregunta 10: What role do you take in a group?
        "Leader 👑": "Goku",
        "Support 🛠️": "Krillin",
        "Strategist 🧠": "Bulma",
        "Wildcard 🎲": "Gotenks",
      };

    return (
    <UserContext.Provider value={{ 
        name, 
        setName, 
        currentQuestion, 
        setCurrentQuestion, 
        questions, 
        characterId, 
        elements 
    }}>{children}</UserContext.Provider>
    );

}