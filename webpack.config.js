const path = require('path')

module.exports = {
  context: __dirname, // Come here everytime, the project starts here
  entry: './js/client_app.js', // Where should you look your starting JS file
  devtool: 'source-map', // Tell me where exactly in source my error is happening
  output: {
    path: path.join(__dirname, '/public'), // Output it the public path
    filename: 'bundle.js' // Name it this
  },
  devServer: {
    publicPath: '/public/',
    noInfo: true,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.json'] // If I import something by saying `import 'Blah' from './Blah'`
                                 // First look at .Blah and then look at Blah.js then Blah.json
  },
  stats: {          // What all should be outputted
    colors: true,   // The colores should be present
    reasons: true,  // If error, why
    chunks: true
  },
  module: {         // Run the file from all these modules
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        include: path.resolve(__dirname, 'js'),
        test: /\.js$/,   // Check if the file has .js extension
        loader: 'babel-loader' // then run it from this loder
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      }
    ]
  }
}
