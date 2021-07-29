const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        // options related to how webpack emits results
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // rules for modules (configure loaders, parser options, etc.)
            {
                // Conditions:
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }]
    }
}