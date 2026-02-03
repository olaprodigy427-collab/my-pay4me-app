import Image from 'next/image';
import { FaStar, FaEye, FaDollarSign, FaEllipsisH, FaGooglePlay, FaApple } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="relative container mx-auto px-4 md:px-6 pt-8 pb-16 md:pb-24 text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-lime-200 text-lime-800 rounded-full px-5 py-1.5 mb-6 text-sm font-semibold tracking-wide">
        SECURE GLOBAL FAST
      </div>

      <h1 className="text-gray-900 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 max-w-4xl mx-auto">
        Reliable Payment Solutions For International Education
      </h1>

      <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-10">
        The easiest and fastest way to pay tuition and fees to educational institutions, businesses, and government agencies worldwide.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 mb-10">
        <button className="text-gray-800 bg-lime-400 text-brand-black rounded-full px-7 py-3.5 flex items-center gap-2.5 font-semibold hover:bg-lime-500 transition text-base shadow-md">
          Download App
          <FaGooglePlay />
          <FaApple />
        </button>

        <button className="text-gray-800 bg-lime-200 rounded-full px-7 py-3.5 flex items-center gap-2.5 font-semibold hover:bg-lime-300 transition text-base">
          Watch Demo
          <span className="text-lg">▶</span>
        </button>
      </div>

      {/* Trusted by */}
      <div className="flex justify-center items-center gap-3 mb-12 text-gray-600 text-sm md:text-base">
        <div className="flex -space-x-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-9 h-9 md:w-10 md:h-10 bg-gray-300 rounded-full border-2 border-white" />
          ))}
        </div>
        <span>Trusted by 3k+ students globally</span>
      </div>
      {/* Hero Visual – Girl + Overlays */}
      <div className="relative max-w-5xl mx-auto mt-8 md:mt-12">
        {/* Green circle bg */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-80 h-80 md:w-[500px] md:h-[500px] bg-lime-200 rounded-full blur-3xl opacity-70" />
        </div>

        {/* Main image */}
        <div className="relative z-10">
          <Image
            src="/images/girl-with-phone.png" // ← place your image in public/images/
            alt="Student using Pay4Me app"
            width={800}
            height={600}
            className="mx-auto rounded-2xl shadow-2xl object-cover"
            priority
          />
        </div>

        {/* Floating badges – adjust positions based on your exact image */}
        {/* <div className="text-gray-900 absolute top-8 left-6 md:top-22 md:left-40 bg-white/90 backdrop-blur-sm rounded-lg px-10 py-8 shadow-md flex items-center gap-2 text-sm font-medium">
          <span className="text-black-900">🏔️</span> Backed by Techstars.
        </div> */}

        {/* <div className="absolute top-28 left-16 md:top-90 md:left-30 bg-white/90 backdrop-blur-sm rounded-lg px-10 py-6 shadow-md flex items-center gap-2 text-sm">
          <FaStar className="text-yellow-900" /><span className="text-black-900">5 Star Google Rating</span>
        </div> */}

        {/* Wallet card */}
        <div className="absolute bottom-10 right-6 md:bottom-58 md:right-0 bg-white rounded-xl px-6 py-5 shadow-2xl w-72 md:w-80 border border-gray-100">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-800 font-medium">Wallet Balance</span>
            <div className="bg-brand-black text-black p-1.9 rounded-full">
              <FaDollarSign size={14} />
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-900 text-2xl md:text-3xl font-bold">$22,850.00</span>
            <FaEye className="text-gray-400 cursor-pointer" />
          </div>

          <div className="flex justify-between gap-3">
            <button className="flex-1 bg-gray-300 hover:bg-gray-500 rounded-lg py-2.5 text-sm font-medium transition">
              Fund Wallet ▼
            </button>
            <button className="flex-1 bg-gray-300 hover:bg-gray-500 rounded-lg py-2.5 text-sm font-medium transition">
              Withdraw
            </button>
          </div>

          <FaEllipsisH className="absolute top-3 right-3 text-gray-400" />
        </div>
      </div>

      {/* Green divider line */}
      <div className="h-1.5 bg-lime-400 rounded-full mt-16 mx-auto max-w-3xl" />
    </section>
  );
}