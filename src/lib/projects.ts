type ProjectType = {
	name: string;
	description: string;
	url: string;
	slug: string;
	image: string;
	badges: string[];
	githubUrl?: string;
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
		url: 'https://easyref.bbdev.cloud',
		slug: 'easy-ref',
		image: easyref,
		badges: ['React', 'Typescript', 'Node', 'Express', 'Auth0', 'Redux Toolkit', 'PosgresSQL', 'Vitest']
	},
	{
		name: 'Rocket Launch Visualizer',
		description:
			"I am a rocket nerd and was learning about how rockets get to orbit as efficiently as possible. I wanted to build a simple chart to visualize how various launch and orbital parameters affect the viability and effeciency of a rocket's flight path.",
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
			"I wanted to learn more about websockets and how they work, I'm also a sucker for terminal based applications. So I built an E2E encrypted terminal-based chat application that can be self-hosted using Docker. Users connect with an installable NPM package.",
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
			"Slack pings and side tasks kept pulling me away from my terminal. I wanted to add a CLI based todo tool to my workflow, but couldn't find any that looked good and were simple to use. So I built one. I don't expect this to impress you, but it's a tool I use daily to keep track of tasks without distracting myself from the task at hand.",
		url: 'https://github.com/bradybridges/todo-cli',
		githubUrl: 'https://github.com/bradybridges/todo-cli',
		slug: 'todo-cli',
		image: todocli,
		badges: ['NPM', 'CLI Tool', 'NPM Registry', 'Github Actions'],
		position: 'top'
	}
];
