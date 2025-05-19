// '/auth/*' 요청을 Auth 서버(3001번 포트)로 프록시합니다.
import { Controller, All, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { createProxyMiddleware, Options } from 'http-proxy-middleware';

const authProxy = createProxyMiddleware({
  target: 'http://auth:3001',
  changeOrigin: true,
  /**
   * 에러 발생 시 처리 함수
   */
  onError: (err: Error, req: Request, res: Response) => {
    console.error('🔴 Proxy error:', err.message);
    if (!res.headersSent) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Proxy error');
    }
  }
} as Options); // 👈 타입 명시: http-proxy-middleware의 Options 인터페이스로 캐스팅

@Controller('auth')
export class AuthProxyController {
  @All('*')
  proxy(@Req() req: Request, @Res() res: Response) {
    authProxy(req, res, (err) => {
      if (err) {
        console.error('🔴 Middleware error:', err);
        res.status(500).send('Proxy middleware error');
      }
    });
  }
}