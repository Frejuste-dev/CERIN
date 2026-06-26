export interface SeedEvent {
  title: string;
  slug: string;
  description: string;
  start_date: string;
  end_date: string;
  location: string;
  image?: string;
  seo_title?: string;
  seo_description?: string;
}

const eventsSeeds: SeedEvent[] = [
  {
    title: 'Journée Portes Ouvertes',
    slug: 'journee-portes-ouvertes',
    description: '<p>Venez découvrir le campus CERIN, rencontrer nos enseignants et élèves, et assister à des démonstrations pédagogiques.</p>',
    start_date: '2026-03-15T09:00:00.000Z',
    end_date: '2026-03-15T16:00:00.000Z',
    location: 'Campus Principal, Abidjan',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    seo_title: 'Journée Portes Ouvertes – Groupe CERIN 2026',
    seo_description: 'Découvrez le Groupe CERIN lors de notre journée portes ouvertes le 15 mars 2026.',
  },
  {
    title: 'Forum des Métiers',
    slug: 'forum-des-metiers',
    description: '<p>Forum des métiers avec plus de 50 entreprises partenaires. Opportunités de stages et d\'emploi.</p>',
    start_date: '2026-04-22T10:00:00.000Z',
    end_date: '2026-04-22T18:00:00.000Z',
    location: 'Salle de conférence CERIN',
    image: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=800&q=80',
    seo_title: 'Forum des Métiers – Groupe CERIN',
    seo_description: 'Rencontrez nos entreprises partenaires et découvrez les opportunités professionnelles.',
  },
  {
    title: 'Tournoi Sportif Inter-Écoles',
    slug: 'tournoi-sportif-inter-ecoles',
    description: '<p>Tournoi de football et d\'athlétisme entre les écoles de la région. Inscription des équipes sur place.</p>',
    start_date: '2026-05-10T08:00:00.000Z',
    end_date: '2026-05-10T17:00:00.000Z',
    location: 'Terrain de sport CERIN',
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=800&q=80',
    seo_title: 'Tournoi Sportif Inter-Écoles – CERIN',
    seo_description: 'Participez au tournoi sportif du CERIN ! Football, athlétisme et esprit d\'équipe.',
  },
  {
    title: 'Conférence : L\'IA dans l\'éducation',
    slug: 'conference-ia-education',
    description: '<p>Conférence animée par des experts sur l\'impact de l\'intelligence artificielle dans le secteur éducatif.</p>',
    start_date: '2026-06-05T14:00:00.000Z',
    end_date: '2026-06-05T17:00:00.000Z',
    location: 'Auditorium CERIN',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
    seo_title: 'Conférence IA dans l\'éducation – CERIN',
    seo_description: 'Comment l\'intelligence artificielle transforme l\'éducation ? Découvrez-le lors de notre conférence.',
  },
  {
    title: 'Cérémonie de remise des diplômes',
    slug: 'ceremonie-remise-diplomes',
    description: '<p>Cérémonie solennelle de remise des diplômes aux lauréats de l\'année scolaire 2025-2026.</p>',
    start_date: '2026-07-28T10:00:00.000Z',
    end_date: '2026-07-28T13:00:00.000Z',
    location: 'Palais de la Culture, Abidjan',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    seo_title: 'Remise des Diplômes – Promotion 2026',
    seo_description: 'Cérémonie de remise des diplômes aux lauréats du Groupe CERIN.',
  },
  {
    title: 'Semaine de l\'Orientation Scolaire',
    slug: 'semaine-orientation-scolaire',
    description: '<p>Semaine dédiée à l\'orientation scolaire et professionnelle. Ateliers, conférences et conseils personnalisés.</p>',
    start_date: '2026-09-08T08:00:00.000Z',
    end_date: '2026-09-12T16:00:00.000Z',
    location: 'Tous les campus',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80',
    seo_title: 'Semaine de l\'Orientation – CERIN',
    seo_description: 'Trouvez votre voie ! La semaine de l\'orientation vous guide vers la formation idéale.',
  },
];

export async function seedEvents(strapi: any) {
  console.log('Seeding Events...');
  for (const event of eventsSeeds) {
    try {
      const existing = await strapi.db.query('api::event.event').findOne({
        where: { slug: event.slug },
      });

      if (existing) {
        await strapi.db.query('api::event.event').update({
          where: { id: existing.id },
          data: event,
        });
        console.log(`  ~ Updated event: ${event.title}`);
      } else {
        await strapi.db.query('api::event.event').create({
          data: event,
        });
        console.log(`  ✓ Created event: ${event.title}`);
      }
    } catch (error) {
      console.error(`  ✗ Failed event: ${event.title}`, error);
    }
  }
  console.log('Events seeding completed.\n');
}
