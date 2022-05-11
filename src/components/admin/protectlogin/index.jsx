import React from 'react'
import { useLocation, Navigate, Redirect } from "react-router-dom";

function ValidationRoute({ children }) {
    let autorizacao = localStorage.getItem("@gestor_atendimento_autorizacao");

    let location = useLocation();
    if (autorizacao) {
        console.debug("autorizacao", autorizacao)
        return <Redirect to="/workspaces" />
    }

    return children;
}

export default ValidationRoute