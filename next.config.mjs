import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains:["192.168.1.136"]
    // remotePatterns: [
    //   {
    //     protocol: 'http',
    //     hostname: '192.168.1.136',
    //     port: '', // Add the port if needed, like '3000'
    //     pathname: '/new_talent_infotech/uploads/**', // Adjust the path based on your image location
    //   },
    // ],
  },
};

export default withNextIntl(nextConfig);
