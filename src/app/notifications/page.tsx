'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';

export default function NotificationsPage() {
    const router = useRouter();
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            type: 'application',
            title: 'Application Status Updated',
            message: 'Your application for "Construction Tender XYZ" has been shortlisted',
            time: '2 hours ago',
            read: false
        },
        {
            id: 2,
            type: 'opportunity',
            title: 'New Opportunity Match',
            message: 'A new grant opportunity matches your interests',
            time: '1 day ago',
            read: false
        },
        {
            id: 3,
            type: 'system',
            title: 'Profile Update Required',
            message: 'Complete your profile to increase application success rate',
            time: '3 days ago',
            read: true
        }
    ]);

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push('/login');
            return;
        }
    }, [router]);

    const markAsRead = (id: number) => {
        setNotifications(notifications.map(notif =>
            notif.id === id ? { ...notif, read: true } : notif
        ));
    };

    const unreadCount = notifications.filter(n => !n.read).length;

    const getIcon = (type: string) => {
        switch (type) {
            case 'application':
                return (
                    <div className="bg-blue-100 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                );
            case 'opportunity':
                return (
                    <div className="bg-purple-100 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                );
            default:
                return (
                    <div className="bg-gray-100 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-4 py-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
                    <p className="text-gray-600 mt-2">{unreadCount} unread notifications</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Actions */}
                <div className="mb-6 flex gap-3">
                    <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition text-sm font-medium">
                        Mark All as Read
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition text-sm font-medium">
                        Clear All
                    </button>
                </div>

                {/* Notifications List */}
                <div className="space-y-3">
                    {notifications.length === 0 ? (
                        <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </div>
                            <p className="text-gray-600">No notifications yet</p>
                            <p className="text-sm text-gray-500 mt-2">We&apos;ll notify you when there&apos;s something new</p>
                        </div>
                    ) : (
                        notifications.map((notification) => (
                            <div
                                key={notification.id}
                                onClick={() => markAsRead(notification.id)}
                                className={`bg-white rounded-xl shadow-sm p-6 border cursor-pointer transition ${notification.read
                                        ? 'border-gray-100 hover:border-gray-200'
                                        : 'border-purple-200 bg-purple-50/30 hover:border-purple-300'
                                    }`}
                            >
                                <div className="flex gap-4">
                                    {getIcon(notification.type)}
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-bold text-gray-900">
                                                {notification.title}
                                                {!notification.read && (
                                                    <span className="ml-2 inline-block w-2 h-2 bg-purple-600 rounded-full"></span>
                                                )}
                                            </h3>
                                            <span className="text-sm text-gray-500">{notification.time}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
