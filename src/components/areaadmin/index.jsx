import React from 'react'
import { Routes, Route } from "react-router-dom";
import Gerador from '../admin/gerador';
import SelectAdm from '../admin/selectadm';
import Atendente from '../admin/atendente';
import Painel from "../painel/index"
function AreaAdmin() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<SelectAdm />} />
                <Route path="gerador" element={<Gerador />} />
                <Route path="atendente" element={<Atendente />} />
                <Route path="painel" element={<Painel />} />
            </Route>
        </Routes>
    )
}

export default AreaAdmin