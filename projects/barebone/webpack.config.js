module.exports = {
    mode: 'development',
    devtool: "source-map",



    entry: './src/index.ts',
    output: {
        path: require('path').join(__dirname, './public/dist/'),
        filename: 'main.js',
    },



    externals: {
        'babylonjs': 'BABYLON',
    },



    module: {
        rules: [
            { test: /\.ts$/, use: [{ loader: 'ts-loader' }] },
        ]
    },



    resolve: {
        extensions: ['.ts', '.js']
    },



    devServer: {
        compress: false,
        port: 8080,
        contentBase: './public/', // not from webpack, eg index.html
        filename: 'main.js', // bundle script
        publicPath: '/dist/', // webpack output dir
        hot: true, // hmr
        inline: true // refresh, in case hmr failed
    }
}