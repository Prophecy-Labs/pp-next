import React from "react";
import styles from './buttonsJeopardyEditor.module.css';

export const ButtonsJeopardyEditor = () => {

    const handleClick = () => {
        console.log(1);//тут надо сделать изменение таблички(если смогу сам сделаю)
    }

    return (
        <div className={styles['container']}>
            <span>Выбор раунда</span>
            <div className={styles['buttons-container']}>
                <button className={styles['round-btn']} onClick={handleClick}>1</button>
                <button className={styles['round-btn']} onClick={handleClick}>2</button>
                <button className={styles['round-btn']} onClick={handleClick}>3</button>
            </div>
        </div>
    )
}