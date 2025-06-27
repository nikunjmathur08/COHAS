import Logo from "../assets/COHAS.png"

const Header = () => (
  <header className="font-bricolage font-normal bg-transparent w-full py-4 px-6 flex items-center justify-between">
    <div className="flex items-center">
      <img src={Logo} alt="COHAS Logo" className="h-20 w-auto" />
      <span className="sr-only">COHAS - Community of Hope and Support</span>
    </div>
    <nav className="hidden md:flex space-x-8 text-lg">
      <div className="space-x-8 mt-2">
        <a href="#about" className="hover:text-primary transition">About Us</a>
        <a href="#programs" className="hover:text-primary transition">Our Programs</a>
        <a href="#events" className="hover:text-primary transition">Events</a>
        <a href="#team" className="hover:text-primary transition">Our Team</a>
        <a href="#contact" className="hover:text-primary transition">Contact Us</a>
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

export default Header; 