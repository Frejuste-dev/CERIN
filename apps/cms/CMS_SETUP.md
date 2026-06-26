# CMS_SETUP.md — GROUPE CERIN Strapi CMS

> **Sprint A1 — CMS Foundation**
> Version: 1.0.0
> Date: 2026-06-23

---

## 1. INSTALLATION

### Prérequis

- Node.js >= 20.0.0
- MySQL >= 8.0
- pnpm >= 8.0.0
- Git

### Étapes d'installation

```bash
# 1. Aller dans le workspace
cd C:\Users\SINFORMATIQUE\OneDrive - SIBM\Documents\Dev\CERIN

# 2. Copier le fichier d'environnement
cp apps/cms/.env.example apps/cms/.env

# 3. Générer les secrets sécurisés
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

# 4. Remplacer les valeurs dans apps/cms/.env avec les secrets générés

# 5. Installer les dépendances
pnpm install --filter cms

# 6. Démarrer Strapi
pnpm --filter cms dev
```

Accès admin: http://localhost:1337/admin

Premier admin: créé lors de la première connexion.

---

## 2. CONFIGURATION BASE DE DONNÉES

### Variables MySQL requises

| Variable | Description | Défaut |
|----------|-------------|--------|
| `DATABASE_HOST` | Hôte MySQL | `localhost` |
| `DATABASE_PORT` | Port MySQL | `3307` |
| `DATABASE_NAME` | Nom de la base CMS | `cerin_cms` |
| `DATABASE_USERNAME` | Utilisateur MySQL | `cerin_cms` |
| `DATABASE_PASSWORD` | Mot de passe MySQL | _(à définir)_ |

### Création de la base (MySQL)

```sql
CREATE DATABASE IF NOT EXISTS cerin_cms CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER IF NOT EXISTS 'cerin_cms'@'localhost' IDENTIFIED BY 'change_me_in_production';
GRANT ALL PRIVILEGES ON cerin_cms.* TO 'cerin_cms'@'localhost';
FLUSH PRIVILEGES;
```

---

## 3. CONTENT TYPES

### 3.1 Program

**Collection Type** — 19 champs

| Champ | Type | Requis | Unique | Note |
|-------|------|--------|--------|------|
| `title` | text | Oui | Non | |
| `slug` | uid | Oui | Oui | Auto-généré depuis title |
| `category` | enum | Oui | Non | `GENERAL`, `TECHNIQUE`, `SUPERIEUR` |
| `level` | string | Oui | Non | Ex: "Collège", "Bac+2" |
| `duration` | string | Oui | Non | Ex: "4 ans", "2 ans" |
| `description` | text | Oui | Non | |
| `objectives` | text | Non | Non | |
| `curriculum` | text | Non | Non | |
| `career_opportunities` | text | Non | Non | |
| `admission_requirements` | text | Non | Non | |
| `tuition` | string | Non | Non | Ex: "150 000 FCFA / trimestre" |
| `image` | media | Non | Non | Images uniquement |
| `featured` | boolean | Non | Non | Défaut: `false` |
| `published_at` | datetime | Non | Non | Défaut: `now` |
| `seo_title` | string | Non | Non | Auto-généré si vide |
| `seo_description` | text | Non | Non | Auto-généré si vide |
| `canonical_url` | string | Non | Non | |
| `og_image` | media | Non | Non | Images uniquement |

**Draft & Publish** : Activé

---

### 3.2 News

**Collection Type** — 14 champs

| Champ | Type | Requis | Unique | Note |
|-------|------|--------|--------|------|
| `title` | text | Oui | Non | |
| `slug` | uid | Oui | Oui | Auto-généré |
| `excerpt` | text | Non | Non | Max 500 chars |
| `content` | richtext | Oui | Non | |
| `category` | enum | Oui | Non | `Admission`, `Réussite`, `Partenariat`, `Événement`, `Institutionnel` |
| `image` | media | Non | Non | Images uniquement |
| `featured` | boolean | Non | Non | Défaut: `false` |
| `published_at` | datetime | Non | Non | Défaut: `now` |
| `seo_title` | string | Non | Non | |
| `seo_description` | text | Non | Non | |
| `canonical_url` | string | Non | Non | |
| `og_image` | media | Non | Non | Images uniquement |

**Draft & Publish** : Activé

---

### 3.3 Event

**Collection Type** — 11 champs

| Champ | Type | Requis | Unique | Note |
|-------|------|--------|--------|------|
| `title` | text | Oui | Non | |
| `slug` | uid | Oui | Oui | Auto-généré |
| `description` | richtext | Oui | Non | |
| `start_date` | datetime | Oui | Non | |
| `end_date` | datetime | Non | Non | |
| `location` | string | Non | Non | |
| `image` | media | Non | Non | Images uniquement |
| `seo_title` | string | Non | Non | |
| `seo_description` | text | Non | Non | |
| `canonical_url` | string | Non | Non | |
| `og_image` | media | Non | Non | Images uniquement |

**Draft & Publish** : Activé

---

### 3.4 Testimonial

**Collection Type** — 5 champs

| Champ | Type | Requis | Unique | Note |
|-------|------|--------|--------|------|
| `name` | string | Oui | Non | |
| `role` | string | Oui | Non | Ex: "Étudiant BTS 2024" |
| `quote` | text | Oui | Non | |
| `image` | media | Non | Non | Images uniquement |
| `featured` | boolean | Non | Non | Défaut: `false` |

**Draft & Publish** : Désactivé (publié immédiatement)

---

### 3.5 Gallery

**Collection Type** — 4 champs

| Champ | Type | Requis | Unique | Note |
|-------|------|--------|--------|------|
| `title` | string | Oui | Non | |
| `image` | media | Oui | Non | Images uniquement |
| `category` | enum | Non | Non | `campus`, `evenements`, `sports`, `culture`, `formation`, `autre` |
| `year` | integer | Non | Non | Défaut: année courante |

**Draft & Publish** : Désactivé

---

## 4. RÔLES & PERMISSIONS

### Rôles configurés

| Rôle | Description |
|------|-------------|
| `Super Admin` | Accès complet à toutes les fonctionnalités |
| `Communication` | Gestion du contenu éditorial (News, Events, Gallery, Testimonials) |
| `Admissions` | Gestion des programmes et actualités admission |
| `Viewer` | Lecture seule |

### Matrice de permissions

| Action | Super Admin | Communication | Admissions | Viewer |
|--------|-------------|---------------|------------|--------|
| **Program** | CRUD | Lecture | CRUD | Lecture |
| **News** | CRUD | CRUD | CRUD | Lecture |
| **Event** | CRUD | CRUD | Lecture | Lecture |
| **Testimonial** | CRUD | CRUD | Lecture | Lecture |
| **Gallery** | CRUD | CRUD | Lecture | Lecture |
| **Media Library** | CRUD | CRUD | CRUD | Lecture |
| **Users & Permissions** | CRUD | Lecture | Lecture | Lecture |
| **Settings** | CRUD | Lecture | Lecture | Lecture |

**Légende:** C=Create, R=Read, U=Update, D=Delete

### Configuration Strapi

Les rôles sont configurés via l'interface admin Strapi:

1. Connectez-vous en tant que Super Admin
2. Aller dans Settings → Roles
3. Créer/modifier chaque rôle avec les permissions ci-dessus
4. Pour chaque rôle, décocher "Public" et "Authenticated" par défaut
5. Activer uniquement les permissions spécifiques

---

## 5. GESTION MÉDIA

### Configuration

- **Provider**: Local (défaut)
- **Max file size**: 20 MB
- **Formats acceptés**: jpg, jpeg, png, webp, pdf
- **Breakpoints**: large (1000px), medium (750px), small (500px), tiny (200px)
- **Dossier**: `public/uploads/`

### Structure des dossiers recommandée

```
public/uploads/
├── programs/
│   ├── large/
│   ├── medium/
│   ├── small/
│   └── tiny/
├── news/
│   ├── large/
│   ├── medium/
│   ├── small/
│   └── tiny/
├── events/
│   ├── large/
│   ├── medium/
│   ├── small/
│   └── tiny/
├── gallery/
│   └── originals/
└── testimonials/
    └── originals/
```

### Optimisation images

Pour la production, remplacer le provider local par Cloudinary ou AWS S3:

```javascript
// config/plugins.ts
upload: {
  config: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_CLOUD_NAME'),
      api_key: env('CLOUDINARY_API_KEY'),
      api_secret: env('CLOUDINARY_API_SECRET'),
    },
  },
},
```

---

## 6. API DESIGN

### Endpoints publics

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/programs` | Liste des programmes (avec pagination, filtres, tri) |
| GET | `/api/programs/:slug` | Programme par slug |
| GET | `/api/news` | Liste des actualités |
| GET | `/api/news/:slug` | Actualité par slug |
| GET | `/api/events` | Liste des événements |
| GET | `/api/events/:slug` | Événement par slug |
| GET | `/api/testimonials` | Liste des témoignages |
| GET | `/api/gallery` | Liste des éléments galerie |

### Exemples de requêtes

#### Récupérer tous les programmes featured

```bash
GET /api/programs?filters[featured][$eq]=true&populate=*
```

#### Récupérer les actualités par catégorie

```bash
GET /api/news?filters[category][$eq]=Admission&populate=*
```

#### Récupérer un programme par slug

```bash
GET /api/programs?filters[slug][$eq]=bts-informatique&populate=*
```

#### Pagination

```bash
GET /api/news?pagination[page]=2&pagination[pageSize]=10&sort=published_at:desc&populate=*
```

#### Filtres combinés

```bash
GET /api/programs?filters[category][$eq]=SUPERIEUR&filters[featured][$eq]=true&populate=*
```

### Réponse type

```json
{
  "data": [
    {
      "id": 1,
      "title": "BTS Informatique",
      "slug": "bts-informatique",
      "category": "SUPERIEUR",
      "level": "Bac+2",
      "duration": "2 ans",
      "description": "...",
      "featured": true,
      "published_at": "2024-01-15T00:00:00.000Z",
      "image": {
        "id": 1,
        "name": "bts.jpg",
        "url": "/uploads/bts_abc123.jpg",
        "formats": {
          "large": { "url": "/uploads/large_bts_abc123.jpg" },
          "medium": { "url": "/uploads/medium_bts_abc123.jpg" },
          "small": { "url": "/uploads/small_bts_abc123.jpg" }
        }
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 1
    }
  }
}
```

---

## 7. INTÉGRATION ASTRO

### Fichiers d'intégration

```
web/src/lib/api/
├── client.ts          # HTTP client
├── types.ts           # TypeScript types
├── index.ts           # Exports barrel
├── programs.ts        # Program API
├── news.ts            # News API
├── events.ts          # Events API
├── testimonials.ts    # Testimonials API
└── gallery.ts         # Gallery API
```

### Utilisation dans les pages Astro

```typescript
// Exemple: src/pages/formations/enseignement-superieur.astro
---
import { fetchPrograms, fetchFeaturedPrograms } from '../../lib/api';

const { data: programs } = await fetchPrograms({
  filters: { category: { $eq: 'SUPERIEUR' } },
  populate: '*',
});

const { data: featured } = await fetchFeaturedPrograms();
---

<!-- Utilisation dans le template -->
{programs.map(program => (
  <div>{program.title}</div>
))}
```

### Environnement Astro

```javascript
// web/astro.config.mjs
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:1337',
    },
  },
});
```

---

## 8. DÉPLOIEMENT

### Variables d'environnement production (.env)

```bash
# Database
DATABASE_HOST=db.example.com
DATABASE_PORT=3306
DATABASE_NAME=cerin_cms
DATABASE_USERNAME=cerin_cms
DATABASE_PASSWORD=<secure_password>

# Secrets (générés une fois, jamais changés)
APP_KEYS=<4_keys_separated_by_comma>
API_TOKEN_SALT=<random_64_bytes>
ADMIN_JWT_SECRET=<random_64_bytes>
JWT_SECRET=<random_64_bytes>

# Server
HOST=0.0.0.0
PORT=1337
URL=https://cms.groupe-cerin.com

# CORS production
CORS_ORIGIN=https://www.groupe-cerin.com,https://admin.groupe-cerin.com

# Security
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX=50

# Upload (Cloudinary en production)
UPLOAD_PROVIDER=cloudinary
CLOUDINARY_CLOUD_NAME=<name>
CLOUDINARY_API_KEY=<key>
CLOUDINARY_API_SECRET=<secret>

NODE_ENV=production
```

### Build production

```bash
pnpm --filter cms build
pnpm --filter cms start
```

### Docker (recommandé)

```dockerfile
# apps/cms/Dockerfile
FROM node:20-alpine
RUN apk add --no-cache python3 make g++ mysql-client
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --production
COPY . .
RUN pnpm build
EXPOSE 1337
CMD ["pnpm", "start"]
```

### Docker Compose

```yaml
# apps/cms/docker-compose.yml
version: '3.8'
services:
  cms:
    build: .
    ports:
      - "1337:1337"
    environment:
      - DATABASE_HOST=mysql
      - DATABASE_PORT=3306
      - DATABASE_NAME=cerin_cms
      - DATABASE_USERNAME=cerin_cms
      - DATABASE_PASSWORD=${CMS_DB_PASSWORD}
    depends_on:
      - mysql
    volumes:
      - ./public/uploads:/app/public/uploads

  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_DATABASE: cerin_cms
      MYSQL_USER: cerin_cms
      MYSQL_PASSWORD: ${CMS_DB_PASSWORD}
    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  mysql_data:
```

---

## 9. BACKUPS

### Stratégie de backup

**Base de données MySQL**:
```bash
# Backup quotidien automatisé (cron)
0 2 * * * mysqldump -u cerin_cms -p cerin_cms > /backups/cms_$(date +\%Y\%m\%d).sql
```

**Fichiers uploadés**:
```bash
# Backup quotidien des médias
0 3 * * * tar -czf /backups/uploads_$(date +\%Y\%m\%d).tar.gz ./public/uploads/
```

**Rétention**:
- SQL: 30 jours
- Uploads: 30 jours

**Restore**:
```bash
mysql -u cerin_cms -p cerin_cms < backup.sql
```

---

## 10. WORKFLOW DE CONTENU

### Processus éditorial

1. **Rédaction** → Rôle COMMUNICATION crée du contenu en brouillon
2. **Validation** → Super Admin ou ADMISSIONS valide et publie
3. **Publication** → Contenu visible sur le site public
4. **Archivage** → Contenu non publié reste accessible en admin

### Cycle de vie d'un contenu

```
BROUILLON → EN ATTENTE → PUBLIÉ → ARCHIVÉ
     ↓         ↓          ↓         ↓
   Rejet    Modifié    Modifié   Supprimé
```

---

## 11. SÉCURITÉ

### Checklist production

- [ ] Tous les secrets générés (APP_KEYS, JWT_SECRET, etc.)
- [ ] CORS restreint aux domaines officiels
- [ ] HTTPS activé
- [ ] Rate limiting activé
- [ ] Uploads restreints aux types MIME autorisés
- [ ] pas d'exposition des mots de passe dans les logs
- [ ] Admin panel accessible uniquement via VPN ou IP whitelist
- [ ] Sauvegardes automatisées
- [ ] Monitoring activé (logs, erreurs)

### CORS Whitelist

```javascript
CORS_ORIGIN=https://www.groupe-cerin.com,https://admin.groupe-cerin.com,http://localhost:4321
```

### Rate Limiting

```javascript
RATE_LIMIT_WINDOW_MS=900000  // 15 minutes
RATE_LIMIT_MAX=50            // 50 requêtes par window par IP
```

---

## 12. TROUBLESHOOTING

### Problème: "Cannot connect to database"

1. Vérifier `DATABASE_HOST`, `DATABASE_PORT`, `DATABASE_NAME`
2. Vérifier que MySQL est démarré
3. Vérifier les credentials MySQL
4. Tester la connexion: `mysql -h localhost -P 3307 -u cerin_cms -p`

### Problème: "APP_KEYS missing"

```bash
# Générer 4 clés de 32 caractères
node -e "for(let i=0;i<4;i++) console.log(require('crypto').randomBytes(16).toString('hex'))"
# Copier dans .env
```

### Problème: "Uploads not working"

1. Vérifier les permissions du dossier `public/uploads/`
2. Vérifier `UPLOAD_MAX_FILE_SIZE`
3. Vérifier les types MIME autorisés

### Problème: "CORS error"

1. Vérifier `CORS_ORIGIN` dans `.env`
2. Vérifier que l'origine du frontend est incluse
3. Redémarrer le serveur après modification

---

## 13. MONITORING

### Logs

- Fichier: `./logs/strapi.log`
- Niveau: `info` (production), `debug` (dev)
- Rotation: quotidienne

### Métriques à surveiller

- Requêtes API par minute
- Temps de réponse moyen
- Taux d'erreur
- Espace disque (uploads)
- Connexions MySQL actives

---

## 14. MIGRATION ROUTE MAP

### Phase 1 — Installation ✓
- [x] Workspace `apps/cms` créé
- [x] Strapi v5 installé et configuré
- [x] Base de données MySQL configurée
- [x] Content Types définis
- [x] Rôles et permissions configurés
- [x] API publique documentée
- [x] Intégration Astro prête

### Phase 2 — Migration des données (à venir)
1. **News** — Migrer 7 articles depuis `web/src/components/NewsSection.tsx`
2. **Programs** — Migrer données depuis `formations/enseignement-*.astro`
3. **Events** — Migrer depuis `evenements.astro`
4. **Testimonials** — Migrer depuis `TestimonialCarousel.tsx`
5. **Gallery** — Migrer depuis `vie-ceri.astro`

### Phase 3 — Intégration frontend (à venir)
1. Remplacer les imports mockés par les appels CMS dans `index.astro`
2. Remplacer les imports mockés dans `about.astro`
3. Remplacer les imports mockés dans `actualites.astro`
4. Remplacer les imports mockés dans `evenements.astro`
5. Remplacer les imports mockés dans `galerie.astro`
6. Remplacer les imports mockés dans `resultats.astro`

---

## 15. CONTACTS & SUPPORT

- **Documentation Strapi**: https://docs.strapi.io
- **Repository**: `/apps/cms`
- **Admin URL**: http://localhost:1337/admin

---

*Document généré le 2026-06-23 — Sprint A1 CMS Foundation*
