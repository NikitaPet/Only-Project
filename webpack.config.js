import webpack from 'webpack'
import { CleanWebpackPlugin } from 'clean-webpack-plugin' // удаляет лишние файлы из output.path каталога после каждой пересборки
import HTMLWebpackPlugin from 'html-webpack-plugin' // генерирует HTML5, который включает в себя все webpack-пакеты
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin' // запускает проверку типов TypeScript
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin' // нужен для модулей, указаных в tsconfig в paths
import FaviconsWebpackPlugin from 'favicons-webpack-plugin' // устанавливает favicons через webpack
import DotenvWebpack from 'dotenv-webpack' // поддерживает .env окружение (доступ к .env)
import dotenv from 'dotenv' // загружает переменные среды из файла .env в process.env.
import path from 'path'

const { HotModuleReplacementPlugin, DefinePlugin } = webpack
const env = dotenv?.config()

const cssModuleIdentName = '[name]__[local]__[hash:base64:6]'
const favicon = 'public/favicon.png'

export default {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve('./build'),
        filename: 'bundle.js',
    },

    devServer: { port: 3000 },
    plugins: [
        new HTMLWebpackPlugin({ template: './src/index.html', inject: 'body' }),
        new CleanWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin({ async: false }),
        new DotenvWebpack({ ignoreStub: true }),
        new FaviconsWebpackPlugin({ logo: favicon }),
        new DefinePlugin({ 'process.env': JSON.stringify(env?.parsed) }),
        new HotModuleReplacementPlugin(),
    ],
    resolve: {
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },

    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },

            {
                test: /^(?!.*?\.module).*\.(scss|sass|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: { api: 'modern-compiler' },
                    },
                ],
            },

            {
                test: /\.module\.(scss|sass|css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                namedExport: false,
                                exportLocalsConvention: 'as-is',
                                localIdentName: cssModuleIdentName,
                            },
                        },
                    },

                    {
                        loader: 'sass-loader',
                        options: { api: 'modern-compiler' },
                    },
                ],
            },

            {
                test: /\.(jpg|jpeg|png|svg|gif)$/,
                use: ['file-loader'],
            },
        ],
    },
}
