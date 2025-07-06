const Footer = () => {
  return (
    <footer
      id="contact"
      className="font-bricolage bg-primary text-white pt-16 pb-32 px-6 sm:px-8 md:px-20 relative overflow-hidden"
    >
      {/* Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
        {/* Sitelinks */}
        <div>
          <h3 className="text-xl font-bold mb-4">Sitelinks</h3>
          <ul className="space-y-2 font-normal">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/program" className="hover:underline">Our Programs</a></li>
            <li><a href="/involve" className="hover:underline">Get Involved</a></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">About</h3>
          <ul className="space-y-2 font-normal">
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
          <ul className="space-y-2 font-normal">
            <li><a href="/program" className="hover:underline">Education</a></li>
            <li><a href="/program" className="hover:underline">Healthcare</a></li>
            <li><a href="/program" className="hover:underline">Empowerment</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact info</h3>
          <div className="space-y-4 text-sm font-normal">
            <div>
              <div className="font-bold text-lg">📍 LOCATION</div>
              <p>Nehru Nagar, Lajpat Nagar, New Delhi, 110065</p>
            </div>
            <div>
              <div className="font-bold text-lg">📞 CALL US</div>
              <p className="text-base">+91 7982707948</p>
            </div>
            <div>
              <div className="font-bold text-lg">✉️ EMAIL US</div>
              <a href="mailto:cohas.org@gmail.com" className="text-base hover:underline">
                cohas.org@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* COHAS Watermark */}
      <div className="absolute bottom-6 left-0 w-full px-4 text-[60px] sm:text-[90px] md:text-[140px] font-bold text-white/20 leading-none tracking-tight text-center pointer-events-none select-none z-0">
        COHAS
      </div>

      {/* Attribution (moved up a bit) */}
      <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 text-center z-10 text-white/70 text-md sm:text-2xl">
        Created with <span className="text-red-400">❤️</span> by <a href="https://nikunjmathur.vercel.app" className="underline">Nikunj</a>
      </div>
    </footer>
  );
};

export default Footer;
