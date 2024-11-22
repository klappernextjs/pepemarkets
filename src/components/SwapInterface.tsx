import React from 'react';
import { ArrowDownUp } from 'lucide-react';

const SwapInterface = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-lg p-6">
      <div className="mb-6 bg-gray-50 rounded-2xl p-4">
        <textarea
          placeholder="What's happening in DeFi? 🦄"
          className="w-full bg-transparent border-none resize-none focus:ring-0 font-syne"
          rows={3}
        />
      </div>
      
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
  );
};

export default SwapInterface;