import { cmsClient } from './client';
import { buildPath } from './query-builder';
import type { Program, ApiResponse, PaginationParams } from './types';

export async function fetchPrograms(params?: PaginationParams): Promise<ApiResponse<Program>> {
  return cmsClient.get<ApiResponse<Program>>(buildPath('programs', params));
}

export async function fetchProgramBySlug(slug: string): Promise<{ data: Program } | null> {
  try {
    const result = await cmsClient.get<ApiResponse<Program>>(
      `/programs?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`
    );
    return result.data?.length > 0 ? { data: result.data[0] } : null;
  } catch {
    return null;
  }
}

export async function fetchFeaturedPrograms(): Promise<ApiResponse<Program>> {
  return cmsClient.get<ApiResponse<Program>>('/programs?filters[featured][$eq]=true&populate=*');
}

export async function fetchProgramsByCategory(
  category: 'GENERAL' | 'TECHNIQUE' | 'SUPERIEUR'
): Promise<ApiResponse<Program>> {
  return cmsClient.get<ApiResponse<Program>>(
    `/programs?filters[category][$eq]=${encodeURIComponent(category)}&populate=*`
  );
}
