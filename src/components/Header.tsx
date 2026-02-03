import { FaApple, FaGooglePlay } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-black relative z-20 container mx-auto px-4 md:px-6 py-1 rounded-full">
      <nav className="bg-brand-black text-white rounded-full px-5 py-3.5 md:py-4 flex items-center justify-between shadow-xl">
        <div className="font-bold text-xl tracking-tight">Pay4Me App</div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-lime-400 transition-colors">Home</a>
          <a href="#" className="hover:text-lime-400 transition-colors">About</a>
          <a href="#" className="hover:text-lime-400 transition-colors">Blog</a>
          <a href="#" className="hover:text-lime-400 transition-colors">Support</a>
        </div>

        <button className="text-gray-800 bg-lime-400 text-brand-black rounded-full px-5 py-2.5 flex items-center gap-2 text-sm font-semibold hover:bg-lime-500 transition-colors">
          <span>Download App</span>
          <FaGooglePlay className="text-base" />
          <FaApple className="text-base" />
        </button>
      </nav>
    </header>
  );
}