import React, { useState } from 'react';
import { Image, Link, Smile, TrendingUp, Filter, User, Globe, Car, PieChart } from 'lucide-react';

const EventPage = () => {
  const [tweet, setTweet] = useState('');
  const [filter, setFilter] = useState<'user' | 'amount' | 'date' | null>(null);

  const handleFilterChange = (filterType: 'user' | 'amount' | 'date') => {
    setFilter(filterType);
    console.log(`Sorting by: ${filterType}`);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      {/* Tweet Bot Composer */}
      <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-3 shadow-md">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center text-white">
              🎉
            </div>
          </div>
          <div className="flex-grow">
            <textarea
              className="w-full border-0 focus:ring-0 text-sm placeholder-gray-400 resize-none h-12 bg-transparent font-medium"
              placeholder="Start a challenge... (type /pepebets and @ to tag friends)"
              value={tweet}
              onChange={(e) => setTweet(e.target.value)}
            />
            <div className="flex items-center justify-between border-t pt-2">
              <div className="flex gap-3">
                <button className="text-black hover:text-gray-600">
                  <Image size={18} />
                </button>
                <button className="text-black hover:text-gray-600">
                  <Link size={18} />
                </button>
                <button className="text-black hover:text-gray-600">
                  <Smile size={18} />
                </button>
              </div>
              <button
                className="bg-black hover:bg-gray-800 text-white px-4 py-1 rounded-full font-medium transition-colors"
                disabled={!tweet.trim()}
              >
                Post an event
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category and Filter Area */}
      <div className="flex items-center justify-between px-4">
        {/* Categories */}
        <div className="flex gap-3">
          <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-black">
            <User size={16} />
            <span>Users</span>
          </button>
          <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-black">
            <Globe size={16} />
            <span>Global</span>
          </button>
          <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-black">
            <Car size={16} />
            <span>Finance</span>
          </button>
          <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-black">
            <PieChart size={16} />
            <span>Stats</span>
          </button>
        </div>
        {/* Filter Button */}
        <button className="text-gray-600 hover:text-black">
          <Filter size={20} />
        </button>
      </div>

      {/* Event Card */}
      <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-md space-y-4">
        {/* Event Header */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-5 flex items-center rounded-xl">
          <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mr-4">
            <TrendingUp className="text-white w-7 h-7" />
          </div>
          <div>
            <h2 className="text-white font-bold text-xl tracking-tight">Bitcoin Prediction</h2>
            <p className="text-white/80 text-sm mt-1">Will Bitcoin hit $100k in 2024?</p>
          </div>
        </div>
        {/* Event Details */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            {/* User Avatar and Name */}
            <div className="flex items-center gap-2">
              <img
                src="https://via.placeholder.com/32" // Replace with a user's avatar URL
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium text-gray-800">John Doe</span>
            </div>
            <span className="text-sm text-gray-500">22nd Nov 2024</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Category: <strong>Finance</strong></span>
            <span>Amount: <strong>1 BTC</strong></span>
          </div>
        </div>
        {/* Event Buttons */}
        <div className="flex justify-between">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium text-sm">
             Yes ↑
          </button>
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-medium text-sm">
             No ↓
          </button>
        </div>
        {/* Likes and Comments */}
        <div className="flex items-center justify-between mt-3 text-gray-600">
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 text-gray-600 hover:text-red-500">
              ❤️ <span className="text-sm">12 Likes</span>
            </button>
            <button className="flex items-center gap-1 text-gray-600 hover:text-blue-500">
              💬 <span className="text-sm">4 Comments</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
