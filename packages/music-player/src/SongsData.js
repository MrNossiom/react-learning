import { v4 as uuid } from 'uuid';

const songsLinks = [
	{
		title: 'Beaver Creek',
		cover: 'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
		artist: 'Aso, Middle School, Aviino',
		audio: 'https://mp3.chillhop.com/serve.php/?mp3=10075',
		colors: ['#205950', '#2ab3bf'],
		id: uuid(),
		active: true,
	},
	{
		title: 'Daylight',
		cover: 'https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg',
		artist: 'Aiguille',
		audio: 'https://mp3.chillhop.com/serve.php/?mp3=9272',
		colors: ['#EF8EA9', '#ab417f'],
		id: uuid(),
		active: false,
	},
	{
		title: 'Keep Going',
		cover: 'https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg',
		artist: 'Swørn',
		audio: 'https://mp3.chillhop.com/serve.php/?mp3=9222',
		colors: ['#CD607D', '#c94043'],
		id: uuid(),
		active: false,
	},
	{
		title: 'Nightfall',
		cover: 'https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg',
		artist: 'Aiguille',
		audio: 'https://mp3.chillhop.com/serve.php/?mp3=9148',
		colors: ['#EF8EA9', '#ab417f'],
		id: uuid(),
		active: false,
	},
	{
		title: 'Reflection',
		cover: 'https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg',
		artist: 'Swørn',
		audio: 'https://mp3.chillhop.com/serve.php/?mp3=9228',
		colors: ['#CD607D', '#c94043'],
		id: uuid(),
		active: false,
	},
	{
		title: 'Under the City Stars',
		cover: 'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
		artist: 'Aso, Middle School, Aviino',
		audio: 'https://mp3.chillhop.com/serve.php/?mp3=10074',
		colors: ['#205950', '#2ab3bf'],
		id: uuid(),
		active: false,
	},
	{
		title: 'Life Goes On',
		cover: 'https://images.genius.com/77680659719d5c4e23f4f2c5689b18ed.1000x1000x1.jpg',
		artist: 'BTS',
		audio: '/BTS-Life-Goes-On.mp3',
		colors: ['#205950', '#2ab3bf'],
		id: uuid(),
		active: false,
	},
];

export default songsLinks;
