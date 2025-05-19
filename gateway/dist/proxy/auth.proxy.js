"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthProxyController = void 0;
const common_1 = require("@nestjs/common");
const http_proxy_middleware_1 = require("http-proxy-middleware");
const authProxy = (0, http_proxy_middleware_1.createProxyMiddleware)({
    target: 'http://auth:3001',
    changeOrigin: true,
    onError: (err, req, res) => {
        console.error('🔴 Proxy error:', err.message);
        if (!res.headersSent) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Proxy error');
        }
    }
});
let AuthProxyController = class AuthProxyController {
    proxy(req, res) {
        authProxy(req, res, (err) => {
            if (err) {
                console.error('🔴 Middleware error:', err);
                res.status(500).send('Proxy middleware error');
            }
        });
    }
};
exports.AuthProxyController = AuthProxyController;
__decorate([
    (0, common_1.All)('*'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AuthProxyController.prototype, "proxy", null);
exports.AuthProxyController = AuthProxyController = __decorate([
    (0, common_1.Controller)('auth')
], AuthProxyController);
//# sourceMappingURL=auth.proxy.js.map