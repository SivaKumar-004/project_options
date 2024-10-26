import React from 'react';
import { Lightbulb, Brain, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gray-900 text-white pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Final Year Project Ideas
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Discover innovative project opportunities with peer support and guidance
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors">
              <Lightbulb className="w-8 h-8 text-blue-400 mx-auto mb-4 animate-float" />
              <h3 className="text-lg font-semibold mb-2">Real-World Impact</h3>
              <p className="text-gray-400">Solve actual challenges in waste management and elderly care</p>
            </div>
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors">
              <Brain className="w-8 h-8 text-purple-400 mx-auto mb-4 animate-float" />
              <h3 className="text-lg font-semibold mb-2">Student Mentorship</h3>
              <p className="text-gray-400">Get support from IEDC and Alchemy Club members</p>
            </div>
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors">
              <Rocket className="w-8 h-8 text-pink-400 mx-auto mb-4 animate-float" />
              <h3 className="text-lg font-semibold mb-2">Build Your Future</h3>
              <p className="text-gray-400">Create projects that showcase your skills</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}