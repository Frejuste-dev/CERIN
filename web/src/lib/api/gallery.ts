import { cmsClient } from './client';
import { buildPath } from './query-builder';
import type { Gallery, ApiResponse, PaginationParams } from './types';

export async function fetchGallery(params?: PaginationParams): Promise<ApiResponse<Gallery>> {
  return cmsClient.get<ApiResponse<Gallery>>(buildPath('gallery', params));
}

export async function fetchGalleryByCategory(category: string): Promise<ApiResponse<Gallery>> {
  return cmsClient.get<ApiResponse<Gallery>>(
    `/gallery?filters[category][$eq]=${encodeURIComponent(category)}&populate=*`
  );
}

export async function fetchGalleryByYear(year: number): Promise<ApiResponse<Gallery>> {
  return cmsClient.get<ApiResponse<Gallery>>(
    `/gallery?filters[year][$eq]=${year}&populate=*`
  );
}
