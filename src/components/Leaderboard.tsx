import React from 'react';

const Leaderboard = () => {
  // Sample data for global and friends leaderboard
  const globalLeaderboard = [
    { username: '@UserA', earnings: '2.5 ETH', challenges: 50 },
    { username: '@UserB', earnings: '2.0 ETH', challenges: 40 },
    { username: '@UserC', earnings: '1.8 ETH', challenges: 30 },
  ];

  const mostWins = [
    { username: '@UserD', winRate: '90%', games: 20 },
    { username: '@UserE', winRate: '80%', games: 25 },
  ];

  const friendsLeaderboard = [
    { username: '@Friend1', earnings: '1.2 ETH', challenges: 15 },
    { username: '@Friend2', earnings: '1.1 ETH', challenges: 12 },
  ];

  const liveEvents = [
    { event: 'Challenge 1', participants: '2/2' },
    { event: 'Challenge 2', participants: '1/2' },
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Leaderboard</h1>
      
      {/* Global and Friends Leaderboards */}
      <div className="flex justify-between mb-6">
        <div className="w-full md:w-1/2 p-4 bg-white/70 backdrop-blur-lg rounded-3xl shadow-md">
          <h2 className="text-2xl font-semibold">🌟 Global Leaderboard</h2>
          <div className="mt-4">
            <h3 className="font-medium">🏆 Top Earners This Week:</h3>
            <div className="border-t mt-2 pt-2">
              {globalLeaderboard.map((user, index) => (
                <div key={index} className="flex justify-between text-lg py-2">
                  <span>{user.username}</span>
                  <span>{user.earnings} ({user.challenges} Challenges)</span>
                </div>
              ))}
            </div>
            <h3 className="font-medium mt-4">📈 Most Wins:</h3>
            <div className="border-t mt-2 pt-2">
              {mostWins.map((user, index) => (
                <div key={index} className="flex justify-between text-lg py-2">
                  <span>{user.username}</span>
                  <span>{user.winRate} Win Rate ({user.games} Games)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Friends Leaderboard */}
        <div className="w-full md:w-1/2 p-4 bg-white/70 backdrop-blur-lg rounded-3xl shadow-md">
          <h2 className="text-2xl font-semibold">👫 Friends Leaderboard</h2>
          <div className="mt-4">
            {friendsLeaderboard.map((user, index) => (
              <div key={index} className="flex justify-between text-lg py-2">
                <span>{user.username}</span>
                <span>{user.earnings} ({user.challenges} Challenges)</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Events Highlight */}
      <div className="mb-6 bg-white/70 backdrop-blur-lg rounded-3xl p-4 shadow-md">
        <h2 className="text-2xl font-semibold">🔥 Live Events</h2>
        <div className="mt-4">
          {liveEvents.map((event, index) => (
            <div key={index} className="flex justify-between text-lg py-2">
              <span>{event.event}</span>
              <span>{event.participants}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements and Badges */}
      <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-4 shadow-md">
        <h2 className="text-2xl font-semibold">🏅 Achievements & Badges</h2>
        <div className="mt-4">
          <div className="text-lg py-2">
            <span className="font-semibold">🏆 Biggest Winner of the Week</span>
          </div>
          <div className="text-lg py-2">
            <span className="font-semibold">🎯 Most Challenges Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
