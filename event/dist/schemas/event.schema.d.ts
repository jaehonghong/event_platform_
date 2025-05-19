import { Document } from 'mongoose';
export declare class Event extends Document {
    name: string;
    condition: string;
    startDate: Date;
    endDate: Date;
    isActive: boolean;
}
export declare const EventSchema: import("mongoose").Schema<Event, import("mongoose").Model<Event, any, any, any, Document<unknown, any, Event> & Event & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Event, Document<unknown, {}, import("mongoose").FlatRecord<Event>> & import("mongoose").FlatRecord<Event> & {
    _id: import("mongoose").Types.ObjectId;
}>;
