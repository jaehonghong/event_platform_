// 이벤트 생성 시 클라이언트가 보내는 데이터 형식 (DTO)
export class CreateEventDto {
    readonly name: string;
    readonly condition: string;
    readonly startDate: Date;
    readonly endDate: Date;
  }