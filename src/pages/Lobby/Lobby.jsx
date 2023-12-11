import React from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from './lobby.module.css';

export default function Lobby() {
    return (
        <>
            <Header />
            <div className={styles['container']}>
                Welcome to the lobby!!!
            </div>
            <Footer/>
        </>
    )
}