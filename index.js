module.exports = {
    extends: [
        './rules/best-practices',
        './rules/errors',
        './rules/node',
        './rules/strict',
        './rules/style',
        './rules/variables'
    ].map(require.resolve),
    env: {
        'browser': true
    }
};
