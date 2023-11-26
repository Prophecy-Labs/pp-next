import React from "react";
import RegForm from "@/components/registration-form/register-form";
import styles from "./register-page.module.css";

export default function Home() {
  return (
      <>
        <header />
        <main>
            <div className={`${styles.flex}`}>
                <RegForm />
            </div>
        </main>
        <footer />
      </>
  );
}