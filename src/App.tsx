import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import MentorshipSection from './components/MentorshipSection';

const projects = [
  {
    title: "E-Waste Management Solutions",
    description: "Kerala faces challenges in managing electronic waste due to high consumption of electronic goods. Develop innovative solutions for efficient recovery of valuable materials from e-waste, creating job opportunities while protecting the environment.",
    technologies: ["Hardware", "IoT", "Chemical Engineering", "Automation"],
    mentorship: true
  },
  {
    title: "Glass Recycling Innovation",
    description: "Create economically viable solutions for glass recycling in Kerala. Focus on developing alternative uses and processing technologies to address the current lack of recycling infrastructure.",
    technologies: ["Material Science", "Chemical Engineering", "Automation"],
    mentorship: true
  },
  {
    title: "Smart Waste Collection Trolley",
    description: "Design a lightweight, collapsible trolley for waste collection in narrow alleys and rural roads. Must handle 50kg loads, navigate difficult terrains, and have minimal storage footprint.",
    technologies: ["Mechanical Engineering", "Product Design", "Ergonomics"],
    mentorship: true
  },
  {
    title: "Advanced Sanitation Toolkit",
    description: "Redesign sanitation tools for Haritha Karmasena workers, focusing on portability, efficiency, and ergonomics. Create tools that are easy to clean, carry, and use in public transport.",
    technologies: ["Product Design", "Ergonomics", "Material Science"],
    mentorship: true
  },
  {
    title: "Eco-friendly Disassembly Tools",
    description: "Develop specialized tools for safe and efficient disassembly of materials at recovery facilities, eliminating dangerous practices like wire burning while ensuring worker safety.",
    technologies: ["Mechanical Engineering", "Safety Design", "Material Science"],
    mentorship: true
  },
  {
    title: "Manual Composting Shredder",
    description: "Create an economically viable manual shredder for decentralized aerobic composting units. Focus on efficiency, durability, and ease of use without requiring electrical power.",
    technologies: ["Mechanical Engineering", "Green Technology", "Product Design"],
    mentorship: true
  },
  {
    title: "Smart Waste Segregation System",
    description: "Automate the segregation of mixed waste from street sweeping. Develop mobile solutions for efficient waste separation and management in public places.",
    technologies: ["Automation", "IoT", "Machine Learning", "Robotics"],
    mentorship: true
  },
  {
    title: "Intelligent Litter Box System",
    description: "Design an effective waste washer system for public litter boxes to clean recyclables before sending to RRF, addressing issues of contamination and hygiene.",
    technologies: ["Product Design", "Water Management", "Automation"],
    mentorship: true
  },
  {
    title: "Modern Fish Vending Solution",
    description: "Create an innovative trolley box system for fish vendors, replacing traditional head-carried aluminum basins with an ergonomic, efficient, and hygienic solution.",
    technologies: ["Product Design", "Food Safety", "Ergonomics"],
    mentorship: true
  },
  {
    title: "Smart Community Composting",
    description: "Upgrade the Thumboormuzhi aerobic composting device with smart features, improved efficiency, and better space utilization for community-level waste management.",
    technologies: ["IoT", "Green Technology", "Product Design"],
    mentorship: true
  },
  {
    title: "AI Fall Detection System",
    description: "Develop an intelligent system to detect falls among elderly individuals and automatically notify caregivers or emergency services for prompt intervention.",
    technologies: ["AI", "IoT", "Mobile Development", "Sensors"],
    mentorship: true
  },
  {
    title: "Smart Elderly Care Solutions",
    description: "Create innovative solutions for elderly care, including GPS tracking, medication management, and adaptive bedding systems to enhance quality of life.",
    technologies: ["IoT", "Mobile Development", "Hardware", "AI"],
    mentorship: true
  }
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <section id="projects" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Problem Statements
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore innovative solutions to real-world challenges in waste management and elderly care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="mentorship">
        <MentorshipSection />
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 TechClub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;