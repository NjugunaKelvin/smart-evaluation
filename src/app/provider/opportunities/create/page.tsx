'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getToken } from '@/lib/auth';
import { FiBriefcase, FiMapPin, FiCalendar, FiDollarSign, FiAlignLeft, FiLayers } from 'react-icons/fi';

export default function CreateOpportunityPage() {
    const router = useRouter();
    const [step, setStep] = useState(1); 
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        organization: '',
        description: '',
        industry: '',
        category: '',
        deadline: '',
        location: '',
        value: '' 
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handlePublish = async () => {
        setLoading(true);
        try {
            const token = getToken();
            const response = await fetch('http://localhost:5000/api/opportunities', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                
                router.push('/provider/dashboard?view=opportunities');
            } else {
                console.error('Failed to publish opportunity');
                alert('Failed to publish. Please try again.');
            }
        } catch (error) {
            console.error('Error publishing:', error);
            alert('An error occurred.');
        } finally {
            setLoading(false);
        }
    };

    const isFormValid = formData.title && formData.description && formData.organization && formData.category && formData.location;

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <button
                        onClick={() => router.back()}
                        className="text-sm text-gray-500 hover:text-gray-900 mb-4 flex items-center"
                    >
                        ← Back to Dashboard
                    </button>
                    <h1 className="text-3xl font-bold text-gray-900">Post a New Opportunity</h1>
                    <p className="text-gray-600 mt-2">Create a compelling posting to attract the best talent.</p>
                </div>

                {}
                <div className="flex items-center mb-8 border-b border-gray-200 pb-4">
                    <button
                        onClick={() => setStep(1)}
                        className={`text-sm font-medium mr-8 pb-4 -mb-4 border-b-2 transition ${step === 1 ? 'border-purple-600 text-purple-600' : 'border-transparent text-gray-500'}`}
                    >
                        1. Edit Details
                    </button>
                    <button
                        onClick={() => isFormValid && setStep(2)}
                        disabled={!isFormValid}
                        className={`text-sm font-medium pb-4 -mb-4 border-b-2 transition ${step === 2 ? 'border-purple-600 text-purple-600' : 'border-transparent text-gray-500'}`}
                    >
                        2. Preview & Publish
                    </button>
                </div>

                {step === 1 && (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Opportunity Title *</label>
                                <div className="relative">
                                    <FiBriefcase className="absolute left-3 top-3 text-gray-400" />
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="e.g. Logistics and supply chain"
                                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-100 focus:border-purple-400 transition text-gray-900 placeholder-gray-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Organization/Company *</label>
                                <input
                                    type="text"
                                    name="organization"
                                    value={formData.organization}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-100 focus:border-purple-400 transition text-gray-900 placeholder-gray-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Value / Budget / Salary</label>
                                <div className="relative">
                                    <FiDollarSign className="absolute left-3 top-3 text-gray-400" />
                                    <input
                                        type="text"
                                        name="value"
                                        value={formData.value}
                                        onChange={handleChange}
                                        placeholder="e.g. $5000 - $10,000"
                                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-100 focus:border-purple-400 transition text-gray-900 placeholder-gray-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                                <div className="relative">
                                    <FiLayers className="absolute left-3 top-3 text-gray-400" />
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-100 focus:border-purple-400 transition bg-white text-gray-900 placeholder-gray-500"
                                    >
                                        <option value="">Select Category</option>
                                        <option value="Technology">Technology</option>
                                        <option value="Finance">Finance</option>
                                        <option value="Healthcare">Healthcare</option>
                                        <option value="Education">Education</option>
                                        <option value="Construction">Construction</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                                <div className="relative">
                                    <FiMapPin className="absolute left-3 top-3 text-gray-400" />
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="e.g. Nairobi, Remote"
                                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-100 focus:border-purple-400 transition text-gray-900 placeholder-gray-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                                <input
                                    type="text"
                                    name="industry"
                                    value={formData.industry}
                                    onChange={handleChange}
                                    placeholder="e.g. Fintech"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-100 focus:border-purple-400 transition text-gray-900 placeholder-gray-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Deadline</label>
                                <div className="relative">
                                    <FiCalendar className="absolute left-3 top-3 text-gray-400" />
                                    <input
                                        type="date"
                                        name="deadline"
                                        value={formData.deadline}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-100 focus:border-purple-400 transition text-gray-900 placeholder-gray-500"
                                    />
                                </div>
                            </div>

                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows={8}
                                    placeholder="Describe the opportunity, responsibilities, and requirements..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-100 focus:border-purple-400 transition text-gray-900 placeholder-gray-500"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end pt-6 border-t border-gray-100">
                            <button
                                onClick={() => setStep(2)}
                                disabled={!isFormValid}
                                className={`px-6 py-3 rounded-lg font-bold text-white transition shadow-lg ${isFormValid ? 'bg-purple-600 hover:bg-purple-700 transform hover:-translate-y-0.5' : 'bg-gray-300 cursor-not-allowed'}`}
                            >
                                Continue to Preview
                            </button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-6">
                        <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 flex items-start gap-3">
                            <div className="text-yellow-600 mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-yellow-800">Preview Mode</h4>
                                <p className="text-sm text-yellow-700">This is how your opportunity will appear to applicants. Review carefully before publishing.</p>
                            </div>
                        </div>

                        {}
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-purple-700 to-indigo-800 p-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-12 opacity-10 transform rotate-12">
                                    <FiBriefcase size={120} />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-2 mb-4 text-purple-200 text-sm font-medium">
                                        <span className="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">{formData.category}</span>
                                        <span>•</span>
                                        <span>{formData.industry}</span>
                                    </div>
                                    <h1 className="text-3xl font-bold mb-2">{formData.title}</h1>
                                    <div className="flex flex-wrap items-center gap-6 text-purple-100 mt-4">
                                        <div className="flex items-center gap-2">
                                            <FiBriefcase />
                                            <span>{formData.organization}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FiMapPin />
                                            <span>{formData.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FiDollarSign />
                                            <span>{formData.value}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FiCalendar />
                                            <span>Deadline: {formData.deadline || 'Open'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Description</h3>
                                <div className="prose max-w-none text-gray-700 whitespace-pre-line">
                                    {formData.description}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center pt-6">
                            <button
                                onClick={() => setStep(1)}
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition"
                            >
                                ← Edit Details
                            </button>
                            <button
                                onClick={handlePublish}
                                disabled={loading}
                                className={`px-8 py-3 bg-green-600 text-white rounded-lg font-bold shadow-lg hover:bg-green-700 transition transform hover:-translate-y-0.5 flex items-center gap-2 ${loading ? 'opacity-70 cursor-wait' : ''}`}
                            >
                                {loading ? 'Publishing...' : 'Publish Opportunity'}
                                {!loading && <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
