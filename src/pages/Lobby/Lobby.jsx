import React, { useEffect, useState } from "react";
import { HeaderLobby } from "@/components/headerLobby/HeaderLobby";
import styles from './lobby.module.css';
import StudentList from "@/components/student-list/student-list";
import LobbyView from "@/components/lobbyView/lobbyView";
import LobbyViewStud from "@/components/LobbyVeiwForStudent/LobbyStudView";
import { useRouter } from "next/router";

export default function Lobby(props) {
    const teacherName = 'Иванов И. И.';
    const [students, setStudents] = useState([
        "Vasya",
        "Petya",
        "Kolya",
        "Goshan",
        "Anton",
        "Sanya",
        "Ilyusha",
        "Nikita",
    ]);

    const addStudent = () => {
        setStudents([...students, `Student ${students.length + 1}`]);
    };

    const connectionCode = 1234;//заменить на данные с бэка
    const gameInformation = {
        gameTitle: 'своя игра',
        name: 'История 10Г Первая мировая война',
        description: 'своя игра - это...',
        image: require('../../img/jeopardy.svg'),
    }

    const router = useRouter();
    const startGame = (e) => {
        e.preventDefault();
        router.push(`/jeopardy/Jeopardy`);
    }

    const [member, setMember] = useState('teacher');//изменять member можно в любом другом месте
    const [container, setContainer] = useState(null);
    useEffect(() => {
        if (member === 'teacher') {
            setContainer(
                <div className="left-container">
                    <span className={styles["top-span"]}>КОД ПОДКЛЮЧЕНИЯ: {connectionCode}</span>
                    <div className={styles['game-settings']}>
                        <button className={styles['btn-start']} onClick={startGame}>Начать сессию</button>
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
            <HeaderLobby />
            <div className={styles['container']}>
                {container}
                <StudentList students={students} className={styles['student-list']} />
            </div>
        </>
    )
}