import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";
import { CartProvider } from "../context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ShopNow",
  description: "Your one-stop shop for everything",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>  {/* ← Move this here, outside of body */}
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <ParticleBackground />
          <Navbar />
          <main id="main-content" className="min-h-screen relative z-10">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
