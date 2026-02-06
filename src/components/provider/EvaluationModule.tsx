import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiTrash2, FiSliders, FiList, FiPieChart, FiPlay, FiCheckCircle, FiUser, FiDownload, FiMail } from 'react-icons/fi';

interface EvaluationModuleProps {
    onEvaluationComplete: (results: any) => void;
}

export default function EvaluationModule({ onEvaluationComplete }: EvaluationModuleProps) {
    const [step, setStep] = useState<'setup' | 'analyzing' | 'results'>('setup');

    
    const [criteria, setCriteria] = useState([
        { id: 1, name: 'Technical Competence', weight: 30, type: 'scale' },
        { id: 2, name: 'Financial Stability', weight: 20, type: 'scale' },
        { id: 3, name: 'Methodology', weight: 25, type: 'scale' },
        { id: 4, name: 'Compliance Documents', weight: 25, type: 'boolean' }
    ]);

    
    const [results, setResults] = useState<any[]>([]);

    
    const [showTemplates, setShowTemplates] = useState(false);

    const templates = [
        {
            name: "Construction Projects",
            items: [
                { id: 1, name: 'Technical Competence', weight: 40, type: 'scale' },
                { id: 2, name: 'Financial Stability', weight: 30, type: 'scale' },
                { id: 3, name: 'Safety Record', weight: 20, type: 'scale' },
                { id: 4, name: 'Environmental Impact', weight: 10, type: 'text' }
            ]
        },
        {
            name: "Software Development",
            items: [
                { id: 1, name: 'Code Quality', weight: 35, type: 'scale' },
                { id: 2, name: 'Team Experience', weight: 25, type: 'scale' },
                { id: 3, name: 'Project Timeline', weight: 20, type: 'scale' },
                { id: 4, name: 'Budget Proposal', weight: 20, type: 'scale' }
            ]
        },
        {
            name: "Turkana Energy Grid (Recent)",
            items: [
                { id: 1, name: 'Grid Stability Plan', weight: 40, type: 'scale' },
                { id: 2, name: 'Local Community Impact', weight: 30, type: 'scale' },
                { id: 3, name: 'Cost Efficiency', weight: 30, type: 'scale' },
            ]
        }
    ];

    const loadTemplate = (templateName: string) => {
        const template = templates.find(t => t.name === templateName);
        if (template) {
            setCriteria(template.items);
            setShowTemplates(false);
        }
    };

    const addCriteria = () => {
        const newId = criteria.length + 1;
        setCriteria([...criteria, { id: newId, name: 'New Criteria', weight: 10, type: 'scale' }]);
    };

    const updateCriteria = (id: number, field: string, value: any) => {
        setCriteria(criteria.map(c => c.id === id ? { ...c, [field]: value } : c));
    };

    const removeCriteria = (id: number) => {
        setCriteria(criteria.filter(c => c.id !== id));
    };

    const totalWeight = criteria.reduce((acc, curr) => acc + curr.weight, 0);

    const handleRunEvaluation = () => {
        setStep('analyzing');

        
        setTimeout(() => {
            const mockResults = [
                { id: 1, name: 'TechBuild Solutions', score: 92, status: 'Top Match', breakdown: { tech: 9, fin: 8, meth: 10, comp: 'Pass' } },
                { id: 2, name: 'Apex Infrastructures', score: 88, status: 'Strong Contender', breakdown: { tech: 8, fin: 9, meth: 8, comp: 'Pass' } },
                { id: 3, name: 'Global Connect Ltd', score: 75, status: 'Average', breakdown: { tech: 7, fin: 8, meth: 6, comp: 'Pass' } },
                { id: 4, name: 'Safi Constructions', score: 65, status: 'Weak', breakdown: { tech: 5, fin: 6, meth: 5, comp: 'Fail' } },
                { id: 5, name: 'Urban Planners Inc', score: 81, status: 'Strong Contender', breakdown: { tech: 8, fin: 7, meth: 9, comp: 'Pass' } },
            ].sort((a, b) => b.score - a.score);

            setResults(mockResults);
            setStep('results');
        }, 3000);
    };

    const handleShortlist = (ids: number[]) => {
        onEvaluationComplete(results.filter(r => ids.includes(r.id)));
    };

    return (
        <div className="space-y-8 max-w-6xl mx-auto">
            {}
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Evaluation Engine</h2>
                <p className="text-gray-500 text-sm mt-1">
                    {step === 'setup' && 'Define criteria for the AI to process the uploaded documents.'}
                    {step === 'analyzing' && 'Processing documents against your criteria...'}
                    {step === 'results' && 'Review AI-generated scores and select candidates.'}
                </p>
            </div>

            {}
            {step === 'setup' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden relative">
                            <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                                <h3 className="font-bold text-gray-700 flex items-center gap-2">
                                    <FiSliders /> Scoring Criteria
                                </h3>
                                <div className="flex gap-2 relative">
                                    <button
                                        onClick={() => setShowTemplates(!showTemplates)}
                                        className="text-xs bg-white border border-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition"
                                    >
                                        Load Template
                                    </button>

                                    {showTemplates && (
                                        <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl z-20 overflow-hidden">
                                            <div className="p-2 bg-gray-50 border-b border-gray-100 text-xs font-bold text-gray-500 uppercase">Recent Templates</div>
                                            {templates.map(t => (
                                                <button
                                                    key={t.name}
                                                    onClick={() => loadTemplate(t.name)}
                                                    className="w-full text-left px-4 py-3 text-sm hover:bg-purple-50 text-gray-700 hover:text-purple-700 transition border-b border-gray-50 last:border-0"
                                                >
                                                    {t.name}
                                                </button>
                                            ))}
                                        </div>
                                    )}

                                    <button
                                        onClick={addCriteria}
                                        className="text-xs bg-purple-600 text-white px-3 py-1.5 rounded-lg hover:bg-purple-700 transition flex items-center gap-1"
                                    >
                                        <FiPlus /> Add
                                    </button>
                                </div>
                            </div>

                            <div className="divide-y divide-gray-100">
                                {criteria.map((item) => (
                                    <motion.div
                                        layout
                                        key={item.id}
                                        className="p-4 flex items-center gap-4 bg-white hover:bg-gray-50 transition"
                                    >
                                        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                                            <div className="md:col-span-6">
                                                <input
                                                    type="text"
                                                    value={item.name}
                                                    onChange={(e) => updateCriteria(item.id, 'name', e.target.value)}
                                                    className="w-full px-3 py-2 bg-transparent border-b border-gray-200 focus:border-purple-500 focus:outline-none font-medium text-gray-800"
                                                    placeholder="Criteria Name"
                                                />
                                            </div>

                                            <div className="md:col-span-3">
                                                <select
                                                    value={item.type}
                                                    onChange={(e) => updateCriteria(item.id, 'type', e.target.value)}
                                                    className="w-full px-2 py-2 bg-gray-50 border-none rounded-lg text-xs text-gray-600 focus:outline-none"
                                                >
                                                    <option value="scale">1-10 Scale</option>
                                                    <option value="boolean">Yes/No</option>
                                                    <option value="text">Analysis</option>
                                                </select>
                                            </div>

                                            <div className="md:col-span-3 relative">
                                                <input
                                                    type="number"
                                                    value={item.weight}
                                                    onChange={(e) => updateCriteria(item.id, 'weight', parseInt(e.target.value) || 0)}
                                                    className="w-full px-3 py-2 bg-gray-50 rounded-lg text-sm focus:ring-1 focus:ring-purple-500 focus:outline-none text-right pr-8"
                                                />
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-bold">%</span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => removeCriteria(item.id)}
                                            className="p-2 text-gray-400 hover:text-red-500 transition"
                                        >
                                            <FiTrash2 />
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {}
                    <div>
                        <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl sticky top-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold">Summary</h3>
                                <span className={`text-xs font-bold px-2 py-1 rounded ${totalWeight === 100 ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'}`}>
                                    {totalWeight}% Total
                                </span>
                            </div>

                            <div className="space-y-3 mb-8">
                                <p className="text-sm text-slate-400">Ready to evaluate <span className="text-white font-bold">12 documents</span> against <span className="text-white font-bold">{criteria.length} criteria</span>.</p>
                                <div className="text-xs text-slate-500 bg-slate-800 p-3 rounded-lg border border-slate-700">
                                    AI will extract methodology, financial tables, and compliance certs automatically.
                                </div>
                            </div>

                            <button
                                onClick={handleRunEvaluation}
                                disabled={totalWeight !== 100}
                                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition shadow-lg ${totalWeight === 100 ? 'bg-purple-600 hover:bg-purple-500 text-white cursor-pointer' : 'bg-slate-800 text-slate-500 cursor-not-allowed'}`}
                            >
                                <FiPlay className="fill-current" /> Run Evaluation
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {}
            {step === 'analyzing' && (
                <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-gray-200">
                    <div className="relative">
                        <div className="w-24 h-24 border-4 border-purple-100 rounded-full animate-spin border-t-purple-600"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <FiPieChart className="w-8 h-8 text-purple-600" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mt-6">Analyzing Proposals...</h3>
                    <p className="text-gray-500 mt-2 max-w-md text-center">
                        Our AI is reading through the uploaded PDFs, extracting key data points, and scoring based on your weighted criteria.
                    </p>
                    <div className="mt-8 flex gap-2">
                        <span className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></span>
                        <span className="w-2 h-2 bg-purple-600 rounded-full animate-bounce delay-100"></span>
                        <span className="w-2 h-2 bg-purple-600 rounded-full animate-bounce delay-200"></span>
                    </div>
                </div>
            )}

            {}
            {step === 'results' && (
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { label: 'Top Candidate', value: results[0].name, sub: `${results[0].score}% Score`, color: 'green' },
                            { label: 'Average Score', value: '80.2%', sub: 'Across 12 Applicants', color: 'blue' },
                            { label: 'Flagged for Review', value: '2', sub: 'Compliance Issues', color: 'orange' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                                <p className={`text-xs font-medium text-${stat.color}-600 mt-1`}>{stat.sub}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="font-bold text-gray-900">Evaluation Matrix Results</h3>
                            <button className="text-purple-600 text-sm font-medium flex items-center gap-2 hover:bg-purple-50 px-3 py-1.5 rounded-lg transition">
                                <FiDownload /> Export Report
                            </button>
                        </div>
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase">
                                <tr>
                                    <th className="px-6 py-4">Rank</th>
                                    <th className="px-6 py-4">Applicant</th>
                                    <th className="px-6 py-4">Total Score</th>
                                    <th className="px-6 py-4">Breakdown</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {results.map((r, i) => (
                                    <tr key={r.id} className={`hover:bg-gray-50 transition ${i < 3 ? 'bg-purple-50/10' : ''}`}>
                                        <td className="px-6 py-4">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${i === 0 ? 'bg-yellow-100 text-yellow-700' : i === 1 ? 'bg-gray-200 text-gray-700' : i === 2 ? 'bg-orange-100 text-orange-800' : 'text-gray-500'}`}>
                                                {i + 1}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                                    <FiUser />
                                                </div>
                                                <span className="font-semibold text-gray-900">{r.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-lg font-bold text-purple-700">{r.score}</span>
                                        </td>
                                        <td className="px-6 py-4 text-xs text-gray-500">
                                            <div className="flex gap-2">
                                                <span title="Technical">T: {r.breakdown.tech}</span>
                                                <span title="Financial">F: {r.breakdown.fin}</span>
                                                <span title="Methodology">M: {r.breakdown.meth}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded text-xs font-bold ${r.score >= 85 ? 'bg-green-100 text-green-700' : r.score >= 70 ? 'bg-blue-50 text-blue-600' : 'bg-red-50 text-red-600'}`}>
                                                {r.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => handleShortlist([r.id])}
                                                className="px-3 py-1.5 bg-white border border-gray-200 hover:border-purple-300 text-gray-700 hover:text-purple-600 rounded-lg text-sm font-medium transition shadow-sm"
                                            >
                                                Shortlist
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
