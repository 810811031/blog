const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'js/[name:8].js',
        chunkFilename: 'js/[name:8].js',
        path: path.resolve(__dirname, '../build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: ['ts-loader', 'babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, './build'),
        compress: true,
        port: 8080,
        overlay: true
    }
}