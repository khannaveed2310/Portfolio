"use client";

import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { ExperienceSection } from '@/components/experience-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { ParticleCanvas } from '@/components/particle-canvas';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030712] text-slate-100 overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <ParticleCanvas />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}