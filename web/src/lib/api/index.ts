export { cmsClient } from './client';
export {
  fetchPrograms,
  fetchProgramBySlug,
  fetchFeaturedPrograms,
  fetchProgramsByCategory,
} from './api/programs';
export {
  fetchNews,
  fetchNewsBySlug,
  fetchFeaturedNews,
  fetchNewsByCategory,
} from './api/news';
export {
  fetchEvents,
  fetchEventBySlug,
  fetchUpcomingEvents,
} from './api/events';
export {
  fetchTestimonials,
  fetchFeaturedTestimonials,
  fetchActiveTestimonials,
} from './api/testimonials';
export {
  fetchGallery,
  fetchGalleryByCategory,
  fetchGalleryByYear,
} from './api/gallery';
export type {
  Program,
  News,
  Event,
  Testimonial,
  Gallery,
  ApiResponse,
  PaginationParams,
} from './types';
