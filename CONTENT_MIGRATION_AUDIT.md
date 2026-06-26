# CONTENT_MIGRATION_AUDIT.md
## Sprint A2 – Audit de Migration de Contenu
### Groupe CERIN – Généré le 2026-06-24

---

## Résumé Exécutif

| Métrique | Valeur |
|---|---|
| Fichiers mock identifiés | 5 |
| Fichiers de données hardcodées | 12+ |
| Pages concernées | 11 |
| Contenu critique (Priorité 1) | 5 sources |
| Contenu non critique (Priorité 2-3) | 7 sources |

---

## 1. Fichiers Mock Originaux

| Fichier | Type de contenu | Lignes | Criticité | Statut |
|---|---|---|---|---|
| `web/src/data/mock-programs.ts` *(supprimé)* | Programs | ~350 | 🔴 CRITIQUE | ✅ Migré → `fallbacks/mock-programs.ts` |
| `web/src/data/mock-news.ts` *(supprimé)* | News | ~100 | 🔴 CRITIQUE | ✅ Migré → `fallbacks/mock-news.ts` |
| `web/src/data/mock-events.ts` *(supprimé)* | Events | ~80 | 🔴 CRITIQUE | ✅ Migré → `fallbacks/mock-events.ts` |
| `web/src/data/mock-testimonials.ts` *(supprimé)* | Testimonials | ~120 | 🟡 MODÉRÉ | ✅ Migré → `fallbacks/mock-testimonials.ts` |
| `web/src/data/mock-gallery.ts` *(supprimé)* | Gallery | ~60 | 🟡 MODÉRÉ | ✅ Migré → `fallbacks/mock-gallery.ts` |

---

## 2. Données Hardcodées dans les Pages

| Fichier | Type de contenu | Criticité | Stratégie | Statut |
|---|---|---|---|---|
| `web/src/pages/index.astro` | Stats institutionnelles (5000+ étudiants, 92% réussite) | 🟢 FAIBLE | Rester hardcodé — stats statiques | ✅ Conservé intentionnellement |
| `web/src/pages/index.astro` | Pôles de formation (3 pôles) | 🟡 MODÉRÉ | Navigation fixe | ✅ Conservé intentionnellement |
| `web/src/pages/index.astro` | Hero title/subtitle | 🟢 FAIBLE | Contenu institutionnel | ✅ Conservé intentionnellement |
| `web/src/pages/about.astro` | Chronologie, chiffres clés, équipe | 🟡 MODÉRÉ | Migrable vers Strapi (Sprint A3) | 🕐 À planifier |
| `web/src/pages/admissions.astro` | Calendrier admissions, docs requis | 🟡 MODÉRÉ | Migrable vers Strapi (Sprint A3) | 🕐 À planifier |
| `web/src/pages/contact.astro` | Adresses, téléphones, horaires | 🟢 FAIBLE | Donnée institutionnelle stable | ✅ Conservé intentionnellement |
| `web/src/pages/resultats.astro` | Données résultats | 🟡 MODÉRÉ | Migrable vers Strapi (Sprint A3) | 🕐 À planifier |
| `web/src/pages/offres/index.astro` | Offres d'emploi | 🟡 MODÉRÉ | Content type `Offre` à créer (Sprint A3) | 🕐 À planifier |
| `web/src/pages/inscription.astro` | Steps inscription | 🟢 FAIBLE | Contenu procédural stable | ✅ Conservé intentionnellement |
| `web/src/pages/formations/enseignement-superieur.astro` | Filtres catégories | 🟢 FAIBLE | UI locale | ✅ Conservé intentionnellement |
| `web/src/pages/formations/enseignement-technique.astro` | Filtres catégories | 🟢 FAIBLE | UI locale | ✅ Conservé intentionnellement |
| `web/src/pages/vie-ceri.astro` | Clubs, activités | 🟡 MODÉRÉ | Migrable vers Strapi (Sprint A3) | 🕐 À planifier |

---

## 3. Imports Mock Identifiés (grep)

```bash
# Résultat de: grep -R "mock" web/src --include="*.ts" --include="*.tsx" --include="*.astro" -l
web/src/lib/api/fallbacks/mock-programs.ts   ← FALLBACK DOCUMENTÉ
web/src/lib/api/fallbacks/mock-news.ts       ← FALLBACK DOCUMENTÉ
web/src/lib/api/fallbacks/mock-events.ts     ← FALLBACK DOCUMENTÉ
web/src/lib/api/fallbacks/mock-testimonials.ts ← FALLBACK DOCUMENTÉ
web/src/lib/api/fallbacks/mock-gallery.ts    ← FALLBACK DOCUMENTÉ
web/src/lib/content.ts                       ← Import fallbacks (légal)
```

> ✅ **Aucun import mock dans les pages** — tous les mocks sont isolés dans `fallbacks/` et n'apparaissent que dans la couche de service `content.ts`.

---

## 4. Architecture de Migration Adoptée

```
Page Astro
  ↓
lib/content.ts  (Couche service — cache 300s)
  ├── Tentative CMS (Strapi v5 REST)
  └── Fallback automatique → lib/api/fallbacks/mock-*.ts
       ↑ Données structurées identiques aux types TypeScript
```

### Avantages
- **Zéro régression UX** : fallback transparent si Strapi est hors ligne
- **Cache 300 secondes** : réduit la charge sur l'API Strapi
- **TypeScript strict** : tous les types partagés via `lib/api/types.ts`
- **Idempotent** : les seeds peuvent être rejoués sans duplication

---

## 5. Contenu à Migrer en Sprint A3

| Contenu | Content Type Strapi suggéré | Priorité |
|---|---|---|
| Données page About (histoire, équipe) | `TeamMember`, `HistoryEvent` | 🟡 P2 |
| Offres d'emploi | `JobOffer` | 🟡 P2 |
| Résultats examens | `ExamResult` | 🔵 P3 |
| Calendrier académique | `AcademicCalendar` | 🔵 P3 |
| Clubs et activités (Vie CERI) | `ClubActivity` | 🔵 P3 |
| Données d'admission | `AdmissionInfo` | 🔵 P3 |

---

## 6. Fichiers Créés/Modifiés (Sprint A2)

### Nouveaux fichiers
- `web/src/lib/content.ts` — Couche service unifiée
- `web/src/lib/cache/index.ts` — Cache mémoire TTL 300s
- `web/src/lib/api/types.ts` — Types TypeScript partagés
- `web/src/lib/api/query-builder.ts` — Builder Strapi v5 queries
- `web/src/lib/api/fallbacks/mock-programs.ts`
- `web/src/lib/api/fallbacks/mock-news.ts`
- `web/src/lib/api/fallbacks/mock-events.ts`
- `web/src/lib/api/fallbacks/mock-testimonials.ts`
- `web/src/lib/api/fallbacks/mock-gallery.ts`
- `web/src/lib/api/fallbacks/utils.ts`
- `web/src/pages/actualites/[slug].astro` — Page détail actualité
- `web/src/pages/evenements/[slug].astro` — Page détail événement
- `apps/cms/scripts/seed.ts`
- `apps/cms/scripts/seed-programs.ts`
- `apps/cms/scripts/seed-news.ts`
- `apps/cms/scripts/seed-events.ts`
- `apps/cms/scripts/seed-testimonials.ts`
- `apps/cms/scripts/seed-gallery.ts`

### Fichiers modifiés
- `web/src/layouts/Layout.astro` — SEO complet (canonical, OG, Twitter)
- `web/src/lib/api/client.ts` — Client HTTP unifié
- `web/src/lib/api/programs.ts` — Utilise `buildPath`
- `web/src/lib/api/news.ts` — Utilise `buildPath`
- `web/src/lib/api/events.ts` — Utilise `buildPath`
- `web/src/lib/api/testimonials.ts` — Utilise `buildPath`
- `web/src/lib/api/gallery.ts` — Utilise `buildPath`
- `web/src/lib/api/index.ts` — Exports mis à jour
- `web/src/pages/index.astro` — Données CMS, bug fix
- `web/src/pages/actualites.astro` — Données CMS
- `web/src/pages/evenements.astro` — Données CMS + liens slugs
- `web/src/pages/galerie.astro` — Données CMS
- `web/src/pages/formations/enseignement-superieur.astro` — Données CMS
- `web/src/pages/formations/enseignement-technique.astro` — Données CMS
- `web/src/pages/about.astro` — Données CMS
- `web/src/pages/vie-ceri.astro` — Données CMS
- `web/src/pages/inscription.astro` — Utilise content service
- `web/src/components/NewsSection.tsx` — Liens slugs actifs
- `pnpm-workspace.yaml` — allowBuilds corrigé
- `package.json` (root) — Script `cms:seed` ajouté
