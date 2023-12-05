'use client';
import React, {useState} from "react";
import RegForm from "@/components/registration-form/register-form";
import styles from "./register-page.module.css";
import LoginForm from "@/components/teacher-login/teacher-login";
import StudentForm from "@/components/student-login/student-login";
import {useRouter} from "next/navigation";

export default function Home() {

    const [isLoginForm, setIsLoginForm] = useState(false);
    const [isStudentForm, setIsStudentForm] = useState(true);

    function Navigation() {
        const router = useRouter();
        const handleClick = () => {
            router.push('/main-page');
        };

        return (
            <>
                <button onClick={handleClick}>Go to some page</button>
            </>
        );
    }

    const changeForm = () => {
        setIsLoginForm(!isLoginForm);
    };

    const changeStudentForm = () => {
        setIsStudentForm(!isStudentForm);
    }

    let formToDisplay = <StudentForm changeStudentForm={changeStudentForm}/>;

    if (!isStudentForm) {
        formToDisplay = <LoginForm changeStudentForm={changeStudentForm} changeForm={changeForm}/>
    }
    if (isLoginForm)  {
        formToDisplay = <RegForm changeStudentForm={changeStudentForm} changeForm={changeForm}/>
    }

    return (
        <>
            <header />
            <main>
                <div className={`${styles.flex}`}>
                    {formToDisplay}
                </div>
                <Navigation/>
            </main>
            <footer>
            </footer>
        </>
    );
}