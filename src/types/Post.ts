import { User } from './User';

export type PostContent = {
	title: string;
	body: string;
	image: string;
};

export type Post = {
	id: number;
	content: PostContent;
	author: User;
	createdAt: Date;
	updatedAt?: Date;
};
