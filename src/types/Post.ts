import { User } from './User';

export type Post = {
	id: number;
	body: string;
	image: string;
	author: User;
	createdAt: Date;
	updatedAt?: Date;
};
