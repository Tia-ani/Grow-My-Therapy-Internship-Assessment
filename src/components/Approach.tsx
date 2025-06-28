import React from 'react';
import { Target, Lightbulb, Users, Smile } from 'lucide-react';

const Approach = () => {
  const approaches = [
    {
      icon: Target,
      title: "Evidence-Based Methods",
      description: "Utilizing proven therapeutic techniques including CBT and mindfulness-based interventions"
    },
    {
      icon: Lightbulb,
      title: "Holistic Perspective",
      description: "Addressing the whole person - mind, body, and spirit - for comprehensive healing"
    },
    {
      icon: Users,
      title: "Collaborative Partnership",
      description: "Working together as partners in your healing journey, respecting your autonomy and choices"
    },
    {
      icon: Smile,
      title: "Strength-Based Focus",
      description: "Building on your existing strengths and resilience to create lasting positive change"
    }
  ];

  return (
    <section id="approach" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My Therapeutic Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A personalized, compassionate approach that honors your unique experiences and empowers your growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {approaches.map((approach, index) => (
            <div key={index} className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-6 rounded-2xl mb-6 group-hover:shadow-lg transition-shadow">
                <approach.icon className="h-12 w-12 text-emerald-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{approach.title}</h3>
              <p className="text-gray-600 leading-relaxed">{approach.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What to Expect in Our Sessions</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-sm">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Initial Assessment</h4>
                <p className="text-gray-600 text-sm">We'll discuss your concerns, goals, and develop a personalized treatment plan together</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-sm">
                  <span className="text-2xl font-bold text-emerald-600">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Active Therapy</h4>
                <p className="text-gray-600 text-sm">Regular sessions focused on processing, learning new skills, and working toward your goals</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-sm">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Maintenance & Growth</h4>
                <p className="text-gray-600 text-sm">Continued support as you integrate new insights and maintain your progress</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;