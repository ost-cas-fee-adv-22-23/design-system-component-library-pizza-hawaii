import { User as UserType } from '../types/User';

export const Users: UserType[] = [
	{
		userName: 'johndoe',
		fullName: 'John Doe',
		email: 'john@ost.ch',
		city: 'Rapperswil',
		avatar: 'https://faces-img.xcdn.link/image-lorem-face-1.jpg',
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	},
	{
		userName: 'dlevinge0',
		fullName: 'Damaris Levinge',
		email: 'dlevinge0@upenn.edu',
		city: 'Maanĭt',
		avatar: 'https://faces-img.xcdn.link/image-lorem-face-2.jpg',
		bio: 'Adaptive impactful synergy',
	},
	{
		userName: 'kgirke1',
		fullName: 'Kaila Girke',
		email: 'kgirke1@github.com',
		city: 'Ladysmith',
		avatar: 'https://faces-img.xcdn.link/image-lorem-face-3.jpg',
		bio: 'Optimized logistical flexibility',
	},
	{
		userName: 'eigo2',
		fullName: 'Elfrida Igo',
		email: 'eigo2@webeden.co.uk',
		city: 'Noemuti',
		avatar: 'https://faces-img.xcdn.link/image-lorem-face-4.jpg',
		bio: 'Cross-platform bi-directional attitude',
	},
	{
		userName: 'jbackshill3',
		fullName: 'Joyan Backshill',
		email: 'jbackshill3@webs.com',
		city: 'Klisura',
		avatar: 'https://faces-img.xcdn.link/image-lorem-face-5.jpg',
		bio: 'Robust modular circuit',
	},
	{
		userName: 'hlimming4',
		fullName: 'Hilton Limming',
		email: 'hlimming4@howstuffworks.com',
		city: 'Kesamben',
		avatar: 'https://faces-img.xcdn.link/image-lorem-face-6.jpg',
		bio: 'Quality-focused composite process improvement',
	},
];

export const Current: UserType = Users[0];
