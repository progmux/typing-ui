const path = require(`path`);
const webpack = require(`webpack`);
const DotenvWebpackPlugin = require(`dotenv-webpack`);

let webpackConfig = {
    entry: `./src/app.js`,
    output: {
        path: path.join(__dirname, `../../dist`),
        filename: `app.bundle.js`,
    },
    plugins: [
        new DotenvWebpackPlugin({
            path: `./.env`
        })
    ]
};

module.exports = webpack(webpackConfig);