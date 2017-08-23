require(`dotenv`).config();
const moment = require(`moment`);
const server = require(`./resources/server.js`);
const builder = require(`./resources/builder.js`);
const webpackCompiler = require(`./resources/webpackCompiler.js`);
const gitHook = require(`./resources/gitHook.js`);

builder.build();
if (process.env.NODE_ENV === `dev`) {
    watch();
} else {
    webpackCompiler.run(function(err, stats) {
        if(err) {
            console.log(err);
        }
    });
    server.start();
}

function watch() {
    webpackCompiler.watch({
        ignored: [/node_modules/, /dist/],
        poll: 1000
    }, (err, stats) => {
        console.log(moment().format(`M/D/YY HH:mm:ss`) + ` Changes detected!`);
        gitHook.init();
        if (server.instance) {
            console.log(`Closing server.`);
            server.instance.close();
        }
        console.log(`Starting server.`);
        server.start();
    });
}