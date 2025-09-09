// app/page.tsx
import Landing from '@/homeSections/Landing';
import Clients from '@/homeSections/Clients';
import Services from '@/homeSections/Services';
import Funding from '@/homeSections/Funding';
import Tenders from '@/homeSections/Tenders';
import Testimonials from '@/homeSections/Testimonials';
import CTA from '@/homeSections/CTA';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Landing />
      <Clients />
      <Services />
      <Funding />
      <Tenders />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}