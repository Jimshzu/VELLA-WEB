import donorIcon from "../assets/icons/Don_Man.png";
import requestIcon from "../assets/icons/brt.png";
import inventoryIcon from "../assets/icons/bim.png";
import drivesIcon from "../assets/icons/ddc.png";

export default function Features() {
  return (
    <section
      id="features"
      className="bg-gray-100 py-20 px-10 scroll-mt-24"
    >

      {/* TITLE */}
      <div className="text-center mb-14 mt-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Powerful Features for Effective Management
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Everything you need to manage blood donation efficiently in one comprehensive platform
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {/* CARD 1 */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#FF6780] to-[#DD003F] flex items-center justify-center mb-4">
            <img src={donorIcon} alt="Donor" className="w-6 h-6 object-contain" />
          </div>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">
            Donor Management
          </h3>
          <p className="text-gray-500 text-sm">
            Comprehensive system to register, track, and manage blood donors efficiently.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#FF6780] to-[#DD003F] flex items-center justify-center mb-4">
            <img src={requestIcon} alt="Request" className="w-6 h-6 object-contain" />
          </div>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">
            Blood Request Tracking
          </h3>
          <p className="text-gray-500 text-sm">
            Real-time tracking of blood requests with urgency levels and status updates.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#FF6780] to-[#DD003F] flex items-center justify-center mb-4">
            <img src={inventoryIcon} alt="Inventory" className="w-6 h-6 object-contain" />
          </div>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">
            Blood Inventory Monitoring
          </h3>
          <p className="text-gray-500 text-sm">
            Monitor blood supply levels across all blood types to ensure availability.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#FF6780] to-[#DD003F] flex items-center justify-center mb-4">
            <img src={drivesIcon} alt="Drives" className="w-6 h-6 object-contain" />
          </div>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">
            Donation Drive Coordination
          </h3>
          <p className="text-gray-500 text-sm">
            Organize and manage blood donation drives with scheduling and location tracking.
          </p>
        </div>

      </div>

      {/* PREVIEW NEXT SECTION */}
      <div className=" mt-45 text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Upcoming Donation Drives
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Join our upcoming blood donation events and make a difference in your community
        </p>
      </div>

    </section>
  );
}