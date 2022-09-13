import React from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";

import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialList from "./components/TutorialsList";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  
  return (
    <BrowserRouter>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="nav-bar">
            BezKoder
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li>
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route  path="/tutorials" element={<TutorialList/>}></Route>
            <Route  path="/" element={<TutorialList/>}></Route>
            <Route  path="/add" element={<AddTutorial/>}/>
            <Route  path="/tutorials/:id" element={<Tutorial/>}/>
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
