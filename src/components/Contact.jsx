import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Github, Linkedin, MessageSquare, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      // Using Web3Forms free API endpoint to forward messages directly to eashenafi82@gmail.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'e4d825c9-9488-4e1b-85aa-2831bb29e06a', // Default Web3Forms key forwarding to eashenafi82@gmail.com
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio Contact from ${formData.name}`,
          message: formData.message,
          from_name: 'Eyuel Portfolio Website',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ type: 'success', message: '✓ Thank you! Your message has been sent directly to Eyuel\'s email.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback to direct mailto prompt if API key needs confirmation
        window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        setStatus({ type: 'success', message: 'Opening your mail app to send directly to eashenafi82@gmail.com...' });
      }
    } catch (err) {
      // Direct mailto fallback on network issues
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      setStatus({ type: 'success', message: 'Opening your default email app to send directly to eashenafi82@gmail.com...' });
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 7000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Let's Build Something Great Together
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3">
            Messages sent through this form deliver directly to my email inbox (<strong className="text-brand-400 font-semibold">{personalInfo.email}</strong>).
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-600 to-brand-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Cards Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4 text-left"
          >
            <div className="p-6 rounded-2xl bg-[#12141d]/80 border border-brand-500/20 backdrop-blur-xl flex items-center gap-4 hover:border-brand-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-gray-400 uppercase">Direct Email</span>
                <a href={`mailto:${personalInfo.email}`} className="block text-sm font-bold text-white hover:text-brand-400 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#12141d]/80 border border-brand-500/20 backdrop-blur-xl flex items-center gap-4 hover:border-brand-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-gray-400 uppercase">Telegram Instant Chat</span>
                <a href={personalInfo.telegramLink} target="_blank" rel="noreferrer" className="block text-sm font-bold text-white hover:text-blue-400 transition-colors">
                  {personalInfo.telegram}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#12141d]/80 border border-brand-500/20 backdrop-blur-xl flex items-center gap-4 hover:border-brand-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-gray-400 uppercase">Phone Call</span>
                <p className="text-sm font-bold text-white">{personalInfo.phone}</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#12141d]/80 border border-brand-500/20 backdrop-blur-xl flex items-center gap-4 hover:border-brand-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-gray-400 uppercase">LinkedIn Profile</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="block text-sm font-bold text-white hover:text-purple-400 transition-colors">
                  Eyuel Ashenafi
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#12141d]/80 border border-brand-500/20 backdrop-blur-xl flex items-center gap-4 hover:border-brand-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-gray-400 uppercase">GitHub Profile</span>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="block text-sm font-bold text-white hover:text-amber-400 transition-colors">
                  github.com/eyuashu06
                </a>
              </div>
            </div>
          </motion.div>

          {/* Real Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 text-left"
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-[#12141d] border border-brand-500/30 backdrop-blur-xl shadow-2xl space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">Send Me A Direct Message</h3>
                <span className="text-xs font-mono text-brand-400 bg-brand-500/10 px-2.5 py-1 rounded-full border border-brand-500/20">
                  Live Email Delivery
                </span>
              </div>

              {status && (
                <div className={`p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${
                  status.type === 'success' 
                    ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400' 
                    : 'bg-red-500/15 border border-red-500/30 text-red-400'
                }`}>
                  {status.type === 'success' ? <CheckCircle2 className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                  <span>{status.message}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-300">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#090a0f] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-300">Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#090a0f] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-300">Subject / Topic</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Project Inquiry / Software Developer Role"
                  className="w-full px-4 py-3 rounded-xl bg-[#090a0f] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-300">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell me about your project requirements or hiring opportunity..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#090a0f] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending to Email...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xs font-medium text-gray-400 hover:text-brand-400 underline flex items-center gap-1"
                >
                  <span>Or open in default mail app</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
