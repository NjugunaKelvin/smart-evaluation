import React from 'react';
import { FiMapPin, FiCalendar, FiUsers, FiBarChart2, FiMoreVertical } from 'react-icons/fi';

export default function ProjectList() {
    const projects = [
        {
            id: 1,
            title: "Turkana Energy Grid Expansion",
            location: "Turkana County, KE",
            budget: "$450,000",
            startDate: "Jan 15, 2024",
            teamSize: 12,
            status: "Implementation",
            description: "Expanding the micro-grid to serve 500 additional households in remote villages.",
            tags: ["Energy", "Infrastructure"]
        },
        {
            id: 2,
            title: "Community Solar Kiosks Phase 2",
            location: "Marsabit, KE",
            budget: "$125,000",
            startDate: "Jun 01, 2024",
            teamSize: 8,
            status: "Reporting",
            description: "Deploying 20 solar-powered kiosks for phone charging and small business support.",
            tags: ["Solar", "Community"]
        },
        {
            id: 3,
            title: "Rift Valley Water Borehole",
            location: "Nakuru, KE",
            budget: "$85,000",
            startDate: "Feb 10, 2025",
            teamSize: 5,
            status: "Planning",
            description: "Drilling and equipping two substantial boreholes for agricultural use.",
            tags: ["Water", "Agriculture"]
        }
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Active Projects</h2>
                    <p className="text-gray-500 text-sm mt-1">Implementations currently under your management.</p>
                </div>
                <div className="flex gap-3">
                    <select className="bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition cursor-pointer hover:bg-gray-50">
                        <option>All Statuses</option>
                        <option>Active</option>
                        <option>Completed</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col group h-full">
                        <div className="flex justify-between items-start mb-4">
                            <span className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full ${project.status === 'Implementation' ? 'bg-blue-100 text-blue-700' :
                                    project.status === 'Reporting' ? 'bg-orange-100 text-orange-700' :
                                        'bg-purple-100 text-purple-700'
                                }`}>
                                {project.status}
                            </span>
                            <button className="text-gray-400 hover:text-gray-600 transition p-1 hover:bg-gray-100 rounded-full">
                                <FiMoreVertical size={18} />
                            </button>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-purple-600 transition">{project.title}</h3>
                        <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">{project.description}</p>

                        <div className="space-y-2 mb-6 pt-4 border-t border-gray-50">
                            <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                                <FiMapPin className="text-gray-400" /> {project.location}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                                <FiCalendar className="text-gray-400" /> Listed: {project.startDate}
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-auto">
                            <div>
                                <p className="text-xs text-gray-400 font-medium uppercase">Budget</p>
                                <p className="font-bold text-gray-900">{project.budget}</p>
                            </div>
                            <button className="px-4 py-2 bg-gray-50 text-gray-700 font-medium text-sm rounded-lg hover:bg-purple-50 hover:text-purple-600 transition border border-gray-200 hover:border-purple-200">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
