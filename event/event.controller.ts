// REST API 엔드포인트를 정의합니다. 클라이언트 요청을 처리합니다.
import {Controller, Post, Get, Body, Param, Req} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { CreateRewardDto } from './dto/create-reward.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post('create')
  createEvent(@Body() dto: CreateEventDto) {
    return this.eventService.createEvent(dto);
  }

  @Post('reward')
  createReward(@Body() dto: CreateRewardDto) {
    return this.eventService.createReward(dto);
  }

  @Post('reward-request/:eventId')
  @UseGuards(AuthGuard('jwt')) 
  requestReward(@Req() req, @Param('eventId') eventId: string) {
  return this.eventService.requestReward(req.user.userId, eventId);
  }

  @Get('reward-request/me')
  getMyRequests(@Req() req) {
    return this.eventService.findUserRequests(req.user.userId);
  }

  @Get('reward-request/all')
  getAllRequests() {
    return this.eventService.findAllRequests();
  }
}