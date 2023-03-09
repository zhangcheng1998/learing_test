const baseConfig = require('./webpack.base.js')
const { merge } = require('webpack-merge')
const path = require('path')

module.exports = merge(baseConfig, {
    mode: 'development',
    entry: { index: './src/client/index.tsx' },
    output: {
        // //custom publicPath
        // publicPath: 'https://example.com'
        filename: 'index.js',
        path: path.resolve(process.cwd(), "client_build")
    },
})


// webpack.client.js
// const path = require("path");
// const { merge } = require("webpack-merge");
// const baseConfig = require("./webpack.base");

// module.exports = merge(baseConfig, {
//     mode: "development",
//     entry: "./src/client/index.tsx",
//     output: {
//         filename: "index.js",
//         path: path.resolve(process.cwd(), "client_build"),
//     },
// });