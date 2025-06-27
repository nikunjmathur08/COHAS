import ClickCard from "./ClickCard";
import Program1 from "../assets/Program1.png";

const events = [
  {
    title: "Theatre Performance",
    image: Program1,
    link: "https://example.com/theatre",
  },
  {
    title: "Life Skill Training",
    image: Program1,
    link: "https://example.com/life-skills",
  },
];

const OurEvents = () => {
  return (
    <section 
      id="events"
      className="py-8 px-12">
      <h1 className="text-4xl md:text-5xl font-bricolage font-bold text-black mb-12">
        Our Events
      </h1>
      <div className="flex flex-wrap gap-10 max-w-6xl">
        {events.map((event) => (
          <ClickCard
            key={event.title}
            title={event.title}
            image={event.image}
            link={event.link}
          />
        ))}
      </div>
    </section>
  );
};

export default OurEvents;
