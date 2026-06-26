const CMS_BASE = import.meta.env.PUBLIC_CMS_URL || 'http://localhost:1337';
const CMS_API_TOKEN = import.meta.env.PUBLIC_CMS_API_TOKEN || '';

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({ error: { message: 'Unknown error' } }));
    const message =
      errorBody?.error?.message ||
      errorBody?.error ||
      `HTTP ${response.status} ${response.statusText}`;
    throw new Error(String(message));
  }
  return response.json() as Promise<T>;
}

function buildHeaders(): HeadersInit {
  const headers: HeadersInit = { 'Content-Type': 'application/json' };
  if (CMS_API_TOKEN) {
    (headers as Record<string, string>)['Authorization'] = `Bearer ${CMS_API_TOKEN}`;
  }
  return headers;
}

export const cmsClient = {
  async get<T>(path: string, params?: Record<string, string>): Promise<T> {
    // Strapi v5 REST API lives under /api
    const fullPath = path.startsWith('/api/') ? path : `/api${path}`;
    const url = new URL(`${CMS_BASE}${fullPath}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }
    const response = await fetch(url.toString(), {
      headers: buildHeaders(),
      // Use no-store during SSR so Astro doesn't cache stale CMS data
      cache: 'no-store',
    });
    return handleResponse<T>(response);
  },

  async getBySlug<T>(collection: string, slug: string): Promise<T> {
    return this.get<T>(`/${collection}?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`);
  },

  async getFeatured<T>(collection: string): Promise<T> {
    return this.get<T>(`/${collection}?filters[featured][$eq]=true&populate=*`);
  },

  async getByCategory<T>(collection: string, category: string): Promise<T> {
    return this.get<T>(`/${collection}?filters[category][$eq]=${encodeURIComponent(category)}&populate=*`);
  },
};
