export const BUSINESS_TYPES = [
  { value: 'sole_proprietor', label: 'Sole Proprietor' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'llc', label: 'Limited Liability Company (LLC)' },
  { value: 'corporation', label: 'Corporation' },
  { value: 'nonprofit', label: 'Non-Profit Organization' },
  { value: 'government', label: 'Government Entity' },
  { value: 'freelancer', label: 'Freelancer/Independent Contractor' },
];

export const COMPANY_SIZES = [
  { value: 'micro', label: 'Micro (1-10 employees)', employees: '1-10' },
  { value: 'small', label: 'Small (11-50 employees)', employees: '11-50' },
  { value: 'medium', label: 'Medium (51-250 employees)', employees: '51-250' },
  { value: 'large', label: 'Large (251-1000 employees)', employees: '251-1000' },
  { value: 'enterprise', label: 'Enterprise (1000+ employees)', employees: '1000+' },
];

export const SERVICE_AREAS = [
  { value: 'local', label: 'Local (City/County)', radius: '50km' },
  { value: 'regional', label: 'Regional (State/Province)', radius: '500km' },
  { value: 'national', label: 'National', radius: 'Country-wide' },
  { value: 'international', label: 'International', radius: 'Global' },
];

export const BUDGET_RANGES = [
  { value: '0-10000', label: 'Under $10,000', min: 0, max: 10000 },
  { value: '10000-50000', label: '$10,000 - $50,000', min: 10000, max: 50000 },
  { value: '50000-100000', label: '$50,000 - $100,000', min: 50000, max: 100000 },
  { value: '100000-500000', label: '$100,000 - $500,000', min: 100000, max: 500000 },
  { value: '500000+', label: '$500,000+', min: 500000, max: 10000000 },
];