import React from "react";
import {useForm} from "react-hook-form";
import Button from "@/components/Button/button";
import {console} from "next/dist/compiled/@edge-runtime/primitives";
import styles from "./register-form.module.css"
import Input from "@/components/Input/input";
import Label from "@/components/Label/label";

export default function RegForm(){

    return (
        <form className={`${styles.register__form}`}>
            <Label text={'логин'}
                   htmlFor={'login'}></Label>
            <Input
                id="login"
                type="text"
            />

            <Label text={'пароль'} htmlFor={'password'}></Label>
            <Input
                id="password"
                type="password"
            />

            <Label text={'почта'} htmlFor={'email'}></Label>
            <Input
                id="email"
                type="email"
            />

            <Button type="submit">регистрация</Button>
        </form>
    );
}