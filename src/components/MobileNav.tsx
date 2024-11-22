import React from 'react';
import { Calendar, Trophy, Wallet } from 'lucide-react';

const MobileNav = () => {
  return (
    <nav className="fixed bottom-4 left-4 right-4 md:hidden">
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg px-6 py-4">
        <div className="flex justify-around items-center">
          <a href="#" className="flex flex-col items-center gap-1">
            <Calendar className="w-6 h-6" />
            <span className="text-xs font-syne">Events</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1">
            <Trophy className="w-6 h-6" />
            <span className="text-xs font-syne">Leaderboard</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1">
            <Wallet className="w-6 h-6" />
            <span className="text-xs font-syne">Wallet</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;