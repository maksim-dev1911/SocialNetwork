# Social Network

A React SPA for a social networking experience: profiles, a post feed, user discovery, follow/unfollow, and a real-time community chat.

The backend is the learning API at [social-network.samuraijs.com](https://social-network.samuraijs.com).

## Features

- **Authentication** — sign in, captcha when required, sign out, and protected private routes
- **Profile** — view your own or another user’s profile, avatar, status, contacts; Timeline / Friends tabs
- **Feed** — create, edit, and delete posts with photos; comments and likes (stored in `localStorage`)
- **People** — paginated user list with follow / unfollow
- **Chat** — shared community chat over WebSocket
- **Settings** — edit profile (name, about, job status, social links)
- **Responsive UI** — collapsible sidebar, mobile drawer, Material UI theme

## Tech stack

| Layer | Technologies |
|-------|--------------|
| UI | React 18, TypeScript, MUI 5, styled-components, Sass |
| State | Redux Toolkit, React Redux |
| Forms | React Final Form |
| Routing | React Router Dom 6 |
| HTTP / WS | Axios, WebSocket |
| Build | Create React App (`react-scripts`) |

## Project structure

```
src/
├── api/            # Axios client and WebSocket connection
├── components/     # UI (Profile, Chat, SideBar, Fields, …)
├── pages/          # Auth, Profile, Chat, People, Settings
├── store/          # Redux slices and thunks (auth, profile, people, chat, app)
├── hoc/            # withAuthGuard
├── hooks/          # typed useAppDispatch / useAppSelector
├── storage/        # localStorage helpers for posts and comments
├── services/       # form validators
├── types/          # shared TypeScript types
└── utils/
```

### Routes

| Path | Description |
|------|-------------|
| `/login` | Sign in |
| `/resetPass` | Password reset |
| `/profile/:userId?` | User profile |
| `/people` | User directory |
| `/chat` | Community chat |
| `/settings` | Profile settings |

Private pages are wrapped with `withAuthGuard` (redirects unauthenticated users to `/login`).

## Getting started

### Requirements

- Node.js 16+
- npm

### Install

```bash
npm install
```

### API key

Set the API key in `src/api/index.ts` (`API-KEY` header). You can obtain a key after registering at [social-network.samuraijs.com](https://social-network.samuraijs.com).

> For local development you can use a test account from the API site (e.g. `free@samuraijs.com` / `free`).

### Run

```bash
npm start
```

The app opens at [http://localhost:3000](http://localhost:3000).

### Build and tests

```bash
npm run build   # production build → build/
npm test        # Jest + React Testing Library
```

## Architecture notes

1. On startup, `initializeApp` checks the session (`auth/me`) and hides the preloader.
2. API responses flow through Axios (`withCredentials: true`) into Redux thunks → slices.
3. Feed posts and comments live in `localStorage` (`src/storage/posts.ts`) — a client-side layer on top of the profile API.
4. Chat connects to `wss://social-network.samuraijs.com/handlers/ChatHandler.ashx`.

## License

Private project (`"private": true` in `package.json`).
