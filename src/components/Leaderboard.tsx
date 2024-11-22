import React, { useState } from 'react';

const Leaderboard = () => {
  const totalEntries = 20; // Simulating 20 leaderboard entries

  // Static leaderboard data
  const staticLeaderboardData = Array.from({ length: totalEntries }, (_, i) => ({
    username: `@User${i + 1}`,
    avatar: `https://avatars.dicebear.com/api/bottts/${Math.random()
      .toString(36)
      .substring(7)}.svg`, // 3D Avatars (bottts style)
    earnings: `${(Math.random() * 5).toFixed(2)} ETH`,
    points: Math.floor(Math.random() * 1000), // Points column
    wins: Math.floor(Math.random() * 50), // Number of wins
    losses: Math.floor(Math.random() * 50), // Number of losses
  }));

  const currentUserIndex = 5; // Example: Current user is at index 5

  // State to handle modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  // Function to get leaderboard icons
  const getRankIcon = (rank: number) => {
    if (rank === 1) return '🥇'; // Gold
    if (rank === 2) return '🥈'; // Silver
    if (rank === 3) return '🥉'; // Bronze
    return null; // No icon for others
  };

  // Handle avatar click to show profile modal
  const handleAvatarClick = (user: any) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="min-h-screen bg-[#F3F6FF] flex items-center justify-center">
      {/* Leaderboard Container */}
      <div className="bg-white rounded-3xl p-6 shadow-md w-full max-w-lg" style={{ height: '700px' }}>
        {/* Title Bar */}
        <div className="bg-gray-100 rounded-2xl py-3 px-6 flex justify-center items-center mb-4 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">🌟 Leaderboard</h2>
        </div>

        {/* Leaderboard List */}
        <div
          className="overflow-y-auto hide-scrollbar"
          style={{
            maxHeight: '600px', // Adjusted scrolling height to fit within the container
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <div className="bg-gray-50 rounded-2xl p-4 space-y-4">
            {staticLeaderboardData.map((user, index) => (
              <div
                key={index}
                className={`flex justify-between items-center text-lg py-3 border-b last:border-none relative ${
                  index === currentUserIndex ? 'bg-yellow-200' : ''
                }`}
                style={{
                  borderRadius: index === currentUserIndex ? '20px' : '8px', // Rounded box for current user
                }}
              >
                <div className="flex items-center gap-4">
                  {/* Avatar and Badge */}
                  <div className="relative cursor-pointer" onClick={() => handleAvatarClick(user)}>
                    <img
                      src={user.avatar}
                      alt="avatar"
                      className="w-12 h-12 rounded-full"
                    />
                    {/* Rank Badge */}
                    <span
                      className="absolute bottom-0 right-0 text-white text-xs flex items-center justify-center w-5 h-5 rounded-full"
                      style={{
                        backgroundColor: '#3B82F6', // Static blue color
                      }}
                    >
                      {index + 1}
                    </span>
                    {/* Leaderboard Icon */}
                    {getRankIcon(index + 1) && (
                      <span
                        className="absolute -top-2 -left-3 text-2xl"
                        style={{
                          fontSize: '1.25rem', // Slightly larger for visibility
                        }}
                      >
                        {getRankIcon(index + 1)}
                      </span>
                    )}
                  </div>

                  {/* Username */}
                  <div>
                    <span className="font-syne text-gray-700">{user.username}</span>
                    {/* "You" Badge */}
                    {index === currentUserIndex && (
                      <span
                        className="ml-2 px-2 py-1 text-xs text-white bg-green-500 rounded-full"
                        style={{
                          fontSize: '0.7rem', // Small "You" badge
                        }}
                      >
                        You
                      </span>
                    )}
                  </div>
                </div>

                {/* Points Earned */}
                <div className="text-right">
                  <strong>{user.points} pts</strong>
                  <div className="text-sm text-gray-500">{user.earnings}</div>
                </div>

                {/* Challenges Section */}
                <div className="text-right">
                  <div className="text-sm text-gray-500 mb-2 font-semibold">Challenge</div>
                  <div className="text-sm text-gray-500 flex items-center gap-2">
                    <span className="text-green-500">
                      {/* Green Triangle for Wins */}
                      ▲ {user.wins}
                    </span>
                    <span className="text-red-500">
                      {/* Red Triangle for Losses */}
                      ▼ {user.losses}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-1/3">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{selectedUser.username} Profile</h3>
              <button onClick={closeModal} className="text-xl font-semibold text-gray-500">X</button>
            </div>
            <div className="mt-4">
              <img
                src={selectedUser.avatar}
                alt="avatar"
                className="w-20 h-20 rounded-full mx-auto"
              />
              <div className="mt-4 text-center">
                <p><strong>Username:</strong> {selectedUser.username}</p>
                <p><strong>Earnings:</strong> {selectedUser.earnings}</p>
                <p><strong>Points:</strong> {selectedUser.points} pts</p>
                <p><strong>Wins:</strong> {selectedUser.wins}</p>
                <p><strong>Losses:</strong> {selectedUser.losses}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
