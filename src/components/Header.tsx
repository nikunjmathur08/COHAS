import { useLenis } from '@studio-freight/react-lenis';
import Logo from '../assets/COHAS.png';

const Header = () => {
  const lenis = useLenis();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target && lenis) {
      lenis.scrollTo(target, {
        offset: -100,
        duration: 1.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
      });
    }
  };

  return (
    <header className="font-bricolage font-normal bg-transparent w-full py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <img src={Logo} alt="COHAS Logo" className="h-20 w-auto" />
        <span className="sr-only">COHAS - Community of Hope and Support</span>
      </div>
      <nav className="hidden md:flex space-x-8 text-lg">
        <div className="space-x-8 mt-2">
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-primary transition">About Us</a>
          <a href="#programs" onClick={(e) => handleScroll(e, 'programs')} className="hover:text-primary transition">Our Programs</a>
          <a href="#events" onClick={(e) => handleScroll(e, 'events')} className="hover:text-primary transition">Events</a>
          <a href="#team" onClick={(e) => handleScroll(e, 'team')} className="hover:text-primary transition">Our Team</a>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-primary transition">Contact Us</a>
        </div>
        <a 
          href="https://milaap.org/fundraisers/support-underprivilege-children-of-community"
          target="_blank"
          className="bg-primary hover:bg-orange-500 text-white font-semibold py-2 px-5 rounded-full transition"
        >
          Donate Us
        </a>
      </nav>
    </header>
  );
};

export default Header;