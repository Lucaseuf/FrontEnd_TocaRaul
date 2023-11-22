import React from "react";
import logo from "../../assets/images/logo.png";
import styles from "./erro.module.scss";



export const Erro = () => {
    return (
        <div className={styles.divErro}>

                <h1>Não é possível acessar esse site</h1>

                <p>Verifique se há um erro de digitação</p>

                <p>DNS_PROBE_FINISHED_NXDOMAIN</p>

        </div>
    )
};