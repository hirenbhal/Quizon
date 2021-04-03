import "./Quiz.css";
import { useState, useEffect } from "react";

function Quiz() {
  const questions = [
    {
      que: "who is ceo of tesla",
      options: [
        { val: "Elon Musk", isCorrect: false },
        { val: "Hiren Bhal", isCorrect: false },
        { val: "Bill gates", isCorrect: false },
        { val: "Motherfuck", isCorrect: true },
      ],
      ans: "Motherfuck",
      res: "",
    },
    {
      que: "what is abhishek",
      options: [
        { val: "Gandu", isCorrect: false },
        { val: "Chutiya", isCorrect: false },
        { val: "Lodu", isCorrect: false },
        { val: "1 se jyada baap ki aulad", isCorrect: true },
      ],
      ans: "1 se jyada baap ki aulad",
      res: "",
    },
    {
      que: "what is that",
      options: [
        { val: "Somethinh", isCorrect: false },
        { val: "Not Somethinh", isCorrect: false },
        { val: "New", isCorrect: true },
        { val: "None of the above", isCorrect: false },
      ],
      ans: "New",
      res: "",
    },
    {
      que: "what is function",
      options: [
        { val: "Method", isCorrect: true },
        { val: "Fuck off", isCorrect: false },
        { val: "Dont know what to right", isCorrect: false },
        { val: "Shut up", isCorrect: false },
      ],
      ans: "Method",
      res: "",
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

  const HandleClick = (clicked) => {
    if (clicked[0]) {
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

  const ScoreCard = () => {

    return (
      <div style={{ paddingBottom: "2rem" }}>
        <div className="con1">
          <div className="score">
            <h3>Your Score</h3>
            <h1>
              {score} / {questions.length}
            </h1>
          </div>
        </div>
        {questions.map((item) => (
          <div className="fuck">
            <h4 style={{ marginBottom: "1rem", marginLeft: "5%" }}>
              Question: {item.que}
            </h4>
            {item.options.map((op) => (
              <>
                { (item.ans == op.val) ? <div className="cor-ans">{op.val}</div> : <div className="end-ans">{op.val}</div> }
              </>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="con">
      <div className="main-area">
        {completed ? (
          <ScoreCard />
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
                  onClick={() => HandleClick([item.isCorrect, item.val])}
                  className="btn click btn-lg btn-block"
                >
                  {item.val}
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
