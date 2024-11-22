import React, { useState } from 'react';
import { Image, Link, Smile, Clock, MessageCircle, Star, TrendingUp } from 'lucide-react';

const EventPage = () => {
  const [tweet, setTweet] = useState('');
  const [opponent, setOpponent] = useState('');
  const [betPlaced, setBetPlaced] = useState(false); // Track if a bet has been placed
  const [betType, setBetType] = useState<'YES' | 'NO' | null>(null); // Specify betType type as 'YES' | 'NO' | null

  const handleBetSelection = (selectedBetType: 'YES' | 'NO') => {
    setBetType(selectedBetType);
    setBetPlaced(true); // For simulation purposes
    if (selectedBetType === 'YES') {
      setOpponent('User123'); // Example opponent username for YES bet
    } else {
      setOpponent('User456'); // Example opponent username for NO bet
    }
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

      {/* Ongoing Badge */}
      <div className="flex items-center justify-start space-x-2 mb-4">
        <div className="flex items-center space-x-2 bg-blue-100 text-blue-700 py-1 px-3 rounded-lg">
          <Clock size={18} className="animate-pulse" />
          <span className="text-sm font-semibold">Ongoing</span>
        </div>
      </div>

      {/* Event Card Box */}
      <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-md">
        {/* Header */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-5 flex items-center">
          <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mr-4">
            <TrendingUp className="text-white w-7 h-7" />
          </div>
          <div>
            <h2 className="text-white font-bold text-xl tracking-tight">Bitcoin Prediction</h2>
            <p className="text-white/80 text-sm mt-1">Will Bitcoin hit $100k in 2024?</p>
          </div>
        </div>

        {/* Probability Section */}
        <div className="px-6 py-5 bg-gray-50">
          <div className="flex justify-between items-center">
            <div className="relative w-20 h-20">
              <svg viewBox="0 0 36 36" className="absolute w-full h-full rotate-[-90deg]">
                <path 
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                  fill="none" 
                  stroke="#e0e0e0" 
                  strokeWidth="3"
                />
                <path 
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" 
                  fill="none" 
                  stroke="#4ade80" 
                  strokeWidth="3"
                  strokeDasharray="92, 100"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-green-500">92%</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Chance</span>
              </div>
            </div>

            <div className="flex space-x-3">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-600 transition-colors">
                <span>Buy Yes</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-600 transition-colors">
                <span>Buy No</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-50 p-2 rounded-full">
              <Star className="w-5 h-5 text-blue-500" />
            </div>
            <span className="text-sm font-medium text-gray-700">$8m Volume</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-600 space-x-1">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">904</span>
            </div>
            
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
