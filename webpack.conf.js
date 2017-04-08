var path = require('path')
var webpack = require('webpack')

var projectRoot = path.resolve(__dirname)
var env = process.env.NODE_ENV

module.exports = {
    entry: "./lib/main.js",
    output: {
        path: path.resolve(__dirname, "./dist/"),
        filename: "package.js",
        library: "app",
        libraryTarget: "commonjs2"
    },
    devtool: 'inline-source-map',
    target: 'electron-renderer',
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components')
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: projectRoot,
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                },
            },
            { test: /\.json$/, loader: 'json' },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: path.join(projectRoot,'build/','img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: path.join(projectRoot,'build/','img/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    externals: {
        "vue": "vue",
        "vuex": "vuex",
        "jquery": "jquery",
        "xterm": "xterm",
        "esprima": "esprima",
        "js-yaml": "js-yaml"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
    ]
}