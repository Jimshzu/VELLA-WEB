import calendarIcon from "../assets/icons/calendar.png";
import calendarsIcon from "../assets/icons/calendars.png";
import locationIcon from "../assets/icons/location.png"; // optional
import timeIcon from "../assets/icons/time.png"; // optional

export default function Drives() {
  return (
    <section
      id="drives"
      className="bg-gray-100 pt-0 pb-20 px-10 scroll-mt-70 -mt-20"
    >

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {/* CARD 1 */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
          
          {/* ICON */}
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#FF6780] to-[#DD003F] flex items-center justify-center mb-4">
            <img src={calendarIcon} className="w-6 h-6" />
          </div>

          <h3 className="font-semibold text-lg text-gray-800 mb-4">
            Community Blood Drive
          </h3>

          <div className="text-gray-500 text-sm space-y-3 mb-6">

            <div className="flex items-center gap-2">
                <img src={locationIcon} className="w-4 h-4" />
                <p>City Hall, Downtown</p>
            </div>

            <div className="flex items-center gap-2">
                <img src={calendarsIcon} className="w-4 h-4" />
                <p>March 28, 2026</p>
            </div>

            <div className="flex items-center gap-2">
                <img src={timeIcon} className="w-4 h-4" />
                <p>9:00 AM - 3:00 PM</p>
            </div>

</div>

          <button className="
            w-full py-3 rounded-full text-white font-medium
            bg-gradient-to-r from-[#FF6780] to-[#DD003F]
            hover:opacity-90 transition
          ">
            View Details
          </button>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
        
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#FF6780] to-[#DD003F] flex items-center justify-center mb-4">
            <img src={calendarIcon} className="w-6 h-6" />
        </div>
            
        <h3 className="font-semibold text-lg text-gray-800 mb-4">
            University Blood Donation
        </h3>

        <div className="text-gray-500 text-sm space-y-3 mb-6">

            <div className="flex items-center gap-2">
                <img src={locationIcon} className="w-4 h-4" />
                <p>State University Campus</p>
            </div>

            <div className="flex items-center gap-2">
                <img src={calendarsIcon} className="w-4 h-4" />
                <p>April 5, 2026</p>
            </div>

            <div className="flex items-center gap-2">
                <img src={timeIcon} className="w-4 h-4" />
                <p>10:00 AM - 4:00 PM</p>
            </div>

        </div>

        <button className="
            w-full py-3 rounded-full text-white font-medium
            bg-gradient-to-r from-[#FF6780] to-[#DD003F]
            hover:opacity-90 transition
        ">
            View Details
        </button>
        </div>

        {/* CARD 3 */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
        
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#FF6780] to-[#DD003F] flex items-center justify-center mb-4">
            <img src={calendarIcon} className="w-6 h-6" />
        </div>

        <h3 className="font-semibold text-lg text-gray-800 mb-4">
            Corporate Wellness Drive
        </h3>

        <div className="text-gray-500 text-sm space-y-3 mb-6">

            <div className="flex items-center gap-2">
                <img src={locationIcon} className="w-4 h-4" />
                <p>Tech Park Building A</p>
            </div>

            <div className="flex items-center gap-2">
                <img src={calendarsIcon} className="w-4 h-4" />
                <p>April 12, 2026</p>
            </div>

            <div className="flex items-center gap-2">
                <img src={timeIcon} className="w-4 h-4" />
                <p>8:00 AM - 2:00 PM</p>
            </div>

        </div>

        <button className="
            w-full py-3 rounded-full text-white font-medium
            bg-gradient-to-r from-[#FF6780] to-[#DD003F]
            hover:opacity-90 transition
        ">
            View Details
        </button>
        </div>

      </div>
    </section>
  );
}