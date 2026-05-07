type RolesType = {
	title: string;
	company: string;
	start: string;
	end: string;
	bullets?: string[];
	companyUrl?: string;
};

export const roles: RolesType[] = [
	{
		title: 'Frontend Engineer III',
		company: 'Athos Commerce',
		companyUrl: 'https://athoscommerce.com',
		start: '5/1/25',
		end: 'Current',
		bullets: [
			'Architected reusable frontend components and shared UI patterns, reducing duplicated code and accelerating feature delivery across multiple projects',
			'Improved frontend application performance through bundle optimization, lazy loading, and rendering improvements, resulting in faster page load times and improved user engagement',
			'Led technical planning and execution for frontend initiatives, translating product requirements into scalable engineering solutions',
			'Conducted code reviews to enforce best practices, improve code quality, and reduce defects prior to release'
		]
	},
	{
		title: 'Frontend Engineer',
		company: 'Athos Commerce',
		companyUrl: 'https://athoscommerce.com',
		start: '3/15/20',
		end: '5/1/25',
		bullets: [
			'Led development of high-impact UI/UX features that increased revenue by 71.6% and improved user conversion rates by 3.3x',
			'Built responsive, performant web applications using React, TypeScript, and modern frontend best practices',
			'Integrated REST and GraphQL APIs to deliver dynamic, data-driven user interfaces',
			'Identified, debugged, and resolved high-priority production issues, improving application stability and user experience',
			'Mentored junior engineers through code reviews, technical guidance, and knowledge sharing, improving overall team productivity'
		]
	},
	{
		title: 'Software Engineer',
		company: 'Zinnfinity',
		companyUrl: 'https://zinnfinity.com',
		start: '5/1/19',
		end: '3/28/20',
		bullets: [
			'Developed custom WordPress plugins using PHP to extend platform functionality and meet client requirements',
			'Collaborated directly with clients to translate business needs into technical solutions',
			'Quickly ramped up on unfamiliar codebases and technologies, contributing to production features within tight timelines'
		]
	}
];
