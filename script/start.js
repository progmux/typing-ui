require(`dotenv`).config();
const server = require(`./resources/server.js`);
const builder = require(`./resources/builder.js`);
const webpackCompiler = require(`./resources/webpackCompiler.js`);

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
        console.log(`Changes detected.`);
        if (server.instance) {
            console.log(`Closing server.`);
            server.instance.close();
        }
        console.log(`Starting server.`);
        server.start();
    });
}