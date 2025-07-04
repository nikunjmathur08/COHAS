import AboutUs from "../assets/AboutUs.png";

const AboutUsSection = () => (
  <section
    id="about"
    className="font-bricolage bg-transparent px-6 sm:px-8 md:px-16 pb-16 flex flex-col md:flex-row items-center justify-between"
  >
    {/* Text Section */}
    <div className="flex-1 mb-8 md:mb-0 md:mr-12">
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-left">
        About Us
      </h2>
      <p className="text-base sm:text-lg mt-6 md:mt-8 leading-relaxed text-justify md:text-left max-w-3xl mx-auto md:mx-0">
        COHAS (Community of Help and Support) is a youth-led organization dedicated to working with children, adolescents, and youth.
        Our vision is to imagine a world where young people are the architects of a society enriched with values such as equality, fraternity, justice, and boundless love. 
      </p>
      <a href="/about">
        <button className="bg-primary text-white p-4 rounded-full mt-4"> Know more</button>
      </a>
    </div>

    {/* Image Section */}
    <div className="flex-1 flex justify-center mt-8 md:mt-0">
      <img
        src={AboutUs}
        alt="About Us"
        className="rounded-2xl w-4/5 sm:w-3/5 md:w-full max-w-sm object-contain"
      />
    </div>
  </section>
);

export default AboutUsSection;
