import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { CreateRewardDto } from './dto/create-reward.dto';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    createEvent(dto: CreateEventDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/event.schema").Event> & import("./schemas/event.schema").Event & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createReward(dto: CreateRewardDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/reward.schema").Reward> & import("./schemas/reward.schema").Reward & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    requestReward(req: any, eventId: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/reward-request.schema").RewardRequest> & import("./schemas/reward-request.schema").RewardRequest & {
        _id: import("mongoose").Types.ObjectId;
    }) | {
        status: string;
    }>;
    getMyRequests(req: any): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/reward-request.schema").RewardRequest> & import("./schemas/reward-request.schema").RewardRequest & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getAllRequests(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/reward-request.schema").RewardRequest> & import("./schemas/reward-request.schema").RewardRequest & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
