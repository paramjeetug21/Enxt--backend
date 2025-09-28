import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entity/user.entity';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),

    JwtModule.register({
      secret: 'MYDREAM',
      signOptions: { expiresIn: '150h' },
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [],
})
export class UserModule {}
