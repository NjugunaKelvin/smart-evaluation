'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { getToken } from '@/lib/auth';

interface PostOpportunityModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: () => void;
    initialData?: any; 
    isEditing?: boolean;
}

export default function PostOpportunityModal({ isOpen, onClose, onSuccess, initialData, isEditing = false }: PostOpportunityModalProps) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        industry: '',
        category: '',
        deadline: '',
        location: '',
        value: '',
        organization: '',
        requirements: '',
        contactName: '',
        contactEmail: '',
        contactPhone: '',
        documents: [] as string[]
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const industries = ['Technology', 'Construction', 'Consulting', 'Marketing', 'Healthcare', 'Education', 'Logistics', 'Finance', 'Legal', 'Manufacturing', 'Other'];
    const categories = ['Tender', 'Grant', 'Contract', 'Partnership', 'Subcontracting', 'Funding'];

    useEffect(() => {
        if (initialData && isEditing) {
            setFormData({
                title: initialData.title || '',
                description: initialData.description || '',
                industry: initialData.industry || '',
                category: initialData.category || '',
                deadline: initialData.deadline ? new Date(initialData.deadline).toISOString().split('T')[0] : '',
                location: initialData.location || '',
                value: initialData.value || '',
                organization: initialData.organization || '',
                requirements: Array.isArray(initialData.requirements) ? initialData.requirements.join('\n') : (initialData.requirements || ''),
                contactName: initialData.contactName || '',
                contactEmail: initialData.contactEmail || '',
                contactPhone: initialData.contactPhone || '',
                documents: initialData.documents || []
            });
        } else {
            
            setFormData({
                title: '',
                description: '',
                industry: '',
                category: '',
                deadline: '',
                location: '',
                value: '',
                organization: '',
                requirements: '',
                contactName: '',
                contactEmail: '',
                contactPhone: '',
                documents: []
            });
        }
    }, [initialData, isEditing, isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            
            const fileNames = Array.from(e.target.files).map(f => f.name);
            setFormData(prev => ({ ...prev, documents: [...prev.documents, ...fileNames] }));
        }
    };

    const removeDocument = (index: number) => {
        setFormData(prev => ({
            ...prev,
            documents: prev.documents.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const token = getToken();
            if (!token) {
                setError('You must be logged in to post an opportunity.');
                setLoading(false);
                return;
            }

            
            const processedData = {
                ...formData,
                requirements: formData.requirements.split('\n').filter(r => r.trim() !== '')
            };

            const url = isEditing && initialData?.id
                ? `http://localhost:5000/api/opportunities/${initialData.id}`
                : 'http://localhost:5000/api/opportunities';

            const method = isEditing ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(processedData)
            });

            const data = await response.json();

            if (response.ok) {
                if (onSuccess) onSuccess();
                onClose();
                if (!isEditing) {
                    setFormData({
                        title: '',
                        description: '',
                        industry: '',
                        category: '',
                        deadline: '',
                        location: '',
                        value: '',
                        organization: '',
                        requirements: '',
                        contactName: '',
                        contactEmail: '',
                        contactPhone: '',
                        documents: []
                    });
                }
            } else {
                setError(data.message || 'Failed to save opportunity');
            }
        } catch (error: any) {
            console.error('Save Opportunity Error:', error);
            setError(error.message || 'An error occurred.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 z-40"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto pointer-events-auto">
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">{isEditing ? 'Edit Opportunity' : 'Post New Opportunity'}</h2>
                                    <p className="text-gray-500 text-sm mt-1">Fill in the details below to publish your opportunity</p>
                                </div>
                                <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                                {error && (
                                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm text-red-700">{error}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-bold text-purple-700 uppercase tracking-wide border-b border-purple-100 pb-2">Basic Information</h3>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 mb-1">Opportunity Title *</label>
                                        <input
                                            type="text"
                                            name="title"
                                            required
                                            value={formData.title}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600"
                                            placeholder="e.g. Web Development for Ministry Portal"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 mb-1">Organization *</label>
                                            <input
                                                type="text"
                                                name="organization"
                                                required
                                                value={formData.organization}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600"
                                                placeholder="e.g. Ministry of ICT"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 mb-1">Value / Budget</label>
                                            <input
                                                type="text"
                                                name="value"
                                                value={formData.value}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600"
                                                placeholder="e.g. Ksh 1M - 2M"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 mb-1">Industry *</label>
                                            <select
                                                name="industry"
                                                required
                                                value={formData.industry}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600"
                                            >
                                                <option value="">Select Industry</option>
                                                {industries.map(i => <option key={i} value={i}>{i}</option>)}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 mb-1">Category *</label>
                                            <select
                                                name="category"
                                                required
                                                value={formData.category}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600"
                                            >
                                                <option value="">Select Category</option>
                                                {categories.map(c => <option key={c} value={c}>{c}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 mb-1">Location</label>
                                            <input
                                                type="text"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600"
                                                placeholder="e.g. Nairobi / Remote"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 mb-1">Deadline *</label>
                                            <input
                                                type="date"
                                                name="deadline"
                                                required
                                                value={formData.deadline}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-bold text-purple-700 uppercase tracking-wide border-b border-purple-100 pb-2">Detailed Description</h3>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 mb-1">Description *</label>
                                        <textarea
                                            name="description"
                                            required
                                            value={formData.description}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-4 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600"
                                            placeholder="Describe the opportunity..."
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 mb-1">Requirements (One per line)</label>
                                        <textarea
                                            name="requirements"
                                            value={formData.requirements}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-4 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600"
                                            placeholder="- Requirement 1&#10;- Requirement 2&#10;- Requirement 3"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 mb-1">Documents (Simulated Upload)</label>
                                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:bg-gray-50 transition">
                                            <input
                                                type="file"
                                                multiple
                                                onChange={handleFileChange}
                                                className="hidden"
                                                id="file-upload"
                                            />
                                            <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
                                                <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                                                </svg>
                                                <span className="text-sm text-purple-600 font-medium">Click to upload documents</span>
                                                <span className="text-xs text-gray-500 mt-1">PDF, DOCX, etc.</span>
                                            </label>
                                        </div>
                                        {formData.documents.length > 0 && (
                                            <ul className="mt-2 space-y-1">
                                                {formData.documents.map((doc, idx) => (
                                                    <li key={idx} className="text-xs text-gray-600 flex items-center justify-between bg-gray-50 p-2 rounded">
                                                        <div className="flex items-center">
                                                            <svg className="w-3 h-3 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            {doc}
                                                        </div>
                                                        <button
                                                            type="button"
                                                            onClick={() => removeDocument(idx)}
                                                            className="text-red-500 hover:text-red-700"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>

                                {}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-bold text-purple-700 uppercase tracking-wide border-b border-purple-100 pb-2">Contact Information</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 mb-1">Contact Name</label>
                                            <input
                                                type="text"
                                                name="contactName"
                                                value={formData.contactName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600"
                                                placeholder="e.g. John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 mb-1">Contact Email</label>
                                            <input
                                                type="email"
                                                name="contactEmail"
                                                value={formData.contactEmail}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600"
                                                placeholder="e.g. john@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 mb-1">Contact Phone</label>
                                            <input
                                                type="tel"
                                                name="contactPhone"
                                                value={formData.contactPhone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600"
                                                placeholder="e.g. +254 7..."
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end space-x-3 pt-4 border-t border-gray-100">
                                    <Button type="button" variant="outline" onClick={onClose} className="px-6 py-2.5 text-sm font-bold rounded-xl border-gray-200 text-gray-700 hover:bg-gray-50">
                                        Cancel
                                    </Button>
                                    <Button type="submit" disabled={loading} className="px-6 py-2.5 text-sm bg-purple-700 font-bold rounded-xl hover:bg-purple-800 transition-colors shadow-lg shadow-purple-700/20 text-white disabled:opacity-50">
                                        {loading ? 'Saving...' : (isEditing ? 'Update Opportunity' : 'Post Opportunity')}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
