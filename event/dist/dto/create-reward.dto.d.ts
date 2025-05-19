export declare class CreateRewardDto {
    readonly type: 'COIN' | 'EXP';
    readonly amount: number;
    readonly eventId: string;
    readonly description?: string;
}
