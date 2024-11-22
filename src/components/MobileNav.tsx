import React from 'react';

const MobileNav = () => {
  return (
    <nav className="fixed bottom-4 left-4 right-4 md:hidden">
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg px-6 py-2"> {/* Reduced padding */}
        <div className="flex justify-around items-center">
          <a href="#" className="flex flex-col items-center gap-1">
            <span className="text-xl">📅</span> {/* Reduced emoji size */}
            <span className="text-xs font-syne">Events</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1">
            <span className="text-xl">🏆</span> {/* Reduced emoji size */}
            <span className="text-xs font-syne">Leaderboard</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1">
            <span className="text-xl">👛</span> {/* Reduced emoji size */}
            <span className="text-xs font-syne">Wallet</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
