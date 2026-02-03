import Image from 'next/image';

const partners = [
  { name: 'ACROSS THE HORIZON', src: '/images/logos/across.png' },
  { name: 'MPOWER Financing',   src: '/images/logos/mpower.png' },
  { name: 'Prodigy Finance',    src: '/images/logos/prodigy.png' },
  { name: 'Techstars',          src: '/images/logos/techstars.png' },
  { name: 'Stripe',             src: '/images/logos/stripe.png' },
  { name: 'Paystack',           src: '/images/logos/paystack.png' },
  // Add more if you have them – aim for 8–12 for smooth loop
];

export default function LogoMarquee() {
  return (
    <section className="py-12 md:py-16 overflow-hidden bg-white">
      <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-600 mb-8 tracking-wide uppercase">
        LEADING BRANDS PARTNER WITH US
      </h2>

      <div className="relative w-full">
        {/* Optional: subtle left/right fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-12 md:gap-16 lg:gap-20 items-center whitespace-nowrap">
          {[...partners, ...partners].map((partner, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 transition-transform duration-300 hover:scale-110 hover:grayscale-0"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={180}               // wider for better detail
                height={80}               // ← increased from 50 → 80px (adjust to 100 if logos support it)
                className="h-12 md:h-16 lg:h-20 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}