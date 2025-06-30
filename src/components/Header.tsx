import { useState, useEffect, useRef } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import Logo from '../assets/COHAS.png';

const Header = () => {
  const lenis = useLenis();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target && lenis) {
      lenis.scrollTo(target, {
        offset: -100,
        duration: 1.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
      });
      setIsMenuOpen(false);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="font-bricolage font-normal bg-transparent w-full py-4 px-6 flex items-center justify-between relative z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="COHAS Logo" className="h-20 w-auto" />
        <span className="sr-only">COHAS - Community of Hope and Support</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 text-lg items-center">
        <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-primary transition">About Us</a>
        <a href="#programs" onClick={(e) => handleScroll(e, 'programs')} className="hover:text-primary transition">Our Programs</a>
        <a href="#events" onClick={(e) => handleScroll(e, 'events')} className="hover:text-primary transition">Events</a>
        <a href="#team" onClick={(e) => handleScroll(e, 'team')} className="hover:text-primary transition">Our Team</a>
        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-primary transition">Contact Us</a>
        <a
          href="https://milaap.org/fundraisers/support-underprivilege-children-of-community"
          target="_blank"
          className="bg-primary hover:bg-orange-500 text-white font-semibold py-2 px-5 rounded-full transition"
        >
          Donate Us
        </a>
      </nav>

      {/* Hamburger Button */}
      <button
        ref={buttonRef}
        className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        <span
          className={`absolute h-0.5 w-6 bg-black transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'rotate-45 top-2.5' : 'top-1'
          }`}
        />
        <span
          className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-0' : 'top-3'
          }`}
        />
        <span
          className={`absolute h-0.5 w-6 bg-black transition-transform duration-300 ease-in-out ${
            isMenuOpen ? '-rotate-45 top-2.5' : 'top-5'
          }`}
        />
      </button>

      {/* Mobile Navigation */}
      <div
        ref={menuRef}
        className={`md:hidden absolute top-16 right-0 w-[160px] bg-[#F8E6DD] font-bricolage text-base px-6 py-2 flex flex-col items-end gap-y-5 rounded-3xl shadow-md transition-transform duration-100 ease-in-out transform origin-top ${
          isMenuOpen ? 'scale-y-100' : 'scale-y-0 pointer-events-none'
        }`}
      >
        <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-primary transition">About Us</a>
        <a href="#programs" onClick={(e) => handleScroll(e, 'programs')} className="hover:text-primary transition">Our Programs</a>
        <a href="#events" onClick={(e) => handleScroll(e, 'events')} className="hover:text-primary transition">Events</a>
        <a href="#team" onClick={(e) => handleScroll(e, 'team')} className="hover:text-primary transition">Our Team</a>
        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-primary transition">Contact Us</a>
        <a
          href="https://milaap.org/fundraisers/support-underprivilege-children-of-community"
          target="_blank"
          className="text-primary font-semibold transition"
        >
          Donate Us
        </a>
      </div>
    </header>
  );
};

export default Header;
