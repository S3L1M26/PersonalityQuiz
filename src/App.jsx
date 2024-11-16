import { useState, useEffect, useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx"
import UserForm from './components/UserForm.jsx';
import Question from './components/Question.jsx';
import Results from './components/Results.jsx';
import { UserContext } from './components/UserContext.jsx';
import './App.css'

export default function App() {
  const { currentQuestion, setCurrentQuestion } = useContext(UserContext);
  const [answers, setAnswers] = useState([]);
  const [element, setElement] = useState("");
  const [artwork, setArtwork] = useState(null);

  const questions = [
    {
      question: "What's your favorite color?",
      options: ["Red 🔴", "Blue 🔵", "Green 🟢", "Yellow 🟡"],
    },
  ];

  const keywords = {
    Fire: "fire",
    Water: "water",
    Earth: "earth",
    Air: "air",
  };

  const elements = {
    "Red 🔴": "Fire",
    "Blue 🔵": "Water",
    "Green 🟢": "Earth",
    "Yellow 🟡": "Air",
    // Continue mapping all your possible options to a keyword
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

