import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LogoMarquee from '@/components/LogoMarquee';
import FeaturesSection from '@/components/FeaturesSection';

export default function Home() {
  return (
    <main className="bg-white min-h-screen relative overflow-x-hidden">
      {/* Subtle grid background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f0f0f0 1px, transparent 1px),
            linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10">
        <Header />
        <HeroSection />
        <LogoMarquee />
        <FeaturesSection />
      </div>
    </main>
  );
}