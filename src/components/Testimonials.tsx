import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jennifer M.",
      role: "Marketing Professional",
      content: "Dr. Blake helped me work through severe anxiety that was affecting my work and relationships. Her compassionate approach and practical strategies gave me the tools I needed to reclaim my life. I'm forever grateful.",
      rating: 5
    },
    {
      name: "Michael R.",
      role: "Teacher",
      content: "After struggling with relationship issues for years, I finally found hope working with Dr. Blake. She creates such a safe space where I could be vulnerable and honest. The progress I've made has been life-changing.",
      rating: 5
    },
    {
      name: "Sarah & David",
      role: "Couple",
      content: "Our relationship was in crisis when we started couples therapy. Dr. Blake helped us learn to communicate better and rebuild trust. We're stronger now than we've ever been. Thank you for saving our relationship.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read what clients have to say about their transformative therapy experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="h-8 w-8 text-emerald-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            All testimonials are used with permission and some details have been changed to protect client confidentiality.
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
              <span>98% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
              <span>500+ Sessions Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
              <span>8 Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;