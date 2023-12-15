import React, { useEffect, useState } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from './lobby.module.css';
import StudentList from "@/components/student-list/student-list";
import LobbyView from "@/components/lobbyView/lobbyView";
import LobbyViewStud from "@/components/LobbyVeiwForStudent/LobbyStudView";

export default function Lobby(props) {
    const teacherName = 'Иванов И. И.';
    const students = ['Vasya', 'Petya', 'Kolya', 'Goshan', 'Anton', 'Sanya', 'Ilyusha', 'Nikita'];//заменить на данные с бэка
    const connectionCode = 1234;//заменить на данные с бэка
    const gameInformation = {
        gameTitle: 'своя игра',
        name: 'История 10Г Первая мировая война',
        description: 'своя игра - это...',
        image: require('../../img/jeopardy.svg'),
    }

    const [member, setMember] = useState('student');//изменять member можно в любом другом месте
    const [container, setContainer] = useState(null);
    useEffect(() => {
        if (member === 'teacher') {
            setContainer(
                <div className="left-container">
                    <span className={styles["top-span"]}>КОД ПОДКЛЮЧЕНИЯ: {connectionCode}</span>
                    <div className={styles['game-settings']}>
                        <button className={styles['btn-start']}>Начать сессию</button>
                        <LobbyView data={gameInformation} />
                        <button className={styles['btn-end']}>закрыть сессию</button>
                    </div>
                </div>
            );
        } else {
            setContainer(
                <div className="left-container">
                    <span className={styles['top-span']}>Организатор: {teacherName}</span>
                    <div className={styles['game-settings']}>
                        <LobbyViewStud data={gameInformation} />
                        <button className={styles['disconnect-btn']}>отключиться</button>
                    </div>
                </div>
            );
        }
    }, []);

    //заменить gameInformation = {} на {gameInformation} = props, в котором данные будут так же написаны, их можно получить в gameCard и передать в лобби.(пример такого присвоения есть в gameView.jsx)

    return (
        <>
            <Header />
            <div className={styles['container']}>
                {container}
                <StudentList students={students} className={styles['student-list']} />
            </div>
            <Footer/>
        </>
    )
}