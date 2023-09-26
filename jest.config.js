const babelConfig = require("./babel.config.testing")

const config = {
    testEnvironment: 'node',
    transform: {
        '^.+\\.jsx?$': ['babel-jest', babelConfig],
    },
}

module.exports = config;