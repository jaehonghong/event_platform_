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
exports.EventController = void 0;
const common_1 = require("@nestjs/common");
const event_service_1 = require("./event.service");
const create_event_dto_1 = require("./dto/create-event.dto");
const create_reward_dto_1 = require("./dto/create-reward.dto");
const common_2 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
let EventController = class EventController {
    constructor(eventService) {
        this.eventService = eventService;
    }
    createEvent(dto) {
        return this.eventService.createEvent(dto);
    }
    createReward(dto) {
        return this.eventService.createReward(dto);
    }
    requestReward(req, eventId) {
        return this.eventService.requestReward(req.user.userId, eventId);
    }
    getMyRequests(req) {
        return this.eventService.findUserRequests(req.user.userId);
    }
    getAllRequests() {
        return this.eventService.findAllRequests();
    }
};
exports.EventController = EventController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_event_dto_1.CreateEventDto]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "createEvent", null);
__decorate([
    (0, common_1.Post)('reward'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reward_dto_1.CreateRewardDto]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "createReward", null);
__decorate([
    (0, common_1.Post)('reward-request/:eventId'),
    (0, common_2.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('eventId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "requestReward", null);
__decorate([
    (0, common_1.Get)('reward-request/me'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EventController.prototype, "getMyRequests", null);
__decorate([
    (0, common_1.Get)('reward-request/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventController.prototype, "getAllRequests", null);
exports.EventController = EventController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [event_service_1.EventService])
], EventController);
//# sourceMappingURL=event.controller.js.map