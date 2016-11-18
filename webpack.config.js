const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].[hash].js',
    path: __dirname + '/bin',
    publicPath: '/',
  },
  module: {
    loaders: [{
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'babel?{"presets":["react", "es2015", "stage-0"], "plugins": ["react-relay"]}!awesome-typescript'
    }, {
        test: /\.json/,
        loader: 'json',
    }, {
        test: /\.(jpg|png)/,
        loader: 'file',
    }, {
        test    : /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml",
    }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file",
    }, {
        test: /\.json$/,
        loader: 'json'
    }, {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff",
    }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff",
    }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream",
    }, {
        test: /\.css/,
        loader: 'style-loader!css-loader'
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    })
  ],
  resolve: {
  modulesDirectories: ["node_modules", "src"],
  // array of extensions that should be used to resolve modules
  extensions: ['', '.webpack.js', '.web.js', '.tsx', '.ts', '.js', '.jsx', '.json']
 }
}