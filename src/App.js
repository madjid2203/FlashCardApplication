import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {questions.map((question) => (
        <Flashcard key={question.id} item={question} />
      ))}
    </div>
  );
}

function Flashcard({ item }) {
  const [isClicked, setIsClicked] = useState(false);

  function clickHandle() {
    setIsClicked(!isClicked);
  }

  return (
    <div className={` card ${isClicked ? "answer" : ""}`} onClick={clickHandle}>
      <div
        style={isClicked ? { display: "none" } : {}}
        className="card-question"
      >
        {item.question}?
      </div>
      <div style={isClicked ? {} : { display: "none" }} className="card-answer">
        {item.answer}
      </div>
    </div>
  );
}

const questions = [
  {
    id: 3459,
    question: "what language is React based on",
    answer: "JavaScript"
  },
  {
    id: 7356,
    question: "What are the building block of React apps",
    answer: "Components"
  },
  {
    id: 8832,
    question: "What the name of the syntax we use to describe a UI in React",
    answer: "JSX"
  },
  {
    id: 1297,
    question: "How to pass  date from parent to child component",
    answer: "Props"
  },

  {
    id: 9103,
    question: "How to give component memory",
    answer: "useState hook"
  },

  {
    id: 2002,
    question: "What do we call an input element that is completly synchronized",
    answer: "Controlled Component"
  }
];
