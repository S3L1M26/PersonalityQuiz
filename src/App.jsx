import { useState, useEffect, useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx"
import UserForm from './components/UserForm.jsx';
import Question from './components/Question.jsx';
import Results from './components/Results.jsx';
import { UserContext } from './components/UserContext.jsx';
import './App.css'

export default function App() {
  const apiUrl = "https://www.dragonball-api.com/api";
  const { currentQuestion, setCurrentQuestion } = useContext(UserContext);
  const [answers, setAnswers] = useState([]);
  const [element, setElement] = useState("");
  const [artwork, setArtwork] = useState(null);

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

  const keywords = {
    Goku: "training",
    Vegeta: "strength",
    Gohan: "knowledge",
    Piccolo: "meditating",
    Krillin: "support",
    Bulma: "strategy",
    Trunks: "adventure",
    Goten: "energetic",
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
    "Sweets 🍰": "Goten",
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
    "Energetic ⚡": "Goten",
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
    "Wildcard 🎲": "Goten",
  };
  

  function handleAnswer(answer){
    setAnswers([...answers, answer]);
    setCurrentQuestion(currentQuestion + 1);
  }

  function determineElement(answers){
    const counts = {};
    answers.forEach((answer) => {
      const element = elements[answer];
      counts[element] = (counts[element] || 0 ) + 1;
    });

    return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
  }

  useEffect(
    function () {
      if (currentQuestion === questions.length) {
        const selectedElement = determineElement(answers);
        setElement(selectedElement);
        setArtwork(keywords[selectedElement]);
      }
    }, [currentQuestion]);

  return (
    <div>
      <Header/>     
        <Routes>
          <Route path="/" element={<UserForm/>}/>
          <Route
            path="/quiz"
            element={
              currentQuestion < questions.length ? (
                <Question 
                  questionIndex={currentQuestion + 1}
                  question={questions[currentQuestion].question}
                  options={questions[currentQuestion].options}
                  onAnswer={handleAnswer}
                />
              ) : (
                <Results element={element} artwork={artwork}/>
              )
            }
          />
        </Routes>
    </div>
  );
}

