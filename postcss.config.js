// module.exports = {
//   plugins:  
//     [{
     
//     tailwindcss: {},
//     autoprefixer: {},
//     plugins: [require("daisyui"),require('autoprefixer'),],
//   },]
   
// };
module.exports = 
{ plugins: [ 
  'postcss-import',
 'tailwindcss/nesting', 
 'tailwindcss',
  'autoprefixer', ] }
