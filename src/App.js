import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './components/admin';
import Home from './components/home';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="admin/*" element={<Admin />} />
          <Route path="criador" element={<h1>mauro</h1>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
