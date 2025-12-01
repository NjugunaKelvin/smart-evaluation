'use client';

import { COMPANY_SIZES } from './../../../lib/data/business-data';

interface CompanySizeSelectorProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export function CompanySizeSelector({ value, onChange, error }: CompanySizeSelectorProps) {
  return (
    <div>
      <select
        required
        className={`w-full bg-gray-800 border ${error ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select company size</option>
        {COMPANY_SIZES.map((size) => (
          <option key={size.value} value={size.value}>
            {size.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
}