'use client';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { useRouter } from 'next/navigation';
import { useState, useEffect, use } from 'react';
import Navbar from '@/components/Navbar';
import { getToken, isAuthenticated } from '@/lib/auth';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiUpload, FiFileText, FiX, FiCheckCircle, FiArrowRight, FiTarget,
    FiTrash2, FiLoader, FiCornerDownLeft, FiPaperclip
} from 'react-icons/fi';

interface TenderDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default function TenderDetailPage({ params }: TenderDetailPageProps) {
    const { id } = use(params);
    const router = useRouter();
    const [showSubmissionOptions, setShowSubmissionOptions] = useState(false);
    const [opportunity, setOpportunity] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isSaved, setIsSaved] = useState(false);
    const [saving, setSaving] = useState(false);
    const [submitting, setSubmitting] = useState(false);


    
    const [submissionStep, setSubmissionStep] = useState<'select' | 'upload' | 'builder' | 'success'>('select');
    const [selectedMethod, setSelectedMethod] = useState<'pdf' | 'form' | null>(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [builderData, setBuilderData] = useState({ coverLetter: '', price: '' });

    useEffect(() => {
        const fetchOpportunity = async () => {
            
            const minLoadTime = new Promise(resolve => setTimeout(resolve, 1300));
            const request = fetch(`http://localhost:5000/api/opportunities/${id}`);

            try {
                
                const [response] = await Promise.all([request, minLoadTime]);

                if (response.ok) {
                    const data = await response.json();
                    setOpportunity(data);

                    if (isAuthenticated()) {
                        checkIfSaved(id);
                    }
                } else {
                    setError('Opportunity not found');
                }
            } catch (err) {
                console.error('Error fetching opportunity:', err);
                setError('Failed to load opportunity details');
            } finally {
                setLoading(false);
            }
        };

        fetchOpportunity();
    }, [id]);

    const checkIfSaved = async (oppId: string) => {
        try {
            const response = await fetch('http://localhost:5000/api/user/saved-opportunities', {
                headers: {
                    'Authorization': `Bearer ${getToken()}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                const saved = (data.opportunities || []).some((opp: any) => opp.id === oppId);
                setIsSaved(saved);
            }
        } catch (err) {
            console.error('Error checking saved status:', err);
        }
    };

    const handleSaveOpportunity = async () => {
        if (!isAuthenticated()) {
            router.push(`/login?redirect=/opportunities/${id}`);
            return;
        }

        setSaving(true);
        try {
            
            
            
            
            
            
            
            
            
            
            

            if (isSaved) {
                
                
                const response = await fetch(`http://localhost:5000/api/user/save-opportunity/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${getToken()}`
                    }
                });

                if (response.ok) {
                    setIsSaved(false);
                    alert('Opportunity removed from saved list.');
                }
                return;
            }

            const response = await fetch(`http://localhost:5000/api/user/save-opportunity`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getToken()}`
                },
                body: JSON.stringify({ opportunityId: id })
            });

            if (response.ok) {
                setIsSaved(true);
                alert('Opportunity has been saved successfully!');
            } else {
                alert('Failed to save opportunity.');
            }
        } catch (err) {
            console.error('Error saving opportunity:', err);
            alert('An error occurred while saving.');
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#ebe1f2] flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700 mx-auto"></div>
                        <p className="mt-4 text-gray-600">Loading opportunity details...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !opportunity) {
        return (
            <div className="min-h-screen bg-[#ebe1f2]">
                <Navbar />
                <div className="max-w-6xl mx-auto px-4 py-20 text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Error</h1>
                    <p className="text-red-600 mb-6">{error || 'Opportunity not found'}</p>
                    <Button onClick={() => router.push('/opportunities')} variant="primary">
                        Back to Opportunities
                    </Button>
                </div>
            </div>
        );
    }

    
    const deadlineDate = new Date(opportunity.deadline);
    const today = new Date();
    const daysUntilDeadline = Math.ceil((deadlineDate.getTime() - today.getTime()) / (1000 * 3600 * 24));

    
    const handleDocumentAction = (action: 'view' | 'download', documentName: string) => {
        console.log(`${action}ing ${documentName}`);
        
        alert(`Document action: ${action} - ${documentName}`);
    };

    
    const handleShowSubmissionOptions = () => {
        if (!isAuthenticated()) {
            router.push(`/login?redirect=/opportunities/${id}`);
            return;
        }
        setSubmissionStep('select');
        setSelectedMethod(null);
        setSelectedFile(null);
        setUploadProgress(0);
        setShowSubmissionOptions(true);
    };

    
    const handleFileSubmission = async () => {
        if (!selectedFile) return;

        
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            setUploadProgress(progress);
            if (progress >= 100) {
                clearInterval(interval);
                submitFileApplication();
            }
        }, 200);
    };

    const submitFileApplication = async () => {
        try {
            const token = getToken();
            const response = await fetch('http://localhost:5000/api/applications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    opportunityId: opportunity.id,
                    resume: selectedFile?.name, 
                    coverLetter: 'Attached PDF Proposal',
                    submissionMethod: 'pdf'
                })
            });

            if (response.ok) {
                setSubmissionStep('success');
            } else {
                const data = await response.json();
                alert(data.message || 'Failed to submit proposal');
                setUploadProgress(0); 
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('An error occurred. Please try again.');
            setUploadProgress(0);
        }
    };

    
    const handleBuilderSubmission = async () => {
        setSubmitting(true);
        try {
            const token = getToken();
            const response = await fetch('http://localhost:5000/api/applications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    opportunityId: opportunity.id,
                    coverLetter: builderData.coverLetter,
                    bidAmount: builderData.price,
                    submissionMethod: 'builder'
                })
            });

            if (response.ok) {
                setSubmissionStep('success');
            } else {
                const data = await response.json();
                alert(data.message || 'Failed to submit proposal');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#ebe1f2]">
            <Navbar />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {}
                <nav className="mb-6">
                    <ol className="flex items-center space-x-2 text-sm">
                        <li>
                            <Link href="/" className="text-purple-700 hover:text-purple-900 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li className="text-gray-500">/</li>
                        <li>
                            <Link href="/opportunities" className="text-purple-700 hover:text-purple-900 transition-colors">
                                Opportunities
                            </Link>
                        </li>
                        <li className="text-gray-500">/</li>
                        <li className="text-gray-700 truncate max-w-xs">{opportunity.title}</li>
                    </ol>
                </nav>

                {}
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                                    {opportunity.industry}
                                </span>
                                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                                    {opportunity.location || 'Remote'}
                                </span>
                                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                                    {opportunity.category}
                                </span>
                            </div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{opportunity.title}</h1>
                            <p className="text-gray-600">Published by <span className="font-semibold">{opportunity.organization}</span></p>
                        </div>
                        <div className="text-right bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Reference #</div>
                            <div className="text-gray-900 font-mono text-lg font-semibold">
                                {opportunity.id.substring(0, 8).toUpperCase()}
                            </div>
                        </div>
                    </div>
                </div>

                {}
                <div className={`bg-gradient-to-r ${daysUntilDeadline > 0 ? 'from-purple-600 to-blue-600' : 'from-red-600 to-red-800'} text-white rounded-xl shadow-md p-5 mb-6`}>
                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">
                                {daysUntilDeadline > 0 ? `${daysUntilDeadline} days left to apply` : 'Deadline passed'}
                            </h3>
                            <p className="text-white/90">Submission deadline: {new Date(opportunity.deadline).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </div>
                    </div>
                </div>

                {}
                <AnimatePresence>
                    {showSubmissionOptions && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                                onClick={() => setShowSubmissionOptions(false)}
                            />
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                                className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden relative z-10 flex flex-col md:flex-row min-h-[550px]"
                            >
                                {}
                                <div className="md:w-1/3 bg-slate-900 p-8 text-white flex flex-col relative overflow-hidden flex-shrink-0">
                                    <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-1/2 -translate-y-1/2">
                                        <div className="w-64 h-64 rounded-full border-[20px] border-white"></div>
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 text-purple-400 mb-6">
                                            <FiTarget />
                                            <span className="text-[10px] font-bold uppercase tracking-wider">Proposal Studio</span>
                                        </div>
                                        <h2 className="text-xl font-bold leading-tight mb-2 text-white">{opportunity.title}</h2>
                                        <p className="text-slate-400 text-sm mb-8">{opportunity.organization}</p>

                                        {}
                                        <div className="space-y-4">
                                            {[
                                                { id: 'select', label: 'Method' },
                                                { id: submissionStep === 'upload' ? 'upload' : 'builder', label: submissionStep === 'upload' ? 'Upload' : 'Drafting' },
                                                { id: 'success', label: 'Complete' }
                                            ].map((step, idx) => (
                                                <div key={idx} className={`flex items-center gap-3 ${submissionStep === step.id || (submissionStep === 'success' && step.id !== 'success') ? 'opacity-100' : 'opacity-40'}`}>
                                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border ${submissionStep === step.id ? 'bg-purple-600 border-purple-600 text-white' : 'border-slate-600 text-slate-400'}`}>
                                                        {idx + 1}
                                                    </div>
                                                    <span className="text-sm font-medium">{step.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {}
                                <div className="flex-1 bg-white relative flex flex-col">
                                    {}
                                    <button
                                        onClick={() => setShowSubmissionOptions(false)}
                                        className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-900 transition z-20"
                                    >
                                        <FiX size={20} />
                                    </button>

                                    {}
                                    {submissionStep === 'select' && (
                                        <div className="p-8 flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-300">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Select Method</h3>
                                            <p className="text-gray-500 text-sm mb-8">Choose how to submit your proposal.</p>

                                            <div className="grid grid-cols-1 gap-4 flex-1">
                                                <div
                                                    onClick={() => setSelectedMethod('pdf')}
                                                    className={`p-5 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md ${selectedMethod === 'pdf' ? 'border-purple-600 bg-purple-50' : 'border-gray-100 hover:border-purple-200'}`}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className="bg-white p-3 rounded-lg shadow-sm text-purple-600"><FiUpload size={24} /></div>
                                                        <div>
                                                            <h4 className="font-bold text-gray-900">Upload PDF</h4>
                                                            <p className="text-xs text-gray-500">Best for pre-prepared documents.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    onClick={() => setSelectedMethod('form')}
                                                    className={`p-5 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md ${selectedMethod === 'form' ? 'border-purple-600 bg-purple-50' : 'border-gray-100 hover:border-purple-200'}`}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className="bg-white p-3 rounded-lg shadow-sm text-blue-600"><FiFileText size={24} /></div>
                                                        <div>
                                                            <h4 className="font-bold text-gray-900">Proposal Builder</h4>
                                                            <p className="text-xs text-gray-500">Interactive form with AI assistance.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-8 flex justify-end">
                                                <button
                                                    disabled={!selectedMethod}
                                                    onClick={() => setSubmissionStep(selectedMethod === 'pdf' ? 'upload' : 'builder')}
                                                    className="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-2"
                                                >
                                                    Continue <FiArrowRight />
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {}
                                    {submissionStep === 'upload' && (
                                        <div className="p-8 flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-300">
                                            <button onClick={() => setSubmissionStep('select')} className="text-gray-400 hover:text-gray-900 flex items-center gap-2 text-sm mb-4"><FiCornerDownLeft /> Back</button>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Upload Proposal</h3>

                                            <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50 hover:bg-gray-100 transition relative">
                                                <input
                                                    type="file"
                                                    accept=".pdf"
                                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                                    onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                                                />
                                                <div className="bg-white p-4 rounded-full shadow-sm mb-4 text-purple-600">
                                                    <FiUpload size={32} />
                                                </div>
                                                <p className="font-medium text-gray-900">Click or Drag PDF here</p>
                                                <p className="text-xs text-gray-400 mt-2">Max file size 10MB</p>
                                            </div>

                                            {selectedFile && (
                                                <div className="mt-4 p-3 bg-purple-50 border border-purple-100 rounded-lg flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <FiPaperclip className="text-purple-600" />
                                                        <span className="text-sm font-medium text-purple-900">{selectedFile.name}</span>
                                                    </div>
                                                    <button onClick={() => setSelectedFile(null)} className="text-purple-400 hover:text-purple-700"><FiX /></button>
                                                </div>
                                            )}

                                            {uploadProgress > 0 && (
                                                <div className="mt-4">
                                                    <div className="flex justify-between text-xs mb-1">
                                                        <span>Uploading...</span>
                                                        <span>{uploadProgress}%</span>
                                                    </div>
                                                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                                                        <div className="bg-purple-600 h-2 transition-all duration-300" style={{ width: `${uploadProgress}%` }}></div>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="mt-8 flex justify-end">
                                                <button
                                                    onClick={handleFileSubmission}
                                                    disabled={!selectedFile || uploadProgress > 0}
                                                    className="bg-purple-600 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-purple-700 disabled:opacity-50 transition shadow-lg shadow-purple-200"
                                                >
                                                    {uploadProgress > 0 ? 'Uploading...' : 'Submit Proposal'}
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {}
                                    {submissionStep === 'builder' && (
                                        <div className="p-8 flex flex-col h-full animate-in fade-in slide-in-from-right-4 duration-300 overflow-y-auto">
                                            <div className="flex justify-between items-center mb-6">
                                                <button onClick={() => setSubmissionStep('select')} className="text-gray-400 hover:text-gray-900 flex items-center gap-2 text-sm"><FiCornerDownLeft /> Back</button>
                                                <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded">AI Assisted</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Proposal Details</h3>

                                            <div className="space-y-4 flex-1">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                                                    <textarea
                                                        className="w-full border border-gray-200 rounded-lg p-3 h-32 text-sm focus:ring-2 focus:ring-purple-500 outline-none resize-none"
                                                        placeholder="Explain why you are the best fit..."
                                                        value={builderData.coverLetter}
                                                        onChange={(e) => setBuilderData({ ...builderData, coverLetter: e.target.value })}
                                                    ></textarea>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Bid Amount (KSh)</label>
                                                    <input
                                                        type="text"
                                                        className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                                                        placeholder="e.g. 1,500,000"
                                                        value={builderData.price}
                                                        onChange={(e) => setBuilderData({ ...builderData, price: e.target.value })}
                                                    />
                                                </div>
                                                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                                    <h4 className="text-xs font-bold text-blue-800 mb-1 uppercase">AI Suggestion</h4>
                                                    <p className="text-xs text-blue-600">Based on your profile, highlighting your "Supply Chain Optimization" experience could increase match score by 15%.</p>
                                                </div>
                                            </div>

                                            <div className="mt-8 flex justify-end">
                                                <button
                                                    onClick={handleBuilderSubmission}
                                                    className="bg-purple-600 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-purple-700 transition shadow-lg shadow-purple-200 flex items-center gap-2"
                                                >
                                                    {submitting ? <FiLoader className="animate-spin" /> : 'Submit Proposal'}
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {}
                                    {submissionStep === 'success' && (
                                        <div className="p-8 flex flex-col items-center justify-center h-full text-center animate-in zoom-in duration-300">
                                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 animate-bounce">
                                                <FiCheckCircle size={40} />
                                            </div>
                                            <h3 className="text-3xl font-bold text-gray-900 mb-2">Proposal Submitted!</h3>
                                            <p className="text-gray-500 max-w-xs mx-auto mb-8">Your proposal has been successfully sent to {opportunity.organization}. Good luck!</p>

                                            <div className="flex gap-4">
                                                <button
                                                    onClick={() => {
                                                        setShowSubmissionOptions(false);
                                                        setSubmissionStep('select');
                                                    }}
                                                    className="px-6 py-2 border border-gray-200 text-gray-600 rounded-lg font-bold text-sm hover:bg-gray-50 transition"
                                                >
                                                    Close
                                                </button>
                                                <Link href="/applications" className="px-6 py-2 bg-purple-600 text-white rounded-lg font-bold text-sm hover:bg-purple-700 transition shadow-lg">
                                                    Track Status
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className={`space-y-6 ${(!opportunity.value && !opportunity.location && !opportunity.contactName && !opportunity.contactEmail && !opportunity.contactPhone) ? 'lg:col-span-3' : 'lg:col-span-2'}`}>
                        {}
                        <Card className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 min-h-[400px]">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                                Description
                            </h2>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{opportunity.description}</p>
                        </Card>

                        {}
                        {opportunity.requirements && opportunity.requirements.length > 0 && (
                            <Card className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                                    Requirements
                                </h2>
                                <ul className="space-y-3">
                                    {opportunity.requirements.map((req: string, index: number) => (
                                        <li key={index} className="flex items-start p-2 rounded-md hover:bg-gray-50 transition-colors duration-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        )}

                        {}
                        {opportunity.documents && opportunity.documents.length > 0 && (
                            <Card className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                                    Review Documents
                                </h2>
                                <div className="space-y-3">
                                    {opportunity.documents.map((doc: string, index: number) => (
                                        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-all duration-200 border border-gray-200">
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                <span className="text-gray-900 font-medium">{doc}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <Button
                                                    variant="outline"
                                                    className="border-purple-200 hover:bg-purple-50 text-purple-700 text-xs py-1 px-3 transition-all duration-200"
                                                    onClick={() => handleDocumentAction('view', doc)}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                    View
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    className="border-blue-200 hover:bg-blue-50 text-blue-700 text-xs py-1 px-3 transition-all duration-200"
                                                    onClick={() => handleDocumentAction('download', doc)}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                    </svg>
                                                    Download
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        )}
                    </div>

                    <div className="space-y-6">
                        {}
                        {(opportunity.value || opportunity.location || opportunity.postedDate || opportunity.deadline) && (
                            <Card className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                                    Key Information
                                </h2>
                                <div className="space-y-4 max-h-96 overflow-y-auto pr-2 py-2">
                                    {opportunity.value && (
                                        <div className="p-3 rounded-md hover:bg-gray-50 transition-colors duration-200">
                                            <h3 className="text-sm font-medium text-gray-500 mb-1">Project Value</h3>
                                            <p className="text-purple-700 font-semibold">{opportunity.value}</p>
                                        </div>
                                    )}
                                    {opportunity.location && (
                                        <div className="p-3 rounded-md hover:bg-gray-50 transition-colors duration-200">
                                            <h3 className="text-sm font-medium text-gray-500 mb-1">Location</h3>
                                            <p className="text-gray-900">{opportunity.location}</p>
                                        </div>
                                    )}
                                    {opportunity.postedDate && (
                                        <div className="p-3 rounded-md hover:bg-gray-50 transition-colors duration-200">
                                            <h3 className="text-sm font-medium text-gray-500 mb-1">Published</h3>
                                            <p className="text-gray-900">{new Date(opportunity.postedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                        </div>
                                    )}
                                    {opportunity.deadline && (
                                        <div className="p-3 rounded-md hover:bg-gray-50 transition-colors duration-200">
                                            <h3 className="text-sm font-medium text-gray-500 mb-1">Deadline</h3>
                                            <p className="text-red-600 font-medium">{new Date(opportunity.deadline).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                        </div>
                                    )}
                                </div>
                            </Card>
                        )}

                        {}
                        {(opportunity.contactName || opportunity.contactEmail || opportunity.contactPhone) && (
                            <Card className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                                    Contact Information
                                </h2>
                                <div className="space-y-4">
                                    {opportunity.contactName && (
                                        <div className="p-3 rounded-md bg-gray-50">
                                            <h3 className="text-sm font-medium text-gray-500 mb-1">Contact Person</h3>
                                            <p className="text-gray-900">{opportunity.contactName}</p>
                                        </div>
                                    )}
                                    {opportunity.contactEmail && (
                                        <div className="p-3 rounded-md bg-gray-50">
                                            <h3 className="text-sm font-medium text-gray-500 mb-1">Email</h3>
                                            <a href={`mailto:${opportunity.contactEmail}`} className="text-blue-600 hover:text-blue-800 break-all transition-colors">
                                                {opportunity.contactEmail}
                                            </a>
                                        </div>
                                    )}
                                    {opportunity.contactPhone && (
                                        <div className="p-3 rounded-md bg-gray-50">
                                            <h3 className="text-sm font-medium text-gray-500 mb-1">Phone</h3>
                                            <a href={`tel:${opportunity.contactPhone}`} className="text-gray-900 hover:text-blue-600 transition-colors">
                                                {opportunity.contactPhone}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </Card>
                        )}

                        {}
                        <div className="flex flex-col gap-3 sticky top-6">
                            <Button
                                variant="primary"
                                className="bg-purple-600 hover:bg-purple-700 py-3 transition-all duration-300 shadow-md"
                                onClick={handleShowSubmissionOptions}
                                disabled={daysUntilDeadline <= 0}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                                </svg>
                                {daysUntilDeadline > 0 ? 'Submit Proposal' : 'Deadline Passed'}
                            </Button>
                            <Button
                                variant="outline"
                                className={`border-gray-300 hover:bg-gray-100 text-gray-700 py-3 transition-all duration-300 ${isSaved ? 'bg-green-50 text-green-700 border-green-200' : ''}`}
                                onClick={handleSaveOpportunity}
                                disabled={saving}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-2 ${isSaved ? 'fill-current' : 'fill-none'}`} viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                                {saving ? 'Processing...' : (isSaved ? 'Saved' : 'Save for Later')}
                            </Button>
                        </div>
                    </div>
                    <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg lg:col-span-3">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <h3 className="text-sm font-medium text-yellow-800">Important Notice</h3>
                                <div className="mt-2 text-sm text-yellow-700">
                                    <p>Only apply through this portal. Any applications sent elsewhere will not be considered.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
