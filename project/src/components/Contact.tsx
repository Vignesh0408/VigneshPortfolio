import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mpwlllqr", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('✅ Thank you! Your message was sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('⚠️ Oops! Something went wrong. Please try again later.');
      }
    } catch (error) {
      alert('❌ Error sending message. Please try again.');
    }

    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/vigneshambaykar',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/Vignesh0408',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      icon: ExternalLink,
      label: 'Medium',
      url: 'https://medium.com/@vignesh3967',
      color: 'hover:text-green-600'
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Let's work together
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, 
              or potential collaborations in cybersecurity. Feel free to reach out!
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg mr-4">
                  <Mail size={20} className="text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                  <a href="mailto:vigneshambaykarjob@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    vigneshambaykarjob@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg mr-4">
                  <MapPin size={20} className="text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">Chennai, India</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
                     className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-lg transition-all duration-300 hover:scale-110 ${link.color}`}
                     aria-label={link.label}>
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text" name="name" required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-500 outline-none placeholder-transparent"
                  />
                  <label className="absolute left-4 -top-2.5 bg-white dark:bg-gray-800 px-1 text-sm text-gray-600 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm">
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email" name="email" required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-500 outline-none placeholder-transparent"
                  />
                  <label className="absolute left-4 -top-2.5 bg-white dark:bg-gray-800 px-1 text-sm text-gray-600 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm">
                    Your Email
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text" name="subject" required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-500 outline-none placeholder-transparent"
                />
                <label className="absolute left-4 -top-2.5 bg-white dark:bg-gray-800 px-1 text-sm text-gray-600 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm">
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message" required rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-500 outline-none placeholder-transparent resize-none"
                />
                <label className="absolute left-4 -top-2.5 bg-white dark:bg-gray-800 px-1 text-sm text-gray-600 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm">
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;