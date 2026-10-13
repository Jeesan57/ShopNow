import Image from 'next/image';
import logo from '../../public/LOGO.png';

export default function BrandLogo({ className = '', priority = false }) {
  return (
    <div className={`relative h-12 w-48 overflow-hidden shrink-0 rounded-lg ${className}`}>
      <Image src={logo} alt="Auvora BD" fill sizes="224px" priority={priority} className="object-contain scale-[1.25]" />
    </div>
  );
}
