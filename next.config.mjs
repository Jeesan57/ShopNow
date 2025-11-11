/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

// Tailwind CSS configuration for dark mode
if (typeof globalThis !== 'undefined' && globalThis.tailwindcss) {
  globalThis.tailwindcss.config = {
    darkMode: 'class',
  };
}

export default nextConfig;
