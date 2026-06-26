import { createStrapi } from '@strapi/strapi';
import { seedPrograms } from './seed-programs';
import { seedNews } from './seed-news';
import { seedEvents } from './seed-events';
import { seedTestimonials } from './seed-testimonials';
import { seedGallery } from './seed-gallery';

async function main() {
  console.log('='.repeat(60));
  console.log('         GROUPE CERIN CMS — INITIAL DATA SEEDING');
  console.log('='.repeat(60));

  let strapiInstance: any;
  try {
    strapiInstance = createStrapi();
    await strapiInstance.load();
    console.log('✓ Strapi loaded successfully context\n');
  } catch (error) {
    console.error('✗ Failed to load Strapi context:', error);
    process.exit(1);
  }

  try {
    // Run all seeds
    await seedPrograms(strapiInstance);
    await seedNews(strapiInstance);
    await seedEvents(strapiInstance);
    await seedTestimonials(strapiInstance);
    await seedGallery(strapiInstance);

    console.log('='.repeat(60));
    console.log('✓ Seeding complete: All contents are synced & idempotent.');
    console.log('='.repeat(60));
  } catch (error) {
    console.error('✗ Seeding process encountered errors:', error);
    process.exit(1);
  } finally {
    process.exit(0);
  }
}

main().catch((error) => {
  console.error('Unhandled seed process error:', error);
  process.exit(1);
});
