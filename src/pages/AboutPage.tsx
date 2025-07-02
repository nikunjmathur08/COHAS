import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function AboutPage () {

  useEffect(() => {
    const targetId = localStorage.getItem('scrollTarget');
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          gsap.to(window, {
            duration: 2,
            scrollTo: {
              y: el,
              offsetY: 100,
            },
            ease: 'power4.out',
          });
        }, 100);
      }
      localStorage.removeItem('scrollTarget');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F8E6DD] relative overflow-x-hidden">
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto md:px-6">
          <Header />
          <main className="py-20">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">About COHAS</h1>
            <p className="text-base sm:text-lg leading-relaxed text-justify max-w-4xl mx-auto px-4">
              Our Mission
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-justify max-w-4xl mx-auto px-4">
              Our Vision
            </p>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};