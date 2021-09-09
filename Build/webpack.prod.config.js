const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');

module.exports = merge(common,{
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../Resources/Public/qucosa_relaunch/'),
        publicPath: '/typo3conf/ext/slub_web_qucosa/Resources/Public/qucosa_relaunch/'
    }
});
