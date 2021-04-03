import "./Quiz.css";
import { useState, useEffect } from "react";

function Quiz() {
  const questions = [
    {
      que: "Who is ceo of tesla",
      options: [
        { val: "Elon Musk", isCorrect: false },
        { val: "Ab", isCorrect: false },
        { val: "Ac", isCorrect: false },
        { val: "Ad", isCorrect: true },
      ],
    },
    {
      que: "what is name of this",
      options: [
        { val: "Av", isCorrect: false },
        { val: "Ab", isCorrect: true },
        { val: "Ac", isCorrect: false },
        { val: "Ad", isCorrect: false },
      ],
    },
    {
      que: "what is that",
      options: [
        { val: "Av", isCorrect: false },
        { val: "Ab", isCorrect: false },
        { val: "Ac", isCorrect: true },
        { val: "Ad", isCorrect: false },
      ],
    },
    {
      que: "what is function",
      options: [
        { val: "Av", isCorrect: true },
        { val: "Ab", isCorrect: false },
        { val: "Ac", isCorrect: false },
        { val: "Ad", isCorrect: false },
      ],
    },
  ];

  let [countTimer, setcountTimer] = useState(10);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (countTimer != 0) {
        setcountTimer(countTimer - 1);
      } else {
        if (index != questions.length - 1) {
          setIndex(index + 1);
          setcountTimer(10);
        } else if (index == questions.length - 1) {
          setCompleted(true);
        }
      }
    }, 1000);
  }, [countTimer]);

  const HandleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (index != questions.length - 1) {
      setIndex(index + 1);
      countTimer = 10;
      setcountTimer((prev) => (prev = countTimer));
    } else if (index == questions.length - 1) {
      setCompleted(true);
    }
  };

  return (
    <div className="con">
      <div className="main-area">
        {completed ? (
          <div style={{ marginTop: "5rem" }}>
            <h1>Your score is {score}</h1>
          </div>
        ) : (
          <>
            <div className="timer-line">
              <div className="timer-c">{countTimer}</div>
            </div>
            <div className="q-section">
              <h2>{questions[index].que}</h2>
              <h5 className="q-count">
                Question {index + 1}/
                <span style={{ fontSize: "15px" }}>{questions.length}</span>
              </h5>
            </div>
            <div className="ans-section">
              {questions[index].options.map((item) => (
                <button
                  onClick={() => HandleClick(item.isCorrect)}
                  className="btn click btn-lg btn-block"
                >
                  A <span style={{ paddingRight: "2rem" }}></span> {item.val}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
