# proJWT-Frontend

**Продвинутая система авторизации** на стеке
**DrizzleORM + PostgreSQL + Express + React + MobX**

Современное, масштабируемое и безопасное решение для управления пользователями с чистой архитектурой.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-000000?logo=bun&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)

---

## ✨ Особенности

### Backend
- **Чистая архитектура** (Clean Architecture + Feature-Sliced Design)
- **Bun** + **Express** - для максимальной производительности
- Полноценная JWT-авторизация (Access + Refresh tokens)
- Активация аккаунта через email
- Защищённые роуты + Role-based доступ
- Валидация данных (express-validator)
- Drizzle ORM + PostgreSQL
- Централизованная обработка ошибок

### Frontend
- **React + Vite** (с React Compiler)
- **Feature-Sliced Design** — современная масштабируемая архитектура
- Bun как package manager

---

## 🛠 Технологический стек

### Backend
| Технология            | Назначение                     |
|-----------------------|--------------------------------|
| **Bun**               | Runtime + Package Manager      |
| **Express**           | Web-фреймворк                  |
| **Drizzle ORM**       | ORM + миграции                 |
| **PostgreSQL**        | База данных                    |
| **JWT**               | Авторизация                    |
| **Nodemailer**        | Отправка писем                 |
| **express-validator** | Валидация                      |

### Frontend
| Технология                | Назначение           |
|---------------------------|----------------------|
| **React 19**              | UI-библиотека        |
| **Vite**                  | Сборщик + dev-сервер |
| **TypeScript**            | Типизация            |
| **Feature-Sliced Design** | Архитектура          |
| **Bun**                   | Package Manager      |
| **MobX**                  | Стейт менеджер       |

---


### 🗺 Планы развития
- OAuth2 (Google + VK)
- Сброс и восстановление пароля
- Rate limiting + защита от брута
- Тесты Backend и Frontend

