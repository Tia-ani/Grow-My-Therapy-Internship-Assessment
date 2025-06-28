import React from 'react';
import { Brain, Users, Heart, Clock, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Anxiety & Stress Management",
      description: "Evidence-based techniques to help you manage anxiety and develop healthy coping strategies",
      features: ["Cognitive-Behavioral Therapy", "Mindfulness Techniques", "Stress Reduction", "Panic Disorder Treatment"],
      duration: "50 minutes",
      price: "$200"
    },
    {
      icon: Users,
      title: "Relationship Counseling",
      description: "Strengthen your relationships and improve communication with your partner",
      features: ["Communication Skills", "Conflict Resolution", "Intimacy Issues", "Pre-marital Counseling"],
      duration: "75 minutes",
      price: "$240"
    },
    {
      icon: Heart,
      title: "Trauma Recovery",
      description: "Specialized treatment for trauma and PTSD using compassionate, evidence-based approaches",
      features: ["EMDR Therapy", "Trauma-Informed Care", "PTSD Treatment", "Safety & Stabilization"],
      duration: "60 minutes",
      price: "$200"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Therapeutic Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive mental health services designed to support your journey toward healing and growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-100 p-3 rounded-xl">
                  <service.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {service.duration}
                    </div>
                    <div className="font-semibold text-emerald-600">{service.price}</div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors font-semibold">
                Schedule Session
              </button>
            </div>
          ))}
        </div>

        <div className="bg-emerald-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Session Options & Payment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <h4 className="text-lg font-semibold mb-3">In-Person Sessions</h4>
              <p className="text-emerald-100">Tuesday & Thursday<br />10 AM - 6 PM</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Virtual Sessions (Zoom)</h4>
              <p className="text-emerald-100">Monday, Wednesday & Friday<br />1 PM - 5 PM</p>
            </div>
          </div>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Insurance is not accepted, but superbills are provided for self-submission to your insurance provider.
          </p>
          <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
            Schedule Your Session
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;