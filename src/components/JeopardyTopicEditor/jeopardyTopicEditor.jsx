import React, { useEffect, useState } from "react";
import styles from './jeopardyTopicEditor.module.css';

export const JeopardyTopicEditor = (props) => {

    const {topics, setOpenModal} = props;
    const [content, setContent] = useState(null);
    useEffect(() => {
        if (topics.length < 6) {
            setContent (
                <button className={styles['topic-plus']} onClick={() => setOpenModal(true)}><span>+</span></button>
            )
        } else {
            setContent(null);
        }
    }, [topics]);


    return (
        <div className={styles['topic-container']}>
            <span className={styles['top-text']}>тема</span>
            {topics.map((topic, id) => {
                return (
                    <div key={id} className={styles['topic-card']}>
                        {topic}
                    </div>
                )
            })}
            {content}
        </div>
    )
}