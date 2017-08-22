require(`dotenv`).config();
const server = require(`./resources/server.js`);
const builder = require(`./resources/builder.js`)

builder.build();
server.start();