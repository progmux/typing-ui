const fs = require(`fs`);

module.exports = {
    init: function () {
        const shellScript = 
            `#!/bin/bash
            RESULT="$(npm run --silent lint)"
            if [[ -z $RESULT ]]; then
            echo "Lint Passed."
            else
            echo "Lint Failed:"
            echo "\${RESULT}"
            exit 1
            fi`;

        fs.writeFile(`./.git/hooks/pre-push`, shellScript, function (err) {
            if (err) {
                return console.log(err);
            } else {
                console.log(`Git hook created.`);                
            }
        });

        fs.chmodSync(`./.git/hooks/pre-push`, `0777`);
    }
};