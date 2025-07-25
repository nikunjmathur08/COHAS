import Background from '../assets/Background.png';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import { AboutUsSection, StatsSection} from '../components/AboutUsSection';
import ProgramSection from '../components/ProgramSection';
import EventSection from '../components/EventSection';
import TeamSection from '../components/TeamSection';
import Donate from '../components/Donate';
import Footer from '../components/Footer';
import Sponsors from '../components/Sponsors';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F8E6DD] relative overflow-x-hidden">
      <img 
        src={Background} 
        alt="Background" 
        className="fixed top-0 left-1/2 transform -translate-x-1/2 object-contain h-auto w-auto max-w-[1400px] max-h-none opacity-15 z-0 pointer-events-none select-none"
      />
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto md:px-6">
          <Header />
          <main>
            <HeroSection />
            <AboutUsSection />
            <StatsSection />
            <ProgramSection />
            <EventSection />
            <TeamSection />
          </main>
          <Donate />
          <Sponsors />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
