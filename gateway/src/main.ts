// NestJS 앱의 진입점으로, API 게이트웨이를 초기화합니다.
// Swagger 문서를 통해 전체 API를 문서화합니다.
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { Request, Response, RequestHandler } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

 
  const authProxy = createProxyMiddleware({
    target: 'http://auth:3001',
    changeOrigin: true,
     // @ts-expect-error: onError is supported but not typed properly
    onError: (err: Error, req: Request, res: Response) => {
      console.error('🔴 [AUTH] Proxy error:', err.message);
      if (!res.headersSent) {
        res.writeHead(502, { 'Content-Type': 'text/plain' });
        res.end('Auth proxy failed');
      }
    },
  });

  
  const eventProxy = createProxyMiddleware({
    target: 'http://event:3002',
    changeOrigin: true,
    // @ts-expect-error: onError is supported but not typed properly
    onError: (err: Error, req: Request, res: Response) => {
      console.error('🔴 [EVENT] Proxy error:', err.message);
      if (!res.headersSent) {
        res.writeHead(502, { 'Content-Type': 'text/plain' });
        res.end('Event proxy failed');
      }
    },
  });

  app.use('/auth', authProxy);
  app.use(
    '/event',
    createProxyMiddleware({
      target: 'http://event:3002',
      changeOrigin: true,
    }) as unknown as RequestHandler
  );

  await app.listen(3000);
  console.log(`🚪 Gateway Server running on port 3000`);
}
bootstrap();