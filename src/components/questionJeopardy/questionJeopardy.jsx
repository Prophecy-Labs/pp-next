import React, { useEffect, useState } from "react";
import styles from "./questionJeopardy.module.css";

const QuestionJeopardy = (props) => {
  const { topicIndex, questionIndex, questionsList } = props;
  const question = questionsList[topicIndex][`q${questionIndex}00`];
  const [member, setMember] = useState("student");
  const [teacherContent, setTeacherContent] = useState(
    <div>
      <input
        type="text"
        className={styles["question-input"]}
        placeholder="ответ ученика"
        disabled={true}
      />
      <div className={styles["teacher-buttons"]}>
        <button className={styles["count-ans__btn"]}>зачесть ответ</button>
        <button className={styles["dont-count-ans__btn"]}>Пропустить</button>
      </div>
    </div>
  );

  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [gaveAnswer, setGaveAnswer] = useState(false);
  const [content, setContent] = useState(
    <button
      className={styles["go-answer__btn"]}
      onClick={() => setGaveAnswer(true)}
    >
      ответить
    </button>
  );
  useEffect(() => {
    if (gaveAnswer) {
      setContent(
        <input
          className={styles["question-input"]}
          placeholder="поле для ответа"
        />
      );
    } else {
      setContent(
        <button
          className={styles["go-answer__btn"]}
          onClick={() => setGaveAnswer(true)}
        >
          ответить
        </button>
      );
    }
  }, [gaveAnswer]);

  useEffect(() => {
    if (member === "teacher") {
      setTeacherContent(
        <div className={styles["teacher-container"]}>
          <input
            type="text"
            className={styles["question-input"]}
            placeholder="ответ ученика"
            disabled
          />
          <div className={styles["teacher-buttons"]}>
            <button className={styles["count-ans__btn"]}>зачесть ответ</button>
            <button className={styles["dont-count-ans__btn"]}>
              Пропустить
            </button>
          </div>
        </div>
      );
    } else {
      setTeacherContent({ content });
    }
  }, [member]);

  return (
    <div className={styles["question-window"]}>
      <div className={styles['progress-bar']} style={{width: `${(timer/30 *100)}%`}}>
        <div className={styles["timer"]}>{timer}</div> 
      </div>
      <p className={styles["question-text"]}>{question}</p>
      {member === "teacher" ? teacherContent : content}
    </div>
  );
};

export default QuestionJeopardy;
