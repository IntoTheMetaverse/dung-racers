import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from './pages/game';

export default function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" exact element={<Game />} />
      </Routes>
    </Router>
  );
}