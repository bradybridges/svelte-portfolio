type ProjectType = {
	name: string;
	description: string;
	url: string;
	slug: string;
	image: string;
	badges: string[];
	customLink?: { label: string; url: string };
	githubUrl?: string;
	motivation?: string;
	technical?: string;
	position?: 'top' | 'center' | 'bottom';
	hidden?: boolean;
};

import { cloudinaryUrl } from '$lib/cloudinary';

export const projects: ProjectType[] = [
	{
		name: 'EasyRef',
		description:
			'Referral and analytics tracking platform that lets users monitor traffic sources and measure link effectiveness without any client-side integration. Users create trackers with unique short codes and share the generated redirect URL; when a visitor clicks the link, EasyRef records the view and redirects them to the target site. Built on a Node.js/Express REST API with a Preact/TypeScript frontend, the platform gives users a clean dashboard to manage sites, trackers, and view counts across their web properties.',
		motivation:
			"I built EasyRef because I kept sending out job applications and sharing side projects with no idea what happened after I hit send. Did anyone actually click the GitHub link in my resume? Did a recruiter look at my portfolio? I was flying blind, and every analytics tool I found assumed I was running a marketing campaign, dashboards full of funnels, conversion goals, and UTM parameters I didn't need. EasyRef is intentionally private. There's no public signup, no third-party script to audit, no SDK to drop into someone else's codebase. I just wanted a quiet tool for myself, something I could trust to be accurate without worrying about data sharing or account tiers. When you're sending a resume, the last thing you want is your tracking infrastructure phoning home to a venture-backed SaaS.",
		technical:
			"Keeping campaigns, trackers, and views synchronized, while also limiting excessive network requests presented a challenge in this project. Not only did I want to to limit uneccessary requests to the backend, but it was also important to keep user experience seamless and snappy. For this I used Redux Toolkit, which comes with all the solutions I needed out of the box. By leveraging Redux, I was able to define the shape of the state of the application and APIs providing an organized, declarative structure to the application. With built in caching mechanisms, react-query integration, and global state management, Redux saved me from reinventing the wheel. This tool provides robust functionality to manage and manipulate data across the application, leaving users with an application that loads quickly, caches data effectively, and gets data where it's needed efficiently.",
		url: 'https://easyref.bbdev.cloud',
		slug: 'easy-ref',
		image: cloudinaryUrl('easyref-home'),
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
		name: 'Portfolio',
		description:
			'The site you are looking at right now. A fast, statically-typed portfolio built with SvelteKit and Svelte 5 runes, styled with TailwindCSS v4, and deployed as a Node.js server. Features a dynamic project detail system, a working contact form, and Cloudinary-hosted imagery, all without a CMS or database.',
		motivation:
			"I've been hearing more and more about SvelteKit and have wanted to take it for a spin for some time. I have also been putting off making a portfolio site for several years. I figured what better time than now to make one. As a developer who works with React primarily, I find it valuable to stay up to speed with other modern frameworks to see how common patterns like reactivity, routing, SSR, state and side-effects are handled. Knowing what the best tool for a job is, instead of always reaching for the same tool, can be invaluable when working on a variety of projects with varying requirements and use-cases. I had fun with this project, as you may find, and will definitely be adding Svelte to toolbox.",
		technical:
			"The project is built on SvelteKit with Svelte 5 runes mode enforced project-wide, which means every reactive value is explicit and the component model is predictable. TailwindCSS v4 is configured through the Vite plugin rather than a config file, which keeps the toolchain lean. The project detail pages are driven by a single static TypeScript array in `src/lib/projects.ts`: SvelteKit's file-based routing resolves each slug at build time, and the server load function throws a 404 for any slug that doesn't match. The contact form is handled by a SvelteKit form action on the same route, keeping the form POST behavior native and progressively enhanced. Images are hosted on Cloudinary and referenced through a small utility that constructs URLs from public IDs, which means swapping delivery settings or transformations is a one-line change. In the future I may configure a CMS for content and add blogs, but for now static files are serving their purpose. This project gave me the opportunity to learn more about hosting as well. The site is deployed on a VPS(hetzner) that I configured from scratch. Coolify handles building and deploying updates to the site whenever a change is merged to the production branch.",
		url: '/gotcha',
		githubUrl: 'https://github.com/bradybridges/svelte-portfolio',
		slug: 'portfolio',
		image: cloudinaryUrl('portfolio'),
		badges: ['Svelte 5', 'SvelteKit', 'TypeScript', 'TailwindCSS', 'Cloudinary', 'Node'],
		position: 'top'
	},
	{
		name: 'Rocket Launch Visualizer',
		description:
			"Getting a rocket to orbit isn't just about going up, it's about going fast in exactly the right direction at exactly the right time. This interactive visualizer lets you manipulate launch and orbital parameters and watch in real time how each decision shapes a flight path's viability and efficiency. A must-try for Kerbal Space Program veterans and rocket enthusiasts alike.",
		url: 'https://launch.bbdev.cloud',
		githubUrl: 'https://github.com/bradybridges/rocket-launch-visualizer',
		motivation:
			"I've sunk more hours into Kerbal Space Program than I'll admit. There's something uniquely satisfying about the moment a rocket officially reaches a stable orbit, but KSP abstracts a lot of the real physics away. I kept wondering what the numbers actually look like: how much does launch angle matter? How do thrust-to-weight ratios interact with atmospheric drag as altitude increases? I built this visualizer so I could explore those questions directly. Adjust a parameter, watch the trajectory shift, and build genuine intuition for why achieving orbit is about speed and direction, not just going up.",
		technical:
			'Generating a flight path means integrating forces like thrust, gravity, and drag across thousands of time steps for every combination of input parameters. The challenge was making each parameter adjustment feel instant even though recomputing the full trajectory is expensive. I solved this with memoization: trajectory results are keyed by their input parameters and cached, so only the affected calculation reruns when a single variable changes. D3 handles rendering, but structuring the data flow so transitions fire only on real changes, not on every reactive update, was the other half of keeping the visualizer smooth under continuous user input.',
		slug: 'rocket-launch',
		image: cloudinaryUrl('launch-desktop'),
		badges: ['React', 'TailwindCSS', 'D3', 'Docker'],
		position: 'top'
	},
	{
		name: 'Websocket Chat',
		description:
			'End-to-end encrypted, self-hostable, and entirely terminal-native. This chat application cuts out the browser and the bloat, letting users communicate securely through a lightweight NPM package from the comfort of their own terminal. Built on WebSockets and deployable in minutes with Docker.',
		url: 'https://github.com/bradybridges/websocket-chat',
		githubUrl: 'https://github.com/bradybridges/websocket-chat',
		motivation:
			"Over the years I've heard a lot about WebSockets and common applications of the technology. I've always thought the real-time nature of WebSockets was neat. I've interacted with WebSockets in my day to day work, but I have never had the opportunity to build out a WebSocket server from the ground up. I decided to create a small personal project to incorporate the tech and provide myself the opportunity to learn more about how WebSockets work under the hood. I've always been drawn to CLI based applications, as well as privacy focused applications. So I decided to intermingle these interests and create a terminal based end-to-end encrypted chat app.",
		technical:
			"The two hardest parts were encryption and distribution. For end-to-end encryption I used Node's built-in crypto module, which meant making decisions about key exchange and message framing before a single byte goes over the wire. Getting that right without a third-party library forced me to understand what encrypted actually means in practice. Docker packaging keeps the server and client environment consistent so anyone can spin up their own instance with a single command.",
		slug: 'websocket-chat',
		image: cloudinaryUrl('ws-chat'),
		badges: ['Node', 'Websockets', 'Docker', 'Crypto'],
		position: 'top'
	},
	{
		name: 'Todo CLI',
		description:
			"A distraction-free, terminal-native task manager distributed as a lightweight NPM package. Add, complete, and remove tasks without ever leaving your terminal: no browser tab, no app switching, just a quick command and you're back to work. Built with Commander for intuitive CLI syntax and Chalk for clean, readable output.",
		motivation:
			"Constant context-switching was killing my focus. Slack notifications, impromptu requests, tasks piling up with nowhere clean to put them. Every existing CLI todo tool I tried was either bloated, ugly, or both. So I built exactly what I needed: a distraction-free, terminal-native task manager that lets me log tasks without ever leaving my terminal or opening a separate application. No alt-tabbing, no app switching, just a quick command and I'm back to what I was doing. It's not flashy, but it's the kind of tool that quietly earns its place. I've used it every day since. Eventually I'd like to add more features, like cloud based syncing of todo lists, project specific todo lists, and more. For now this tool is working well for me.",
		url: 'https://github.com/bradybridges/todo-cli',
		githubUrl: 'https://github.com/bradybridges/todo-cli',
		customLink: {
			label: 'Available on NPM',
			url: 'https://www.npmjs.com/package/@bradyjbridges/todo-cli'
		},
		technical:
			"The interesting part wasn't the CLI logic; it was making the package feel like a first-class NPM citizen. That meant setting up the bin field correctly so the command resolves globally after install, handling shebang lines so Node runs the entry point without the user knowing anything about the internals, and building a GitHub Actions pipeline that publishes a new version to NPM automatically on tagged releases. Getting the release pipeline right meant I never have to think about publishing manually. Tag the commit, and the rest happens.",
		slug: 'todo-cli',
		image: cloudinaryUrl('todo-cli'),
		badges: ['NPM', 'Chalk', 'Commander', 'Github Actions', 'Automated Releases'],
		position: 'top'
	},
	{
		name: 'Password Manager',
		description:
			'A local-first, cross-platform desktop password manager with no cloud dependency and no subscription fee. Credentials live in named vaults on disk, each encrypted with a master password using PBKDF2HMAC key derivation and Fernet authenticated encryption. The tkinter interface provides a clean credential browser with a list pane, detail panel, and inline add/edit dialogs, all without leaving the desktop.',
		motivation:
			"After several breaches of password management applications I've used in the past, I had to go oldschool to protect my credentials. For a time I was manually encrypting and maintaining my credentials from the CLI using OpenSSL. This was a solution I was happy with at first, and left me in position where I felt my sensitive data was secure and less likely to be exposed. After I time this became cumbersone, and managing passwords took more and more time. I've wanted to fiddle around with Python more, and took on this application as a good opportunity to learn more about the technology and building desktop graphical interfaces. My goal was to create a completely offline, portable, and secure password management application to give me more control and confidence over the security of my sensitive credentials.",
		technical:
			"The crypto stack is deliberately straightforward: PBKDF2HMAC-SHA256 at 600,000 iterations derives an encryption key from the master password and a random per-vault salt, then Fernet handles authenticated encryption of the credential payload. Fernet's authenticated ciphertext means a wrong password or a corrupted file raises a distinct error rather than silently decrypting garbage, which made building the error hierarchy clean. Vault writes are atomic: data goes to a `.tmp` file first, then `os.replace()` swaps it in, so a crash mid-write can never leave a vault in a partial state. The tkinter UI uses a frame-stack pattern where all three screens share the same grid cell and navigation works by calling `tkraise()`; frames expose a `load()` method that receives data on navigation, which keeps the credential browser decoupled from the login and vault-creation screens. Storage paths are platform-aware out of the box: `~/Library/Application Support` on macOS, `%APPDATA%` on Windows, and `$XDG_DATA_HOME` on Linux.",
		url: 'https://github.com/bradybridges/password-manager',
		githubUrl: 'https://github.com/bradybridges/password-manager',
		slug: 'password-manager',
		image: cloudinaryUrl('password-manager'),
		badges: ['Python', 'Tkinter', 'Cryptography']
	},
	{
		name: 'Dotfiles',
		description:
			'A single source of truth for every config file across Linux and macOS, deployed in minutes via GNU Stow. Covers the full development environment from the window manager down: Neovim, Zsh, Tmux, and both a Hyprland Wayland stack and an i3 X11 stack for Linux. Clone it, stow the packages you need, and be productive on any machine without touching a settings menu.',
		motivation:
			"For a long time my configs lived across a graveyard of gists, scattered files on individual machines, and half-remembered blog posts. I'd tweak something on one computer, forget to sync it, and slowly every machine became its own snowflake. The real cost wasn't the manual copying; it was never being able to trust that any given machine was actually set up the way I wanted. Fresh installs meant losing months of accumulated muscle memory. I finally sat down to fix it properly, and the goal was simple: one canonical repo, applied with a single command, that I never have to think about again.",
		technical:
			"The core design insight behind GNU Stow is that each package directory mirrors the structure of $HOME exactly. Running stow against a package creates symlinks in the right places automatically; removing them is a single flag away. That model made the platform split obvious: a global/ directory for cross-platform tools like Neovim, and separate linux/ and macos/ directories for OS-specific configs. Any given machine stows exactly the packages it needs and ignores the rest. The Linux side maintains two complete desktop stacks: Hyprland on Wayland as the primary setup and i3 on X11 as a fallback, because not every machine or GPU driver plays well with Wayland. Keeping both configs in the repo means switching stacks is a stow command, not a reinstall. Neovim uses Mason to auto-install LSP servers, formatters, and linters on first launch, so the editor is fully operational from a fresh clone with no manual setup steps. Tmux Resurrect saves session state across reboots, which means a machine restart doesn't require rebuilding a terminal layout from scratch.",
		url: 'https://github.com/bradybridges/dotfiles',
		githubUrl: 'https://github.com/bradybridges/dotfiles',
		badges: [
			'GNU Stow',
			'Neovim',
			'Hyprland',
			'i3',
			'Kitty',
			'iTerm',
			'Tmux',
			'Zsh',
			'macOS',
			'Linux'
		],
		image: cloudinaryUrl('dotfiles'),
		position: 'top',
		slug: 'dotfiles',
		hidden: true
	}
];
