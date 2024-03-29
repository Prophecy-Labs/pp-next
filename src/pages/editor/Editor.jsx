import React, { useEffect, useState } from "react";
import styles from './Editor.module.css';
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Head from "next/head";
import { JeopardyTopicEditor } from "@/components/JeopardyTopicEditor/jeopardyTopicEditor";
import { JeopardyPriceEditor } from "@/components/JeopardyPriceEditor/jeopardyPriceEditor";
import { JeopardyQuestionTable } from "@/components/JeopardyQuestionTable/jeopardyQuestionTable";
import { JeopardyModalQuestion } from "@/components/JeopardyModalQuestion/jeopardyModalQuestion";
import { JeopardyModalTopic } from "@/components/JeopardyModalTopic/jeopardyModalTopic";
import { ButtonsJeopardyEditor } from "@/components/buttonsJeopardyEditor/buttonsJeopardyEditor";

const Editor = (props) => {

    let qn1 = {
        q100: 'Какой гриб самый крутой?11',
        q200: 'Какой гриб самый крутой?12',
        q300: 'Какой гриб самый крутой?13',
        q400: 'Какой гриб самый крутой?14',
        q500: 'Какой гриб самый крутой?15',
    }
    let qn2 = {
        q100: 'Какой гриб самый крутой?21',
        q200: 'Какой гриб самый крутой?22',
        q300: 'Какой гриб самый крутой?23',
        q400: 'Какой гриб самый крутой?24',
        q500: 'Какой гриб самый крутой?25',
    }
    let qn3 = {
        q100: 'Какой гриб самый крутой?31',
        q200: 'Какой гриб самый крутой?32',
        q300: 'Какой гриб самый крутой?33',
        q400: 'Какой гриб самый крутой?34',
        q500: 'Какой гриб самый крутой?35',
    }
    let qn4 = {
        q100: 'Какой гриб самый крутой?41',
        q500: 'Какой гриб самый крутой?45',
    }
    let qn5 = {
        q100: 'Какой гриб самый крутой?51',
        q200: 'Какой гриб самый крутой?52',
        q300: 'Какой гриб самый крутой?53',
        q400: 'Какой гриб самый крутой?54',
        q500: 'Какой гриб самый крутой?55',
        q600: 'Kakoy krutoy ya'
    }
    //всё переделано в useState, чтобы можно было добавлять новые темы и вопросы
    const [topics, setTopics] = useState(['тема1', 'тема2', 'тема3', 'тема4', 'тема5']);
    const [questionText, setQuestionText] = useState([qn1, qn2, qn3, qn4, qn5]);
    //обращение к элементам не изменилось

    const [openModalQuestion, setOpenModalQuestion] = useState(false);
    const [openModalTopic, setOpenModalTopic] = useState(false);

    //добавление новой темы
    const topicPlus = (newTopic) => {
        const newTopics = [...topics, newTopic];
        setQuestionText([...questionText, {}]);
        setTopics(newTopics);
    }


    const [questionId, setQuestionId] = useState(-1);
    const [topicId, setTopicId] = useState(-1);
    //добавление нового вопроса
    const questionPlus = (newQuestion) => {
        if (questionId !== -1 && topicId !== -1) {
            const newQuestions = [...questionText];
            newQuestions[topicId] ||= {};
            newQuestions[topicId][questionId] = newQuestion;
            setQuestionText(newQuestions);
        }
    }

    const createQuestion = (topicId, questionId) => {
        setOpenModalQuestion(true);
        setQuestionId(questionId);
        setTopicId(topicId);
    }

    const content = ['100', '200', '300', '400', '500', '600'];

    return (
        <>
            <Header />
            <JeopardyModalQuestion 
            openModal={openModalQuestion} 
            questionPlus={questionPlus} 
            setOpenModal={setOpenModalQuestion} 
            questionIdid={questionId}
            topicId={topicId} />
            <JeopardyModalTopic openModal={openModalTopic} topicPlus={topicPlus} setOpenModal={setOpenModalTopic} />
            <main className={styles['main-container']}>
                <JeopardyTopicEditor 
                    topics={topics} 
                    setOpenModal={setOpenModalTopic} 
                    setTopics={setTopics} 
                    setQuestionText={setQuestionText}
                    questionText={questionText} />
                <div className={styles['question-container']}>
                    <JeopardyPriceEditor content={content} />
                    <JeopardyQuestionTable 
                    questionText={questionText}
                    setQuestionText={setQuestionText}
                    createQuestion={createQuestion} />
                </div>
                <ButtonsJeopardyEditor />
            </main>
            <div className={styles['game-settings']}>
                <label>
                    <input type="text" placeholder="введите название игры" className={styles['game-name__input']} />
                </label>
                <button className={styles['save__btn']}>сохранить игру</button>
            </div>
            <Footer />
        </>
    );
}

export default Editor;