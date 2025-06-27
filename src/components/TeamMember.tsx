type TeamMemberProps = {
  name: string;
  image: string;
};

const TeamMember: React.FC<TeamMemberProps> = ({ name, image }) => {
  return (
    <div className="flex flex-col text-center">
      <img
        src={image}
        alt={name}
        className="w-80 h-80 rounded-full object-cover mb-4"
      />
      <h3 className="text-2xl font-medium text-black">{name}</h3>
    </div>
  );
};

export default TeamMember;
