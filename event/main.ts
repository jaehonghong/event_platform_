// NestJS 앱의 진입점으로, 서버를 시작하는 코드입니다.
// ValidationPipe를 전역으로 설정하여 DTO 유효성 검사를 자동화합니다.
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // DTO 유효성 검사 활성화
  await app.listen(3002);
  console.log(`🎁 Event Server running on port 3002`);
}
bootstrap();