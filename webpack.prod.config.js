const path = require('path');
const nodeExternals = require('webpack-node-externals');

const nodeConfig = {
    entry: './src/index.ts',
    externals: [nodeExternals({modulesDir: './node_modules'})],
    target: 'node',
    mode: 'production',
    optimization: {
        minimize: false,
    },
    watch: false,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [
            path.resolve(__dirname, '..', 'node_modules'),
        ],
    },
    output: {
        filename: 'clearvox-callcontrol.umd.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'CallControl',

        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: `(typeof self !== 'undefined' ? self : this)`
    }
};


const webConfig = {
    entry: './src/index.ts',
    target: 'web',
    mode: 'production',
    optimization: {
        minimize: true,
    },
    watch: false,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [
            path.resolve(__dirname, './', 'node_modules'),
        ],
    },
    output: {
        filename: 'clearvox-callcontrol.web.min.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'CallControl'
    },
    externals: {
        axios: 'axios',
        'socket.io-client': 'io',
    },
};


module.exports = [nodeConfig, webConfig];