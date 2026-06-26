import { cmsClient } from './client';
import { buildPath } from './query-builder';
import type { Event, ApiResponse, PaginationParams } from './types';

export async function fetchEvents(params?: PaginationParams): Promise<ApiResponse<Event>> {
  return cmsClient.get<ApiResponse<Event>>(buildPath('events', params));
}

export async function fetchEventBySlug(slug: string): Promise<{ data: Event } | null> {
  try {
    const result = await cmsClient.get<ApiResponse<Event>>(
      `/events?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`
    );
    return result.data?.length > 0 ? { data: result.data[0] } : null;
  } catch {
    return null;
  }
}

export async function fetchUpcomingEvents(): Promise<ApiResponse<Event>> {
  const now = new Date().toISOString();
  return cmsClient.get<ApiResponse<Event>>(
    `/events?filters[start_date][$gte]=${encodeURIComponent(now)}&populate=*&sort[0]=start_date:asc`
  );
}
