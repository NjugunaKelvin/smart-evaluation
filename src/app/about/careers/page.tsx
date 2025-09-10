/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

const Careers = () => {
  const [activeDepartment, setActiveDepartment] = useState('All');
  const [showAllRoles, setShowAllRoles] = useState(false);

  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Design and implement scalable solutions for our proposal management platform. Work with modern technologies to deliver exceptional user experiences."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description: "Lead product strategy and roadmap development. Collaborate with engineering and design teams to deliver features that meet customer needs."
    },
    {
      title: "Customer Success Specialist",
      department: "Customer Experience",
      location: "North America",
      type: "Full-time",
      description: "Ensure client satisfaction and successful implementation of our solutions. Build strong relationships with key stakeholders."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Contract",
      description: "Create intuitive and visually appealing interfaces for our platform. Conduct user research and translate findings into design improvements."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Maintain and improve our infrastructure and deployment pipelines. Ensure system reliability and security."
    },
    {
      title: "Data Analyst",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description: "Analyze user behavior and platform metrics to inform product decisions. Create reports and dashboards for internal stakeholders."
    }
  ];

  const departments = ['All', 'Engineering', 'Product', 'Design', 'Customer Experience'];
  const filteredPositions = activeDepartment === 'All' 
    ? openPositions 
    : openPositions.filter(position => position.department === activeDepartment);

  const displayedPositions = showAllRoles ? filteredPositions : filteredPositions.slice(0, 3);

  return (
    <div className="bg-gray-900 text-white">
        <Navbar />
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        ></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Career Opportunities at Smarteval</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Join our mission to transform proposal management and funding acquisition through technology
          </p>
          <button 
            onClick={() => {
              const el = document.getElementById('open-positions');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            View Open Roles
          </button>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Mission & Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-750 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Our Purpose</h3>
              <p className="text-gray-300">
                Smarteval exists to democratize access to funding opportunities through technology. 
                We provide organizations with the tools they need to create compelling proposals, 
                manage complex application processes, and ultimately secure the resources required 
                to make a meaningful impact.
              </p>
            </div>
            
            <div className="bg-gray-750 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Our Approach</h3>
              <p className="text-gray-300">
                We believe in building products that are both powerful and intuitive. Our team 
                combines deep domain expertise with cutting-edge technology to solve complex 
                challenges in the funding landscape. We prioritize user-centered design and 
                data-driven decision making in everything we do.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 p-10 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 text-center text-blue-400">Core Principles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-xl font-medium mb-3">Excellence</h4>
                <p className="text-gray-300">We strive for exceptional quality in everything we build and deliver to our clients.</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-medium mb-3">Impact</h4>
                <p className="text-gray-300">We measure our success by the success of our clients in securing critical funding.</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-medium mb-3">Innovation</h4>
                <p className="text-gray-300">We continuously explore new approaches to solve complex problems in our domain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Working Environment</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">How We Work</h3>
              <p className="text-gray-300 mb-6">
                At Smarteval, we've built a distributed team that values autonomy, responsibility, 
                and clear communication. We hire professionals who excel in their fields and 
                provide them with the support needed to do their best work.
              </p>
              <p className="text-gray-300">
                Our processes are designed to maximize productivity while minimizing unnecessary 
                meetings and bureaucracy. We believe in transparent goal-setting, regular feedback, 
                and continuous improvement at both individual and organizational levels.
              </p>
            </div>
            <div className="h-full min-h-[400px] rounded-2xl overflow-hidden">
              <div 
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl">
              <h4 className="text-xl font-medium mb-4 text-green-400">Professional Development</h4>
              <p className="text-gray-300">
                We invest in our team's growth through dedicated learning budgets, conference attendance, 
                and opportunities to take on new challenges. We believe that helping our team members 
                develop their skills ultimately benefits our entire organization.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl">
              <h4 className="text-xl font-medium mb-4 text-green-400">Work-Life Balance</h4>
              <p className="text-gray-300">
                While we're committed to doing exceptional work, we recognize that our team members 
                have full lives outside of work. We offer flexible schedules and encourage taking 
                time to recharge. We measure output, not hours worked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Open Positions</h2>
          <p className="text-xl text-gray-300 mb-12 text-center">Current opportunities to join our team</p>
          
          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setActiveDepartment(dept)}
                className={`px-5 py-2 rounded-full transition-colors ${
                  activeDepartment === dept 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-650'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
          
          {displayedPositions.length > 0 ? (
            <div className="space-y-6 mb-12">
              {displayedPositions.map((position, index) => (
                <div key={index} className="bg-gray-750 p-8 rounded-xl border border-gray-700">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold">{position.title}</h3>
                      <div className="flex flex-wrap gap-3 mt-3">
                        <span className="bg-gray-700 px-3 py-1 rounded-md text-sm">{position.department}</span>
                        <span className="bg-gray-700 px-3 py-1 rounded-md text-sm">{position.location}</span>
                        <span className="bg-gray-700 px-3 py-1 rounded-md text-sm">{position.type}</span>
                      </div>
                      <p className="text-gray-300 mt-4">{position.description}</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-750 rounded-xl">
              <p className="text-xl text-gray-300">No open positions in this department at the moment.</p>
              <p className="text-gray-400 mt-2">Please check other departments or check back later.</p>
            </div>
          )}
          
          {filteredPositions.length > 3 && !showAllRoles && (
            <div className="text-center">
              <button 
                onClick={() => setShowAllRoles(true)}
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                View All {filteredPositions.length} Open Roles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Hiring Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-medium mb-3">Initial Review</h3>
              <p className="text-gray-300">Our team reviews your application and credentials against role requirements.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-medium mb-3">Interviews</h3>
              <p className="text-gray-300">Selected candidates will participate in interviews with team members and hiring managers.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-medium mb-3">Decision</h3>
              <p className="text-gray-300">We make hiring decisions based on skills, experience, and cultural fit.</p>
            </div>
          </div>
          
          <div className="mt-16 bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4 text-center">Application Requirements</h3>
            <p className="text-gray-300 text-center">
              We only consider applications for specific open positions. Please apply through the links 
              provided for each role. Unsolicited resumes sent to our general email will not be reviewed 
              or retained.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;