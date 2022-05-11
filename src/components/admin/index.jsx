import React from 'react'
import { Routes, Route } from "react-router-dom";
import AreaAdmin from './areaadmin';

import Cadastro from './Cadastro';
import Login from './login';
import PrivateRoute from './protectRouthe';

function Admin() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={
                    <Login />
                } />
                <Route path="cadastro" element={
                    <Cadastro />
                } />
                <Route path="workspaces/*" element={
                    <PrivateRoute>
                        <AreaAdmin />
                    </PrivateRoute>
                } />
            </Route>
        </Routes>
    )
}

export default Admin