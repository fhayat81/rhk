import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CompetenciesSection } from "@/components/competencies-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { ProjectManagementSection } from "@/components/project-management-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Navbar } from "@/components/navbar"
import { ProjectsSection } from "@/components/projects-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CompetenciesSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ProjectManagementSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}
