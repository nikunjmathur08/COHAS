import TeamMember from "../components/TeamMember";
import Person1 from "../assets/Person1.png";

const teamMembers = [
  { name: "Person 1", image: Person1 },
  { name: "Person 2", image: Person1 },
  { name: "Person 3", image: Person1 },
];

const OurTeam = () => {
  return (
    <section 
      id="team"
      className="px-8 py-8 font-bricolage">
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">
        Our Team
      </h1>

      <div className="flex flex-wrap gap-16">
        {teamMembers.map((member) => (
          <TeamMember key={member.name} name={member.name} image={member.image} />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
