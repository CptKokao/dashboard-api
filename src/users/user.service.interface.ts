import { UserModal } from '@prisma/client';
import { UserLoginDto } from './dto/user-login.dto';
import { UserRegisterDto } from './dto/user-register.dto';

export interface IUserService {
	createUser: ({ email, name, password }: UserRegisterDto) => Promise<UserModal | null>;
	validateUser: (dto: UserLoginDto) => Promise<boolean>;
}
