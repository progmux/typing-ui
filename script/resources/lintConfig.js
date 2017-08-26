module.exports = {
    useEslintrc: false,
    parserOptions: {
        ecmaVersion: 7,
        sourceType: `module`
    },
    rules: {
        semi: 2,
        quotes: [`error`, `backtick`],
        camelcase: [2, { properties: `always` }],
        'brace-style': [2, `1tbs`]
    }
};