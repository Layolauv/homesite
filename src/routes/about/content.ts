export default {
	hero: {
		subtitle: 'About Me',
		title: 'Layo Folaranmi',
		excerpt: 'I am a Senior Software Engineer and Tech Lead specializing in high-scale enterprise solutions. I architect performance-driven systems for global leaders like BCG and Colgate-Palmolive, bridging the gap between complex engineering and massive business ROI while contributing expert technical thought leadership to industry-leading platforms including Okta and Toptal.',
		cards: [
			{ value: '$128M+', title: 'Total Project Impact' },
			{ value: '9+', title: 'Years Of Experience' },
			{ value: '7+', title: 'Technical Publications' }
		]
	},
	experience: [
		{
			role: 'Integration Engineer',
			duration: 'aug 2024 - present',
			company: 'Arrivia',
			location: 'US',
			points: [
				`Architected and developed a custom, lightweight widget engine to
				manage/deploy dynamic creatives across white-label partner sites, replacing bulky
				legacy dependencies.`,
				`Optimized delivery workflows, resulting in a 15% improvement in
				deployment efficiency across high-traffic brand ecosystems.`,
				`Integrated Tealium for event -driven tag management, streamlining
				deployments for Global Fortune 500 brands and increasing marketing
				conversion by 5%`,
				`Engineered serverless data pipelines using Google Cloud Functions and
				BigQuery to ingest user behavior data, providing the technical foundation for
				real-time product decisions.`
			]
		},
		{
			role: 'Senior Software Engineer',
			duration: 'jul 2023 - jul 2024',
			company: 'Colgate-Palmolive',
			location: 'US',
			points: [
				`Built internal CMS components using Vue/Nuxt and Directus, reducing site
				modification time for non-technical stakeholders by 30%.`,
				`Led the development of Shopify application extensions that optimized the
				checkout experience, driving over $10M in conversion growth in a year.`,
				`Refactored headless Shopify stores to improve site performance, resulting in
				a 15% improvement in initial page load times.`
			]
		},
		{
			role: 'Senior Product Engineer',
			duration: 'feb 2022 - mar 2023',
			company: 'BCG',
			location: 'US',
			points: [
				`Engineered the frontend for a predictive AI tool using Angular and NgRx,
				enabling a global airline to visualize data benchmarks that saved $100M in
				operating costs.`,
				`Implemented complex data visualization layers using D3.js and Vega-Lite to
				turn predictive model outputs into actionable dashboards for stakeholders.`,
				`Built RESTful endpoints using FastAPI (Python) and SQLAlchemy, optimizing
					the data-fetching layer to support real-time performance tracking.`
			]
		}
	],
	publications: [
		{
			title: 'Creating a React PWA with Social Login Authentication',
			url: 'https://developer.okta.com/blog/2025/07/22/react-pwa',
			date: '2025',
			publication: 'Okta'
		},
		{
			title: 'Full User Authentication and Access Control: A Laravel Passport Tutorial ',
			url: 'https://www.toptal.com/laravel/passport-tutorial-auth-user-access',
			date: '2020',
			publication: 'Toptal'
		},
		{
			title: 'Stretch Your Imagination and Build a Delightful Sign-In Experience',
			url: 'https://developer.okta.com/blog/2025/11/12/custom-signin',
			date: '2025',
			publication: 'Okta'
		},
		{
			title: 'Web Development for Kids: HTML!',
			url: 'https://blog.thdctech.com/web-development-for-kids-html/',
			date: '2024',
			publication: 'THDCTech'
		}
	],
	projects: [
		{
			title: 'Wordlots',
			url: '',
			img: '',
			tags: []
		},
		{
			title: 'THDC Checkout Builder',
			url: '',
			img: '',
			tags: []
		}
	]

};