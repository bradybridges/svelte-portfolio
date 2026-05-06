type ProjectType = {
	name: string;
	description: string;
	url: string;
	slug: string;
	image: string;
	badges: string[];
	githubUrl?: string;
	motivation?: string;
	position?: 'top' | 'center' | 'bottom';
};

import easyref from '$lib/assets/easyref.png';
import launch from '$lib/assets/launch-trajectory.png';
import wschat from '$lib/assets/ws-chat.png';
import todocli from '$lib/assets/todo-cli.png';

export const projects: ProjectType[] = [
	{
		name: 'EasyRef',
		description:
			'Referral and analytics tracking platform that lets users monitor traffic sources and measure link effectiveness without any client-side integration. Users create trackers with unique short codes and share the generated redirect URL; when a visitor clicks the link, EasyRef records the view and redirects them to the target site. Built on a Node.js/Express REST API with a Preact/TypeScript frontend, the platform gives users a clean dashboard to manage sites, trackers, and view counts across their web properties.',
		motivation:
			"I built EasyRef because I kept sending out job applications and sharing side projects with no idea what happened after I hit send. Did anyone actually click the GitHub link in my resume? Did a recruiter look at my portfolio? I was flying blind, and every analytics tool I found assumed I was running a marketing campaign, dashboards full of funnels, conversion goals, and UTM parameters I didn't need. EasyRef is intentionally private. There's no public signup, no third-party script to audit, no SDK to drop into someone else's codebase. I just wanted a quiet tool for myself, something I could trust to be accurate without worrying about data sharing or account tiers. When you're sending a resume, the last thing you want is your tracking infrastructure phoning home to a venture-backed SaaS.",
		url: 'https://easyref.bbdev.cloud',
		slug: 'easy-ref',
		image: easyref,
		badges: [
			'React',
			'Typescript',
			'Node',
			'Express',
			'Auth0',
			'Redux Toolkit',
			'PosgresSQL',
			'Vitest'
		]
	},
	{
		name: 'Rocket Launch Visualizer',
		description:
			"Getting a rocket to orbit isn't just about going up, it's about going fast in exactly the right direction at exactly the right time. This interactive visualizer lets you manipulate launch and orbital parameters and watch in real time how each decision shapes a flight path's viability and efficiency. A must-try for Kerbal Space Program veterans and rocket enthusiasts alike.",
		url: 'https://launch.bbdev.cloud',
		githubUrl: 'https://github.com/bradybridges/rocket-launch-visualizer',
		slug: 'rocket-launch',
		image: launch,
		badges: ['React', 'TailwindCSS', 'D3', 'Docker'],
		position: 'top'
	},
	{
		name: 'Websocket Chat',
		description:
			"End-to-end encrypted, self-hostable, and entirely terminal-native. This chat application cuts out the browser and the bloat, letting users communicate securely through a lightweight NPM package from the comfort of their own terminal. Built on WebSockets and deployable in minutes with Docker.",
		url: 'https://github.com/bradybridges/websocket-chat',
		githubUrl: 'https://github.com/bradybridges/websocket-chat',
		slug: 'websocket-chat',
		image: wschat,
		badges: ['Node', 'Websockets', 'Docker', 'NPM Package'],
		position: 'top'
	},
	{
		name: 'Todo CLI',
		description:
			"Constant context-switching was killing my focus. Slack notifications, impromptu requests, tasks piling up with nowhere clean to put them. Every existing CLI todo tool I tried was either bloated, ugly, or both. So I built exactly what I needed: a distraction-free, terminal-native task manager that lets me log tasks without ever leaving my terminal or opening a separate application. No alt-tabbing, no app switching, just a quick command and I'm back to what I was doing. It's not flashy, but it's the kind of tool that quietly earns its place. I've used it every day since.",
		url: 'https://github.com/bradybridges/todo-cli',
		githubUrl: 'https://github.com/bradybridges/todo-cli',
		slug: 'todo-cli',
		image: todocli,
		badges: ['NPM', 'CLI Tool', 'NPM Registry', 'Github Actions'],
		position: 'top'
	}
];
