import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle2, ExternalLink, ShieldCheck, Sparkles, Eye } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeViewer() {
  const credentials = [
    { title: "BSc Software Engineering Candidate", org: "Adama Science and Technology University (ASTU)", highlight: "Active" },
    { title: "Software Engineering Intern", org: "Omishtu Software (Metebaber Building System)", highlight: "Completed" },
    { title: "Full-Stack Web Architecture", org: "Next.js, React, Django, Node.js, Laravel, SQL/NoSQL", highlight: "Verified" },
    { title: "Production Deliveries", org: "3+ Live Vercel Deployments with CI/CD", highlight: "Live" }
  ];

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-[#0c0d14]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Official Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Curriculum Vitae & Verified Qualifications
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3">
            Download my comprehensive resume for technical interviews, role requirements, and hiring evaluations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-600 to-brand-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Streamlined Resume Showcase Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#12141d] border border-brand-500/30 backdrop-blur-xl shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Verified Qualifications List */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <span className="text-xs font-mono text-brand-400 uppercase tracking-widest font-semibold">
                  Verified Candidate Profile
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {personalInfo.name}
                </h3>
                <p className="text-sm text-gray-300 mt-1">
                  {personalInfo.title} • {personalInfo.location}
                </p>
              </div>

              {/* Key Credentials */}
              <div className="space-y-3 pt-2">
                {credentials.map((cred) => (
                  <div
                    key={cred.title}
                    className="flex items-start justify-between gap-3 p-3.5 rounded-xl bg-[#090a0f] border border-white/5 hover:border-brand-500/30 transition-colors"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <ShieldCheck className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-semibold text-white truncate">
                          {cred.title}
                        </h4>
                        <p className="text-[11px] text-gray-400 truncate mt-0.5">
                          {cred.org}
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-brand-500/10 text-brand-400 border border-brand-500/20 flex-shrink-0">
                      {cred.highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Direct Download & Preview Box */}
            <div className="lg:col-span-5 flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-[#090a0f] border border-brand-500/30 space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-600 to-brand-400 p-0.5 shadow-xl shadow-brand-500/20">
                <div className="w-full h-full bg-[#12141d] rounded-[14px] flex items-center justify-center text-brand-400">
                  <FileText className="w-8 h-8" />
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-white">Eyuel_Ashenafi_Resume.pdf</h4>
                <p className="text-xs text-gray-400 mt-1">Official Technical Resume • PDF format</p>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Ready for Download</span>
                </div>
              </div>

              <div className="w-full space-y-2.5 pt-2">
                <a
                  href={personalInfo.resumePdf}
                  download
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-[1.02] transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>

                <a
                  href={personalInfo.resumePdf}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all"
                >
                  <Eye className="w-4 h-4 text-brand-400" />
                  <span>Preview in New Tab</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
