import { cmsClient } from './client';
import { buildPath } from './query-builder';
import type { Testimonial, ApiResponse, PaginationParams } from './types';

export async function fetchTestimonials(params?: PaginationParams): Promise<ApiResponse<Testimonial>> {
  return cmsClient.get<ApiResponse<Testimonial>>(buildPath('testimonials', params));
}

export async function fetchFeaturedTestimonials(): Promise<ApiResponse<Testimonial>> {
  return cmsClient.get<ApiResponse<Testimonial>>('/testimonials?filters[featured][$eq]=true&populate=*');
}

export async function fetchActiveTestimonials(): Promise<ApiResponse<Testimonial>> {
  return cmsClient.get<ApiResponse<Testimonial>>('/testimonials?populate=*&sort[0]=created_at:desc');
}
