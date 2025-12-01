'use client';

import { SERVICE_AREAS } from '../../../lib/data/business-data';

interface ServiceAreaSelectorProps {
  value: string[];
  onChange: (value: string[]) => void;
  error?: string;
}

export function ServiceAreaSelector({ value, onChange, error }: ServiceAreaSelectorProps) {
  const toggleArea = (area: string) => {
    if (value.includes(area)) {
      onChange(value.filter(a => a !== area));
    } else {
      onChange([...value, area]);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {SERVICE_AREAS.map((area) => (
          <button
            key={area.value}
            type="button"
            className={`p-4 rounded-lg border-2 transition-all ${value.includes(area.value) 
              ? 'border-blue-500 bg-blue-900/20 text-blue-300' 
              : 'border-gray-700 bg-gray-800 hover:border-gray-600 text-gray-300'
            }`}
            onClick={() => toggleArea(area.value)}
          >
            <div className="text-sm font-medium">{area.label}</div>
            <div className="text-xs text-gray-400 mt-1">Radius: {area.radius}</div>
          </button>
        ))}
      </div>
      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
      {value.length > 0 && (
        <div className="mt-3 text-sm text-gray-400">
          Selected: {value.map(v => SERVICE_AREAS.find(a => a.value === v)?.label).join(', ')}
        </div>
      )}
    </div>
  );
}