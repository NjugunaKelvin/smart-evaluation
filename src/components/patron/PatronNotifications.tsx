'use client';

import { motion } from 'framer-motion';
import { FiBell, FiBriefcase, FiFileText, FiMessageSquare, FiInfo, FiCheck } from 'react-icons/fi';

export default function PatronNotifications() {
    const notifications = [
        {
            id: 1,
            type: 'project',
            title: 'New Project Application',
            message: 'Green Earth Initiative has submitted a new proposal for "Sustainable Water Management".',
            time: '2 hours ago',
            read: false,
            icon: FiBriefcase,
            color: 'blue'
        },
        {
            id: 2,
            type: 'report',
            title: 'Impact Report Due Soon',
            message: 'The quarterly impact report for "Education for All" is due in 3 days.',
            time: '5 hours ago',
            read: false,
            icon: FiFileText,
            color: 'orange'
        },
        {
            id: 3,
            type: 'system',
            title: 'System Maintenance',
            message: 'Scheduled maintenance will occur on Saturday at 2:00 AM UTC.',
            time: '1 day ago',
            read: true,
            icon: FiInfo,
            color: 'slate'
        },
        {
            id: 4,
            type: 'message',
            title: 'New Message from Sarah',
            message: 'Hey, I had a question about the budget allocation for...',
            time: '1 day ago',
            read: true,
            icon: FiMessageSquare,
            color: 'purple'
        },
        {
            id: 5,
            type: 'approval',
            title: 'Grant Approved',
            message: 'Your grant request for "Clean Energy Project" has been approved.',
            time: '2 days ago',
            read: true,
            icon: FiCheck,
            color: 'green'
        }
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
                    <p className="text-gray-500">Stay updated with your latest activities and alerts</p>
                </div>
                <button className="text-sm text-purple-600 font-medium hover:text-purple-700">
                    Mark all as read
                </button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="divide-y divide-gray-100">
                    {notifications.map((notification, index) => (
                        <motion.div
                            key={notification.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className={`p-6 flex gap-4 hover:bg-gray-50 transition-colors ${!notification.read ? 'bg-blue-50/30' : ''}`}
                        >
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0
                                ${notification.color === 'blue' ? 'bg-blue-100 text-blue-600' : ''}
                                ${notification.color === 'orange' ? 'bg-orange-100 text-orange-600' : ''}
                                ${notification.color === 'slate' ? 'bg-slate-100 text-slate-600' : ''}
                                ${notification.color === 'purple' ? 'bg-purple-100 text-purple-600' : ''}
                                ${notification.color === 'green' ? 'bg-green-100 text-green-600' : ''}
                            `}>
                                <notification.icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-start justify-between mb-1">
                                    <h3 className={`font-semibold text-gray-900 ${!notification.read ? 'flex items-center gap-2' : ''}`}>
                                        {notification.title}
                                        {!notification.read && <span className="w-2 h-2 rounded-full bg-blue-500 block"></span>}
                                    </h3>
                                    <span className="text-xs text-gray-400 whitespace-nowrap">{notification.time}</span>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {notification.message}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="p-4 bg-gray-50 text-center border-t border-gray-100">
                    <button className="text-sm text-gray-500 font-medium hover:text-gray-700">
                        View Past Notifications
                    </button>
                </div>
            </div>
        </div>
    );
}
