import React from 'react'
import { Routes, Route } from "react-router-dom";
import Consultador from '../consultador';
function Home() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Consultador />} />
            </Route>
        </Routes>
    )
}

export default Home