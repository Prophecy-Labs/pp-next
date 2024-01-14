import React, { useEffect, useState } from "react";
import styles from './Jeopardy.module.css';
import { HeaderLobby } from "@/components/headerLobby/HeaderLobby";
import GameTable from "@/components/gameTable/gameTable";
import StudListJeopardy from "@/components/studentListJeopardy/studentListJeopardy";

const Jeopardy = (props) => {
    //все данные о игре брать с пропса или с бд
    //если пропс, то передавать лучше props.gameInformation = gameInfornation
    //потом прописать const {data} = props.gameInformation, легче будет:)
    const gameName = 'биология 9б царство грибов';
    let stud1 = {
        name: 'Fedor Tipok',
        score: 1000
    }
    let stud2 = {
        name: 'Goshan',
        score: 21
    }
    let stud3 = {
        name: 'Antoha',
        score: -100
    }
    let studList = [stud1, stud2, stud3];


    const questions1 = {
        p100: '100',
        p200: '200',
        p300: '300',
        p400: '400',
        p500: '500',
        p600: '600',
    }
    const questions2 = {
        p100: '100',
        p200: '200',
        p300: '300',
        p400: '400',
        p500: '500',
        p600: '600',
    }
    const questions3 = {
        p100: '100',
        p200: '200',
        p300: '300',
        p400: '400',
        p500: '500',
        p600: '600',
    }
    const questions4 = {
        p100: '100',
        p200: '200',
        p300: '300',
        p400: '400',
        p500: '500',
        p600: '600',
    }
    const questions5 = {
        p100: '100',
        p200: '200',
        p300: '300',
        p400: '400',
        p500: '500',
        p600: '600',
    }
    const questions6 = {
        p100: '100',
        p200: '200',
        p300: '300',
        p400: '400',
        p500: '500',
        p600: '600',
    }
    const qn1 = {
        q100: 'Какой гриб самый крутой?11',
        q200: 'Какой гриб самый крутой?12',
        q300: 'Какой гриб самый крутой?13',
        q600: 'Какой гриб самый крутой?16'
    }
    const qn2 = {
        q100: 'Какой гриб самый крутой?21',
        q200: 'Какой гриб самый крутой?22',
        q300: 'Какой гриб самый крутой?23',
        q400: 'Какой гриб самый крутой?24',
        q500: 'Какой гриб самый крутой?25',
        q600: 'Какой гриб самый крутой?26',
    }
    const gameContent = {
        topic: ['тема1 12', 'тема2'],
        questions: [questions1, questions2],
        questionsText: [qn1, qn2]
    }

    const [teacher, setTeacher] = useState(true);
    const [content, setContent] = useState(null);
    useEffect(() => {
        if (teacher){
            setContent(
                <button className={styles['btn-end']}>завершить сессию</button>
            )
        } else {
            setContent();
        }
    }, []);

    return (
        <>
            <HeaderLobby />
            {content}
            <div className={styles['container']}>
                <p className={styles['game-title']}>{gameName}</p>
                <GameTable gameContent={gameContent} />
                <StudListJeopardy studList={studList} className={styles['stud-list']} />
            </div>
        </>
    );
}

export default Jeopardy;