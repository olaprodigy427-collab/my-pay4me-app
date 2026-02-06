import Image from 'next/image';
import { FaEllipsisH, FaGooglePlay, FaApple } from 'react-icons/fa';

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
        <button className="text-gray-800 bg-lime-400 rounded-full px-7 py-3.5 flex items-center justify-center gap-2.5 font-semibold hover:bg-lime-500 transition text-base shadow-md">
          Download App
          <FaGooglePlay />
          <FaApple />
        </button>

        <button className="text-gray-800 bg-lime-200 rounded-full px-7 py-3.5 flex items-center justify-center gap-2.5 font-semibold hover:bg-lime-300 transition text-base">
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

      {/* Hero Visual Container */}
      <div className="relative max-w-5xl mx-auto mt-8 md:mt-12">
        {/* Green glow background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-80 h-80 md:w-[500px] md:h-[500px] bg-lime-200 rounded-full blur-3xl opacity-70" />
        </div>

        {/* Main Image */}
        <div className="relative z-10">
          <Image
            src="/images/girl-with-phone.png"
            alt="Student using Pay4Me app"
            width={800}
            height={600}
            className="mx-auto rounded-2xl shadow-2xl object-cover"
            priority
          />
        </div>

        {/* Wallet Card – top-right overlay, very responsive */}
        <div
          className={`
            absolute z-2
            top-3 right-3
            w-[calc(100%-24px)] max-w-[240px] min-w-[200px]
            p-3.5 text-xs leading-tight
            sm:top-4 sm:right-4 sm:max-w-[280px] sm:p-4 sm:text-sm
            md:top-5 md:right-6 md:max-w-[320px] md:p-5 md:text-base
            lg:top-6 lg:right-8 lg:max-w-[360px] lg:p-6 lg:text-base
            bg-white/94 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/60
            transition-all duration-200 ease-out
            hover:shadow-xl hover:-translate-y-0.5
          `}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">
              Wallet Balance
            </h3>
            <div className="flex items-center gap-2">
              <FaEllipsisH className="text-base text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
              <span className="text-base text-gray-500">$</span>
              <button
                className="text-base text-gray-500 hover:text-gray-700 focus:outline-none transition-colors"
                aria-label="Toggle visibility"
              >
                👁️
              </button>
            </div>
          </div>

          {/* Balance */}
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
            $22,850.00
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
            <button
              className="
                bg-blue-600 hover:bg-blue-700 active:bg-blue-800
                text-white font-medium text-xs sm:text-sm
                py-2.5 px-4 rounded-lg shadow-sm
                transition-all duration-150 active:scale-[0.98]
              "
              type="button"
            >
              Fund Wallet ▼
            </button>

            <button
              className="
                bg-gray-800 hover:bg-gray-900 active:bg-gray-950
                text-white font-medium text-xs sm:text-sm
                py-2.5 px-4 rounded-lg shadow-sm
                transition-all duration-150 active:scale-[0.98]
              "
              type="button"
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>

      {/* Green divider */}
      <div className="h-1.5 bg-lime-400 rounded-full mt-16 mx-auto max-w-3xl" />
    </section>
  );
}