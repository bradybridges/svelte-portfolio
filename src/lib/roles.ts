type RolesType = {
	title: string;
	currentRole: boolean;
	company: string;
	start: string;
	end: string;
	bullets?: string[];
	companyUrl?: string;
};

export const roles: RolesType[] = [
	{
		title: 'Senior Front-End Engineer',
		currentRole: true,
		company: 'Athos Commerce(formerly Searchspring)',
		companyUrl: 'https://athoscommerce.com',
		start: '12/1/23',
		end: 'Current',
		bullets: [
			'Advise directors, sales, customer success, solution engineering, and backend teams on front-end feasibility using deep API/SDK expertise, followed by authoring scopes of work and technical documentation that guide engineering teams through execution',
			'Architected reusable front-end components and shared UI patterns, reducing duplicated code and accelerating feature delivery across multiple projects',
			'Improved front-end application performance through bundle optimization, lazy loading, and rendering improvements, resulting in faster page load times and improved user engagement',
			'Led technical planning and execution for front-end initiatives, translating product requirements into scalable engineering solutions',
			'Conducted code reviews and mentored 5+ engineers, improving code quality and reducing defects prior to release'
		]
	},
	{
		title: 'Front-End Engineer',
		currentRole: false,
		company: 'Athos Commerce(formerly Searchspring)',
		companyUrl: 'https://athoscommerce.com',
		start: '3/15/21',
		end: '12/1/23',
		bullets: [
			'Led development of high-impact UI/UX features that increased revenue by 71.6% and improved user conversion rates by 3.3x',
			'Built responsive, performant web applications using React, TypeScript, and modern front-end best practices',
			'Integrated REST and GraphQL APIs to deliver dynamic, data-driven user interfaces',
			'Identified, debugged, and resolved high-priority production issues, improving application stability and user experience',
			'Mentored junior engineers through code reviews, technical guidance, and knowledge sharing, improving overall team productivity'
		]
	},
	{
		title: 'Software Engineer',
		currentRole: false,
		company: 'Zinnfinity',
		companyUrl: 'https://zinnfinity.com',
		start: '2/1/20',
		end: '2/28/21',
		bullets: [
			'Built Lens Explorer, a machine-vision lens selection tool for Graftek Imaging',
			'Developed custom WordPress plugins using PHP to extend platform functionality and meet client requirements'
		]
	}
];
