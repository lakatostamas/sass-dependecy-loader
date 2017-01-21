const { resolve } = require('path')
const { scssConfig } = require('./config/dependencies')

module.exports = {
    entry: './app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss/,
                loader: 'style!css!sass!' + resolve('loaders/sass-dependency-loader') + '?' + JSON.stringify(scssConfig)
            }
        ]
    },
    watch: true
}