import Img1 from "../assets/Donate1.png"; // top-left
import Img2 from "../assets/Donate2.png"; // bottom-left
import Img3 from "../assets/Donate3.png"; // center top
import Img4 from "../assets/Donate4.png"; // center bottom
import Img5 from "../assets/Donate5.png"; // top-right
import Img6 from "../assets/Donate6.png"; // bottom-right

export default function DonateUsLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pb-32">
      <div className="max-w-7xl w-full grid grid-cols-3 gap-4">
        {/* Left Column: Top + Bottom */}
        <div className="flex flex-col gap-4">
          <div className="col-span-1 row-span-1 rounded-xl overflow-hidden">
            <img
              src={Img1}
              alt="Top Left Group"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 row-span-1 w-full h-[540px] rounded-xl overflow-hidden">
            <img
              src={Img2}
              alt="Bottom Left Closeup"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Center Column: Top Image + Button + Bottom Image */}
        <div className="flex flex-col gap-4">
          <div className="aspect-[4/3] rounded-xl overflow-hidden">
            <img
              src={Img3}
              alt="Center Top Celebration"
              className="w-full h-full object-cover"
            />
          </div>

          <a href="#">
            <div className="aspect-[4/3] rounded-xl flex items-center justify-center bg-primary transition-transform duration-300 transform hover:scale-105 cursor-pointer hover:bg-orange-500">
              <div className="text-white text-5xl md:text-6xl font-semibold leading-tight text-center">
                Donate<br />Us
              </div>
            </div>
          </a>

          <div className="aspect-[4/3] rounded-xl overflow-hidden">
            <img
              src={Img4}
              alt="Center Bottom Youth"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column: Top + Bottom */}
        <div className="flex flex-col gap-4">
          <div className="col-span-1 row-span-2 h-[540px] rounded-xl overflow-hidden">
            <img
              src={Img5}
              alt="Top Right Group"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 row-span-1 rounded-xl overflow-hidden">
            <img
              src={Img6}
              alt="Bottom Right Children"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
