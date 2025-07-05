import Header from "../components/Header";
import Footer from "../components/Footer";

export default function EventPage () {
  return (
    <div className="min-h-screen bg-[#F8E6DD] relative overflow-x-hidden">
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto md:px-6">
          <Header />
          <main className="py-20">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">About COHAS</h1>
            <p className="text-base sm:text-lg leading-relaxed text-justify max-w-4xl mx-auto px-4">
              Education
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-justify max-w-4xl mx-auto px-4">
              Healthcare
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-justify max-w-4xl mx-auto px-4">
              Empowerment
            </p>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};