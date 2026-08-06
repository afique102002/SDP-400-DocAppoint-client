/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.healthxbd.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.healthxbd.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.daktars.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "bsoh.com.bd",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "d1ymz67w5raq8g.cloudfront.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.ashcroftpharmacy.co.uk",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;