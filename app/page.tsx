import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CountdownSection } from "@/components/countdown-section"
import { CalendarSection } from "@/components/calendar-section"
import { TimelineSection } from "@/components/timeline-section"
import { LocationSection } from "@/components/location-section"
import { DressCodeSection } from "@/components/dress-code-section"
import { RsvpSection } from "@/components/rsvp-section"
import { WishesSection } from "@/components/wishes-section"
import { ContactSection } from "@/components/contact-section"
import { FooterSection } from "@/components/footer-section"

export default function WeddingPage() {
  return (
    <main className="min-h-screen bg-[#faf9f7]">
      <HeroSection />
      <AboutSection />
      <CountdownSection />
      <CalendarSection />
      <TimelineSection />
      <LocationSection />
      <DressCodeSection />
      <RsvpSection />
      <WishesSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
