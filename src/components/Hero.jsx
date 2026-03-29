import heroImage from "../assets/hero-image.png";
import bgImage from "../assets/bg-image.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex items-center justify-between
        pl-16 pr-0
        text-white
        relative
        bg-cover bg-center
      "
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* 🔥 GRADIENT + BLUR OVERLAY */}
      <div className="absolute inset-0 backdrop-blur-sm
      bg-[linear-gradient(90deg,rgba(201,0,3,0.75),rgba(191,0,67,0.75),rgba(201,0,70,0.75))]
      "></div>

      {/* CONTENT */}
      <div className="relative z-10 flex w-full justify-between items-center">
        
        {/* LEFT TEXT */}
        <div className="max-w-xl mt-10">
          <h1
            className="
              font-[Poppins]
              font-bold
              text-[40px] md:text-[45px] lg:text-[50px]
              leading-[1.2]
              tracking-[0px]
              mb-6
            "
          >
              Every Drop Counts. <br />
              Every Donor Matters.
          </h1>

          <p className="text-lg mb-8">
            VELLA helps connect people to life-saving blood donation opportunities
            while ensuring efficient management and coordination.
          </p>

          <div className="flex gap-4">

          {/* GET STARTED */}
        <Link to="/login">
          <button
            className="
              px-6 py-3 rounded-lg font-bold text-white font-[Poppins]
              bg-[linear-gradient(90deg,#FF6780,#DD003F)]
              shadow-lg shadow-pink-500/30
              hover:shadow-pink-500/60
              hover:scale-105
              transition duration-300
            "
          >
            Get Started →
          </button>
        </Link>

          {/* LEARN MORE */}
          <a
  href="/#features"
  className="
    border border-white/70
    px-6 py-3 rounded-lg font-bold text-white
    backdrop-blur-sm bg-white/5
    hover:bg-white/10
    hover:scale-105
    transition duration-300
    inline-block
  "
>
  Learn More
</a>

        </div>

          
          <div className="mt-10 grid grid-cols-2 gap-6 max-w-xl">
  
          {/* ITEM 1 */}
          <div className="flex items-center gap-4 bg-white/10 border border-white/20 backdrop-blur-md p-4 rounded-xl">
            <img src="src/assets/icons/Reg_Don.png" alt="" className="w-20 h-20" />
            <div>
              <p className="text-lg font-bold">1,000+</p>
              <p className="text-sm opacity-80">Registered Donors</p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="flex items-center gap-4 bg-white/10 border border-white/20 backdrop-blur-md p-4 rounded-xl">
            <img src="src/assets/icons/Cur_Blo_Sup.png" alt="" className="w-20 h-20" />
            <div>
              <p className="text-lg font-bold">75 Units</p>
              <p className="text-sm opacity-80">Current Blood Supply</p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="flex items-center gap-4 bg-white/10 border border-white/20 backdrop-blur-md p-4 rounded-xl">
            <img src="src/assets/icons/Blood_Dem.png" alt="" className="w-20 h-20" />
            <div>
              <p className="text-lg font-bold">45 Units Needed</p>
              <p className="text-sm opacity-80">Blood Demand</p>
            </div>
          </div>

          {/* ITEM 4 */}
          <div className="flex items-center gap-4 bg-white/10 border border-white/20 backdrop-blur-md p-4 rounded-xl">
            <img src="src/assets/icons/Don_Dri.png" alt="" className="w-20 h-20" />
            <div>
              <p className="text-lg font-bold">5 Scheduled</p>
              <p className="text-sm opacity-80">Upcoming Donation Drives</p>
            </div>
          </div>

        </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-end">
          <img
            src={heroImage}
            alt="Hero"
            className="w-[1200px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}