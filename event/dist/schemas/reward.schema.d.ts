import { Document, Types } from 'mongoose';
export declare class Reward extends Document {
    type: 'COIN' | 'EXP';
    amount: number;
    eventId: Types.ObjectId;
    description?: string;
}
export declare const RewardSchema: import("mongoose").Schema<Reward, import("mongoose").Model<Reward, any, any, any, Document<unknown, any, Reward> & Reward & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Reward, Document<unknown, {}, import("mongoose").FlatRecord<Reward>> & import("mongoose").FlatRecord<Reward> & {
    _id: Types.ObjectId;
}>;
