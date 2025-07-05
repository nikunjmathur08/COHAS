import { ArrowUpRight } from 'lucide-react';

type ClickCardProps = {
  title: string;
  image: string;
  link: string;
};

const ClickCard: React.FC<ClickCardProps> = ({ title, image, link }) => {
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      className="font-bricolage relative w-full max-w-sm rounded-3xl overflow-hidden shadow-lg transition-transform hover:scale-[1.08] hover:shadow-xl"
    >
      {/* Background Image */}
      <img src={image} alt={title} className="w-full h-full object-cover" />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#8C4C32]/90 via-transparent to-transparent" />

      {/* Title */}
      <div className="absolute bottom-4 left-4 text-white text-4xl font-medium z-10">
        {title}
      </div>

      {/* Top-right arrow icon */}
      <div className="absolute top-4 right-4 bg-[#F58A3D] rounded-full p-2">
        <ArrowUpRight className="text-white" size={70} />
      </div>
    </a>
  );
};

export default ClickCard;
