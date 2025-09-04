
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      { protocol: 'https', hostname: 'c8.alamy.com' },
      { protocol: 'https', hostname: 'cdn.yogajournal.com' },
      { protocol: 'https', hostname: 'www.blueosa.com' },
      { protocol: 'https', hostname: 'camillamia.com' },
      { protocol: 'https', hostname: 'as1.ftcdn.net' },
      { protocol: 'https', hostname: 'as2.ftcdn.net' },
      { protocol: 'https', hostname: 'theyogatique.com' },
      { protocol: 'https', hostname: 'www.fitsri.com' },
      { protocol: 'https', hostname: 'hydratewithcore.com' },
      { protocol: 'https', hostname: 'media.gettyimages.com' },
      { protocol: 'https', hostname: 'media.istockphoto.com' },
      { protocol: 'https', hostname: 'i.pinimg.com' },
      { protocol: 'https', hostname: 'www.thehealthjournals.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'http', hostname: 'basaho.com' },
      { protocol: 'https', hostname: 'daman.co.id' },
      { protocol: 'https', hostname: 'skillwell-upload-production.s3.amazonaws.com' },
      { protocol: 'https', hostname: 'www.aloyoga.com' },
      { protocol: 'https', hostname: 'www.theyoganomads.com' },
      { protocol: 'https', hostname: 'www.christiangieger.de' },
      { protocol: 'https', hostname: 'i.ibb.co' },
      { protocol: 'https', hostname: 'static.wixstatic.com' },
    ],
  },
};

export default nextConfig;

    
