const path = require(`path`);
const webpack = require(`webpack`);
const DotenvWebpackPlugin = require(`dotenv-webpack`);

let webpackConfig = {
    entry: `./src/app.js`,
    output: {
        path: path.join(__dirname, `../../dist`),
        filename: `app.bundle.js`,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: `babel-loader`,
                    options: {
                        presets: [`env`]
                    }
                }
            }
        ]
    },
    plugins: [
        new DotenvWebpackPlugin({
            path: `./.env`
        })
    ]
};

if(process.env.NODE_ENV === `prod`) {
    webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = webpack(webpackConfig);