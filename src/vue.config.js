module.exports = {
    lintOnSave: false,
    useEslint: false,
    baseUrl: '/',
    outputDir: 'dist',
    devServer: {
        // open: process.platform === 'darwin',
        host: 'localhost:8080',
        port: 8086,
        proxy: {
            '/api': {
                target: 'lcoalhost:8080', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}