const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js' // Use [name] placeholder to generate unique filenames for each chunk
    },
    devServer: {
        hot: true,
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 8564,
    },
    // Remove splitChunks configuration to avoid conflicts
    devtool: 'inline-source-map',
    performance: {
        hints: false,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ],
            },
        ],
    },
}
