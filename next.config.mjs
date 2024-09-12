// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
      config.externals = [...(config.externals || []), { canvas: 'canvas' }];  // required by chart.js
      return config;
    },
  };
  
  export default nextConfig;