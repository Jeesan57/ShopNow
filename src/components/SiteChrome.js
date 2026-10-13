'use client';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import { CatalogProvider } from '../context/CatalogContext';
export default function SiteChrome({ children }) {
  const admin = usePathname().startsWith('/admin');
  if (admin) return <main id="main-content">{children}</main>;
  return <CatalogProvider><Navbar /><main id="main-content" className="min-h-screen relative z-10">{children}</main><Footer /></CatalogProvider>;
}
