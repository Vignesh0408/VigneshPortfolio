import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      icon: '🧑‍💻',
      title: 'Cyber Security Intern',
      company: 'Verzeo',
      period: 'Mar 2021 – Apr 2021',
      location: 'Chennai, India',
      achievements: [
        'Performed vulnerability assessments on web apps using Nmap & Burp Suite',
        'Automated exploits with Metasploit and delivered payloads via scripted .bat files',
        'Conducted phishing simulations and led employee awareness training sessions',
        'Improved overall detection coverage and security posture by 15%'
      ]
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div
              key={experience.title}
              className={`bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="text-4xl flex-shrink-0">{experience.icon}</div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold">
                        {experience.company}
                      </p>
                    </div>
                    
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                        <Calendar size={16} className="mr-2" />
                        {experience.period}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        {experience.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="text-gray-700 dark:text-gray-300 flex items-start"
                      >
                        <span className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;