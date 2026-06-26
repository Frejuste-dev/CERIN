export interface SeedTestimonial {
  name: string;
  role: string;
  quote: string;
  image?: string;
  featured: boolean;
}

const testimonialsSeeds: SeedTestimonial[] = [
  {
    name: 'Marie Kouamé',
    role: 'Étudiante BTS Gestion 2025',
    quote: 'Le CERIN m\'a donné les compétences pratiques et la confiance pour réussir mon BTS. Les enseignants sont très disponibles et les stages sont de qualité. Aujourd\'hui, je travaille dans une grande entreprise d\'Abidjan.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    featured: true,
  },
  {
    name: 'Jean-Claude Assi',
    role: 'Diplômé Licence Informatique 2024',
    quote: 'La formation en informatique au CERIN est exceptionnelle. Les projets pratiques et l\'accès aux outils modernes m\'ont permis de décrocher un emploi immédiatement après mon diplôme.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    featured: true,
  },
  {
    name: 'Fatou Diallo',
    role: 'Étudiante Master Management 2025',
    quote: 'Le programme Master au CERIN est rigoureux et exigeant, mais cela vaut vraiment le coup. Les cas concrets et les interventions de professionnels sont très formateurs.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    featured: true,
  },
  {
    name: 'Kofi N\'Guessan',
    role: 'Ancien étudiant BTP 2023',
    quote: 'Grâce à la formation en BTP au CERIN, j\'ai pu monter mon propre entreprise de construction. Les connaissances techniques et le savoir-être acquis sont précieux.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    featured: false,
  },
  {
    name: 'Aminata Koné',
    role: 'Étudiante Licence Marketing 2025',
    quote: 'Les études au CERIN sont variées et stimulantes. J\'ai particulièrement apprécié les projets de groupe et les stages en entreprise qui m\'ont permis de me découvrir.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    featured: false,
  },
  {
    name: 'Yao Konan',
    role: 'Diplômé Électrotechnique 2024',
    quote: 'La formation en électrotechnique est très complète. Les ateliers pratiques sont bien équipés et les enseignants sont experts dans leur domaine.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    featured: false,
  },
  {
    name: 'Marie-Claire Bamba',
    role: 'Étudiante Collège 5ème',
    quote: 'J\'aime beaucoup le CERIN parce que les professeurs sont gentils et les cours sont intéressants. J\'ai de bonnes notes et je me sens bien ici.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80',
    featured: false,
  },
  {
    name: 'Patrick Aka',
    role: 'Ancien étudiant BTS Informatique 2023',
    quote: 'Le CERIN a changé ma vie. La formation intensive en informatique m\'a permis de devenir développeur full-stack en seulement 2 ans. Je recommande vivement !',
    image: 'https://images.unsplash.com/photo-1519345182560-3f291da5472a?auto=format&fit=crop&w=400&q=80',
    featured: true,
  },
];

export async function seedTestimonials(strapi: any) {
  console.log('Seeding Testimonials...');
  for (const testimonial of testimonialsSeeds) {
    try {
      const existing = await strapi.db.query('api::testimonial.testimonial').findOne({
        where: { name: testimonial.name, role: testimonial.role },
      });

      if (existing) {
        await strapi.db.query('api::testimonial.testimonial').update({
          where: { id: existing.id },
          data: testimonial,
        });
        console.log(`  ~ Updated testimonial: ${testimonial.name}`);
      } else {
        await strapi.db.query('api::testimonial.testimonial').create({
          data: testimonial,
        });
        console.log(`  ✓ Created testimonial: ${testimonial.name}`);
      }
    } catch (error) {
      console.error(`  ✗ Failed testimonial: ${testimonial.name}`, error);
    }
  }
  console.log('Testimonials seeding completed.\n');
}
