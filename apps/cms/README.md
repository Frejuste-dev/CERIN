# CMS — GROUPE CERIN Content Management System

**Stack**: Strapi v5 + TypeScript + MySQL + REST API

## Structure

```
apps/cms/
├── config/                    # Strapi configuration
│   ├── database.ts           # MySQL connection
│   ├── server.ts             # Server settings
│   ├── security.ts           # CORS, CSP, rate limiting
│   └── middlewares.ts        # Middleware pipeline
├── src/
│   ├── api/                  # Content type APIs
│   │   ├── program/          # Programs collection
│   │   ├── news/             # News collection
│   │   ├── event/            # Events collection
│   │   ├── testimonial/      # Testimonials collection
│   │   └── gallery/          # Gallery collection
│   └── extensions/           # Custom extensions
├── public/
│   └── uploads/              # Media files (20MB max)
├── .env.example              # Environment template
├── package.json
├── tsconfig.json
├── CMS_SETUP.md              # Complete setup documentation
└── MIGRATION_STRATEGY.md     # Data migration roadmap
```

## Quick Start

```bash
# 1. Copy environment
cp .env.example .env

# 2. Generate secrets and update .env
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

# 3. Create database in MySQL
mysql -u root -p -e "CREATE DATABASE cerin_cms CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

# 4. Install dependencies
pnpm install

# 5. Start development server
pnpm dev
```

Admin panel: http://localhost:1337/admin

## API Endpoints

| Endpoint | Method | Auth |
|----------|--------|------|
| `/api/programs` | GET | Public |
| `/api/programs/:slug` | GET | Public |
| `/api/news` | GET | Public |
| `/api/news/:slug` | GET | Public |
| `/api/events` | GET | Public |
| `/api/events/:slug` | GET | Public |
| `/api/testimonials` | GET | Public |
| `/api/gallery` | GET | Public |

## Astro Integration

```typescript
import { fetchPrograms, fetchNews, fetchEvents } from '../lib/api';

const { data: programs } = await fetchPrograms();
const { data: news } = await fetchNews();
const { data: events } = await fetchEvents();
```

## Content Types

| Collection | Draft/Publish | Public API |
|------------|---------------|------------|
| Program | Yes | Yes |
| News | Yes | Yes |
| Event | Yes | Yes |
| Testimonial | No | Yes |
| Gallery | No | Yes |

## Security

- CORS whitelist configured
- Rate limiting: 100 req/15min
- JWT tokens for admin
- Uploads restricted to jpg/png/webp/pdf (20MB max)
- CSP headers configured

## Deployment

```bash
pnpm build
pnpm start
```

See `CMS_SETUP.md` for complete documentation.
