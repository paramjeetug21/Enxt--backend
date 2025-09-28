import { IsString, IsEmail, IsEnum, IsOptional } from 'class-validator';
import { UserRole } from '../enum/user.enum';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsEmail()
  email: string;

  @IsEnum(UserRole)
  role: UserRole;

  @IsString()
  @IsOptional()
  photo?: string;

  @IsString()
  panNumber: string;
}
