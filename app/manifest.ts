import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bonrizon App',
    short_name: 'Bonrizon',
    description:
      'A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate withe developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.',
    start_url: '/',
    icons: [
      { src: 'assets/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { src: 'assets/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { src: 'assets/images/apple-touch-icon.png', sizes: '192x192', type: 'image/png' },
      { src: 'assets/images/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: 'assets/images/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
  };
}
