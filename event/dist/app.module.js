"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const event_controller_1 = require("./event.controller");
const event_service_1 = require("./event.service");
const event_schema_1 = require("./schemas/event.schema");
const reward_schema_1 = require("./schemas/reward.schema");
const reward_request_schema_1 = require("./schemas/reward-request.schema");
const passport_1 = require("@nestjs/passport");
const jwt_strategy_1 = require("./auth/jwt.strategy");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            mongoose_1.MongooseModule.forRoot('mongodb://mongo:27017/event'),
            mongoose_1.MongooseModule.forFeature([
                { name: event_schema_1.Event.name, schema: event_schema_1.EventSchema },
                { name: reward_schema_1.Reward.name, schema: reward_schema_1.RewardSchema },
                { name: reward_request_schema_1.RewardRequest.name, schema: reward_request_schema_1.RewardRequestSchema },
            ]),
        ],
        controllers: [event_controller_1.EventController],
        providers: [event_service_1.EventService, jwt_strategy_1.JwtStrategy],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map