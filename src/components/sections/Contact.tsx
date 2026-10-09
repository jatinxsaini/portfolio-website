'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Copy, Check, Send, Sparkles, MessageSquare, User, AtSign, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import { profileData } from '@/data/profile';
import { socialLinksData } from '@/data/social-links';
import { SectionHeading } from '../ui/SectionHeading';
import { SocialIcon } from '../ui/SocialIcon';
import { Button } from '../ui/Button';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyEmail = () => {
    if (profileData.email) {
      navigator.clipboard.writeText(profileData.email);
      setCopied(true);
      toast.success('💥 BOOM! EMAIL COPIED TO CLIPBOARD!');
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      toast.error('⚠️ PLEASE FILL IN ALL FORM FIELDS!');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('🚀 MESSAGE SENT! THANK YOU FOR REACHING OUT!');
      setFormState({ name: '', email: '', message: '' });
    }, 1000);
  };

  const activeSocials = socialLinksData.filter((link) => link.url);

  return (
    <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="FINAL CHAPTER — GET IN TOUCH"
          title="Let's Build Something Together"
          description="Have a project in mind, an engineering role, or just want to say hello? Reach out directly."
          badgeBg="bg-[#FFE500] text-[#171717]"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Main Direct Email Panel (Comic Yellow) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 comic-panel bg-[#FFE500] text-[#171717] p-8 sm:p-12 flex flex-col justify-between rounded-3xl border-[4px] border-[#171717] shadow-[8px_8px_0px_#171717]"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#171717] text-white text-xs font-black uppercase tracking-wider mb-6 border-2 border-[#171717]">
                <Sparkles className="w-3.5 h-3.5 text-[#FFE500]" />
                <span>DIRECT ACTION</span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4">
                START A CONVERSATION
              </h3>

              <p className="text-base sm:text-lg font-bold opacity-95 leading-relaxed mb-8 max-w-lg">
                I am available for full-stack engineering roles, contract work, and technical consultation.
              </p>

              {/* Email Copy Box */}
              <div className="p-4 rounded-2xl bg-[#FFFFFF] border-[3px] border-[#171717] shadow-[4px_4px_0px_#171717] flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3 w-full sm:w-auto overflow-hidden">
                  <Mail className="w-5 h-5 flex-shrink-0 text-[#245BFF] stroke-[3]" />
                  <span className="font-mono text-sm sm:text-base font-black truncate text-[#171717]">
                    {profileData.email}
                  </span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={copyEmail}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#171717] text-white font-black text-xs uppercase flex items-center justify-center gap-1.5 cursor-pointer border-2 border-[#171717] shadow-[2px_2px_0px_#171717] hover:bg-[#245BFF] transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-[#B9F227] stroke-[3]" />
                        <span>COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 stroke-[3]" />
                        <span>COPY EMAIL</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${profileData.email}`}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#B9F227] text-[#171717] font-black text-xs uppercase flex items-center justify-center gap-1.5 cursor-pointer border-2 border-[#171717] shadow-[2px_2px_0px_#171717] hover:bg-[#FFE500] transition-colors"
                  >
                    <Send className="w-4 h-4 stroke-[3]" />
                    <span>SEND MAIL</span>
                  </a>
                </div>
              </div>

              {/* Direct Message Form */}
              <form onSubmit={handleFormSubmit} className="space-y-4 pt-4 border-t-3 border-[#171717]">
                <h4 className="text-sm font-black uppercase text-[#171717] flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 stroke-[3]" />
                  <span>OR SEND A QUICK MESSAGE DIRECTLY</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3.5 text-[#171717] stroke-[3]" />
                    <input
                      type="text"
                      placeholder="YOUR NAME"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-xs font-black uppercase rounded-xl border-2 border-[#171717] bg-[#FFFFFF] text-[#171717] placeholder-[#171717]/60 shadow-[2px_2px_0px_#171717] focus:outline-none focus:bg-[#FFF8E7]"
                    />
                  </div>

                  <div className="relative">
                    <AtSign className="w-4 h-4 absolute left-3 top-3.5 text-[#171717] stroke-[3]" />
                    <input
                      type="email"
                      placeholder="YOUR EMAIL"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-xs font-black uppercase rounded-xl border-2 border-[#171717] bg-[#FFFFFF] text-[#171717] placeholder-[#171717]/60 shadow-[2px_2px_0px_#171717] focus:outline-none focus:bg-[#FFF8E7]"
                    />
                  </div>
                </div>

                <textarea
                  rows={3}
                  placeholder="YOUR MESSAGE OR PROJECT INQUIRY..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full p-3 text-xs font-black uppercase rounded-xl border-2 border-[#171717] bg-[#FFFFFF] text-[#171717] placeholder-[#171717]/60 shadow-[2px_2px_0px_#171717] focus:outline-none focus:bg-[#FFF8E7]"
                />

                <Button
                  type="submit"
                  size="md"
                  variant="primary"
                  className="w-full justify-center bg-[#171717] text-white hover:bg-[#245BFF]"
                  disabled={isSubmitting}
                >
                  <Send className="w-4 h-4 stroke-[3]" />
                  <span>{isSubmitting ? 'TRANSMITTING...' : 'SUBMIT DIRECT MESSAGE'}</span>
                </Button>
              </form>
            </div>

            <p className="text-xs font-black uppercase text-[#171717] mt-6">
              ⚡ TYPICAL RESPONSE TIME: WITHIN 24 HOURS
            </p>
          </motion.div>

          {/* Social Profiles Grid Panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 comic-panel bg-[#FFFFFF] text-[#171717] p-8 sm:p-12 flex flex-col justify-between rounded-3xl border-[4px] border-[#171717] shadow-[8px_8px_0px_#171717]"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#FF3B30] text-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
                  <MessageSquare className="w-6 h-6 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-black uppercase text-[#171717]">Connect Online</h3>
              </div>

              <p className="text-sm font-bold text-[#171717] mb-6">
                Find me across code repositories, developer communities, and social networks:
              </p>

              <div className="space-y-3">
                {activeSocials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl border-[2.5px] border-[#171717] bg-[#FFF8E7] hover:bg-[#FFE500] shadow-[3px_3px_0px_#171717] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#FFFFFF] border border-[#171717] text-[#171717]">
                        <SocialIcon name={social.iconName} className="w-5 h-5" />
                      </div>
                      <span className="font-black text-sm uppercase text-[#171717]">{social.label}</span>
                    </div>
                    <span className="text-xs font-black uppercase text-[#245BFF] group-hover:translate-x-1 transition-transform">
                      VISIT &rarr;
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {profileData.location && (
              <div className="mt-8 pt-6 border-t-3 border-[#171717] text-xs font-black uppercase text-[#171717]">
                LOCATION: <span className="underline underline-offset-4">{profileData.location}</span>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
