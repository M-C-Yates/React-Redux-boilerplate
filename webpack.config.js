const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env) => {
  const isProduction = env === 'production';

  console.log('env', env);
    return {
      entry: './src/app.js',
      output: {
          path: path.join(__dirname, 'public', 'dist'),
          filename: 'bundle.js'
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: 'styles.css'
        }),
        new webpack.DefinePlugin({
          'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY)
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
          historyApiFallback: true,
          publicPath: '/dist/'
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

