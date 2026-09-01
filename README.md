# VoiceStandup.webapp

Telegram Mini App для [VoiceStandup.ai](https://github.com/Newo123/VoiceStandup.ai).

Frontend предоставляет интерфейс для работы с командами, участниками и отчётами. Приложение работает внутри Telegram Web App и использует Telegram `initData` для аутентификации запросов к backend API.

Backend остаётся источником истины для identity, permissions и бизнес-данных. Frontend отвечает за UI, навигацию и управление server state.

## Что умеет проект

- работает как Telegram Mini App;
- получает Telegram Web App `initData`;
- передаёт `initData` вместе с запросами к backend API;
- получает и отображает текущего пользователя;
- отображает команды пользователя;
- создаёт, редактирует и удаляет команды;
- отображает участников команды;
- работает с отчётами и их деталями;
- использует owner/permission информацию, полученную от backend;
- поддерживает loading, skeleton, empty и error states;
- использует TanStack Query для server state и cache;
- использует Axios как HTTP client;
- использует React Router для навигации;
- адаптирован под Telegram UI и его theme variables;
- использует shadcn/ui и Tailwind CSS для построения интерфейса.

## Как работает приложение

```text
Telegram
    ↓
Telegram Web App
    ↓
initData
    ↓
Axios
    ↓
REST API
    ↓
Backend validates initData
    ↓
Backend identifies user
    ↓
Backend checks permissions
    ↓
API response
    ↓
TanStack Query
    ↓
Feature
    ↓
UI
```

Telegram `user.id` не используется frontend-приложением как самостоятельный authentication mechanism.

Frontend передаёт backend исходную строку `Telegram.WebApp.initData`, после чего backend самостоятельно:

- проверяет подпись Telegram;
- проверяет срок действия `initData`;
- определяет Telegram-пользователя;
- получает внутреннего пользователя;
- определяет права доступа;
- возвращает разрешённые данные.

## Стек

- React 19;
- TypeScript;
- Vite;
- React Router;
- Axios;
- TanStack Query;
- TanStack Form;
- Zod;
- Tailwind CSS 4;
- shadcn/ui;
- Base UI;
- Lucide React;
- Telegram Web App API;
- ESLint.

Версии зависимостей фиксируются в [`package.json`](package.json).

## Архитектура

Проект организован вокруг feature-based архитектуры.

Основные уровни:

```text
src/
├── app/
├── features/
├── widgets/
└── shared/
```

### `app`

Application layer.

Здесь находится сборка приложения и инфраструктура верхнего уровня:

```text
src/app/
├── App.tsx
├── main.tsx
├── providers/
├── router/
└── styles/
```

`main.tsx` является entry point приложения.

`App.tsx` отвечает за корневую композицию приложения.

`providers/` содержит application-level providers, например TanStack Query и общие UI/application providers.

`router/` содержит конфигурацию React Router.

`styles/` содержит глобальные стили приложения.

### `features`

Основной слой бизнес-фич.

Каждая feature является самостоятельным модулем и содержит связанные с ней API, hooks, pages, types и UI.

Например:

```text
src/features/
├── teams/
└── reports/
```

Структура feature:

```text
feature/
├── api/
├── hooks/
├── pages/
├── types/
├── ui/
└── index.ts
```

Таким образом код, относящийся к конкретному домену, не размазывается по всему приложению.

Например:

```text
src/features/teams/
├── api/
│   └── teams.api.ts
├── hooks/
│   ├── keys.ts
│   ├── useTeams.ts
│   ├── useTeam.ts
│   ├── useCreateTeam.ts
│   ├── usePatchTeam.ts
│   └── useDeleteTeam.ts
├── pages/
│   ├── TeamsPage.tsx
│   ├── TeamsDetailPage.tsx
│   └── TeamsFormPage.tsx
├── ui/
└── index.ts
```

Аналогично организована feature `reports`.

## Pages находятся внутри features

Приложение не использует отдельную глобальную директорию:

```text
src/pages/
```

Страницы принадлежат своим feature-модулям:

```text
features/teams/pages/
features/reports/pages/
```

Это позволяет держать route-level UI рядом с бизнес-логикой соответствующей feature.

Router импортирует готовые pages из feature:

```text
React Router
      ↓
feature/page
      ↓
feature hooks
      ↓
feature api
```

## Widgets

`widgets` содержит крупные переиспользуемые UI-блоки, которые собирают несколько компонентов или feature-частей в законченный интерфейсный блок.

Текущая структура:

```text
src/widgets/
├── common/
├── layout/
├── ui/
└── index.ts
```

### `widgets/layout`

Компоненты application layout.

Например:

- header;
- navigation;
- page container;
- общие layout-композиции.

### `widgets/common`

Переиспользуемые законченные UI-блоки, которые не принадлежат одной конкретной feature.

### `widgets/ui`

Переиспользуемые композиции UI более высокого уровня.

В отличие от feature UI, widgets не должны содержать бизнес-логику конкретной команды или отчёта.

## Shared

`shared` содержит код, который не относится к конкретной бизнес-feature.

```text
src/shared/
├── lib/
├── mocks/
├── types/
└── index.ts
```

### `shared/lib`

Общие utilities и infrastructure helpers.

### `shared/types`

Типы, которые используются несколькими feature-модулями и не принадлежат конкретному домену.

### `shared/mocks`

Mock data и вспомогательная mock-инфраструктура для разработки.

Shared слой не должен зависеть от конкретной feature.

## API layer

API организован внутри соответствующих feature.

Например:

```text
src/features/teams/api/teams.api.ts
src/features/reports/api/reports.api.ts
```

API-функции не содержат React-кода.

Примерный flow:

```text
useTeams()
    ↓
getTeams()
    ↓
Axios
    ↓
REST API
```

API-функция отвечает только за взаимодействие с backend:

```ts
async function getTeams() {
    const response = await api.get('/teams')

    return response.data
}
```

Она не должна заниматься:

- React state;
- navigation;
- rendering;
- UI permissions;
- отображением ошибок.

## Axios

Axios используется как единая точка HTTP-транспорта.

Архитектурно:

```text
Feature API
    ↓
Axios instance
    ↓
request interceptor
    ↓
Telegram initData
    ↓
Backend
```

Telegram authentication не должна дублироваться в каждом API-запросе.

Axios автоматически добавляет authentication data к защищённым запросам.

Концептуально:

```ts
api.interceptors.request.use((config) => {
    const initData = getTelegramInitData()

    if (initData) {
        config.headers.set('Authorization', `tma ${initData}`)
    }

    return config
})
```

Таким образом feature API остаётся простым:

```ts
api.get('/teams')
```

## Telegram integration

Telegram является внешней инфраструктурой приложения, а не источником React application state.

Поэтому Telegram integration не требует отдельного `TelegramProvider` только для хранения пользователя.

Архитектура:

```text
Telegram WebApp
       ↓
Telegram adapter
       ↓
Axios
       ↓
Backend
```

Telegram предоставляет:

- `initData`;
- Telegram Web App UI capabilities;
- theme parameters;
- navigation capabilities;
- haptic feedback.

Backend предоставляет:

- authenticated user;
- application user;
- teams;
- members;
- permissions;
- reports.

Frontend не должен самостоятельно определять права пользователя по Telegram ID.

## Current user

Текущий пользователь определяется backend.

Frontend делает запрос:

```http
GET /api/v1/me
Authorization: tma <initData>
```

Backend валидирует `initData` и возвращает пользователя.

Полученные данные являются server state и управляются через TanStack Query.

```text
GET /me
   ↓
useCurrentUser()
   ↓
TanStack Query
   ↓
React
```

React Context для хранения пользователя не требуется.

## TanStack Query

TanStack Query используется для server state.

Основные операции:

```text
queries
├── teams
├── team
├── reports
├── report
└── current user

mutations
├── create team
├── update team
├── delete team
└── другие изменения данных
```

Feature hooks находятся рядом с feature:

```text
features/teams/hooks/
features/reports/hooks/
```

Например:

```text
useTeams()
useTeam()
useCreateTeam()
usePatchTeam()
useDeleteTeam()
```

Query keys также принадлежат feature:

```text
features/teams/hooks/keys.ts
features/reports/hooks/keys.ts
```

Это позволяет feature полностью контролировать свой cache namespace.

## Cache invalidation

После mutation связанные queries инвалидируются.

Например:

```text
PATCH /teams/:teamID
        ↓
mutation success
        ↓
invalidate team query
        ↓
invalidate teams list
        ↓
TanStack Query refetch
        ↓
UI обновляется
```

Для удаления:

```text
DELETE /teams/:teamID
        ↓
invalidate teams
        ↓
navigate to teams
```

Server state не дублируется в Redux или другом global store.

## Routing

React Router находится в application layer:

```text
src/app/router/
```

Routes собирают pages из features.

Концептуальная структура:

```text
/
├── teams
│   ├── /new
│   └── /:teamId
│
└── reports
    └── /:reportId
```

Feature владеет своей страницей:

```text
features/teams/pages/
features/reports/pages/
```

Router владеет только navigation configuration.

Business logic остаётся внутри feature.

## Permissions

Permissions определяются backend.

Frontend может использовать permission information для управления UI:

```tsx
{
    team.isOwner && <EditTeamButton />
}
```

Но UI visibility не является механизмом безопасности.

Даже если пользователь вручную вызовет:

```http
PATCH /api/v1/teams/:teamID
```

backend обязан самостоятельно проверить его права.

Принцип:

```text
Frontend permission
    ↓
UX

Backend permission
    ↓
Security
```

## UI

Проект использует Tailwind CSS и shadcn/ui.

Компоненты shadcn используются как базовые UI primitives:

```text
Button
Card
Dialog
Input
Avatar
Badge
Skeleton
...
```

Feature-specific UI располагается внутри соответствующей feature.

Общие UI primitives находятся в shared/widget слоях в зависимости от уровня переиспользования.

## Telegram theme

Интерфейс использует Telegram theme variables, чтобы визуально адаптироваться к клиенту Telegram.

Основные переменные:

```css
var(--tg-theme-bg-color)
var(--tg-theme-secondary-bg-color)
var(--tg-theme-text-color)
var(--tg-theme-hint-color)
var(--tg-theme-link-color)
var(--tg-theme-button-color)
var(--tg-theme-button-text-color)
```

Telegram theme используется совместно с Tailwind/shadcn styling.

## Loading states

Каждая feature должна явно обрабатывать состояние загрузки.

Например:

```text
Initial loading
      ↓
Skeleton
      ↓
Data
```

Skeleton-компоненты находятся рядом с соответствующей страницей или UI-компонентом.

В текущей структуре уже используются отдельные skeleton pages для teams и reports.

## Error states

API errors не должны приводить к падению страницы.

Основные состояния:

```text
Network error
401 Unauthorized
403 Forbidden
404 Not Found
422 Validation error
500 Server error
```

UI должен предоставлять пользователю понятное состояние и, где возможно, действие повторной загрузки.

Пример:

```text
Не удалось загрузить данные.

[Повторить]
```

Для `404`:

```text
Команда не найдена.

[Назад]
```

## Mock API

Для локальной разработки предусмотрен mock layer.

Mock data находится в:

```text
src/shared/mocks/
```

Mock implementation должна сохранять тот же контракт, что и production API.

Это позволяет переключать backend без изменения компонентов:

```text
UI
 ↓
Feature hooks
 ↓
API
 ↓
┌───────────────┐
│ Real backend  │
│      или      │
│ Mock backend  │
└───────────────┘
```

UI не должен содержать проверки вида:

```ts
if (isMock) {
  ...
}
```

## Структура проекта

```text
src/
├── app/
│   ├── App.tsx
│   ├── main.tsx
│   │
│   ├── providers/
│   │   ├── HeaderProvider.tsx
│   │   ├── QueryProvider.tsx
│   │   ├── TelegramProvider.tsx
│   │   └── index.ts
│   │
│   ├── router/
│   │   ├── index.ts
│   │   └── router.tsx
│   │
│   └── styles/
│       └── index.css
│
├── features/
│   ├── teams/
│   │   ├── api/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── types/
│   │   ├── ui/
│   │   └── index.ts
│   │
│   └── reports/
│       ├── api/
│       ├── hooks/
│       ├── pages/
│       ├── types/
│       ├── ui/
│       └── index.ts
│
├── widgets/
│   ├── common/
│   ├── layout/
│   ├── ui/
│   └── index.ts
│
└── shared/
    ├── lib/
    ├── mocks/
    ├── types/
    └── index.ts
```

## Dependency direction

Основное направление зависимостей:

```text
app
 ↓
widgets
 ↓
features
 ↓
shared
```

При этом:

- `shared` не знает о feature;
- feature не должна импортировать другую feature напрямую без необходимости;
- widgets могут собирать feature-компоненты;
- app занимается composition;
- API находится внутри feature;
- pages находятся внутри feature;
- server state управляется TanStack Query.

Цель такой структуры — не сделать максимально много папок, а держать бизнес-логику рядом с доменом, которому она принадлежит.

## Backend

Frontend работает поверх backend VoiceStandup.ai.

[VoiceStandup.ai](https://github.com/Newo123/VoiceStandup.ai?utm_source=chatgpt.com)

Backend отвечает за:

- Telegram Bot API;
- Telegram `initData` validation;
- authentication;
- authorization;
- пользователей;
- команды;
- участников;
- отчёты;
- PostgreSQL;
- Redis;
- LLM/STT integration.

Frontend отвечает за:

- Telegram Mini App UI;
- navigation;
- API integration;
- server state;
- forms;
- loading/error states;
- визуальное представление данных.

## Быстрый запуск

### Требования

- Node.js;
- npm;
- запущенный backend VoiceStandup.ai.

### Установка

```bash
npm install
```

### Переменные окружения

Создайте `.env`:

```dotenv
VITE_API_URL=http://localhost:8080/api/v1
```

Production:

```dotenv
VITE_API_URL=https://your-api.example.com/api/v1
```

Frontend environment variables не должны содержать backend secrets.

### Development

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Проверки перед commit

```bash
npm run lint
npm run build
```

`npm run build` включает TypeScript build и production Vite build.

## Полезные команды

```bash
npm run dev       # development server
npm run build     # TypeScript + production build
npm run preview   # preview production build
npm run lint      # ESLint
```

## Связанные проекты

Backend:

[Newo123/VoiceStandup.ai](https://github.com/Newo123/VoiceStandup.ai?utm_source=chatgpt.com)

Frontend:

[Newo123/VoiceStandup.webapp](https://github.com/Newo123/VoiceStandup.webapp?utm_source=chatgpt.com)

## Статус

Проект находится на стадии MVP.

Frontend развивается как отдельный Telegram Mini App клиент VoiceStandup.ai и постепенно расширяется новыми feature-модулями и сценариями работы с командами, участниками и отчётами.
