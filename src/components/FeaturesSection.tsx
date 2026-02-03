import { FaGlobe, FaBolt, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    icon: FaGlobe,
    title: "Global Accessibility",
    desc: "Effortlessly send tuition and other payments to educational institutions worldwide, no matter where you are.",
  },
  {
    icon: FaBolt,
    title: "Fast & Reliable Transactions",
    desc: "Ensure your payments are processed quickly, helping you meet important deadlines without stress.",
  },
  {
    icon: FaShieldAlt,
    title: "Secure & Transparent",
    desc: "Enjoy peace of mind with secure payment processing and complete transparency on fees and conversion rates.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-lime-50 via-lime-100 to-lime-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-lime-100">
          <span className="inline-block bg-lime-200 text-lime-800 rounded-full px-5 py-1.5 text-sm font-semibold mb-4">
            FEATURES
          </span>

          <h2 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center md:text-left">
            What Truly Sets Us Apart
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <feature.icon className="text-lime-500 text-5xl mb-5" />
                <h3 className="text-black text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{feature.desc}</p>
                <button className="bg-lime-100 text-lime-800 rounded-full px-5 py-2.5 font-medium hover:bg-lime-200 transition self-start">
                  Download App →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}