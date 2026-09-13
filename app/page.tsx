import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Professional from '@/components/Professional'
import Specialties from '@/components/Specialties'
import WhatsAppBooking from '@/components/WhatsAppBooking'
import Location from '@/components/Location'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 w-full pt-24 sm:pt-28 md:pt-32 min-h-screen">
        <div className="flex flex-col w-full">
          <Hero />
          <Professional />
          <Specialties />
          <WhatsAppBooking />
          <Location />
          <FAQ />
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </>
  )
}
