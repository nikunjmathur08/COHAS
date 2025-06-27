import Brush from "../assets/brush.png";
import Hero from "../assets/Hero.png";

const HeroSection = () => (
  <section className="font-bricolage relative bg-transparent flex flex-col md:flex-row items-center justify-between px-8 py-32 overflow-hidden">
    <div className="relative z-10 flex-1 flex flex-col items-start justify-center max-w-xl md:pl-8">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-black">
        Voices of Change,<br />
        <span className="relative inline-block">
          <span className="relative z-10">Painted</span>
          <img
            src={Brush}
            alt="Brush Stroke"
            className="absolute top-5 left-0 w-full h-[1.2em] object-contain z-0 pointer-events-none"
          />
        </span>
        , Performed
        <br />
        and Played
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-black font-light text-balance">
        Celebrating India's traditions while building a future that's educated,
        expressive and empowered
      </p>
    </div>
    <div className="relative z-10 flex-1 flex justify-center md:justify-end w-full md:mt-0">
      <img
        src={Hero}
        alt="Children performing street play"
        className="rounded-3xl w-full max-w-lg object-cover"
      />
    </div>
  </section>
);

export default HeroSection;
