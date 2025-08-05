import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <Router>
      <nav className="bg-blue-600 p-4 text-white flex gap-4">
        <Link to="/" className="hover:underline">Login</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/leaderboard" className="hover:underline">Leaderboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
