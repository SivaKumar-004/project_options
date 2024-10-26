import React from 'react';
import { Beaker, Home, FileText, Users } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-md bg-gray-900/90 z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <Beaker className="h-8 w-8 text-blue-400" />
            <span className="font-bold text-xl">TechClub</span>
          </div>
          
          <div className="flex space-x-8">
            <a href="#" className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </a>
            <a href="#projects" className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
              <FileText className="h-5 w-5" />
              <span>Projects</span>
            </a>
            <a href="#mentorship" className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
              <Users className="h-5 w-5" />
              <span>Mentorship</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}