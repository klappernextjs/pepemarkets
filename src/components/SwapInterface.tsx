import React, { useState } from 'react';
import { Image, Link, Smile, ArrowDownUp } from 'lucide-react';

const SwapInterface = () => {
  const [tweet, setTweet] = useState('');

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
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
                Create an event
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Swap Interface */}
      <div className="bg-white rounded-3xl p-6 shadow-md">
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-2xl p-4">
            <label className="text-sm text-gray-500 font-syne">You Pay</label>
            <div className="flex items-center gap-4 mt-2">
              <input
                type="number"
                placeholder="0.0"
                className="w-full bg-transparent border-none focus:ring-0 text-2xl font-syne"
              />
              <button className="bg-gray-100 px-4 py-2 rounded-xl font-syne">
                ETH
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-gray-100 p-2 rounded-xl">
              <ArrowDownUp className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4">
            <label className="text-sm text-gray-500 font-syne">You Receive</label>
            <div className="flex items-center gap-4 mt-2">
              <input
                type="number"
                placeholder="0.0"
                className="w-full bg-transparent border-none focus:ring-0 text-2xl font-syne"
              />
              <button className="bg-gray-100 px-4 py-2 rounded-xl font-syne">
                USDC
              </button>
            </div>
          </div>
        </div>

        <button className="w-full bg-black text-white rounded-2xl py-4 mt-6 font-syne">
          Swap
        </button>
      </div>
    </div>
  );
};

export default SwapInterface;
