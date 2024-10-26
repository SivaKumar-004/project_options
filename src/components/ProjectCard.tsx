import React, { useState } from 'react';
import { Users, ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  mentorship: boolean;
  technologies: string[];
}

export default function ProjectCard({ title, description, mentorship, technologies }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300
        ${isExpanded ? 'h-auto' : 'h-[320px]'} overflow-hidden`}
    >
      <div className="p-6 h-full flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{title}</h3>
        
        <div 
          className={`text-gray-600 mb-4 transition-all duration-300
            ${isExpanded ? 'line-clamp-none' : 'line-clamp-3'}`}
        >
          {description}
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            {technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-2.5 py-1 text-sm bg-purple-50 text-purple-700 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {mentorship && (
            <div className="flex items-center text-green-600 space-x-1">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Student Mentors Available</span>
            </div>
          )}
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 w-full flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
        >
          {isExpanded ? (
            <>
              <span className="text-sm mr-1">Show less</span>
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              <span className="text-sm mr-1">Read more</span>
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}