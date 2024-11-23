import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Routes
import Header from './components/Header';
import SwapInterface from './components/SwapInterface';
import MobileNav from './components/MobileNav';
import Leaderboard from './components/Leaderboard'; // Import Leaderboard component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F3F6FF]">
        <Header />
        <main className="pt-24 px-4 pb-24">
          <Routes>
            <Route path="/" element={<SwapInterface />} /> {/* Default route (Swap Interface) */}
            <Route path="/leaderboard" element={<Leaderboard />} /> {/* Leaderboard page */}
            {/* You can add more routes here for other pages */}
          </Routes>
        </main>
        <MobileNav />
      </div>
    </Router>
  );
}

export default App;