// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';   // adjust path if needed

export const metadata: Metadata = {
  title: 'Pay4Me App',
  description: 'Reliable Payment Solutions For International Education',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        
        {/* Add top padding equal to header height so hero isn't covered */}
        <main className="pt-16 md:pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}