const path = require('path');

module.exports = {
    outputPath: path.resolve(__dirname, '../', 'public'),
    root: path.resolve(__dirname),
    template: './src/index.html',
    favicon: './src/assets/icon/favicon.ico',
};