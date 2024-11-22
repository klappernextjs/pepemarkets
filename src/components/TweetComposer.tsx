'use client';

import { useState } from 'react';
import { Image, Link, Smile } from 'lucide-react';

export default function TweetComposer() {
  const [tweet, setTweet] = useState('');

  return (
    <div className="w-full max-w-md mx-auto bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-4 mb-4">
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center text-white">
            🦄
          </div>
        </div>
        <div className="flex-grow">
          <textarea
            className="w-full border-0 focus:ring-0 text-lg placeholder-gray-400 resize-none h-24 bg-transparent font-medium"
            placeholder="What's happening in DeFi?"
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
          />
          <div className="flex items-center justify-between border-t pt-3">
            <div className="flex gap-4">
              <button className="text-black hover:text-gray-600">
                <Image size={20} />
              </button>
              <button className="text-black hover:text-gray-600">
                <Link size={20} />
              </button>
              <button className="text-black hover:text-gray-600">
                <Smile size={20} />
              </button>
            </div>
            <button
              className="bg-black hover:bg-gray-800 text-white px-6 py-1.5 rounded-full font-medium transition-colors"
              disabled={!tweet.trim()}
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}