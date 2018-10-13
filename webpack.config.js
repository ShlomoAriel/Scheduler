const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const source = path.join(__dirname, '');
const dest = path.join(__dirname, 'bundle');

const config = {
    entry: {
        app: ['babel-polyfill','./src/index.js']
    },
    output: {
        path: dest,
        filename: '[name].bundle.js'
    },
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {test: /\.js$/, exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {presets: ['es2015', 'react', 'env', 'stage-2']}
                }
            },
            {test   : /\.scss$/, loader : ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!postcss-loader!sass-loader'})},
            {test: /\.css$/, use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader']})},
            {test: /\.(ttf|eot|svg|png|gif|otf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader'}
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].style.css")
    ],
    resolve: {
        modules: [
            path.join(__dirname, "./src"),
            "node_modules"
        ]
    }

};

module.exports = config;
