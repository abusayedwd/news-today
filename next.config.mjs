/** @type {import('next').NextConfig} */
 
const nextConfig = {
  
   images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: "images.unsplash.com", 
        },
        
      ],
    }, 
  };  
  export default nextConfig; 

 // next.config.mjs

// next.config.mjs
// import withImages from 'next-images';
// const withImages = require('next-images');

// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//       },
//     ],
//   },
// };

// export default withImages({
//   ...nextConfig,
//   esModule: true,
//   fileExtensions: ['jpg', 'jpeg', 'png', 'gif', 'ico', 'svg', 'mp4'],
// });

