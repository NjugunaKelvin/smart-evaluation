'use client';

import { useState } from 'react';
import { NAICS_CODES } from '../../../lib/data/naic-codes';

interface IndustrySelectorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  isMultiSelect?: boolean;
}

export function IndustrySelector({ 
  value, 
  onChange, 
  placeholder = "Search for your industry...", 
  error,
  isMultiSelect = false 
}: IndustrySelectorProps) {
  const [search, setSearch] = useState('');
  
  const filteredIndustries = NAICS_CODES.filter(industry =>
    industry.code.toLowerCase().includes(search.toLowerCase()) ||
    industry.description.toLowerCase().includes(search.toLowerCase())
  ).slice(0, 10);

  return (
    <div className="relative">
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          className={`flex-1 bg-gray-800 border ${error ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          placeholder={placeholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      
      {search && filteredIndustries.length > 0 && (
        <div className="absolute z-10 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {filteredIndustries.map((industry) => (
            <button
              key={industry.code}
              type="button"
              className="w-full text-left px-4 py-3 hover:bg-gray-700 border-b border-gray-700 last:border-b-0"
              onClick={() => {
                onChange(`${industry.code} - ${industry.description}`);
                setSearch('');
              }}
            >
              <div className="font-medium text-white">{industry.code}</div>
              <div className="text-sm text-gray-400">{industry.description}</div>
            </button>
          ))}
        </div>
      )}
      
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
      
      {value && !isMultiSelect && (
        <div className="mt-2 p-3 bg-blue-900/20 border border-blue-800 rounded-lg">
          <div className="text-sm text-blue-300">
            Selected: <span className="font-medium">{value}</span>
          </div>
        </div>
      )}
    </div>
  );
}