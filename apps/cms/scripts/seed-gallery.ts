export interface SeedGalleryItem {
  title: string;
  image: string;
  category: 'campus' | 'evenements' | 'sports' | 'culture' | 'formation' | 'autre';
  year: number;
}

const gallerySeeds: SeedGalleryItem[] = [
  { title: 'Cérémonie de rentrée 2025', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80', category: 'evenements', year: 2025 },
  { title: 'Visite de campus', image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80', category: 'campus', year: 2025 },
  { title: 'Atelier informatique', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80', category: 'formation', year: 2025 },
  { title: 'Club de football', image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=800&q=80', category: 'sports', year: 2025 },
  { title: 'Conférence annuelle', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80', category: 'evenements', year: 2025 },
  { title: 'Sortie pédagogique', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80', category: 'formation', year: 2025 },
  { title: 'Remise de diplômes', image: 'https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?auto=format&fit=crop&w=800&q=80', category: 'evenements', year: 2024 },
  { title: 'Vie associative', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80', category: 'culture', year: 2024 },
  { title: 'Salle de classe moderne', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80', category: 'campus', year: 2024 },
];

export async function seedGallery(strapi: any) {
  console.log('Seeding Gallery...');
  for (const item of gallerySeeds) {
    try {
      const existing = await strapi.db.query('api::gallery.gallery').findOne({
        where: { title: item.title, category: item.category },
      });

      if (existing) {
        await strapi.db.query('api::gallery.gallery').update({
          where: { id: existing.id },
          data: item,
        });
        console.log(`  ~ Updated gallery: ${item.title}`);
      } else {
        await strapi.db.query('api::gallery.gallery').create({
          data: item,
        });
        console.log(`  ✓ Created gallery: ${item.title}`);
      }
    } catch (error) {
      console.error(`  ✗ Failed gallery: ${item.title}`, error);
    }
  }
  console.log('Gallery seeding completed.\n');
}
