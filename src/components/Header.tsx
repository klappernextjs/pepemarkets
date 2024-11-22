import React from 'react';
import { Unicorn, Trophy, Calendar, Wallet } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Unicorn className="w-8 h-8" />
          <span className="font-bold text-xl font-syne">Uniswap Social</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 font-syne">
            <Calendar className="w-5 h-5" /> Events
          </a>
          <a href="#" className="flex items-center gap-2 font-syne">
            <Trophy className="w-5 h-5" /> Leaderboard
          </a>
          <a href="#" className="flex items-center gap-2 font-syne">
            <Wallet className="w-5 h-5" /> Wallet
          </a>
        </nav>
        
        <button className="bg-black text-white px-6 py-2 rounded-full font-syne">
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default Header;