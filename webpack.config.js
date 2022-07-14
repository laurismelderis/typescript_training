const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'app/app.ts'),
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      filename: 'bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack App',
        filename: 'index.html',
        template: './index.html'
      })
    ],
    devServer: {
      port: 3000
    }
  };