const fs = require(`fs`);

const builder = {
    build: function () {
        fs.createReadStream(`./src/index.html`)
            .pipe(fs.createWriteStream(`./dist/index.html`));
        fs.createReadStream(`./src/stylesheet.css`)
            .pipe(fs.createWriteStream(`./dist/stylesheet.css`));
        fs.createReadStream(`./src/media/favicon.ico`)
            .pipe(fs.createWriteStream(`./dist/favicon.ico`));
    }
};

module.exports = builder;