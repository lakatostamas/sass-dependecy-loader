const { getLoaderConfig } = require('loader-utils')
const { join } = require('path')

module.exports = function(source) {
    this.cacheable()
    const {basePath = '', paths = []}  = getLoaderConfig(this)
    return `
        ${paths.map(url => `@import "${join(basePath, url)}";`).join('\n')}
        ${source}`
}