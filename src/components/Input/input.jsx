import React from "react";
import styles from './input.module.css';

const Input = (props) => {
    return (
        <>
            <input type={props.type}
            className={`${styles.register__input}`}/>
        </>
    );
}

export default Input;