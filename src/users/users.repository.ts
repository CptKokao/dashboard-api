import { inject, injectable } from 'inversify';
import { IUserRepository } from './users.repository.interface';
import { TYPES } from '../types';
import { PrismaService } from '../database/prisma.service';
import { User } from './user.entity';
import { UserModal } from '@prisma/client';

@injectable()
export class UsersRepository implements IUserRepository {
	constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {}

	async create({ email, password, name }: User) {
		return this.prismaService.client.userModal.create({
			data: {
				email,
				password,
				name,
			},
		});
	}

	async find(email: string): Promise<UserModal | null> {
		return this.prismaService.client.userModal.findFirst({
			where: {
				email,
			},
		});
	}
}
