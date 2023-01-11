import { Post as PostType } from '../types/Post';
import { User } from '../types/User';
import { Users as UserList } from './User';
import { uidInt } from '../utils/uid';
import parseRichText from '../utils/parseRichText';

const getRandId = (): number => uidInt();

const getRandUser = (): User => UserList[Math.floor(Math.random() * UserList.length)];
const getRandUsers = (): User[] => {
	const users: User[] = [];
	for (let i = 0; i < Math.floor(Math.random() * UserList.length); i++) {
		users.push(getRandUser());
	}
	return users;
};

const getRandDate = (): string => new Date(+new Date() - Math.floor(Math.random() * 1000000000)).toISOString();

export const Posts: PostType[] = [
	{
		id: getRandId(),
		body: 'Ich habe heute eine wunderbare Wanderung im Wald gemacht und die frische Luft genossen.',
		image: '//picsum.photos/id/20/1600/1281/',
		author: getRandUser(),
		likes: getRandUsers(),
		comments: [
			{
				id: getRandId(),
				body: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. #luctus #magna',
				image: null,
				author: getRandUser(),
				likes: getRandUsers(),
				comments: [],
				createdAt: getRandDate(),
				updatedAt: null,
			},
			{
				id: getRandId(),
				body: 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
				author: getRandUser(),
				image: null,
				likes: getRandUsers(),
				comments: [],
				createdAt: getRandDate(),
				updatedAt: null,
			},
			{
				id: getRandId(),
				body: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
				image: null,
				author: getRandUser(),
				likes: getRandUsers(),
				comments: [],
				createdAt: getRandDate(),
				updatedAt: null,
			},
		],
		createdAt: getRandDate(),
		updatedAt: null,
	},
	{
		id: getRandId(),
		body: 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
		image: '//picsum.photos/id/22/1600/1031/',
		author: getRandUser(),
		likes: getRandUsers(),
		comments: [
			{
				id: getRandId(),
				body: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. #luctus #magna',
				image: null,
				author: getRandUser(),
				likes: getRandUsers(),
				comments: [],
				createdAt: getRandDate(),
				updatedAt: null,
			},
			{
				id: getRandId(),
				body: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
				image: null,
				author: getRandUser(),
				likes: getRandUsers(),
				comments: [],
				createdAt: getRandDate(),
				updatedAt: null,
			},
		],
		createdAt: getRandDate(),
		updatedAt: null,
	},
	{
		id: getRandId(),
		body: 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere http://www.cubilia.com Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\n#vulputate #eros',
		image: '//picsum.photos/id/23/1600/1161/',
		author: getRandUser(),
		likes: getRandUsers(),
		comments: [],
		createdAt: getRandDate(),
		updatedAt: getRandDate(),
	},
	{
		id: getRandId(),
		body: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
		image: '//picsum.photos/id/240/1600/1154/',
		author: getRandUser(),
		likes: getRandUsers(),
		comments: [],
		createdAt: getRandDate(),
		updatedAt: getRandDate(),
	},
	{
		id: getRandId(),
		body: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\n #vulputate #eros',
		image: '//picsum.photos/id/64/1600/1539/',
		author: getRandUser(),
		likes: getRandUsers(),
		comments: [],
		createdAt: getRandDate(),
		updatedAt: null,
	},
	{
		id: getRandId(),
		body: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
		image: null,
		author: getRandUser(),
		likes: getRandUsers(),
		comments: [],
		createdAt: getRandDate(),
		updatedAt: null,
	},
	{
		id: getRandId(),
		body: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et http://www.magnis-dis-parturient.com montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\n#odio #justo',
		image: '//picsum.photos/id/453/1600/1157/',
		author: getRandUser(),
		likes: getRandUsers(),
		comments: [
			{
				id: getRandId(),
				body: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. #luctus #magna',
				image: null,
				author: getRandUser(),
				likes: getRandUsers(),
				comments: [],
				createdAt: getRandDate(),
				updatedAt: null,
			},
		],
		createdAt: getRandDate(),
		updatedAt: null,
	},
	{
		id: getRandId(),
		body: 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\n#magna #vulputate',
		image: '//picsum.photos/id/30/1600/1587/',
		author: getRandUser(),
		likes: getRandUsers(),
		comments: [],
		createdAt: getRandDate(),
		updatedAt: getRandDate(),
	},
	{
		id: getRandId(),
		author: getRandUser(),
		likes: getRandUsers(),
		image: '//picsum.photos/id/177/1600/1157/',
		body: 'Ich habe heute eine wunderbare Wanderung im Wald gemacht und die frische Luft genossen. #wanderlust #nature #relaxation',
		createdAt: getRandDate(),
		comments: [
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Das klingt wirklich toll! Ich liebe es auch, in der Natur spazieren zu gehen und die frische Luft zu genießen. #outdooradventures',
				createdAt: getRandDate(),
				updatedAt: null,
			},
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Ja, die Natur ist wirklich erholsam. Ich hoffe, du hast viele schöne Fotos gemacht! #photography #landscape',
				createdAt: getRandDate(),
				updatedAt: null,
			},
		],
	},
	{
		id: getRandId(),
		author: getRandUser(),
		likes: getRandUsers(),
		image: '//picsum.photos/id/225/1600/1157/',
		body: 'Ich habe heute ein neues Rezept ausprobiert und es war wirklich lecker! Hier ist das Rezept: https://www.example.com/thai-curry-recipe #cooking #foodie',
		createdAt: getRandDate(),
		updatedAt: null,
		comments: [
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Oh, was für ein Rezept hast du denn ausprobiert? Ich liebe es, neue Rezepte auszuprobieren! #foodporn #delicious',
				createdAt: getRandDate(),
				updatedAt: null,
			},
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Es war ein Rezept für ein vegetarisches Thai-Curry. Ich habe es mit Reis und frischem Gemüse serviert. Es war wirklich lecker und ich werde es definitiv wieder machen! #vegetarian #thaifood',
				createdAt: getRandDate(),
				updatedAt: null,
			},
		],
	},
	{
		id: getRandId(),
		author: getRandUser(),
		likes: getRandUsers(),
		image: '//picsum.photos/id/180/1600/1157/',
		body: 'Ich habe heute an einem spannenden Machine Learning-Projekt gearbeitet und interessante Ergebnisse erzielt. Hier ist der Link zu meinem Blog-Beitrag darüber: https://www.example.com/ml-project-results #machinelearning #ai #data',
		createdAt: getRandDate(),
		updatedAt: null,
		comments: [
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Wow, das klingt wirklich interessant!',
				createdAt: getRandDate(),
				updatedAt: null,
			},
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Du kleiner Nerd! Viele Grüsse deine Oma',
				createdAt: getRandDate(),
			},
		],
	},
	{
		id: getRandId(),
		author: getRandUser(),
		likes: getRandUsers(),
		image: '//picsum.photos/id/252/1600/1157/',
		body: 'Ich habe heute an einem spannenden Design-Projekt gearbeitet und ein neues Konzept entwickelt. Ich bin wirklich stolz auf das Ergebnis! #graphicdesign #creativity #inspiration',
		createdAt: getRandDate(),
		comments: [
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Das klingt großartig! Ich liebe es, kreative Ideen zu entwickeln und an Design-Projekten zu arbeiten. #design #art',
				createdAt: getRandDate(),
			},
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Ja, es ist immer wieder aufregend, neue Konzepte und Designs zu entwickeln. Ich bin gespannt, das Ergebnis zu sehen! #graphicdesigner #innovation',
				createdAt: getRandDate(),
			},
		],
	},
	{
		id: getRandId(),
		author: getRandUser(),
		likes: getRandUsers(),
		image: null,
		body: 'Gerade eben habe ich eine spannende Vorlesung über künstliche Intelligenz besucht und viel gelernt. Ich bin wirklich begeistert von den Möglichkeiten von AI! #ai #learning #education',
		createdAt: getRandDate(),
		comments: [
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Das klingt wirklich interessant! Ich bin auch sehr fasziniert von der künstlichen Intelligenz und den Möglichkeiten, die sie bietet. #artificialintelligence #technology',
				createdAt: getRandDate(),
			},
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Ja, die künstliche Intelligenz hat wirklich das Potenzial, unsere Welt zu verändern. Ich bin gespannt, was die Zukunft bringen wird! #innovation #future',
				createdAt: getRandDate(),
			},
		],
	},
	{
		id: getRandId(),
		author: getRandUser(),
		likes: getRandUsers(),
		image: '//picsum.photos/id/24/1600/1157/',
		body: 'Heute ein neues Buch gelesen und es hat mich wirklich begeistert. Ich kann es wirklich jedem empfehlen! #reading #bookworm #literatur #icanread',
		createdAt: getRandDate(),
		comments: [
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Oh, welches Buch hast du denn gelesen? Ich liebe es, neue Bücher zu entdecken! #books #readinglist',
				createdAt: getRandDate(),
			},
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Ich habe "Die Geschichte der Bienen" von Maja Lunde gelesen. Es ist wirklich ein tolles Buch! #bookrecommendation #bookstagram #bookworm',
				createdAt: getRandDate(),
			},
		],
	},
	{
		id: getRandId(),
		author: getRandUser(),
		likes: getRandUsers(),
		image: '//picsum.photos/id/136/1600/1161/',
		body: 'Ich habe heute meinen ersten Klettermaxe gemacht und es war eine unglaubliche Erfahrung! Ich kann es kaum erwarten, bald wiederzukommen. #climbing #outdoors #nature #sport',
		createdAt: getRandDate(),
		comments: [
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Wow, das klingt wirklich aufregend! Ich habe auch schon ein paar Mal geklettert und es ist wirklich ein tolles Gefühl, die Herausforderung zu meistern.',
				createdAt: getRandDate(),
			},
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Ja, das Klettern ist wirklich eine tolle Sportart. Ich bin froh, dass du deinen ersten Klettermaxe gemacht hast und hoffe, du hast viel Spaß daran!',
				createdAt: getRandDate(),
			},
		],
	},
	{
		id: getRandId(),
		author: getRandUser(),
		likes: getRandUsers(),
		image: '//picsum.photos/id/996/1600/1161/',
		body: 'Ich habe heute meine erste Yoga-Stunde von www.yoga-loga.com besucht und es war wirklich entspannend. Ich glaube, ich werde regelmäßig hingehen. #yoga #yogalife #yogapose #yogagirl',
		createdAt: getRandDate(),
		comments: [
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Das klingt wirklich toll! Ich liebe Yoga und es ist wirklich eine großartige Möglichkeit, den Geist zu beruhigen und den Körper zu stärken.',
				createdAt: getRandDate(),
			},
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Ja, Yoga ist wirklich eine tolle Möglichkeit, sich zu entspannen und gleichzeitig fit zu bleiben. Ich freue mich, dass du deine erste Stunde besucht hast und hoffe, du wirst viel Freude daran haben!',
				createdAt: getRandDate(),
			},
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Ich habe auch schon Yoga gemacht und es ist wirklich eine tolle Sportart. Ich kann es wirklich jedem empfehlen! #yogalife #yogapose #yogagirl',
				createdAt: getRandDate(),
			},
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Was ist denn Yoga? Ich habe noch nie davon gehört.',
				createdAt: getRandDate(),
			},
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Du weißt schon, Yoga ist diese Sportart, bei der alle in einer bestimmten Position stehen und sich dabei entspannen. Es ist wirklich eine tolle Sportart, die ich jedem empfehlen kann. #yoga #yogalife #yogapose #yogagirl',
				createdAt: getRandDate(),
			},
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Firlefanz! Ich habe noch nie etwas von diesem Yoga gehört. Ich glaube, ich werde lieber Fußball spielen. #sport #football #soccer',
				createdAt: getRandDate(),
			},
		],
	},
	{
		id: getRandId(),
		author: getRandUser(),
		likes: getRandUsers(),
		body: 'Warum hat der Elefant keinen Computer? Weil er keine Maus hat! #funny #joke #lol #humor',
		createdAt: getRandDate(),
		comments: [
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Haha, das ist wirklich witzig! Ich liebe solche albernen Witze.',
				createdAt: getRandDate(),
			},
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Ja, das ist wirklich ein lustiger Witz. Ich werde bestimmt noch öfter daran denken.',
				createdAt: getRandDate(),
			},
		],
	},
	{
		id: getRandId(),
		author: getRandUser(),
		likes: getRandUsers(),
		body: 'Wusstest du, dass Pinguine in der Lage sind, bei einer Temperatur von minus 70 Grad Celsius zu überleben? #facts',
		image: 'https://picsum.photos/id/244/1600/1161/',
		createdAt: getRandDate(),
		comments: [
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Das ist wirklich erstaunlich! Ich hätte nie gedacht, dass Pinguine in solch kalten Temperaturen überleben können.',
				createdAt: getRandDate(),
			},
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Ich wusste, dass Pinguine in kalten Gebieten leben, aber ich hatte keine Ahnung, dass sie in solch extremen Temperaturen überleben können.',
				createdAt: getRandDate(),
			},
		],
	},
	{
		id: getRandId(),
		author: getRandUser(),
		likes: getRandUsers(),
		body: 'Wusstest du, dass Schlangen keine Ohren haben und somit nicht hören können? #facts',
		createdAt: getRandDate(),
		comments: [
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Das ist wirklich interessant! Ich hatte keine Ahnung, dass Schlangen keine Ohren haben und somit nicht hören können.',
				createdAt: getRandDate(),
			},
		],
	},
	{
		id: getRandId(),
		author: getRandUser(),
		likes: getRandUsers(),
		createdAt: getRandDate(),
		body: 'Wusstest du, dass der älteste Hund der Welt 29 Jahre alt wurde? #facts',
		image: 'https://picsum.photos/id/237/1600/1161/',
		comments: [
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				body: 'Das ist wirklich erstaunlich! Ich hätte nie gedacht, dass Hunde so alt werden können.',
				createdAt: getRandDate(),
			},
		],
	},
	{
		id: getRandId(),
		author: getRandUser(),
		likes: getRandUsers(),
		createdAt: getRandDate(),
		body: 'Ich habe heute Morgen eine wirklich schöne Joggingrunde gemacht. Die Sonne schien und es war so ruhig und friedlich. Ich liebe es, am frühen Morgen Sport zu machen, wenn die Welt noch in Ruhe ist. #sport #fitness #jogging',
		comments: [
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				createdAt: getRandDate(),
				body: 'Das klingt wirklich wunderbar! Ich wünschte, ich könnte jeden Morgen so eine schöne Joggingrunde machen.',
			},
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				createdAt: getRandDate(),
				body: 'Ich liebe es auch, am frühen Morgen Sport zu machen. Es gibt mir immer so viel Energie für den Tag.',
			},
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				createdAt: getRandDate(),
				body: 'Auf dem Sofa war es auch toll. #streber',
			},
		],
	},
	{
		id: getRandId(),
		author: getRandUser(),
		likes: getRandUsers(),
		createdAt: getRandDate(),
		body: 'Ich habe heute ein neues Rezept ausprobiert und es war wirklich lecker! Es war ein vegetarischer Auflauf mit Kürbis, Zucchini und Karotten. Ich werde es auf jeden Fall wieder machen. #food #vegetarian #recipe',
		comments: [
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				createdAt: getRandDate(),
				body: 'Das klingt wirklich lecker! Ich liebe vegetarische Aufläufe, besonders wenn sie so viele verschiedene Gemüsesorten enthalten.',
			},
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				createdAt: getRandDate(),
				body: 'Ich werde das Rezept auf jeden Fall ausprobieren. Vielen Dank für den Tipp!',
			},
		],
	},
	{
		id: getRandId(),
		author: getRandUser(),
		likes: getRandUsers(),
		createdAt: getRandDate(),
		body: 'Ich habe heute meine Wohnung gründlich geputzt und es fühlt sich so gut an, alles sauber und ordentlich zu haben. Ich liebe es, wenn alles an seinem Platz ist und ich mich wirklich wohl fühle in meinem Zuhause. Ich glaube, dass eine saubere und ordentliche Umgebung wirklich dazu beitragen kann, dass man sich entspannt und glücklich fühlt.',
		comments: [
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				createdAt: getRandDate(),
				body: 'Ich stimme vollkommen zu! Es gibt wirklich nichts Schöneres, als in einer sauberen und ordentlichen Umgebung zu leben.',
			},
			{
				id: getRandId(),
				author: getRandUser(),
				likes: getRandUsers(),
				createdAt: getRandDate(),
				body: 'Ich versuche immer, meine Wohnung regelmäßig zu putzen, aber manchmal fällt es mir schwer, mich dazu aufzuraffen. Aber wenn ich es dann endlich getan habe, fühle ich mich immer so viel besser.',
			},
		],
	},
];


export const PostsFormated = Posts.map((post) => {
	const html = parseRichText(post.body);
	return {
		...post,
		body: html,
		comments: post.comments?.map((comment) => {
			const html = parseRichText(comment.body);
			return {
				...comment,
				body: html,
			};
		}),
	};
});
