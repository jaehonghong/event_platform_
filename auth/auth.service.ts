import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async signup(dto: CreateUserDto) {
    const hashed = await bcrypt.hash(dto.password, 10);
    const created = new this.userModel({ email: dto.email, password: hashed });
    return created.save();
  }

  async login(email: string, password: string) {
    const user = await this.userModel.findOne({ email });
    if (!user) throw new UnauthorizedException('유저 없음');
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException('비밀번호 불일치');
    const payload = { sub: user._id, roles: user.roles, email: user.email };
    return { access_token: this.jwtService.sign(payload) };
  }
}