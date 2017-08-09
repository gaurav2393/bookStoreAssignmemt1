const webpack = require('webpack');
const path = require('path');

// import webpack from 'webpack';
// import path from 'path';

module.exports = {
    devtool: 'inline-source-map',

    entry: [
        path.resolve(__dirname, 'src/main.js')
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                presets: ['es2015','react']
                }
            }, {
                test: /\.css$/,
                loaders: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                }]
            }
        ]
    }
}


// const webpack = require('webpack');
// const webpackValidator = require('webpack-validator');
// const { resolve } = require('path');
// const HTMLWebpackPlugin = require('html-webpack-plugin');

// module.exports = (env) => {
//     const config = {
//         context: resolve('app'),
//         entry: {
//             vendor: ['lodash',],
//             app: './main.js'
//         },
//         plugins: [
//             new webpack.optimize.CommonsChunkPlugin({
//                 name: "vendor",
//                 filename: "vendor.js",
//                 minChunks: Infinity
//             }),
//         ],
//         output: {
//             path: resolve(__dirname, './dist'),
//             filename: '[name].bundle.js',
//             publicPath: '/dist/'
//         },
//         devtool: env.prod ? 'source-map': 'eval',
//         module: {
//             loaders: [
//                 {
//                     test: /\.js$/,
//                     loader: 'babel-loader',
//                     exclude: /node_modules/,
//                     query: {
//                       presets: ['es2015']
//                     }
//                 }, {
//                     test: /\.less$/,
//                     loaders: ['style-loader', 'css-loader', 'less-loader']
//                 }
//             ]
//         }
//     }
//     return webpackValidator(config)
// }