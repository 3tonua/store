const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname + '/public'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [{
            loader: 'babel-loader',
            exclude: /node_modules/,
            test: /\.jsx?$/,
            query: {
                presets: ['react', 'babel-preset-es2016', 'babel-preset-stage-0'],
            }
        }]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    }
};