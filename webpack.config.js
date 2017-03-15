const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const sourcePath = path.join(__dirname, './client');
const staticsPath = path.join(__dirname, './static');

module.exports = function (env) {
  const nodeEnv = env && env.prod ? 'production' : 'development';
  const isProd = nodeEnv === 'production';

  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: isProd ? 'vendor.[hash].js' : 'vendor.js'
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: nodeEnv,
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('client/index.html')
    })
  ];

  if (isProd) {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
        },
        output: {
          comments: false,
        },
      }),
      new ExtractTextPlugin('styles.[hash].css'),
      new BundleAnalyzerPlugin()
    );
  } else {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new OpenBrowserPlugin({ url: 'http://localhost:3000' })
    );
  }

  return {
    devtool: isProd ? 'source-map' : 'eval',
    context: sourcePath,
    entry: {
      js: './index.js',
      vendor: ['react']
    },
    output: {
      path: staticsPath,
      filename: isProd ? 'scripts.[hash].js' : 'scripts.js',
      publicPath: '/'
    },
    module: {
      rules: [
        // {
        //   test: /\.html$/,
        //   exclude: /node_modules/,
        //   use: {
        //     loader: 'file-loader',
        //     query: {
        //       name: '[name].[ext]'
        //     },
        //   },
        // },
        {
          test: /\.(css|less)$/,
          exclude: /node_modules/,
          use: isProd ?
            ExtractTextPlugin.extract({
              use: [
                'css-loader',
                {
                  loader: 'less-loader',
                  options: {
                    strictMath: true,
                    noIeCompat: true
                  }
                }
              ]
            }) :
            [
              'style-loader',
              'css-loader',
              {
                loader: 'less-loader',
                options: {
                  strictMath: true,
                  noIeCompat: true
                }
              }
            ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader'
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
      modules: [
        path.resolve(__dirname, 'node_modules'),
        sourcePath
      ]
      // ,
      // alias: {
      //   jumpsuit: 'jumpsuit/lib/index'
      // }
    },

    plugins,

    performance: isProd && {
      maxAssetSize: 1024000,
      maxEntrypointSize: 3072000,
      hints: 'warning',
    },

    stats: {
      colors: {
        green: '\u001b[32m',
      }
    },

    devServer: {
      contentBase: './client',
      historyApiFallback: true,
      port: 3000,
      compress: isProd,
      inline: !isProd,
      hot: !isProd,
      stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true,
        colors: {
          green: '\u001b[32m',
        }
      },
    }
  };
};
