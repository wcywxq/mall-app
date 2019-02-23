const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
    productionSourceMap: false,
    devServer: {
        open: true
    },
    // 开启gzip压缩
    configureWebpack: config => {
        if(process.env.NODE_ENV == 'production') {
            return {
                plugins: [
                    new CompressionPlugin({
                        test: /\.js$|\.html$|\.css$/,
                        // 超过10k, 进行gzip压缩
                        threshold: 10240,
                        // 是否删除源文件 true:删除
                        deleteOriginalAssets: false
                    })
                ]
            }
        }
    }
}