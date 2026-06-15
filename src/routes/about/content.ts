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
			role: 'Senior Software Developer',
			duration: 'feb 2024 - present',
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
			role: 'Lead Engineer / CTO',
			duration: 'may 2021 - feb 2024',
			company: 'THDCTech',
			location: 'NG',
			points: [
					`Built MVPs for multiple startups from scratch, personally writing the core
					architecture using NestJS and React`,
				`Automated the software development lifecycle by implementing CI/CD
					pipelines and Docker containerization, cutting development -to-deploy time
					by 20%.`,
					`Shipped scalable product roadmaps by translating stakeholder business logic
					into technical specifications and database schema designs.`,
					`Mentored a small engineering team through pair programming and code
					reviews to maintain high architectural standards.`
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
	]
};