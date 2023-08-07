import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from './pages/Projects';
import Home from './pages/Home';
import Experience from './pages/Experience';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
