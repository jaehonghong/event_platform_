// '/event/*' 요청을 Event 서버(3002번 포트)로 프록시합니다.
import { Controller, All, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const eventProxy = createProxyMiddleware({
  target: 'http://event:3002',
  changeOrigin: true,
});

@Controller('event')
export class EventProxyController {
  @All('*')
  proxy(@Req() req: Request, @Res() res: Response) {
    return eventProxy(req, res, () => {});
  }
}