import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: 'Active Directory Detection & Response',
      description: 'Detected unauthorized RDP login attempts using Splunk and automated account disablement via LDAP with Shuffle.',
      impact: 'Improved detection accuracy by 40%, reduced response time by 85%',
      stack: ['Splunk', 'Active Directory', 'Slack', 'Shuffle'],
      icon: '🔐',
      link: 'https://medium.com/@vignesh3967/building-a-complete-soc-lab-active-directory-detection-response-automation-project-f48d2e82a84f'
    },
    {
      title: 'SOC Automation – Wazuh + TheHive + Shuffle',
      description: 'Simulated Mimikatz-based credential dumping using Sysmon logs, automated alert triage with TheHive and VirusTotal enrichment.',
      impact: 'Reduced manual triage effort by 70%',
      stack: ['Wazuh', 'Sysmon', 'VirusTotal', 'TheHive', 'Shuffle'],
      icon: '🛠',
      link: 'https://medium.com/@vignesh3967/soc-automation-with-soar-9203ed8f33b9'
    },
    {
      title: 'SOAR-EDR Integration – LimaCharlie + Tines',
      description: 'Built an automated host isolation pipeline for Lazagne.exe detections. Triggered real-time alerts via Slack and Email using SOAR playbooks.',
      impact: 'Enhanced EDR response time and analyst visibility',
      stack: ['LimaCharlie', 'Tines', 'Python', 'Slack'],
      icon: '🧪',
      link: 'https://medium.com/@vignesh3967/soar-edr-project-automating-incident-response-with-limacharlie-and-tines-9754364ec30c'
    },
    {
      title: '30-Day SOC Challenge – ELK Stack',
      description: 'Monitored and analyzed endpoint telemetry on Windows/Linux environments. Automated alert-to-ticket conversion using OS Ticket.',
      impact: 'Streamlined alert handling in hybrid SOC simulation',
      stack: ['ELK Stack', 'Sysmon', 'OS Ticket'],
      icon: '📊',
      link: 'https://medium.com/@vignesh3967/installing-elastic-defend-a-step-by-step-guide-to-protecting-your-endpoints-6ee9a0008f96'
    },
    {
      title: 'Active Directory Home Lab with Splunk',
      description: 'Used Atomic Red Team & Crowbar to simulate threats. Tuned detection rules and log parsing for AD-based attacks.',
      impact: 'Improved incident response detection logic by 25%',
      stack: ['Splunk', 'Active Directory', 'Atomic Red Team', 'Crowbar'],
      icon: '🎯',
      link: 'https://medium.com/@vignesh3967/simulating-cyber-attack-and-analyzing-logs-in-an-active-directory-home-lab-with-splunk-640c4f88e667'
    }
  ];

  return (
    <section 
      id="projects" 
      ref={ref} 
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Technology background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl mb-4">{project.icon}</div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  title="View Project"
                >
                  <ExternalLink size={20} className="text-gray-600 dark:text-gray-300" />
                </a>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg mb-6">
                <p className="text-green-800 dark:text-green-300 font-medium text-sm">
                  <span className="font-bold">Impact:</span> {project.impact}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;