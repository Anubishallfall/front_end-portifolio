import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const AutorizacaoContexto = createContext();
AutorizacaoContexto.displayName = "AutorizacaoContexto"


const servico = axios.create({
    baseURL: 'http://localhost:8080'
});


export function AutorizacaoProvider({ children }) {
    const [autorizacao, setAutorizacao] = useState();


    const [erro, setErro] = useState()

    let navigate = useNavigate();

    useEffect(() => {
        obterLocalStorage();
    }, [])

    async function logIn(credenciais) {
        try {
            const { data } = await servico.post("/auth", credenciais);
            salvarLocalStorage(data)
            setAutorizacao(data)
            navigate("workspaces");
        } catch (e) {
            setErro(e.response.data.message)
        }
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
            erro,
            logIn,
            logOut
        }}>
            {children}
        </AutorizacaoContexto.Provider>
    )
}
