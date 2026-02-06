


'use client'
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`events-tabpanel-${index}`}
      aria-labelledby={`events-tab-${index}`}
      {...other}
    >
      {value === index && <div className="py-6">{children}</div>}
    </div>
  );
}

const WebinarsEvents = () => {
  const [tabValue, setTabValue] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedWebinar, setSelectedWebinar] = useState<any>(null);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleOpenDialog = (webinar: any) => {
    setSelectedWebinar(webinar);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const upcomingEvents = [
    {
      id: 1,
      title: 'Mastering Grant Writing',
      date: 'October 15, 2023',
      time: '2:00 PM - 4:00 PM EST',
      location: 'Virtual',
      image: '/images/home/2.jpg',
      description: 'Learn advanced techniques for writing compelling grant proposals from industry experts.',
      status: 'Upcoming',
      speakers: ['Dr. Jane Smith', 'Prof. Robert Johnson']
    },
    {
      id: 2,
      title: 'Government Tenders Workshop',
      date: 'November 5, 2023',
      time: '10:00 AM - 12:00 PM EST',
      location: 'Virtual',
      image: '/images/home/2.jpg',
      description: 'Understanding the government tender process and how to submit winning bids.',
      status: 'Upcoming',
      speakers: ['Michael Chen', 'Sarah Williams']
    },
    {
      id: 3,
      title: 'Q4 Funding Opportunities',
      date: 'December 8, 2023',
      time: '1:00 PM - 3:00 PM EST',
      location: 'Virtual',
      image: '/images/home/2.jpg',
      description: 'Overview of funding opportunities available in the last quarter of the year.',
      status: 'Upcoming',
      speakers: ['Emily Rodriguez', 'David Kim']
    },
  ];

  const pastWebinars = [
    {
      id: 1,
      title: 'Introduction to Proposal Writing',
      date: 'September 10, 2023',
      image: '/images/home/2.jpg',
      description: 'Foundational principles of effective proposal writing for beginners.',
      recordingLink: '#',
      duration: '58 min',
      views: '1.2K'
    },
    {
      id: 2,
      title: 'Budgeting for Grants',
      date: 'August 22, 2023',
      image: '/images/home/2.jpg',
      description: 'How to create realistic and compelling budgets for grant applications.',
      recordingLink: '#',
      duration: '45 min',
      views: '980'
    },
    {
      id: 3,
      title: 'Impact Measurement Strategies',
      date: 'July 15, 2023',
      image: '/images/home/2.jpg',
      description: 'Learn how to effectively measure and communicate your project impact.',
      recordingLink: '#',
      duration: '67 min',
      views: '1.5K'
    },
    {
      id: 4,
      title: 'Nonprofit Compliance Regulations',
      date: 'June 28, 2023',
      image: '/images/home/2.jpg',
      description: 'Understanding legal requirements and compliance for nonprofit organizations.',
      recordingLink: '#',
      duration: '72 min',
      views: '1.8K'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <Navbar />
      <br />
      <br />
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Webinars & <span className="text-blue-500">Events</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our educational events to enhance your skills and stay updated on the latest opportunities.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md bg-gray-800 p-1">
            {['Upcoming Events', 'Past Webinars'].map((tab, index) => (
              <button
                key={index}
                onClick={(e) => handleTabChange(e, index)}
                className={`py-2 px-6 text-sm font-medium rounded-md transition-all ${
                  tabValue === index
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <TabPanel value={tabValue} index={0}>
          <div className="grid gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="flex flex-col md:flex-row rounded-lg bg-gray-800 overflow-hidden shadow-lg border border-gray-700"
              >
                <div className="relative w-full md:w-2/5 h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-red-600 text-white text-xs font-medium px-2 py-1 rounded">
                      {event.status}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {event.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 text-sm">
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-blue-500 font-medium text-sm mb-1 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Featured Speakers
                    </h4>
                    <p className="text-gray-300 text-sm pl-6">
                      {event.speakers.join(', ')}
                    </p>
                  </div>
                  
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-sm mt-auto flex items-center justify-center space-x-1 transition-colors">
                    <span>Register Now</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {pastWebinars.map((webinar) => (
              <div
                key={webinar.id}
                className="flex flex-col rounded-lg bg-gray-800 overflow-hidden shadow-lg border border-gray-700"
              >
                <div className="relative h-40">
                  <img
                    src={webinar.image}
                    alt={webinar.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                    onClick={() => handleOpenDialog(webinar)}
                  >
                    <div className="bg-blue-600 rounded-full p-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-3">
                    {webinar.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {webinar.date}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      {webinar.duration} • {webinar.views} views
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-1">
                    {webinar.description}
                  </p>
                  
                  <button
                    onClick={() => handleOpenDialog(webinar)}
                    className="border border-blue-600 text-blue-500 font-medium py-2 px-4 rounded-md text-sm flex items-center justify-center space-x-1 hover:bg-blue-600/10 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                    <span>Watch Recording</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        <div className="mt-12 p-6 bg-gray-800 rounded-lg shadow-lg text-center border border-blue-500/20">
          <h4 className="text-xl font-bold text-white mb-3">
            Request a Custom Workshop
          </h4>
          <p className="text-gray-400 mb-5 text-sm max-w-2xl mx-auto">
            We can develop tailored training sessions for your organization based on your specific needs and goals.
          </p>
          <button className="border border-blue-600 text-blue-500 font-medium py-2 px-5 rounded-md text-sm inline-flex items-center space-x-1 hover:bg-blue-600/10 transition-colors">
            <span>Inquire About Custom Training</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {openDialog && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-lg shadow-2xl max-w-2xl w-full overflow-hidden border border-gray-700">
              <div className="relative">
                <button
                  onClick={handleCloseDialog}
                  className="absolute top-4 right-4 z-10 text-white bg-gray-900 rounded-full p-1 hover:bg-gray-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {selectedWebinar && (
                  <div>
                    <div className="relative pt-[56.25%] bg-black">
                      <img
                        src={selectedWebinar.image}
                        alt={selectedWebinar.title}
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-blue-600 rounded-full p-3 cursor-pointer">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h2 className="text-xl font-bold text-white mb-3">
                        {selectedWebinar.title}
                      </h2>
                      <div className="flex items-center mb-3 text-sm text-gray-300">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {selectedWebinar.date}
                      </div>
                      <p className="text-gray-400 mb-5 text-sm leading-relaxed">
                        {selectedWebinar.description}
                      </p>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-md text-sm inline-flex items-center space-x-1 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        </svg>
                        <span>Play Recording</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebinarsEvents;