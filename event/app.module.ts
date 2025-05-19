// 이벤트 서버의 루트 모듈입니다. MongoDB 연결 및 서비스 등록이 포함되어 있습니다.
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { Event, EventSchema } from './schemas/event.schema';
import { Reward, RewardSchema } from './schemas/reward.schema';
import { RewardRequest, RewardRequestSchema } from './schemas/reward-request.schema';

import { PassportModule } from '@nestjs/passport'; // ✅ 추가
import { JwtStrategy } from './auth/jwt.strategy'; // ✅ 추가

@Module({
  imports: [
    PassportModule, // ✅ 추가
    MongooseModule.forRoot('mongodb://mongo:27017/event'),
    MongooseModule.forFeature([
      { name: Event.name, schema: EventSchema },
      { name: Reward.name, schema: RewardSchema },
      { name: RewardRequest.name, schema: RewardRequestSchema },
    ]),
  ],
  controllers: [EventController],
  providers: [EventService, JwtStrategy], // ✅ JwtStrategy 등록
})
export class AppModule {}