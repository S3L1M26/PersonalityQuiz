import { useState, useEffect, useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx"
import UserForm from './components/UserForm.jsx';
import Question from './components/Question.jsx';
import Results from './components/Results.jsx';
import { UserContext } from './components/UserContext.jsx';
import './App.css'

export default function App() {
  const apiUrl = "https://dragonball-api.com/api/characters/";
  const { currentQuestion, setCurrentQuestion, questions, elements, characterId } = useContext(UserContext);
  const [answers, setAnswers] = useState([]);
  const [element, setElement] = useState("");
  const [characterData, setCharacterData] = useState({});

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
      async function fetchData() {
        try {
          if (currentQuestion === questions.length) {
            const selectedElement = determineElement(answers);
            console.log(selectedElement);
            console.log(characterId[selectedElement])
            setElement(selectedElement);
            console.log(`${apiUrl}${characterId[selectedElement]}`);
            const response = await fetch(`${apiUrl}${characterId[selectedElement]}`);
            const data = await response.json();
            setCharacterData(data);
            console.log(data);
          }
        } catch (error) {
          console.log("Error fetching data: ", error);
        }
      }

      fetchData();
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
                <Results element={element} artwork={characterData}/>
              )
            }
          />
        </Routes>
    </div>
  );
}

