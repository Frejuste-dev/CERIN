/**
 * Content Service Layer — Sprint A2
 * Provides a unified API with:
 * - Primary: CMS (Strapi)
 * - Fallback: In-memory mock data (when CMS unavailable)
 * - Cache: 300s TTL memory cache to reduce API calls
 */
import type { Program, News, Event, Testimonial, Gallery, ApiResponse, PaginationParams } from './types';
import {
  fetchPrograms,
  fetchProgramBySlug,
  fetchFeaturedPrograms,
  fetchProgramsByCategory,
} from './api/programs';
import {
  fetchNews,
  fetchNewsBySlug,
  fetchFeaturedNews,
  fetchNewsByCategory,
} from './api/news';
import {
  fetchEvents,
  fetchEventBySlug,
  fetchUpcomingEvents,
} from './api/events';
import {
  fetchTestimonials,
  fetchFeaturedTestimonials,
  fetchActiveTestimonials,
} from './api/testimonials';
import {
  fetchGallery,
  fetchGalleryByCategory,
  fetchGalleryByYear,
} from './api/gallery';
import { mockPrograms } from './api/fallbacks/mock-programs';
import { mockNews } from './api/fallbacks/mock-news';
import { mockEvents } from './api/fallbacks/mock-events';
import { mockTestimonials } from './api/fallbacks/mock-testimonials';
import { mockGallery } from './api/fallbacks/mock-gallery';
import { applyQueryParams } from './api/fallbacks/utils';
import { apiCache } from './cache/index';

// ─── Helper ───────────────────────────────────────────────────────────────────
const CACHE_TTL = 300;

function buildMockResponse<T>(data: T[]): ApiResponse<T> {
  return {
    data,
    meta: {
      pagination: {
        page: 1,
        pageSize: data.length,
        pageCount: 1,
        total: data.length,
      },
    },
  };
}

// ─── PROGRAMS ─────────────────────────────────────────────────────────────────

export async function getPrograms(params?: PaginationParams): Promise<ApiResponse<Program>> {
  const cacheKey = `programs:${JSON.stringify(params)}`;
  const cached = apiCache.get<ApiResponse<Program>>(cacheKey);
  if (cached) return cached;

  try {
    const result = await fetchPrograms(params);
    apiCache.set(cacheKey, result, CACHE_TTL);
    return result;
  } catch (error) {
    console.warn('[CMS FALLBACK] getPrograms: Strapi unavailable, using mock data.', error instanceof Error ? error.message : error);
    return buildMockResponse(applyQueryParams(mockPrograms, params));
  }
}

export async function getProgramBySlug(slug: string): Promise<{ data: Program } | null> {
  const cacheKey = `program:${slug}`;
  const cached = apiCache.get<{ data: Program }>(cacheKey);
  if (cached) return cached;

  try {
    const result = await fetchProgramBySlug(slug);
    if (result) apiCache.set(cacheKey, result, CACHE_TTL);
    return result;
  } catch (error) {
    console.warn('[CMS FALLBACK] getProgramBySlug: Strapi unavailable, using mock data.', error instanceof Error ? error.message : error);
    const item = mockPrograms.find(p => p.slug === slug);
    return item ? { data: item } : null;
  }
}

export async function getFeaturedPrograms(): Promise<ApiResponse<Program>> {
  const cacheKey = 'programs:featured';
  const cached = apiCache.get<ApiResponse<Program>>(cacheKey);
  if (cached) return cached;

  try {
    const result = await fetchFeaturedPrograms();
    apiCache.set(cacheKey, result, CACHE_TTL);
    return result;
  } catch (error) {
    console.warn('[CMS FALLBACK] getFeaturedPrograms: Strapi unavailable, using mock data.', error instanceof Error ? error.message : error);
    return buildMockResponse(mockPrograms.filter(p => p.featured));
  }
}

export async function getProgramsByCategory(
  category: 'GENERAL' | 'TECHNIQUE' | 'SUPERIEUR'
): Promise<ApiResponse<Program>> {
  const cacheKey = `programs:category:${category}`;
  const cached = apiCache.get<ApiResponse<Program>>(cacheKey);
  if (cached) return cached;

  try {
    const result = await fetchProgramsByCategory(category);
    apiCache.set(cacheKey, result, CACHE_TTL);
    return result;
  } catch (error) {
    console.warn('[CMS FALLBACK] getProgramsByCategory: Strapi unavailable, using mock data.', error instanceof Error ? error.message : error);
    return buildMockResponse(mockPrograms.filter(p => p.category === category));
  }
}

// ─── NEWS ─────────────────────────────────────────────────────────────────────

export async function getNews(params?: PaginationParams): Promise<ApiResponse<News>> {
  const cacheKey = `news:${JSON.stringify(params)}`;
  const cached = apiCache.get<ApiResponse<News>>(cacheKey);
  if (cached) return cached;

  try {
    const result = await fetchNews(params);
    apiCache.set(cacheKey, result, CACHE_TTL);
    return result;
  } catch (error) {
    console.warn('[CMS FALLBACK] getNews: Strapi unavailable, using mock data.', error instanceof Error ? error.message : error);
    return buildMockResponse(applyQueryParams(mockNews, params));
  }
}

export async function getNewsBySlug(slug: string): Promise<{ data: News } | null> {
  const cacheKey = `news:${slug}`;
  const cached = apiCache.get<{ data: News }>(cacheKey);
  if (cached) return cached;

  try {
    const result = await fetchNewsBySlug(slug);
    if (result) apiCache.set(cacheKey, result, CACHE_TTL);
    return result;
  } catch (error) {
    console.warn('[CMS FALLBACK] getNewsBySlug: Strapi unavailable, using mock data.', error instanceof Error ? error.message : error);
    const item = mockNews.find(n => n.slug === slug);
    return item ? { data: item } : null;
  }
}

export async function getFeaturedNews(): Promise<ApiResponse<News>> {
  const cacheKey = 'news:featured';
  const cached = apiCache.get<ApiResponse<News>>(cacheKey);
  if (cached) return cached;

  try {
    const result = await fetchFeaturedNews();
    apiCache.set(cacheKey, result, CACHE_TTL);
    return result;
  } catch (error) {
    console.warn('[CMS FALLBACK] getFeaturedNews: Strapi unavailable, using mock data.', error instanceof Error ? error.message : error);
    return buildMockResponse(mockNews.filter(n => n.featured));
  }
}

export async function getNewsByCategory(category: string): Promise<ApiResponse<News>> {
  const cacheKey = `news:category:${category}`;
  const cached = apiCache.get<ApiResponse<News>>(cacheKey);
  if (cached) return cached;

  try {
    const result = await fetchNewsByCategory(category);
    apiCache.set(cacheKey, result, CACHE_TTL);
    return result;
  } catch (error) {
    console.warn('[CMS FALLBACK] getNewsByCategory: Strapi unavailable, using mock data.', error instanceof Error ? error.message : error);
    return buildMockResponse(mockNews.filter(n => n.category === category));
  }
}

// ─── EVENTS ───────────────────────────────────────────────────────────────────

export async function getEvents(params?: PaginationParams): Promise<ApiResponse<Event>> {
  const cacheKey = `events:${JSON.stringify(params)}`;
  const cached = apiCache.get<ApiResponse<Event>>(cacheKey);
  if (cached) return cached;

  try {
    const result = await fetchEvents(params);
    apiCache.set(cacheKey, result, CACHE_TTL);
    return result;
  } catch (error) {
    console.warn('[CMS FALLBACK] getEvents: Strapi unavailable, using mock data.', error instanceof Error ? error.message : error);
    return buildMockResponse(applyQueryParams(mockEvents, params));
  }
}

export async function getEventBySlug(slug: string): Promise<{ data: Event } | null> {
  const cacheKey = `event:${slug}`;
  const cached = apiCache.get<{ data: Event }>(cacheKey);
  if (cached) return cached;

  try {
    const result = await fetchEventBySlug(slug);
    if (result) apiCache.set(cacheKey, result, CACHE_TTL);
    return result;
  } catch (error) {
    console.warn('[CMS FALLBACK] getEventBySlug: Strapi unavailable, using mock data.', error instanceof Error ? error.message : error);
    const item = mockEvents.find(e => e.slug === slug);
    return item ? { data: item } : null;
  }
}

export async function getUpcomingEvents(): Promise<ApiResponse<Event>> {
  const cacheKey = 'events:upcoming';
  const cached = apiCache.get<ApiResponse<Event>>(cacheKey);
  if (cached) return cached;

  try {
    const result = await fetchUpcomingEvents();
    apiCache.set(cacheKey, result, CACHE_TTL);
    return result;
  } catch (error) {
    console.warn('[CMS FALLBACK] getUpcomingEvents: Strapi unavailable, using mock data.', error instanceof Error ? error.message : error);
    const now = new Date().getTime();
    const upcoming = mockEvents
      .filter(e => new Date(e.start_date).getTime() >= now)
      .sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime());
    return buildMockResponse(upcoming);
  }
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────

export async function getTestimonials(params?: PaginationParams): Promise<ApiResponse<Testimonial>> {
  const cacheKey = `testimonials:${JSON.stringify(params)}`;
  const cached = apiCache.get<ApiResponse<Testimonial>>(cacheKey);
  if (cached) return cached;

  try {
    const result = await fetchTestimonials(params);
    apiCache.set(cacheKey, result, CACHE_TTL);
    return result;
  } catch (error) {
    console.warn('[CMS FALLBACK] getTestimonials: Strapi unavailable, using mock data.', error instanceof Error ? error.message : error);
    return buildMockResponse(applyQueryParams(mockTestimonials, params));
  }
}

export async function getFeaturedTestimonials(): Promise<ApiResponse<Testimonial>> {
  const cacheKey = 'testimonials:featured';
  const cached = apiCache.get<ApiResponse<Testimonial>>(cacheKey);
  if (cached) return cached;

  try {
    const result = await fetchFeaturedTestimonials();
    apiCache.set(cacheKey, result, CACHE_TTL);
    return result;
  } catch (error) {
    console.warn('[CMS FALLBACK] getFeaturedTestimonials: Strapi unavailable, using mock data.', error instanceof Error ? error.message : error);
    return buildMockResponse(mockTestimonials.filter(t => t.featured));
  }
}

export async function getActiveTestimonials(): Promise<ApiResponse<Testimonial>> {
  const cacheKey = 'testimonials:active';
  const cached = apiCache.get<ApiResponse<Testimonial>>(cacheKey);
  if (cached) return cached;

  try {
    const result = await fetchActiveTestimonials();
    apiCache.set(cacheKey, result, CACHE_TTL);
    return result;
  } catch (error) {
    console.warn('[CMS FALLBACK] getActiveTestimonials: Strapi unavailable, using mock data.', error instanceof Error ? error.message : error);
    return buildMockResponse(mockTestimonials);
  }
}

// ─── GALLERY ──────────────────────────────────────────────────────────────────

export async function getGallery(params?: PaginationParams): Promise<ApiResponse<Gallery>> {
  const cacheKey = `gallery:${JSON.stringify(params)}`;
  const cached = apiCache.get<ApiResponse<Gallery>>(cacheKey);
  if (cached) return cached;

  try {
    const result = await fetchGallery(params);
    apiCache.set(cacheKey, result, CACHE_TTL);
    return result;
  } catch (error) {
    console.warn('[CMS FALLBACK] getGallery: Strapi unavailable, using mock data.', error instanceof Error ? error.message : error);
    return buildMockResponse(applyQueryParams(mockGallery, params));
  }
}

export async function getGalleryByCategory(
  category: 'campus' | 'evenements' | 'sports' | 'culture' | 'formation' | 'autre'
): Promise<ApiResponse<Gallery>> {
  const cacheKey = `gallery:category:${category}`;
  const cached = apiCache.get<ApiResponse<Gallery>>(cacheKey);
  if (cached) return cached;

  try {
    const result = await fetchGalleryByCategory(category);
    apiCache.set(cacheKey, result, CACHE_TTL);
    return result;
  } catch (error) {
    console.warn('[CMS FALLBACK] getGalleryByCategory: Strapi unavailable, using mock data.', error instanceof Error ? error.message : error);
    return buildMockResponse(mockGallery.filter(g => g.category === category));
  }
}

export async function getGalleryByYear(year: number): Promise<ApiResponse<Gallery>> {
  const cacheKey = `gallery:year:${year}`;
  const cached = apiCache.get<ApiResponse<Gallery>>(cacheKey);
  if (cached) return cached;

  try {
    const result = await fetchGalleryByYear(year);
    apiCache.set(cacheKey, result, CACHE_TTL);
    return result;
  } catch (error) {
    console.warn('[CMS FALLBACK] getGalleryByYear: Strapi unavailable, using mock data.', error instanceof Error ? error.message : error);
    return buildMockResponse(mockGallery.filter(g => g.year === year));
  }
}
