// 보상 정보(COIN, EXP 등)를 저장하는 스키마입니다. 이벤트와 연결되어 있습니다.
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Reward extends Document {
  @Prop({ required: true })
  type: 'COIN' | 'EXP'; // 보상 타입

  @Prop({ required: true })
  amount: number; // 수량 (ex: 1000코인)

  @Prop({ required: true, type: Types.ObjectId, ref: 'Event' })
  eventId: Types.ObjectId; // 연결된 이벤트 ID

  @Prop()
  description?: string; // 추가 설명 (ex: "1시간 경험치 부스트")
}

export const RewardSchema = SchemaFactory.createForClass(Reward);