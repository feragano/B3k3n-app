const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
    app.use(
        createProxyMiddleware('/fee-assessment-categories', 
        {
            target : 'https://asia-southeast2-sejutacita-app.cloudfunctions.net',
            changeOrigin : true,
        })
    )
    app.use(
        createProxyMiddleware('/fee-assessment-books', 
        {
            target : 'https://asia-southeast2-sejutacita-app.cloudfunctions.net',
            changeOrigin : true,
        })
    )
}