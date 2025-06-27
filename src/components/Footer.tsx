const Footer = () => {
  return (
    <footer 
      id="contact"
      className="font-bricolage bg-primary text-white py-16 px-8 md:px-20 relative overflow-hidden">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0 relative z-10">
        {/* Left Section */}
        <div className="space-y-2 text-lg font-medium">
          <div className="text-2xl font-bold">Ankush</div>
          <div>+91 7982707948</div>
          <a href="mailto:ankushcohas@gmail.com" className="hover:underline">
            ankushcohas@gmail.com
          </a>
        </div>

        {/* Right Quote */}
        <div className="max-w-md text-right text-lg text-balance leading-relaxed font-medium self-end ml-auto">
          Celebrating India's traditions while<br />
          building a future that's educated,<br />
          expressive and empowered
        </div>
      </div>

      {/* COHAS background text */}
      <div className="absolute bottom-[-10px] md:bottom-[-40px] left-0 w-full px-4 text-[90px] md:text-[150px] md:py-6 font-bold text-white/30 leading-none tracking-tight text-center pointer-events-none select-none">
        COHAS
      </div>
    </footer>
  );
};

export default Footer;
