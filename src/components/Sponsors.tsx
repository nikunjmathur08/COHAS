export default function Sponsors() {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden py-12">
      <h1 className="font-bricolage font-bold text-6xl mb-16">Our Sponsors</h1>

      <div className="relative w-full overflow-hidden font-bricolage h-16">
        <div className="absolute flex gap-12 animate-marquee-smooth whitespace-nowrap text-3xl font-medium text-black">
          {[
            "Some Sponsor 1",
            "Some Sponsor 2",
            "Some Sponsor 3",
            "Some Sponsor 4",
            "Some Sponsor 5",
          ].map((text, i) => (
            <span key={i}>{text}</span>
          ))}

          {/* Duplicate content */}
          {[
            "Some Sponsor 1",
            "Some Sponsor 2",
            "Some Sponsor 3",
            "Some Sponsor 4",
            "Some Sponsor 5",
          ].map((text, i) => (
            <span key={`dup-${i}`}>{text}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
