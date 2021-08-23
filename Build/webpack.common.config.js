// plugins
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        'qsa--body': './js/qsa--body.js',
        'qsa--head': './js/qsa--head.js',
        'qsa--styles': './scss/qsa.scss'
    },
    output: {
        filename: 'js/[name].min.js',
        chunkFilename: 'js/[name][chunkhash].bundle.js',
        libraryTarget: 'umd', // var
        library: 'qsa',
        auxiliaryComment: 'Copyright - XIMA media GmbH | Sächsische Landesbibliothek — Staats- und Universitätsbibliothek Dresden (SLUB)'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /.(jpg|jpeg|png|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { outputPath: 'css/', name: '[name].min.css'}
                    },
                    {
                        loader: 'sass-loader',
                    },
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[folder]/[name].[ext]',
                        outputPath: 'fonts/',
                        publicPath: '../../'
                    }
                }],
                type: 'javascript/auto'
            }
        ]
    },
    plugins: [
        // Load autoprefixer via postcss-loader
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        }),
        new webpack.ProvidePlugin({
            // https://code.luasoftware.com/tutorials/bootstrap/setup-bootstrap4-with-npm-and-webpack/
            Popper: ['popper.js', 'default'],
            Util: 'exports-loader?Util!bootstrap/js/dist/util'
        }),
        new SVGSpritemapPlugin('./components/icon/assets/**/*.svg', {
            output: {
                filename: 'icons/icon.min.svg'
            },
            sprite: {
                prefix: 'icon-'
            },
            styles: {
                filename: 'sprites.scss'
            }
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: './components/typography/assets/src/fonts', to: 'fonts'
                },
                {
                    from: './components/favicon/assets', to: 'img/favicon'
                },
                {
                    from: './components/logo/assets', to: 'img/logo'
                },
                {
                    from: './components/hero/assets', to: 'img/hero'
                },
                {
                    from: './components/teaser/assets', to: 'img/teaser'
                },
                {
                    from: './components/carousel/assets', to: 'img/carousel'
                },
                {
                    from: './components/content/assets', to: 'img/content'
                },
                {
                    from: './components/flip-card/assets', to: 'img/flip-card'
                },
                {
                    from: './components/contents-head-area/assets', to: 'img/contents-head-area'
                }
            ]
        })
    ]
}
