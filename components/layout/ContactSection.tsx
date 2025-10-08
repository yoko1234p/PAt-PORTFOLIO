'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Footer } from '@/components/layout/Footer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ContactSection: React.FC<{ lang?: 'zh-hk' | 'en' }> = ({ lang = 'zh-hk' }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on scroll
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 3,
          ease: 'power1.inOut',
        },
        y: -20,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const content =
    lang === 'zh-hk'
      ? {
          title: '聯絡我',
          subtitle: '有項目合作或工作機會?歡迎聯絡!',
          form: {
            name: '姓名',
            email: '電郵',
            message: '訊息',
            submit: '發送訊息',
            success: '訊息已成功發送!',
            error: '發送失敗,請稍後再試。',
          },
          direct: '直接聯絡',
          email: 'pathoworkmail@gmail.com',
          phone: '+852 5301 1499',
          social: '社交媒體',
        }
      : {
          title: 'Get In Touch',
          subtitle: "Have a project or opportunity? Let's connect!",
          form: {
            name: 'Name',
            email: 'Email',
            message: 'Message',
            submit: 'Send Message',
            success: 'Message sent successfully!',
            error: 'Failed to send. Please try again later.',
          },
          direct: 'Direct Contact',
          email: 'pathoworkmail@gmail.com',
          phone: '+852 5301 1499',
          social: 'Social Media',
        };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" ref={sectionRef} className="snap-section">
      <div className="snap-content bg-prussian-blue-500 overflow-visible flex items-center justify-center min-h-screen">
        <div className="container mx-auto max-w-5xl px-6 py-16 pt-28">
          <h2
            className="text-4xl md:text-5xl font-bold text-sky-blue-400 mb-4 text-center"
            data-aos="fade-up"
          >
            {content.title}
          </h2>
          <p
            className="text-sky-blue-700 text-center mb-16 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {content.subtitle}
          </p>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="md:col-span-3" data-aos="fade-right">
              <Card className="bg-prussian-blue-400/40 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-sky-blue-400 mb-2"
                    >
                      {content.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-ut-orange-500/30 bg-prussian-blue-600/40 text-sky-blue-900 placeholder:text-sky-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                      placeholder={lang === 'zh-hk' ? '你的名字' : 'Your name'}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-sky-blue-400 mb-2"
                    >
                      {content.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-ut-orange-500/30 bg-prussian-blue-600/40 text-sky-blue-900 placeholder:text-sky-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                      placeholder={lang === 'zh-hk' ? '你的電郵' : 'your.email@example.com'}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-sky-blue-400 mb-2"
                    >
                      {content.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-ut-orange-500/30 bg-prussian-blue-600/40 text-sky-blue-900 placeholder:text-sky-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none transition-all"
                      placeholder={lang === 'zh-hk' ? '你的訊息...' : 'Your message...'}
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full">
                    {content.form.submit}
                  </Button>

                  {status === 'success' && (
                    <p className="text-sm text-sky-blue-400 text-center font-medium">
                      ✓ {content.form.success}
                    </p>
                  )}

                  {status === 'error' && (
                    <p className="text-sm text-ut-orange-500 text-center font-medium">
                      ✗ {content.form.error}
                    </p>
                  )}
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6" data-aos="fade-left">
              <Card className="bg-prussian-blue-400/40 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-sky-blue-400 mb-6">
                  {content.direct}
                </h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-sky-blue-700 mb-1 font-medium">Email</p>
                    <a
                      href={`mailto:${content.email}`}
                      className="text-ut-orange-400 hover:text-sky-blue-400 transition-colors font-semibold"
                    >
                      {content.email}
                    </a>
                  </div>

                  <div>
                    <p className="text-sm text-sky-blue-700 mb-1 font-medium">Phone</p>
                    <a
                      href={`tel:${content.phone.replace(/\s/g, '')}`}
                      className="text-ut-orange-400 hover:text-sky-blue-400 transition-colors font-semibold"
                    >
                      {content.phone}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 text-prussian-blue-500 rounded-2xl p-6 border-0">
                <h4 className="font-bold mb-3">{lang === 'zh-hk' ? '可用性' : 'Availability'}</h4>
                <p className="text-sm opacity-90">
                  {lang === 'zh-hk'
                    ? '我現時接受自由工作項目與全職機會。一般會於24小時內回覆。'
                    : "I'm currently available for freelance projects and full-time opportunities. I usually respond within 24 hours."}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* Footer inside Contact Section */}
      <Footer lang={lang} />
    </section>
  );
};
