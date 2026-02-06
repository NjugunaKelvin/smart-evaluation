import React, { useState, useEffect, useRef } from 'react';
import { FiSend, FiPaperclip, FiMoreHorizontal, FiUser, FiInfo, FiSearch } from 'react-icons/fi';

export default function MessageCenter() {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'donor', text: 'Hello, we reviewed your last report on the Solar Kiosks project. Looks great!', time: '10:30 AM' },
        { id: 2, sender: 'me', text: 'Thank you! We are preparing the final impact assessment now.', time: '10:35 AM' },
        { id: 3, sender: 'donor', text: 'Excellent. Please ensure you include the beneficiary testimonials in the appendix.', time: '10:36 AM' },
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages([...messages, { id: Date.now(), sender: 'me', text: input, time: 'Now' }]);
        setInput('');

        
        setTimeout(() => {
            setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'donor', text: "Thanks for the update. We'll get back to you shortly.", time: 'Now' }]);
        }, 1500);
    };

    return (
        <div className="h-[calc(100vh-180px)] bg-white rounded-xl border border-gray-200 shadow-sm flex overflow-hidden">
            {}
            <div className="w-80 border-r border-gray-200 flex flex-col hidden md:flex bg-gray-50">
                <div className="p-4 border-b border-gray-200">
                    <div className="relative">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search chats..."
                            className="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition"
                        />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {[
                        { name: "Global Green Fund", project: "Solar Kiosks", active: true, time: "10:36 AM", unread: 0 },
                        { name: "UN Infrastructure", project: "Turkana Grid", active: false, time: "Yesterday", unread: 2 },
                        { name: "Water Aid Direct", project: "Rift Valley Borehole", active: false, time: "Mon", unread: 0 },
                    ].map((chat, i) => (
                        <div key={i} className={`p-4 cursor-pointer transition border-b border-gray-100 ${chat.active ? 'bg-white border-l-4 border-l-purple-600' : 'hover:bg-gray-100 border-l-4 border-l-transparent'}`}>
                            <div className="flex justify-between items-start mb-1">
                                <h4 className={`font-bold text-sm ${chat.active ? 'text-gray-900' : 'text-gray-700'}`}>{chat.name}</h4>
                                <span className="text-[10px] text-gray-400 font-medium">{chat.time}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-xs text-gray-500 truncate">{chat.project}</p>
                                {chat.unread > 0 && (
                                    <span className="bg-purple-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                        {chat.unread}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {}
            <div className="flex-1 flex flex-col bg-white overflow-hidden">
                {}
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-white z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-sm border border-purple-200">
                            GF
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-sm">Global Green Fund</h3>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span className="text-xs text-green-600 font-medium">Online</span>
                            </div>
                        </div>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition">
                        <FiMoreHorizontal size={20} />
                    </button>
                </div>

                {}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/50">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[75%] p-4 rounded-xl text-sm shadow-sm ${msg.sender === 'me'
                                    ? 'bg-purple-600 text-white rounded-br-none'
                                    : 'bg-white text-gray-700 border border-gray-200 rounded-bl-none'
                                }`}>
                                <p className="leading-relaxed">{msg.text}</p>
                                <div className={`text-[10px] mt-1 text-right ${msg.sender === 'me' ? 'text-purple-200' : 'text-gray-400'}`}>
                                    {msg.time}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {}
                <div className="p-4 bg-white border-t border-gray-200">
                    <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl p-2 focus-within:ring-2 focus-within:ring-purple-500/20 focus-within:border-purple-500 transition">
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-lg transition">
                            <FiPaperclip size={18} />
                        </button>
                        <input
                            type="text"
                            className="flex-1 bg-transparent outline-none text-gray-700 placeholder:text-gray-400 text-sm font-medium"
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button
                            onClick={handleSend}
                            className={`p-2.5 rounded-lg transition-all shadow-sm ${input.trim() ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-200 text-gray-400 shadow-none'}`}
                            disabled={!input.trim()}
                        >
                            <FiSend size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
