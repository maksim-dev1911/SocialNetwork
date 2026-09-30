# Social Network

SPA социальной сети на React: профили, лента постов, поиск пользователей, подписки и общий чат в реальном времени.

Бэкенд — учебный API [social-network.samuraijs.com](https://social-network.samuraijs.com).

## Возможности

- **Авторизация** — вход, captcha при необходимости, выход, защита приватных маршрутов
- **Профиль** — просмотр своего и чужого профиля, аватар, статус, контакты, вкладки Timeline / Friends
- **Лента** — создание, редактирование и удаление постов с фото; комментарии и лайки (хранение в `localStorage`)
- **Люди** — список пользователей с пагинацией, follow / unfollow
- **Чат** — общий чат через WebSocket
- **Настройки** — редактирование профиля (имя, about, job, соцсети)
- **Адаптивный UI** — сайдбар, мобильный drawer, Material UI тема

## Стек

| Слой | Технологии |
|------|------------|
| UI | React 18, TypeScript, MUI 5, styled-components, Sass |
| Состояние | Redux Toolkit, React Redux |
| Формы | React Final Form |
| Роутинг | React Router Dom 6 |
| HTTP / WS | Axios, WebSocket |
| Сборка | Create React App (`react-scripts`) |

## Структура проекта

```
src/
├── api/            # Axios-клиент и WebSocket
├── components/     # UI-компоненты (Profile, Chat, SideBar, Fields, …)
├── pages/          # Страницы: Auth, Profile, Chat, People, Settings
├── store/          # Redux slices и thunks (auth, profile, people, chat, app)
├── hoc/            # withAuthGuard
├── hooks/          # typed useAppDispatch / useAppSelector
├── storage/        # localStorage для постов и комментариев
├── services/       # валидаторы форм
├── types/          # общие TypeScript-типы
└── utils/
```

### Маршруты

| Путь | Описание |
|------|----------|
| `/login` | Вход |
| `/resetPass` | Сброс пароля |
| `/profile/:userId?` | Профиль |
| `/people` | Пользователи |
| `/chat` | Общий чат |
| `/settings` | Настройки профиля |

Приватные страницы обёрнуты в `withAuthGuard` (редирект на `/login`).

## Быстрый старт

### Требования

- Node.js 16+
- npm

### Установка

```bash
npm install
```

### API-ключ

Ключ API задаётся в `src/api/index.ts` (заголовок `API-KEY`). Получить ключ можно на [social-network.samuraijs.com](https://social-network.samuraijs.com) после регистрации.

> Для локальной разработки можно использовать тестовый аккаунт с сайта API (например `free@samuraijs.com` / `free`).

### Запуск

```bash
npm start
```

Приложение откроется на [http://localhost:3000](http://localhost:3000).

### Сборка и тесты

```bash
npm run build   # production-сборка в build/
npm test        # Jest + React Testing Library
```

## Архитектура

1. При старте `initializeApp` проверяет сессию (`auth/me`) и снимает прелоадер.
2. Данные с API идут через Axios (`withCredentials: true`) в Redux thunks → slices.
3. Посты и комментарии ленты живут в `localStorage` (`src/storage/posts.ts`) — отдельный клиентский слой поверх профиля API.
4. Чат подключается к `wss://social-network.samuraijs.com/handlers/ChatHandler.ashx`.

## Скриншоты / демо

_Добавьте скриншоты или ссылку на деплой при необходимости._

## Лицензия

Private project (`"private": true` в `package.json`).
