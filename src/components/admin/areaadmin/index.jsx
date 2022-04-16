import React from 'react'
import { Routes, Route } from "react-router-dom";

import SelectAdm from '../selectadm';
import Atendente from '../atendente';
import Painel from '../painel';
import Gerador from '../gerador';

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