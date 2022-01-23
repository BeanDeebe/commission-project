import './App.css';
import { CgYinyang } from "react-icons/cg";
import Home from "./components/Home";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import navbar from "./components/navbar"


function App() {
  return (
    <Router>
      <navbar/>
      <Routes>
        <Route path='/' exact component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
