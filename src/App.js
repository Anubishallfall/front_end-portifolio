import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './components/admin';
import Home from './components/home';
import { AutorizacaoProvider } from './context/Autorizacao';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={
            <AutorizacaoProvider>
              <Home />
            </AutorizacaoProvider>} />
          <Route path="admin/*" element={
            <AutorizacaoProvider>
              <Admin />
            </AutorizacaoProvider>
          } />
          <Route path="criador" element={<h1>mauro</h1>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
