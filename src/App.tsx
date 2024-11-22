import React from 'react';
import Header from './components/Header';
import SwapInterface from './components/SwapInterface';
import MobileNav from './components/MobileNav';

function App() {
  return (
    <div className="min-h-screen bg-[#F3F6FF]">
      <Header />
      <main className="pt-24 px-4 pb-24">
        <SwapInterface />
      </main>
      <MobileNav />
    </div>
  );
}

export default App;