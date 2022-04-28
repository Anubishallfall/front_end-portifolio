import React, { createContext, useEffect, useState } from 'react';
import Api from '../../service/Api';
export const AutorizacaoContexto = createContext();
AutorizacaoContexto.displayName = "AutorizacaoContexto"


export function AutorizacaoProvider({ children }) {
    const [autorizacao, setAutorizacao] = useState();
    const [api, setApi] = useState(new Api());

    useEffect(() => {
        setApi(new Api(autorizacao))
    }, [autorizacao])

    useEffect(() => {
        obterLocalStorage();
    }, [])


    async function logIn(credenciais) {
        console.debug("logIn - start");
        const { data } = await api.getAuth(credenciais)
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
            api,
            logIn,
            logOut
        }}>
            {children}
        </AutorizacaoContexto.Provider>
    )
}
