// module.exports = {
//   plugins:  
//     [{
     
//     tailwindcss: {},
//     autoprefixer: {},
//     plugins: [require("daisyui"),require('autoprefixer'),],
//   },]
   
// };
module.exports = 
{
 
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // other rules...
    ],
 
  plugins: [ 
  'postcss-import',
 'tailwindcss/nesting', 
 'tailwindcss',
  'autoprefixer', ] }
