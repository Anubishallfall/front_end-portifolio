import React from 'react'
import { Routes, Route } from "react-router-dom";
import AreaAdmin from './areaadmin';

import Cadastro from './Cadastro';
import Login from './login';
function Admin() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Login />} />
                <Route path="cadastro" element={<Cadastro />} />
                <Route path="workspaces/*" element={<AreaAdmin />} />
            </Route>
        </Routes>
    )
}

export default Admin