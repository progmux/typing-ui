const eslint = require(`eslint`);
const lintConfig = require(`./resources/lintConfig.js`);

const lintEngine = new eslint.CLIEngine(lintConfig)

const results = lintEngine.executeOnFiles([`./src`]).results;
const formatter = lintEngine.getFormatter(`unix`);

console.log(formatter(results));