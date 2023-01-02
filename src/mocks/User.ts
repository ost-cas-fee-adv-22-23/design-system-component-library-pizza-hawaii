import { User as UserType } from '../types/User';

const getRandDate = (): string => new Date(+new Date() - Math.floor(Math.random() * 10000000000)).toISOString();

export const Users: UserType[] = [
	{
		userName: 'johndoe',
		fullName: 'John Doe',
		email: 'johndoe@example.com',
		city: 'Zürich',
		avatar: 'https://faces-img.xcdn.link/image-lorem-face-6307.jpg',
		posterImage: '//picsum.photos/seed/johndoe1/1600/1157/',
		bio: 'Ich bin Softwareentwickler und interessiere mich für die Entwicklung von Web-Anwendungen mit modernen Technologien. In meiner Freizeit gehe ich gerne wandern und genieße die Natur.',
		createdAt: getRandDate(),
	},
	{
		userName: 'janedoe',
		fullName: 'Jane Doe',
		email: 'janedoe@example.com',
		city: 'Bern',
		avatar: 'https://faces-img.xcdn.link/image-lorem-face-2.jpg',
		posterImage: '//picsum.photos/seed/janedoe/1600/1157/',
		bio: 'Ich bin Grafikdesignerin und liebe es, kreative Lösungen für visuelle Herausforderungen zu finden. Ich habe einen Bachelor in Grafikdesign und habe für verschiedene Kunden gearbeitet. In meiner Freizeit male ich gerne und besuche Ausstellungen in Museen und Galerien.',
		createdAt: getRandDate(),
	},
	{
		userName: 'bobsmith',
		fullName: 'Bob Smith',
		email: 'bobsmith@example.com',
		city: 'Genf',
		avatar: 'https://faces-img.xcdn.link/image-lorem-face-3.jpg',
		posterImage: '//picsum.photos/seed/bobsmith/1600/1157/',
		bio: 'Ich bin Datenwissenschaftler und interessiere mich für die Anwendung von Machine Learning und Artificial Intelligence in verschiedenen Bereichen. Ich habe einen Master in Datenwissenschaften und habe an Projekten in den Bereichen Gesundheitswesen, Finanzwesen und Einzelhandel gearbeitet. In meiner Freizeit spiele ich gerne Schach und lese Bücher über Technologie und Zukunftstrends.',
		createdAt: getRandDate(),
	},
	{
		userName: 'sarahjohnson',
		fullName: 'Sarah Johnson',
		email: 'sarahjohnson@example.com',
		city: 'Lausanne',
		avatar: 'https://faces-img.xcdn.link/image-lorem-face-4.jpg',
		posterImage: '//picsum.photos/seed/sarahjohnson/1600/1157/',
		bio: 'Ich bin Marketing-Spezialistin und interessiere mich für die Entwicklung von kreativen Marketingkampagnen und -inhalten. Ich habe einen Bachelor in Marketing und habe für Startups und etablierte Unternehmen gearbeitet. In meiner Freizeit tanze ich gerne und treffe mich mit Freunden zum Kochen und Essen.',
		createdAt: getRandDate(),
	},
	{
		userName: 'emmamiller',
		fullName: 'Emma Miller',
		email: 'emmamiller@example.com',
		city: 'Luzern',
		avatar: 'https://faces-img.xcdn.link/image-lorem-face-5.jpg',
		posterImage: '//picsum.photos/seed/emmamiller/1600/1157/',
		bio: 'Ich bin Projektmanagerin und interessiere mich für die Führung von agilen Projektteams und die Zusammenarbeit mit Kunden. Ich habe einen Master in Business Administration und habe in den Bereichen Software und Hardware gearbeitet. In meiner Freizeit spiele ich gerne Golf und schaue mir Sportveranstaltungen an.',
		createdAt: getRandDate(),
	},
	{
		userName: 'davidsmith',
		fullName: 'David Smith',
		email: 'davidsmith@example.com',
		city: 'St. Gallen',
		avatar: 'https://faces-img.xcdn.link/image-lorem-face-6.jpg',
		posterImage: '//picsum.photos/seed/davidsmith/1600/1157/',
		bio: 'Ich bin UX-Designer und interessiere mich für die Schaffung von benutzerfreundlichen und intuitiven Web- und Mobile-Anwendungen. Ich habe einen Bachelor in Computer Science und habe an Projekten für Kunden in den Bereichen Bildung, E-Commerce und Reise gearbeitet. In meiner Freizeit spiele ich gerne Musik und treffe mich mit Freunden zum Sport treiben.',
		createdAt: getRandDate(),
	},
];

export const Current: UserType = Users[0];
export const NewUser: UserType = {
	userName: 'peterparker',
	fullName: 'Peter Parker',
	email: 'peterparker@example.com',
	city: '',
	bio: '',
	avatar: undefined,
	posterImage: undefined,
	createdAt: new Date(+new Date() - Math.floor(Math.random() * 20000)).toISOString(),
};
