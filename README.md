# svelte-portfolio

Personal portfolio site built with SvelteKit and Svelte 5 runes, styled with TailwindCSS v4, and deployed as a Node.js server.

## Tech Stack

- [SvelteKit](https://svelte.dev/docs/kit) + [Svelte 5](https://svelte.dev/docs/svelte) (runes mode)
- [TailwindCSS v4](https://tailwindcss.com/) (via Vite plugin, no config file)
- [@sveltejs/adapter-node](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) for Node.js deployment
- [Cloudinary](https://cloudinary.com/) for image hosting
- [Web3Forms](https://web3forms.com/) for the contact form

## Getting Started

### Prerequisites

- Node.js 18+

### Setup

```bash
git clone https://github.com/bradybridges/svelte-portfolio.git
cd svelte-portfolio
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key
```

- **Cloudinary** — sign up at [cloudinary.com](https://cloudinary.com/) and use your cloud name. Project images are referenced by public ID in `src/lib/projects.ts`.
- **Web3Forms** — sign up at [web3forms.com](https://web3forms.com/) to get a free access key for the contact form.

### Development

```bash
npm run dev
```

### Commands

| Command           | Description                            |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Start dev server                       |
| `npm run build`   | Production build (outputs to `build/`) |
| `npm run preview` | Preview production build               |
| `npm run check`   | Type-check with svelte-check           |
| `npm run lint`    | Prettier + ESLint checks               |
| `npm run format`  | Auto-format with Prettier              |

## Project Structure

```
src/
├── components/         # Reusable components (Section, Heading, Link)
├── lib/
│   ├── projects.ts     # Project data array (add/edit projects here)
│   ├── roles.ts        # Experience/roles data
│   └── cloudinary.ts   # Cloudinary URL utility
└── routes/
    ├── +page.svelte        # Home page (hero, projects, experience, contact)
    ├── +page.server.ts     # Contact form POST action
    └── projects/[slug]/    # Dynamic project detail pages
```

## Customization

**Adding a project:** Add an entry to the `projects` array in `src/lib/projects.ts`. Each project needs at minimum a `name`, `description`, `url`, `slug`, `image`, and `badges` array. The `slug` determines the URL at `/projects/[slug]`.

**Adding a role:** Add an entry to the `roles` array in `src/lib/roles.ts`.

## Deployment

The project uses `@sveltejs/adapter-node`, which produces a standalone Node.js server in `build/`.

```bash
npm run build
node build
```

Set the `PORT` environment variable to change the default port (3000).
