import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Hi, I'm <span className="font-semibold text-gray-900 dark:text-white">Vignesh</span> — a cybersecurity professional passionate about defending digital ecosystems through precision, automation, and insight. With an MSc in Information Security from Royal Holloway, I've built hands-on SOC labs that simulate real-world attack scenarios and automate incident response workflows.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I specialize in log analysis, threat detection, and SOAR integration across hybrid cloud environments. My approach blends curiosity, consistency, and continuous learning — whether it's fine-tuning detection rules or scripting automated defenses.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Security isn't just a job to me — <span className="font-semibold text-gray-900 dark:text-white">it's a mindset</span>.
              </p>
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gray-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Let's Connect
            </button>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional workspace setup"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600 rounded-2xl -z-10 opacity-20 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;