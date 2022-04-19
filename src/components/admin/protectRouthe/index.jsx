import React from 'react'
import { useLocation, Navigate, } from "react-router-dom";

function PrivateRoute({ children }) {
    let autorizacao = localStorage.getItem("@gestor_atendimento_autorizacao");

    let location = useLocation();
    if (!autorizacao || autorizacao.data > Date.now()) {
        console.debug("autorizacao", autorizacao)
        return <Navigate to="/admin" state={{ from: location }} replace />;
    }

    return children;
}

export default PrivateRoute