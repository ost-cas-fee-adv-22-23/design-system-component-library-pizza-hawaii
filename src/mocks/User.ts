import { User as UserType } from '../types/User';

export const All: UserType[] = [
	{
		userName: 'johndoe',
		fullName: 'John Doe',
		email: 'john@ost.ch',
		city: 'Rapperswil',
		avatar: 'https://robohash.org/johndoe.jpg?size=300x300&set=set5',
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	},
	{
		userName: 'dlevinge0',
		fullName: 'Damaris Levinge',
		email: 'dlevinge0@upenn.edu',
		city: 'Maanĭt',
		avatar: 'https://robohash.org/sintdebitisdeserunt.jpg?size=300x300&set=set5',
		bio: 'Adaptive impactful synergy',
	},
	{
		userName: 'kgirke1',
		fullName: 'Kaila Girke',
		email: 'kgirke1@github.com',
		city: 'Ladysmith',
		avatar: 'https://robohash.org/quiaesseaut.jpg?size=300x300&set=set5',
		bio: 'Optimized logistical flexibility',
	},
	{
		userName: 'eigo2',
		fullName: 'Elfrida Igo',
		email: 'eigo2@webeden.co.uk',
		city: 'Noemuti',
		avatar: 'https://robohash.org/beataelaboreharum.jpg?size=300x300&set=set5',
		bio: 'Cross-platform bi-directional attitude',
	},
	{
		userName: 'jbackshill3',
		fullName: 'Joyan Backshill',
		email: 'jbackshill3@webs.com',
		city: 'Klisura',
		avatar: 'https://robohash.org/remquiaveritatis.jpg?size=300x300&set=set5',
		bio: 'Robust modular circuit',
	},
	{
		userName: 'hlimming4',
		fullName: 'Hilton Limming',
		email: 'hlimming4@howstuffworks.com',
		city: 'Kesamben',
		avatar: 'https://robohash.org/nihilutsuscipit.jpg?size=300x300&set=set5',
		bio: 'Quality-focused composite process improvement',
	},
];

export const Current: UserType = All[0];
