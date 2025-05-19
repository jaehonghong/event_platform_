import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/create-user.dto';
export declare class AuthService {
    private userModel;
    private readonly jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    signup(dto: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    login(email: string, password: string): Promise<{
        access_token: string;
    }>;
}
