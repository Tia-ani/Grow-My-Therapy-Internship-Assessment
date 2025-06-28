import React from 'react';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Find Your Path to
                <span className="text-emerald-600 block">Mental Wellness</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional, compassionate therapy to help you overcome anxiety, strengthen relationships, 
                and heal from trauma. Available both in-person and virtually.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={scrollToContact}
                  className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2 text-lg font-semibold"
                >
                  Schedule Consultation
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-all duration-300 text-lg font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="/src/assets/image.png" 
                alt="Dr. Serena Blake" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">500+</p>
                    <p className="text-sm text-gray-600">Sessions Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Shield className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Licensed & Certified</h3>
              <p className="text-gray-600">Licensed Clinical Psychologist (PsyD) in California</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Award className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">8 Years Experience</h3>
              <p className="text-gray-600">Extensive experience in anxiety, relationships, and trauma therapy</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Care</h3>
              <p className="text-gray-600">Evidence-based approaches tailored to your unique needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;