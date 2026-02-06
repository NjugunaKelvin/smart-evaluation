import React, { useState } from 'react';
import { FiMessageSquare, FiFileText, FiCheckCircle, FiDollarSign, FiClock, FiPaperclip, FiMoreVertical, FiSend } from 'react-icons/fi';

export default function ProjectWorkspace() {
    const [activeTab, setActiveTab] = useState<'chat' | 'milestones' | 'files'>('chat');

    
    const project = {
        name: "Infrastructure Expansion - Phase 1",
        contractor: "TechBuild Solutions",
        status: "In Progress",
        completion: 35
    };

    const milestones = [
        { id: 1, title: 'Inception Report', status: 'Completed', date: 'Jan 10, 2026', paid: true },
        { id: 2, title: 'Preliminary Design', status: 'In Review', date: 'Jan 24, 2026', paid: false },
        { id: 3, title: 'Foundation Works', status: 'Pending', date: 'Feb 15, 2026', paid: false },
    ];

    const messages = [
        { id: 1, text: "We have uploaded the preliminary design docs for your review.", sender: "contractor", time: "10:30 AM" },
        { id: 2, text: "Thanks, I will have the engineering team look at it by EOD.", sender: "me", time: "10:45 AM" },
        { id: 3, text: "Great. Also, invoice for milestone 2 is attached.", sender: "contractor", time: "11:00 AM" }
    ];

    return (
        <div className="flex h-[calc(100vh-140px)] bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
            {}
            <div className="w-72 bg-gray-50 border-r border-gray-200 flex flex-col">
                <div className="p-4 border-b border-gray-200">
                    <h3 className="font-bold text-gray-700">Active Projects</h3>
                </div>
                <div className="overflow-y-auto flex-1 p-2 space-y-1">
                    <div className="p-3 bg-white border border-purple-200 rounded-xl shadow-sm cursor-pointer">
                        <h4 className="font-bold text-sm text-gray-900">{project.name}</h4>
                        <p className="text-xs text-purple-600 mt-1">{project.contractor}</p>
                        <div className="mt-2 text-xs text-gray-400 flex justify-between">
                            <span>{project.status}</span>
                            <span>{project.completion}%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-1 mt-1">
                            <div className="bg-purple-500 w-[35%] h-1 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            {}
            <div className="flex-1 flex flex-col">
                {}
                <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
                    <div>
                        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                            {project.name}
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">Active</span>
                        </h2>
                        <p className="text-sm text-gray-500">Working with: <span className="font-medium text-gray-800">{project.contractor}</span></p>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex bg-gray-100 p-1 rounded-lg">
                            <button
                                onClick={() => setActiveTab('chat')}
                                className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${activeTab === 'chat' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                Chat
                            </button>
                            <button
                                onClick={() => setActiveTab('milestones')}
                                className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${activeTab === 'milestones' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                Milestones
                            </button>
                            <button
                                onClick={() => setActiveTab('files')}
                                className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${activeTab === 'files' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                Files
                            </button>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600"><FiMoreVertical /></button>
                    </div>
                </div>

                {}
                <div className="flex-1 overflow-hidden bg-[#f8fafc] relative">

                    {}
                    {activeTab === 'chat' && (
                        <div className="h-full flex flex-col">
                            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                                {messages.map((msg) => (
                                    <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-[70%] p-4 rounded-2xl shadow-sm ${msg.sender === 'me' ? 'bg-purple-600 text-white rounded-br-none' : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'}`}>
                                            <p className="text-sm">{msg.text}</p>
                                            <p className={`text-[10px] mt-1 text-right ${msg.sender === 'me' ? 'text-purple-200' : 'text-gray-400'}`}>{msg.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-4 bg-white border-t border-gray-200">
                                <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-xl border border-gray-200 focus-within:border-purple-300 transition-colors">
                                    <button className="p-2 text-gray-400 hover:text-gray-600"><FiPaperclip /></button>
                                    <input
                                        type="text"
                                        placeholder="Type your message..."
                                        className="flex-1 bg-transparent border-none focus:outline-none text-sm text-gray-800"
                                    />
                                    <button className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow-sm"><FiSend /></button>
                                </div>
                            </div>
                        </div>
                    )}

                    {}
                    {activeTab === 'milestones' && (
                        <div className="p-8">
                            <div className="space-y-4">
                                {milestones.map((m) => (
                                    <div key={m.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${m.status === 'Completed' ? 'bg-green-100 text-green-600' : m.status === 'In Review' ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-400'}`}>
                                                {m.status === 'Completed' ? <FiCheckCircle /> : <FiClock />}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">{m.title}</h4>
                                                <div className="flex gap-3 text-xs text-gray-500 mt-1">
                                                    <span>Due: {m.date}</span>
                                                    <span className={`flex items-center gap-1 ${m.paid ? 'text-green-600 font-bold' : 'text-gray-400'}`}>
                                                        {m.paid ? 'Paid' : 'Unpaid'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {!m.paid ? (
                                            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-bold shadow-lg hover:bg-gray-800 flex items-center gap-2 transition">
                                                <FiDollarSign /> Disburse Funds
                                            </button>
                                        ) : (
                                            <span className="px-4 py-2 bg-green-50 text-green-700 border border-green-200 rounded-lg text-sm font-bold flex items-center gap-2">
                                                <FiCheckCircle /> Disbursed
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {}
                    {activeTab === 'files' && (
                        <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-md cursor-pointer transition text-center aspect-square flex flex-col items-center justify-center">
                                    <FiFileText className="w-12 h-12 text-gray-400 mb-3" />
                                    <p className="text-sm font-medium text-gray-700 truncate w-full">Design_Doc_v{i}.pdf</p>
                                    <p className="text-xs text-gray-400">2.4 MB</p>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
