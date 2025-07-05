const Footer = () => {
  return (
    <footer 
      id="contact"
      className="font-bricolage bg-primary text-white py-16 px-8 md:px-20 relative overflow-hidden"
    >
      {/* Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
        
        {/* Sitelinks */}
        <div>
          <h3 className="text-xl font-bold mb-4">Sitelinks</h3>
          <ul className="space-y-2 text-white font-normal">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/program" className="hover:underline">Our Programs</a></li>
            <li><a href="/involve" className="hover:underline">Get Involved</a></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">About</h3>
          <ul className="space-y-2 text-white font-normal">
            <li><a href="/about" className="hover:underline">Overview</a></li>
            <li><a href="/about" className="hover:underline">Our Team</a></li>
            <li><a href="/about" className="hover:underline">Success Stories</a></li>
            <li><a href="/about" className="hover:underline">Compliances</a></li>
            <li><a href="/about" className="hover:underline">Media Coverage</a></li>
          </ul>
        </div>

        {/* Our Programs */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Programs</h3>
          <ul className="space-y-2 text-white font-normal">
            <li><a href="/program" className="hover:underline">Education</a></li>
            <li><a href="/program" className="hover:underline">Healthcare</a></li>
            <li><a href="/program" className="hover:underline">Empowerment</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-2">Contact info</h3>
          <div className="space-y-4 text-white text-sm font-normal">
            <div>
              <div className="text-white text-lg font-bold">📍 LOCATION</div>
              <p>Nehru Nagar, Lajpat Nagar, New Delhi, 110065</p>
            </div>
            <div>
              <div className="text-white text-lg font-bold">📞 CALL US</div>
              <p className="text-base text-white">+91 7982707948</p>
            </div>
            <div>
              <div className="text-white text-lg font-bold">✉️ EMAIL US</div>
              <a href="mailto:ankushcohas@gmail.com" className="text-base text-white hover:underline">ankushcohas@gmail.com</a>
            </div>
          </div>
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
