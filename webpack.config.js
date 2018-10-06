module.exports={
    entry :'./public/MainApp.js',
    output: {
        path:__dirname,
        filename: 'public/bundle.js'
    },
    resolve:{
      root: __dirname,
      alias:{
          WeatherMain: 'public/Components/WeatherMain.js',
          WeatherForm: 'public/Components/WeatherForm.js',
          WeatherMessage:'public/Components/WeatherMessage.js',
          WeatherApi:'public/api/WeatherApi.js'
      },
      extension: ['','.js']
    },

   module: {
       loaders: [
           {
               loader:'babel-loader',
               query:{
                   presets :['react','es2015']
               },
               test: /\.js?$/,
               exclude :/(node_modules)/
           }

       ]
   }
}