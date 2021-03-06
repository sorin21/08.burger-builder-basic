const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isProduction = (env) => {
  return env === "production"
};
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                minimize: true,
                localIdentName: "[name]__[local]__[hash:base64:5]"
              }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                sourceMap: true,
                minimize: true,
                localIdentName: "[name]__[local]__[hash:base64:5]"
              }
            },
            {
              loader: "sass-loader",
              options: {
                modules: true,
                sourceMap: true,
                minimize: true,
                localIdentName: "[name]__[local]__[hash:base64:5]"
              }
            }
          ]
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "url-loader?limit=8000&name=images/[name].[ext]"
      }
    ]
  },
  // devtool: isProduction ? 'source-map' : "cheap-module-eval-source-map",
  devtool: isProduction ? "source-map" : "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new ExtractTextPlugin("style.css")
    // new BundleAnalyzerPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    compress: isProduction ? true : false
  }
};