module.exports = {
    entry: './src/app.ts',
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader',
            options: {
                transpileOnly: true
            }
        }]
    },
    devtool: "source-map"
}