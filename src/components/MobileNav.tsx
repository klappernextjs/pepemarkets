import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const MobileNav = () => {
  return (
    <nav className="fixed bottom-4 left-4 right-4 md:hidden">
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg px-6 py-2">
        <div className="flex justify-around items-center">
          <Link to="/" className="flex flex-col items-center gap-1"> {/* Link to SwapInterface */}
            <span className="text-xl">📅</span> {/* Calendar emoji */}
            <span className="text-xs font-syne">Events</span>
          </Link>
          <Link to="/leaderboard" className="flex flex-col items-center gap-1"> {/* Link to Leaderboard */}
            <span className="text-xl">🏆</span> {/* Trophy emoji */}
            <span className="text-xs font-syne">Leaderboards</span>
          </Link>
          <Link to="/wallet" className="flex flex-col items-center gap-1"> {/* Link to Wallet */}
            <span className="text-xl">👛</span> {/* Wallet emoji */}
            <span className="text-xs font-syne">Wallet</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
