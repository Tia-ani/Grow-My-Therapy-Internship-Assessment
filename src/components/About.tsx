import React from 'react';
import { GraduationCap, Award, Heart, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Dr. Serena Blake
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to providing compassionate, evidence-based therapy to help you achieve lasting mental wellness
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/image.png" 
              alt="Dr. Serena Blake" 
              className="rounded-2xl shadow-lg w-full"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
              with eight years of experience and over 500 client sessions. She blends evidence-based 
              approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, 
              personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you meet in her Maplewood Drive office or connect virtually via Zoom, 
              Dr. Blake is committed to creating a safe, supportive space for you to thrive. 
              Her approach combines proven therapeutic techniques with genuine understanding 
              and respect for your unique journey.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Education</h3>
                  <p className="text-gray-600 text-sm">PsyD in Clinical Psychology</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <Award className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">License</h3>
                  <p className="text-gray-600 text-sm">Licensed Clinical Psychologist, CA</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Specializations</h3>
                  <p className="text-gray-600 text-sm">Anxiety, Relationships, Trauma Recovery</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <Clock className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Experience</h3>
                  <p className="text-gray-600 text-sm">8 years, 500+ sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;