import { cmsClient } from './client';
import { buildPath } from './query-builder';
import type { News, ApiResponse, PaginationParams } from './types';

export async function fetchNews(params?: PaginationParams): Promise<ApiResponse<News>> {
  return cmsClient.get<ApiResponse<News>>(buildPath('news', params));
}

export async function fetchNewsBySlug(slug: string): Promise<{ data: News } | null> {
  try {
    const result = await cmsClient.get<ApiResponse<News>>(
      `/news?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`
    );
    return result.data?.length > 0 ? { data: result.data[0] } : null;
  } catch {
    return null;
  }
}

export async function fetchFeaturedNews(): Promise<ApiResponse<News>> {
  return cmsClient.get<ApiResponse<News>>('/news?filters[featured][$eq]=true&populate=*');
}

export async function fetchNewsByCategory(category: string): Promise<ApiResponse<News>> {
  return cmsClient.get<ApiResponse<News>>(
    `/news?filters[category][$eq]=${encodeURIComponent(category)}&populate=*`
  );
}
