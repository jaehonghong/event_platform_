// 이벤트 정보(이름, 조건, 기간 등)를 정의한 MongoDB 스키마입니다.
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Event extends Document {
  @Prop({ required: true })
  name: string; // 이벤트 이름 (ex: "주말 출석")

  @Prop()
  condition: string; // 조건 식별자 (ex: 'weekend_login')

  @Prop({ required: true })
  startDate: Date; // 이벤트 시작일

  @Prop({ required: true })
  endDate: Date; // 이벤트 종료일

  @Prop({ default: true })
  isActive: boolean; // 이벤트 진행 여부
}

export const EventSchema = SchemaFactory.createForClass(Event);