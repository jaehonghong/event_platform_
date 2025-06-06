"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const event_schema_1 = require("./schemas/event.schema");
const reward_schema_1 = require("./schemas/reward.schema");
const reward_request_schema_1 = require("./schemas/reward-request.schema");
let EventService = class EventService {
    constructor(eventModel, rewardModel, rewardRequestModel) {
        this.eventModel = eventModel;
        this.rewardModel = rewardModel;
        this.rewardRequestModel = rewardRequestModel;
    }
    async createEvent(dto) {
        return this.eventModel.create(dto);
    }
    async createReward(dto) {
        return this.rewardModel.create(dto);
    }
    async requestReward(userId, eventId) {
        const existing = await this.rewardRequestModel.findOne({ userId, eventId });
        if (existing)
            return { status: 'ALREADY_REQUESTED' };
        return this.rewardRequestModel.create({ userId, eventId, status: 'SUCCESS' });
    }
    async findUserRequests(userId) {
        return this.rewardRequestModel.find({ userId });
    }
    async findAllRequests() {
        return this.rewardRequestModel.find();
    }
};
exports.EventService = EventService;
exports.EventService = EventService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(event_schema_1.Event.name)),
    __param(1, (0, mongoose_1.InjectModel)(reward_schema_1.Reward.name)),
    __param(2, (0, mongoose_1.InjectModel)(reward_request_schema_1.RewardRequest.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], EventService);
//# sourceMappingURL=event.service.js.map