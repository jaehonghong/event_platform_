import { Document, Types } from 'mongoose';
export declare class RewardRequest extends Document {
    userId: string;
    eventId: Types.ObjectId;
    status: 'PENDING' | 'SUCCESS' | 'FAILED';
    requestedAt: Date;
}
export declare const RewardRequestSchema: import("mongoose").Schema<RewardRequest, import("mongoose").Model<RewardRequest, any, any, any, Document<unknown, any, RewardRequest> & RewardRequest & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, RewardRequest, Document<unknown, {}, import("mongoose").FlatRecord<RewardRequest>> & import("mongoose").FlatRecord<RewardRequest> & {
    _id: Types.ObjectId;
}>;
