// components/home/ClientShowcase.tsx
import Image from 'next/image';

const clients = [
  { name: 'World Bank', logo: '/api/placeholder/160/80' },
  { name: 'Equity Bank', logo: '/api/placeholder/160/80' },
  { name: 'Nairobi Government', logo: '/api/placeholder/160/80' },
  { name: 'Ministry of Education', logo: '/api/placeholder/160/80' },
  { name: 'USAID', logo: '/api/placeholder/160/80' },
  { name: 'UNICEF', logo: '/api/placeholder/160/80' },
  { name: 'African Development Bank', logo: '/api/placeholder/160/80' },
  { name: 'Kenya Power', logo: '/api/placeholder/160/80' },
];

export default function ClientShowcase() {
  return (
    <section className="py-12 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-white mb-12">Trusted by Leading Organizations</h2>
        
        {/* First row - moves left */}
        <div className="flex overflow-hidden mb-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex animate-marquee-left whitespace-nowrap py-2">
            {clients.concat(clients).map((client, index) => (
              <div key={index} className="mx-8 flex items-center justify-center h-20 w-40 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="object-contain max-h-16"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Second row - moves right */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex animate-marquee-right whitespace-nowrap py-2">
            {clients.concat(clients).map((client, index) => (
              <div key={index} className="mx-8 flex items-center justify-center h-20 w-40 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="object-contain max-h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
}