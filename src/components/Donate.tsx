import Img1 from "../assets/Donate1.png";
import Img2 from "../assets/Donate2.png";
import Img3 from "../assets/Donate3.png";
import Img4 from "../assets/Donate4.png";
import Img5 from "../assets/Donate5.png";
import Img6 from "../assets/Donate6.png";

export default function DonateUsLayout() {
  return (
    <div className="flex justify-center items-center py-16 px-4">
      <div
        className="grid gap-2 w-full max-w-[380px] md:max-w-[1200px]"
        style={{
          display: "grid",
          gridTemplateAreas: `
            "img1 img2 img3"
            "img4 donate img5"
            "img6 img6 img5"
          `,
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "auto auto auto",
        }}
      >
        <div style={{ gridArea: "img1" }}>
          <img src={Img6} alt="Group 1" className="w-full h-full rounded-xl object-cover" />
        </div>
        <div style={{ gridArea: "img2" }}>
          <img src={Img2} alt="Group 2" className="w-full h-full rounded-xl object-cover" />
        </div>
        <div style={{ gridArea: "img3" }}>
          <img src={Img3} alt="Group 3" className="w-full h-full rounded-xl object-cover" />
        </div>
        <div style={{ gridArea: "img4" }}>
          <img src={Img4} alt="Group 4" className="w-full h-full rounded-xl object-cover" />
        </div>
        <a
          href="https://milaap.org/fundraisers/support-underprivilege-children-of-community"
          target="_blank"
          style={{ gridArea: "donate" }}
        >
          <div className="w-full h-full rounded-xl bg-primary flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:bg-orange-500">
            <p className="text-white text-xl sm:text-8xl font-semibold leading-tight text-center">
              Donate<br />Us
            </p>
          </div>
        </a>
        <div style={{ gridArea: "img5" }}>
          <img src={Img5} alt="Group 5" className="w-full h-full rounded-xl object-cover" />
        </div>
        <div style={{ gridArea: "img6" }}>
          <img src={Img1} alt="Group 6" className="w-full h-full rounded-xl object-cover" />
        </div>
      </div>
    </div>
  );
}
