import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AutorizacaoContexto = createContext();
AutorizacaoContexto.displayName = "AutorizacaoContexto"


const servico = axios.create({
    baseURL: 'http://localhost:8080'
});


export function AutorizacaoProvider({ children }) {
    const [autorizacao, setAutorizacao] = useState();

    useEffect(() => {
        obterLocalStorage();
    }, [])


    async function logIn(credenciais) {
        console.debug("logIn - start");
        const { data } = await servico.post("/auth", credenciais);
        salvarLocalStorage(data)
        setAutorizacao(data)
        console.debug("logIn - end");
    }

    function salvarLocalStorage(data) {

        localStorage.setItem("@gestor_atendimento_autorizacao", JSON.stringify(data));
    }

    function obterLocalStorage() {
        let autorizacao = localStorage.getItem("@gestor_atendimento_autorizacao");
        if (autorizacao)
            setAutorizacao(JSON.parse(autorizacao));
    }

    async function logOut() {
        setAutorizacao(null)
    }


    return (
        <AutorizacaoContexto.Provider value={{
            autorizacao,
            logIn,
            logOut
        }}>
            {children}
        </AutorizacaoContexto.Provider>
    )
}
