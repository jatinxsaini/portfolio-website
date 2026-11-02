'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Copy, Check, Send, Sparkles, User, AtSign, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import { profileData } from '@/data/profile';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyEmail = async () => {
    if (profileData.email) {
      try {
        await navigator.clipboard.writeText(profileData.email);
        setCopied(true);
        toast.success('💥 BOOM! EMAIL COPIED TO CLIPBOARD!');
        setTimeout(() => setCopied(false), 2500);
      } catch {
        // Fallback for secure contexts or older browsers
        const textArea = document.createElement('textarea');
        textArea.value = profileData.email;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
        toast.success('💥 EMAIL COPIED TO CLIPBOARD!');
        setTimeout(() => setCopied(false), 2500);
      }
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      toast.error('⚠️ PLEASE FILL IN ALL FORM FIELDS!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email.trim())) {
      toast.error('⚠️ PLEASE ENTER A VALID EMAIL ADDRESS!');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('🚀 OPENING EMAIL CLIENT TO DISPATCH MESSAGE!');
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
      const body = encodeURIComponent(`From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`);
      window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
      setFormState({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-10 sm:py-20 px-3 sm:px-6 lg:px-8 xl:px-10">
      <div className="w-full max-w-[1520px] 2xl:max-w-[1640px] mx-auto">
        <SectionHeading
          badge="FINAL CHAPTER — GET IN TOUCH"
          title="Let's Build Something Together"
          description="Have a project in mind, an engineering role, or just want to say hello? Reach out directly."
          badgeBg="bg-[var(--comic-yellow)] text-[#171717]"
        />

        <div className="grid grid-cols-1 gap-5 sm:gap-7 md:gap-8 items-stretch">
          {/* Main Direct Email Panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="comic-panel bg-[var(--contact-card-bg)] text-[var(--contact-card-text)] p-4 sm:p-8 md:p-12 flex flex-col justify-between rounded-2xl sm:rounded-3xl border-3 sm:border-[4px] border-[var(--border-color)] shadow-[5px_5px_0px_var(--shadow-color)] sm:shadow-[8px_8px_0px_var(--shadow-color)]"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#171717] text-white text-[10px] sm:text-xs font-black uppercase tracking-wider mb-5 sm:mb-6 border-2 border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)]">
                <Sparkles className="w-3.5 h-3.5 text-[var(--comic-yellow)]" />
                <span>DIRECT ACTION</span>
              </div>

              <h3 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-3 sm:mb-4 text-[var(--contact-card-text)]">
                START A CONVERSATION
              </h3>

              <p className="text-xs sm:text-base md:text-lg font-bold opacity-95 leading-relaxed mb-6 sm:mb-8 max-w-lg text-[var(--contact-card-text)]">
                I am available for full-stack engineering roles, contract work, and technical consultation.
              </p>

              {/* Email Copy Box */}
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[var(--card-bg)] border-2 sm:border-[3px] border-[var(--border-color)] shadow-[3px_3px_0px_var(--shadow-color)] sm:shadow-[4px_4px_0px_var(--shadow-color)] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mb-6 sm:mb-8">
                <div className="flex items-center gap-2.5 sm:gap-3 overflow-hidden min-w-0">
                  <Mail className="w-5 h-5 flex-shrink-0 text-[var(--comic-blue)] stroke-[3]" />
                  <span className="font-mono text-xs sm:text-sm md:text-base font-black truncate text-[var(--text-primary)]">
                    {profileData.email}
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                  <Button
                    onClick={copyEmail}
                    size="sm"
                    variant="secondary"
                    arrow="none"
                    className="contact-email-action flex-1 md:flex-none"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-[var(--comic-green)] stroke-[3]" />
                        <span>COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 stroke-[3]" />
                        <span>COPY EMAIL</span>
                      </>
                    )}
                  </Button>

                  <Button
                    href={`mailto:${profileData.email}`}
                    size="sm"
                    variant="secondary"
                    className="contact-email-action flex-1 md:flex-none"
                  >
                    <Send className="w-4 h-4 stroke-[3]" />
                    <span>SEND MAIL</span>
                  </Button>
                </div>
              </div>

              {/* Direct Message Form */}
              <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4 pt-4 border-t-2 sm:border-t-3 border-[var(--border-color)]">
                <h4 className="text-xs sm:text-sm font-black uppercase text-[var(--contact-card-text)] flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 stroke-[3] text-[var(--comic-yellow)]" />
                  <span>OR SEND A QUICK MESSAGE DIRECTLY</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <label htmlFor="contact-name" className="sr-only">
                      Your Name
                    </label>
                    <User className="w-4 h-4 absolute left-3 top-3.5 text-[var(--contact-card-text)] opacity-70 stroke-[3]" aria-hidden="true" />
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      aria-label="Your Name"
                      placeholder="YOUR NAME"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-xs font-black uppercase rounded-xl border-2 border-[var(--input-border)] bg-[var(--input-bg)] text-[var(--input-text)] placeholder-[var(--input-placeholder)] shadow-[2px_2px_0px_var(--shadow-color)] focus:outline-none focus:ring-2 focus:ring-[var(--comic-yellow)]"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="contact-email" className="sr-only">
                      Your Email
                    </label>
                    <AtSign className="w-4 h-4 absolute left-3 top-3.5 text-[var(--contact-card-text)] opacity-70 stroke-[3]" aria-hidden="true" />
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      aria-label="Your Email"
                      placeholder="YOUR EMAIL"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-xs font-black uppercase rounded-xl border-2 border-[var(--input-border)] bg-[var(--input-bg)] text-[var(--input-text)] placeholder-[var(--input-placeholder)] shadow-[2px_2px_0px_var(--shadow-color)] focus:outline-none focus:ring-2 focus:ring-[var(--comic-yellow)]"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="contact-message" className="sr-only">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    aria-label="Your Message"
                    placeholder="YOUR MESSAGE OR PROJECT INQUIRY..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full p-3 text-xs font-black uppercase rounded-xl border-2 border-[var(--input-border)] bg-[var(--input-bg)] text-[var(--input-text)] placeholder-[var(--input-placeholder)] shadow-[2px_2px_0px_var(--shadow-color)] focus:outline-none focus:ring-2 focus:ring-[var(--comic-yellow)]"
                  />
                </div>

                <Button
                  type="submit"
                  size="md"
                  variant="primary"
                  className="w-full justify-center"
                  disabled={isSubmitting}
                >
                  <Send className="w-4 h-4 stroke-[3]" />
                  <span>{isSubmitting ? 'TRANSMITTING...' : 'SUBMIT DIRECT MESSAGE'}</span>
                </Button>
              </form>
            </div>

            <p className="text-[10px] sm:text-xs font-black uppercase text-[var(--contact-card-text)] opacity-90 mt-5 sm:mt-6">
              ⚡ TYPICAL RESPONSE TIME: WITHIN 24 HOURS
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
