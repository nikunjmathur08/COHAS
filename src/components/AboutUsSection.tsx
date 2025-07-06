import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutUs from "../assets/AboutUs.png";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {label: "Programs Running", endValue: 4},
  { label: "Happy Donators", endValue: 120, suffix: "+" },
  { label: "Dedicated Volunteers", endValue: 50, suffix: "+" },
  { label: "Donations to Poor", endValue: 1200000, suffix: "K" },
];

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

const StatsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".count");

      elements.forEach((el) => {
        const element = el as HTMLElement;
        const endValue = parseInt(element.getAttribute("data-end") || "0");
        const suffix = element.getAttribute("data=suffix") || "";

        gsap.fromTo(
          element,
          { innerText: 0},
          {
            innerText: endValue,
            duration: 2,
            ease: "power1.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
            },
            snap: { innerText: 1 },
            modifiers: {
              innerText: (value) =>
                Math.floor(value).toLocaleString() + suffix,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
  <section 
    ref={sectionRef}
    className="bg-[#f9f9f9] py-12 px-6 sm:px-8 md:px-20 rounded-3xl font-bricolage mb-12"
  >
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 md:gap-x-8 text-center">
      {stats.map((item, i) => (
        <div
          key={i}
          className={`flex flex-col items-center ${
            i < stats.length - 1 ? "md:border-r" : ""
          } border-dashed border-gray-300 px-4`}
        >
          <p className="text-base sm:text-lg text-black mb-2">{item.label}</p>
          <h3
            className="text-3xl sm:text-4xl text-primary font-bold count"
            data-end={item.endValue}
            data-suffix={item.suffix || ""}
          >
            0
          </h3>
        </div>
      ))}  
    </div>  
  </section>
  );
};

export { AboutUsSection, StatsSection };
