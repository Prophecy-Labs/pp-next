import React, { useEffect, useState } from "react";
import styles from "./questionJeopardy.module.css";

const QuestionJeopardy = (props) => {
  const { topicIndex, questionIndex, questionsList } = props;
  const question = questionsList[topicIndex][`q${questionIndex}00`];
  const [member, setMember] = useState("stud");
  const [teacherContent, setTeacherContent] = useState('');

  const handleCountAnswer = () => {
    //логика зачёта ответа
    console.log('goshan pishi sam, ya vse ebal etoy huyni');
  };

  const handleDontCountAnswer = () => {
    //логика незачёта ответа
    console.log('i eto toje, yavno logika na beke pishetsya');
  }

  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [gaveAnswer, setGaveAnswer] = useState(false);
  const [content, setContent] = useState('');
  const [studAnswer, setStudAnswer] = useState('');
  useEffect(() => {
    if (gaveAnswer) {
      setContent(
        <input
          className={styles["question-input"]}
          placeholder="поле для ответа"
          id="student-input"
          onChange={(e) => setStudAnswer(e.target.value)}
        />
      );//когда любой ученик тыкает кнопку ответить у учителя отображается интуп задизейбленный, в котором выведеться значение ученика
      setTeacherContent(
        <div className={styles["teacher-container"]}>
          <input
            type="text"
            className={styles["question-input"]}
            placeholder={studAnswer ? studAnswer : 'здесь будет записан ответ ученика'}//вставляю ответ ученика если он не пустой(здесь лучше прописать проверку окончания таймера или добавить кнопку отправки ответа)
            disabled
            id=''
          />
          <div className={styles["teacher-buttons"]}>
            <button className={styles["count-ans__btn"]} onClick={handleCountAnswer}>зачесть ответ</button>
            <button className={styles["dont-count-ans__btn"]} onClick={handleDontCountAnswer}>
              Пропустить
            </button>
          </div>
        </div>
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
      setTeacherContent(
        <div className={styles['teacher-text']}>Еще не один ученик не дал ответ</div>
      );
    }
  }, [gaveAnswer]);

  return (
    <div className={styles["question-window"]}>
      <div className={styles['progress-bar']} style={{width: `${(timer/30 *100)}%`}} />
      <p className={styles["question-text"]}>{question}</p>
      {member === "teacher" ? teacherContent : content}
    </div>
  );
};

export default QuestionJeopardy;
