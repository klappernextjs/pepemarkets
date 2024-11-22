import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">☀️</span> {/* Sun emoji */}
          <span className="font-bold text-xl font-syne">PepeMarket</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 font-syne"> {/* Link to SwapInterface */}
            <span className="text-xl">📅</span>Events {/* Calendar emoji */}
          </Link>
          <Link to="/leaderboard" className="flex items-center gap-2 font-syne"> {/* Link to Leaderboard */}
            <span className="text-xl">🏆</span>Leaderboard {/* Trophy emoji */}
          </Link>
          <Link to="/wallet" className="flex items-center gap-2 font-syne"> {/* Link to Wallet */}
            <span className="text-xl">👛</span>Wallet {/* Wallet emoji */}
          </Link>
        </nav>
        
        <button className="bg-black text-white px-6 py-2 rounded-full font-syne">
          Connect
        </button>
      </div>
    </header>
  );
};

export default Header;
