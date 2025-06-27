import ClickCard from "../components/ClickCard";
import Program1 from "../assets/Program1.png";

const programs = [
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

const OurPrograms = () => {
  return (
    <section 
      id="programs"
      className="py-8 px-12">
      <h1 className="text-4xl md:text-5xl font-bricolage font-bold text-black mb-12">
        Our Programs
      </h1>
      <div className="flex flex-wrap gap-10 max-w-6xl">
        {programs.map((program) => (
          <ClickCard
            key={program.title}
            title={program.title}
            image={program.image}
            link={program.link}
          />
        ))}
      </div>
    </section>
  );
};

export default OurPrograms;
