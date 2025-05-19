import { Model } from 'mongoose';
import { Event } from './schemas/event.schema';
import { Reward } from './schemas/reward.schema';
import { RewardRequest } from './schemas/reward-request.schema';
import { CreateRewardDto } from './dto/create-reward.dto';
import { CreateEventDto } from './dto/create-event.dto';
export declare class EventService {
    private eventModel;
    private rewardModel;
    private rewardRequestModel;
    constructor(eventModel: Model<Event>, rewardModel: Model<Reward>, rewardRequestModel: Model<RewardRequest>);
    createEvent(dto: CreateEventDto): Promise<import("mongoose").Document<unknown, {}, Event> & Event & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createReward(dto: CreateRewardDto): Promise<import("mongoose").Document<unknown, {}, Reward> & Reward & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    requestReward(userId: string, eventId: string): Promise<(import("mongoose").Document<unknown, {}, RewardRequest> & RewardRequest & {
        _id: import("mongoose").Types.ObjectId;
    }) | {
        status: string;
    }>;
    findUserRequests(userId: string): Promise<(import("mongoose").Document<unknown, {}, RewardRequest> & RewardRequest & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findAllRequests(): Promise<(import("mongoose").Document<unknown, {}, RewardRequest> & RewardRequest & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
