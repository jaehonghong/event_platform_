// 보상 생성 시 클라이언트가 보내는 데이터 형식 (DTO)
export class CreateRewardDto {
    readonly type: 'COIN' | 'EXP';
    readonly amount: number;
    readonly eventId: string;
    readonly description?: string;
  }