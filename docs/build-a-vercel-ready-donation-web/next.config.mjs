/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/donation",
        destination: "/donate",
        permanent: true
      },
      {
        source: "/dashboard",
        destination: "/admin",
        permanent: true
      },
      {
        source: "/hope-channel",
        destination: "/hope-channel-philippines",
        permanent: true
      },
      {
        source: "/awr",
        destination: "/awr-891-fm",
        permanent: true
      },
      {
        source: "/awr-89-1-fm",
        destination: "/awr-891-fm",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
