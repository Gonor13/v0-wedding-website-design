import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import TimelineSection from '@/components/timeline-section'
import LocationSection from '@/components/location-section'
import CountdownSection from '@/components/countdown-section'
import RSVPSection from '@/components/rsvp-section'
import FooterSection from '@/components/footer-section'
import CalendarSection from '@/components/calendar-section'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <LocationSection />
      <CountdownSection />
      <CalendarSection />
      <RSVPSection />
      <FooterSection />
    </div>
  )
}
