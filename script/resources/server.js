var connect = require(`connect`);
var serveStatic = require(`serve-static`);
var path = require(`path`);
var dotenv = require(`dotenv`);

module.exports = {
  start: function () {
    this.instance = connect()
      .use(serveStatic(path.join(__dirname, `../../dist`)))
      .listen(process.env.PORT, function () {
        console.log(`Server running on port: ` + process.env.PORT);
      });
  }
};