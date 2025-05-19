// 게이트웨이 모듈: Auth/Event API로의 프록시 컨트롤러들을 등록합니다.
import { Module } from '@nestjs/common';
import { AuthProxyController } from './proxy/auth.proxy';
import { EventProxyController } from './proxy/event.proxy';

@Module({
  controllers: [AuthProxyController, EventProxyController],
})
export class AppModule {}