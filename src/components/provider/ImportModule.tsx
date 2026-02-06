import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUpload, FiDatabase, FiCheck, FiFolder, FiFileText, FiRefreshCw, FiArrowRight, FiPackage } from 'react-icons/fi';

interface ImportModuleProps {
    onImportComplete: (data: any) => void;
}

export default function ImportModule({ onImportComplete }: ImportModuleProps) {
    const [importMethod, setImportMethod] = useState<'upload' | 'connect' | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadComplete, setUploadComplete] = useState(false);
    const [fileType, setFileType] = useState<'csv' | 'zip'>('csv');

    
    const handleUpload = () => {
        setIsUploading(true);
        
        setTimeout(() => {
            setIsUploading(false);
            setUploadComplete(true);
        }, 2500);
    };

    const handleProceed = () => {
        
        onImportComplete({
            source: importMethod === 'upload' ? 'File Upload' : 'External API',
            count: 12,
            fileType: fileType
        });
    };

    return (
        <div className="space-y-6 max-w-5xl mx-auto">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Import Proposals</h2>
                    <p className="text-gray-500 text-sm mt-1">Upload structured data (CSV/Excel) or bulk proposal documents (ZIP).</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {}
                <motion.div
                    whileHover={{ y: -5 }}
                    className={`p-8 rounded-2xl border-2 cursor-pointer transition-all ${importMethod === 'upload' ? 'border-purple-600 bg-purple-50' : 'border-dashed border-gray-300 bg-white hover:border-purple-300'}`}
                    onClick={() => setImportMethod('upload')}
                >
                    <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                        <FiUpload />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Upload Files</h3>
                    <p className="text-gray-500 text-sm">
                        Drag and drop your Excel sheets or ZIP archives containing PDF proposals.
                    </p>
                </motion.div>

                {}
                <motion.div
                    whileHover={{ y: -5 }}
                    className={`p-8 rounded-2xl border-2 cursor-pointer transition-all ${importMethod === 'connect' ? 'border-blue-600 bg-blue-50' : 'border-dashed border-gray-300 bg-white hover:border-blue-300'}`}
                    onClick={() => {
                        setImportMethod('connect');
                        alert("Please contact the administrator to configure the integration with Tendersure/World Bank APIs.\n\nSupport Email: admin@smarteval.com");
                    }}
                >
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                        <FiDatabase />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Connect Platform</h3>
                    <p className="text-gray-500 text-sm">
                        Directly sync with Tendersure, World Bank, or other procurement APIs.
                    </p>
                </motion.div>
            </div>

            {importMethod === 'upload' && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8"
                >
                    {!uploadComplete ? (
                        <div className="space-y-6">
                            <div className="flex gap-4 justify-center mb-6">
                                <button
                                    onClick={() => setFileType('csv')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium border ${fileType === 'csv' ? 'bg-purple-50 border-purple-200 text-purple-700' : 'bg-white border-gray-200 text-gray-600'}`}
                                >
                                    Structured Data (.csv, .xlsx)
                                </button>
                                <button
                                    onClick={() => setFileType('zip')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium border ${fileType === 'zip' ? 'bg-purple-50 border-purple-200 text-purple-700' : 'bg-white border-gray-200 text-gray-600'}`}
                                >
                                    Bulk Documents (.zip, .rar)
                                </button>
                            </div>

                            <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 flex flex-col items-center justify-center text-center transition-colors hover:border-purple-300 hover:bg-purple-50/30">
                                {fileType === 'zip' ? <FiPackage className="w-12 h-12 text-gray-400 mb-4" /> : <FiFileText className="w-12 h-12 text-gray-400 mb-4" />}
                                <p className="text-gray-900 font-medium mb-2">
                                    {fileType === 'zip' ? 'Upload ZIP of Proposals' : 'Upload CSV/Excel File'}
                                </p>
                                <p className="text-gray-500 text-sm mb-6">
                                    {fileType === 'zip' ? 'Ensure separate folders for each applicant inside.' : 'Must include "Applicant Name" and "Email" columns.'}
                                </p>
                                <button
                                    onClick={handleUpload}
                                    disabled={isUploading}
                                    className="px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition flex items-center gap-2 shadow-lg shadow-purple-600/20"
                                >
                                    {isUploading ? <FiRefreshCw className="animate-spin" /> : <FiUpload />}
                                    {isUploading ? 'Processing...' : 'Select File'}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-8">
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FiCheck className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Import Successful</h3>
                            <p className="text-gray-500 mb-6">
                                Successfully processed <strong>{fileType === 'zip' ? 'project_proposals_batch_24.zip' : 'applicants_v2.csv'}</strong>.
                                <br />Found 12 valid applications.
                            </p>
                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={() => setUploadComplete(false)}
                                    className="px-6 py-2.5 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 font-medium transition"
                                >
                                    Import Another
                                </button>
                                <button
                                    onClick={handleProceed}
                                    className="px-6 py-2.5 bg-purple-600 text-white rounded-xl hover:bg-purple-700 font-bold shadow-lg flex items-center gap-2 transition"
                                >
                                    Proceed to Evaluation <FiArrowRight />
                                </button>
                            </div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
}
