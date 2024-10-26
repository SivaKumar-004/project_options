import React from 'react';
import { Users, Heart } from 'lucide-react';

export default function MentorshipSection() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center space-x-2 mb-6">
            <Heart className="w-6 h-6 text-red-500" />
            <Users className="w-6 h-6 text-blue-500" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Student Mentorship Support
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our IEDC and Alchemy Club members are here to support you! If you need guidance with your project, 
            we'll connect you with student mentors and faculty who can help bring your ideas to life.
          </p>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            No formal commitments - just students helping students create amazing projects together.
          </p>
        </div>
      </div>
    </div>
  );
}