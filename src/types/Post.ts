import { User } from './User';

export type Post = {
	id: number;
	body: string;
	image?: string | null;
	author: User;
	likes?: User[];
	comments?: Post[];
	createdAt: string;
	updatedAt?: string | null;
};
