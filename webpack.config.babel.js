import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import webpack from 'webpack'
import path from 'path'
const srcPath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'dist');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist'),
}

const config = {
  entry: [
    PATHS.src
  ],
  output: {
    path: PATHS.build,
    filename: 'index.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0'] 
        }
      }, { 
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','autoprefixer-loader','sass-loader'],
        })
      }, {
          test: /\.(png|gif|jpg)$/,
          include: path.resolve(srcPath, 'images'),
          loader: 'file-loader?limit=30000&name=images/[name].[ext]',
      }, {
        test: /\.(ttf|eot|woff|svg|woff2)$/,
        loader: 'file-loader',
        include: [ 
          path.resolve(__dirname, 'src/fonts')
        ],
        options: {
          name: 'fonts/[name].[ext]'
        }
      }, {
        test: /\.svg$/,
        include: [ 
          path.resolve(__dirname, 'src/svg')
        ],
        use: [ 'svg-sprite-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(PATHS.src, 'index.html')
    }),
    new ExtractTextPlugin({
        filename: "[name].css",
        disable: false,
        allChunks: true,
        ignoreOrder: true
    }),
    new CopyWebpackPlugin([
      { from: path.resolve(PATHS.src, 'images'), to: path.resolve(PATHS.build, 'images') }
    ])
  ],
  resolve: {
    modules: [ PATHS.src, "node_modules" ]
  }
}

if(process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin
  )
}


module.exports = config;



