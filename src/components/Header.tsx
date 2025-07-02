import { useState, useEffect, useRef } from 'react';
import Logo from '../assets/COHAS.png';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const handleRouteScroll = (sectionId: string, path: string) => {
    localStorage.setItem('scrollTarget', sectionId);
    setIsMenuOpen(false);
    setAboutOpen(false);
    setProgramOpen(false);
    navigate(path);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      gsap.to(window, {
        duration: 2,
        scrollTo: {
          y: target,
          offsetY: 100,
        },
        ease: 'power4.out',
      });
      setIsMenuOpen(false);
      setAboutOpen(false);
      setProgramOpen(false);
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
        setAboutOpen(false);
        setProgramOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="font-bricolage font-normal bg-transparent w-full py-4 px-6 flex items-center justify-between relative z-50">
      {/* Logo */}
      <div className="flex items-center">
        <a href='' onClick={() => handleRouteScroll('', '/')}>
          <img src={Logo} alt="COHAS Logo" className="h-20 w-auto" />
          <span className="sr-only">COHAS - Community of Hope and Support</span>
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 text-lg items-center">
        <div 
          className='relative'
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >
          <a
            href='#about'
            onClick={(e) => handleScroll(e, 'about')}
            className='hover:text-primary transition'
          >
            About Us
          </a>
          {aboutOpen && (
            <div className='absolute top-full left-0 bg-white text-black shadow-lg rounded-2xl p-4 space-y-2 min-w-[160px] z-50'>
              <a href='/about' onClick={() => handleRouteScroll('mission', '/about')} className='hover:text-primary block'>Our Mission</a>
              <a href='/about' onClick={() => handleRouteScroll('vision', '/about')} className='hover:text-primary block'>Our Vision</a>
            </div>
          )}
        </div>
        <div
          className='relative'
          onMouseEnter={() => setProgramOpen(true)}
          onMouseLeave={() => setProgramOpen(false)}
        >
          <a 
            href="#programs" 
            onClick={(e) => handleScroll(e, 'programs')} 
            className="hover:text-primary transition"
          >
            Our Programs
          </a>
          {programOpen && (
            <div className='absolute top-full left-0 bg-white text-black shadow-lg rounded-2xl p-4 space-y-2 min-w-[160px] z-50'>
              <a href='/program' onClick={() => handleRouteScroll('education', '/program')} className='hover:text-primary block'>Education</a>
              <a href='/program' onClick={() => handleRouteScroll('healthcare', '/program')} className='hover:text-primary block'>Healthcare</a>
              <a href='/program' onClick={() => handleRouteScroll('empowerment', '/program')} className='hover:text-primary block'>Empowerment</a>
            </div>
          )}
        </div>
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
        <div className='w-full'>
          <button
            onClick={() => setAboutOpen((prev) => !prev)}
            className='w-full text-right hover:text-primary'
          >
            About Us
          </button>
          {aboutOpen && (
            <div className='ml-3 mt-1 space-y-2 text-sm text-right'>
              <a href='/about' onClick={() => handleRouteScroll('mission', '/about')} className='block hover:text-primary'>Our Mission</a>
              <a href='/about' onClick={() => handleRouteScroll('vision', '/about')} className='block hover:text-primary'>Our Vision</a>
            </div>
          )}
        </div>
        <div className='w-full'>
          <button
            onClick={() => setProgramOpen((prev) => !prev)}
            className='w-full text-right hover:text-primary'
          >
            Our Programs
          </button>
          {programOpen && (
            <div className='ml-3 mt-1 space-y-2 text-sm text-right'>
              <a href='/program' onClick={() => handleRouteScroll('education', '/program')} className='block hover:text-primary'>Education</a>
              <a href='/program' onClick={() => handleRouteScroll('healthcare', '/program')} className='block hover:text-primary'>Healthcare</a>
              <a href='/program' onClick={() => handleRouteScroll('empowerment', '/program')} className='block hover:text-primary'>Empowerment</a>
            </div>
          )}
        </div>
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
