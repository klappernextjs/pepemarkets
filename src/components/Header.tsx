import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">☀️</span> {/* Sun emoji */}
          <span className="font-bold text-xl font-syne">🏆 PepeMarkets</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 font-syne">
            <span className="text-xl">📅</span>Events {/* Calendar emoji */}
          </a>
          <a href="#" className="flex items-center gap-2 font-syne">
            <span className="text-xl">🏆</span>Leaderboard {/* Trophy emoji */}
          </a>
          <a href="#" className="flex items-center gap-2 font-syne">
            <span className="text-xl">👛</span>Wallet {/* Wallet emoji */}
          </a>
        </nav>
        
        <button className="bg-black text-white px-6 py-2 rounded-full font-syne">
          Connect
        </button>
      </div>
    </header>
  );
};

export default Header;
