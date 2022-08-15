const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN || "https://module-federation.herokuapp.com/";

const devConfig = {
    mode: 'development',
    output: {
        publicPath: domain,
    },
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: '/index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                ReactApp: `ReactApp@${domain}/ReactApp/remoteEntry.js`,
                VueApp: `VueApp@${domain}/VueApp/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ]
};


module.exports = merge(commonConfig, devConfig)