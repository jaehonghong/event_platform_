"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const http_proxy_middleware_1 = require("http-proxy-middleware");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use('/auth', (0, http_proxy_middleware_1.createProxyMiddleware)({
        target: 'http://auth:3001',
        changeOrigin: true,
        pathRewrite: { '^/auth': '' },
        onError: (err, req, res) => {
            console.error('🔴 Proxy Error (auth):', err.message);
            if (!res.headersSent) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Proxy error from /auth');
            }
        }
    }));
    app.use('/event', (0, http_proxy_middleware_1.createProxyMiddleware)({
        target: 'http://event:3002',
        changeOrigin: true,
        pathRewrite: { '^/event': '' },
        onError: (err, req, res) => {
            console.error('🔴 Proxy Error (event):', err.message);
            if (!res.headersSent) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Proxy error from /event');
            }
        }
    }));
    await app.listen(3000);
    console.log(`🚪 Gateway Server running on port 3000`);
}
bootstrap();
//# sourceMappingURL=main.js.map