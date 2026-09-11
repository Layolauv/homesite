import { base } from '$app/paths';

export default {
	hero: {
		ctas: [
			{title: 'View My Resume', url: `${base}/assets/My_Resume.pdf`},
			{title: 'Read My Writing', url: `${base}/musings`}
		],
		callout:{
			text: 'Let’s Talk',
			email: 'iam@layolauv.me',
			summary: '9+ years of experience with JavaScript, Typescript, modern frontend and backend frameworks.'
		}
	},
	marquee: [
		'9+ Years Experience',
		'$120M+ project impact',
		'Worked with global brands',
		'Authored technical publications'
	]
}