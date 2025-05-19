import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Event } from './schemas/event.schema';
import { Reward } from './schemas/reward.schema';
import { RewardRequest } from './schemas/reward-request.schema';
import { CreateRewardDto } from './dto/create-reward.dto';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event.name) private eventModel: Model<Event>,
    @InjectModel(Reward.name) private rewardModel: Model<Reward>,
    @InjectModel(RewardRequest.name) private rewardRequestModel: Model<RewardRequest>,
  ) {}

  async createEvent(dto: CreateEventDto) {
    return this.eventModel.create(dto); // 이벤트 저장
  }

  async createReward(dto: CreateRewardDto) {
    return this.rewardModel.create(dto); // 보상 저장
  }

  async requestReward(userId: string, eventId: string) {
    const existing = await this.rewardRequestModel.findOne({ userId, eventId });
    if (existing) return { status: 'ALREADY_REQUESTED' }; // 중복 방지
    return this.rewardRequestModel.create({ userId, eventId, status: 'SUCCESS' });
  }

  async findUserRequests(userId: string) {
    return this.rewardRequestModel.find({ userId });
  }

  async findAllRequests() {
    return this.rewardRequestModel.find();
  }
}