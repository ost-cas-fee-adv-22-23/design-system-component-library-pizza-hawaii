import { User } from './User';

export type Post = {
	id: number;
	body: string;
	image: string | null;
	author: User;
	createdAt: string;
	updatedAt?: string | null;
};
