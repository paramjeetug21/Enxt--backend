import { Injectable } from '@nestjs/common';
import { User } from '../entity/user.entity';
import * as bcrypt from 'bcrypt';
import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../dto/createUser.dto';
@Injectable()
export class UserService {
  constructor(readonly JwtService: JwtService) {}

  async createUser(dto: CreateUserDto) {
    const existingUser = await User.findOne({
      where: { email: dto.email },
    });
    if (existingUser) return existingUser;

    const hashedPassword = await bcrypt.hash(dto.password, 10);
    return User.create({ ...dto, password: hashedPassword });
  }

  async validateUser(email: string, password: string) {
    const user = await User.findOne({ where: { email }, raw: true });
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new UnauthorizedException('Invalid credentials');

    return user;
  }

  async login(user: User) {
    const payload = { sub: user.id, role: user.role };
    return { access_token: this.JwtService.sign(payload) };
  }
  async getProfile(id: string) {
    const user = await User.findByPk(id);
    return user;
  }
}
