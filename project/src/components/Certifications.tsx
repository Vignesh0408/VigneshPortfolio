import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Certifications: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const certifications = [
    {
      icon: '🥇',
      title: 'SOC Analyst Learning Path',
      issuer: 'LetsDefend',
      year: '2024',
      description: 'Comprehensive SOC analyst training covering threat detection and incident response'
    },
    {
      icon: '🏅',
      title: 'Network Support and Security',
      issuer: 'Cisco Networking Academy',
      year: '2023',
      description: 'Network fundamentals and security principles certification'
    },
    {
      icon: '🧠',
      title: 'Full Ethical Hacking & Penetration Testing',
      issuer: 'Udemy Bootcamp',
      year: '2022',
      description: 'Complete ethical hacking methodology and penetration testing techniques'
    },
    {
      icon: '🛡',
      title: 'Cybersecurity Virtual Experience Programs',
      issuer: 'Mastercard & AIG – Forage Platform',
      year: '2021',
      description: 'Phishing simulation, zero-day response, and ransomware decryption using Python'
    }
  ];

  return (
    <section 
      id="certifications" 
      ref={ref} 
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black"
    >
      <div className="container mx-auto px-6">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Certifications & Recognition
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={`bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {cert.year}
                  </span>
                  <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors opacity-0 group-hover:opacity-100">
                    <ExternalLink size={16} className="text-gray-600 dark:text-gray-300" />
                  </button>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {cert.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">
                {cert.issuer}
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {cert.description}
              </p>

              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Award size={16} className="mr-2" />
                  Verified Certification
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;