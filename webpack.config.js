const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = (env) => {
  const isProduction = env === 'production';

  console.log('env', env);
    return {
      entry: './src/app.js',
      output: {
          path: path.join(__dirname, 'public'),
          filename: 'bundle.js'
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: 'style.css'
        }),
        new CompressionPlugin({   <-- Add this
          asset: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240,
          minRatio: 0.8
        })
      ],
      module: {
          rules: [{
              loader: 'babel-loader',
              test: /\.js$/,
              exclude: /node_modules/
          }, {
              test: /\.s?css$/,
              use: [
                  'style-loader',
                  MiniCssExtractPlugin.loader,
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: true
                    }
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: true
                    }
                  }
              ]
          }]
      },
      devtool: isProduction ? 'source-map' : 'inline-source-map',
      devServer: {
          contentBase: path.join(__dirname, 'public'),
          historyApiFallback: true
      }
  };
}

// module.exports = {
//     entry: './src/app.js',
//     output: {
//         path: path.join(__dirname, 'public'),
//         filename: 'bundle.js'
//     },
//     module: {
//         rules: [{
//             loader: 'babel-loader',
//             test: /\.js$/,
//             exclude: /node_modules/
//         }, {
//             test: /\.s?css$/,
//             use: [
//                 'style-loader',
//                 'css-loader',
//                 'sass-loader'
//             ]
//         }]
//     },
//     devtool: 'cheap-module-eval-source-map',
//     devServer: {
//         contentBase: path.join(__dirname, 'public'),
//         historyApiFallback: true
//     }
// };

// loader

