# MIGRATION_STRATEGY.md — Migration des données vers Strapi CMS

> **Sprint A1 — CMS Foundation**
> Objectif: Migrer l'ensemble du contenu éditorial depuis les pages Astro vers Strapi CMS

---

## 1. ORDRE DE MIGRATION

### Sprint A2 — News
**Source:** `web/src/components/NewsSection.tsx` (7 articles hardcodés)
**Cible:** Collection `News` dans Strapi
**Effort:** 1-2 jours

#### Checklist
- [ ] Extraire les 7 articles depuis `NewsSection.tsx`
- [ ] Créer les entrées dans Strapi admin
- [ ] Configurer les catégories (Admission, Réussite, Partenariat, Événement, Institutionnel)
- [ ] Tester l'API `/api/news`
- [ ] Remplacer `const articles = [...]` dans `NewsSection.tsx` par appel à `fetchNews()`
- [ ] Vérifier le routage des pages news individuelles

#### Données à migrer (extrait)
```typescript
// Source actuelle
const articles = [
  {
    id: 1,
    title: "Les meilleures métiers après un BTS en 2026",
    category: "Partenariat",
    image: "...",
    excerpt: "...",
    content: "...",
    date: "2026-03-21",
    featured: true
  },
  // ... 6 autres articles
];
```

#### Nouveau flux
```typescript
// web/src/pages/actualites.astro
---
import { fetchNews } from '../../lib/api';

const { data: articles } = await fetchNews({
  sort: ['published_at:desc'],
  populate: '*',
});
---
```

---

### Sprint A2 — Programs
**Source:** 
- `web/src/pages/formations/enseignement-superieur.astro`
- `web/src/pages/formations/enseignement-technique.astro`
- `web/src/components/ProgramCards.tsx`
- `web/src/components/ProgramCardEnhanced.tsx`

**Cible:** Collection `Program` dans Strapi
**Effort:** 2-3 jours

#### Checklist
- [ ] Extraire tous les programmes (BTS, Licence, Master, Technique, etc.)
- [ ] Créer les entrées avec catégories: GENERAL, TECHNIQUE, SUPERIEUR
- [ ] Ajouter les images pour chaque programme
- [ ] Configurer les tarifs (`tuition`)
- [ ] Tester l'API `/api/programs`
- [ ] Remplacer les données mockées dans les pages formations
- [ ] Mettre à jour `ProgramCards.tsx` pour utiliser `fetchPrograms()`

#### Données à migrer (extrait)
```typescript
// Catégories Strapi:
// - GENERAL: Collège, Lycée
// - TECHNIQUE: BTP, Mécanique, Électricité, etc.
// - SUPERIEUR: BTS, Licence, Master
```

---

### Sprint A2 — Events
**Source:** `web/src/pages/evenements.astro` (6 événements hardcodés)
**Cible:** Collection `Event` dans Strapi
**Effort:** 1 jour

#### Checklist
- [ ] Extraire les événements 2026
- [ ] Convertir les dates en format ISO datetime
- [ ] Créer les entrées dans Strapi
- [ ] Tester l'API `/api/events`
- [ ] Remplacer le tableau hardcodé dans `evenements.astro`
- [ ] Ajouter filtres par catégorie si nécessaire

---

### Sprint A2 — Testimonials
**Source:** `web/src/components/TestimonialCarousel.tsx` (4 témoignages)
**Cible:** Collection `Testimonial` dans Strapi
**Effort:** 1 jour

#### Checklist
- [ ] Extraire les témoignages
- [ ] Créer les entrées dans Strapi
- [ ] Tester l'API `/api/testimonials`
- [ ] Remplacer les données dans `TestimonialCarousel.tsx`
- [ ] Activer le flag `featured` pour les témoignages en homepage

---

### Sprint A2 — Gallery
**Source:** `web/src/pages/vie-ceri.astro` (9 éléments galerie)
**Cible:** Collection `Gallery` dans Strapi
**Effort:** 1 jour

#### Checklist
- [ ] Extraire les éléments galerie
- [ ] Catégoriser (campus, evenements, sports, culture, formation)
- [ ] Ajouter les images originales
- [ ] Tester l'API `/api/gallery`
- [ ] Remplacer le tableau hardcodé
- [ ] Ajouter filtres par catégorie

---

## 2. TRANSFORMATION DES DONNÉES

### 2.1 Format de référence Strapi

Toutes les entrées doivent respecter le schéma défini dans `schema.json`.

### 2.2 Règles de transformation

| Champ source | Transformation | Cible Strapi |
|--------------|----------------|--------------|
| `date` (string "15 mars 2026") | Parse → ISO datetime | `published_at` ou `start_date` |
| `category` (string) | Upper enum mapping | `category` (enum) |
| `featured` (boolean) | Direct | `featured` |
| `image` (URL externe) | Download → upload Strapi | `image` (media) |
| `excerpt` (string) | Direct | `excerpt` |
| `content` (HTML/string) | Direct | `content` (richtext) |

### 2.3 Scripts de migration (Node.js)

```typescript
// apps/cms/scripts/migrate-news.ts
import { createStrapiClient } from '../src/utils/strapi-client';

async function migrateNews() {
  const strapi = createStrapiClient();
  
  const articles = [
    // ... données extraites de NewsSection.tsx
  ];
  
  for (const article of articles) {
    await strapi.create('api::news.news', {
      data: {
        title: article.title,
        slug: article.slug || generateSlug(article.title),
        content: article.content,
        excerpt: article.excerpt,
        category: article.category,
        featured: article.featured,
        published_at: article.date,
      },
    });
  }
  
  console.log('Migration terminée');
}

migrateNews();
```

---

## 3. VALIDATION PAR SPRINT

### Sprint A2 — Critères d'acceptation

#### News
- [ ] Tous les 7 articles sont dans Strapi
- [ ] Frontend affiche les articles depuis Strapi
- [ ] Filtres par catégorie fonctionnent
- [ ] Pagination fonctionne
- [ ] Pages individuelles `/actualites/[slug]` fonctionnent

#### Programs
- [ ] Tous les programmes sont dans Strapi
- [ ] Catégories GENERAL/TECHNIQUE/SUPERIEUR correctement assignées
- [ ] Images téléchargées
- [ ] Frontend formations affiche depuis Strapi
- [ ] Programme featured s'affiche en homepage

#### Events
- [ ] Tous les événements migrés
- [ ] Dates correctement formatées
- [ ] Page `/evenements` affiche depuis Strapi

#### Testimonials
- [ ] Tous les témoignages migrés
- [ ] `featured` flag configuré correctement
- [ ] Carousel homepage fonctionne

#### Gallery
- [ ] Tous les éléments galerie migrés
- [ ] Catégories assignées
- [ ] Page `/galerie` affiche depuis Strapi

---

## 4. ROLLBACK PLAN

### Si la migration échoue

1. **News**: Revenir au tableau hardcodé dans `NewsSection.tsx`
2. **Programs**: Revenir aux données statiques dans les pages formations
3. **Events**: Revenir au tableau dans `evenements.astro`
4. **Testimonials**: Revenir au tableau dans `TestimonialCarousel.tsx`
5. **Gallery**: Revenir au tableau dans `vie-ceri.astro`

### Stratégie de rollback

```typescript
// web/src/lib/api/index.ts
export const USE_CMS = import.meta.env.PUBLIC_USE_CMS !== 'false';

// Dans chaque page
const data = USE_CMS 
  ? await fetchPrograms() 
  : getHardcodedPrograms();
```

---

## 5. CALENDRIER

| Sprint | Durée | Responsable | Livrable |
|--------|-------|-------------|----------|
| **A1** — Foundation | 3 jours | Architecte CMS | Strapi opérationnel, 5 content types, API publique |
| **A2** — Migration News | 1 jour | Dev Frontend | News migrées, page actualites fonctionne |
| **A2** — Migration Programs | 2 jours | Dev Frontend | Programmes migrés, pages formations fonctionnent |
| **A2** — Migration Events | 1 jour | Dev Frontend | Événements migrés |
| **A2** — Migration Testimonials | 1 jour | Dev Frontend | Témoignages migrés, homepage fonctionne |
| **A2** — Migration Gallery | 1 jour | Dev Frontend | Galerie migrée |
| **A3** — Intégration finale | 2 jours | Dev Fullstack | Toutes les pages utilisent le CMS |
| **A4** — Admin & Polish | 2 jours | DevOps | Admin panel, RBAC finalisé, déploiement |

**Total estimé:** 13 jours ouvrables

---

## 6. PRÉREQUIS TECHNIQUES

### Strapi
- [ ] Strapi v5 installé et fonctionnel
- [ ] Base de données MySQL créée
- [ ] Admin user créé
- [ ] Content types déployés

### Frontend
- [ ] `web/src/lib/api/*` intégré au projet
- [ ] Variables d'environnement configurées (`PUBLIC_CMS_URL`)
- [ ] Proxy Vite configuré vers Strapi

### Infrastructure
- [ ] MySQL 8+ disponible
- [ ] Port 1337 ouvert pour Strapi
- [ ] Port 4321 ouvert pour Astro
- [ ] SSL configuré pour la production

---

*Document généré le 2026-06-23*
