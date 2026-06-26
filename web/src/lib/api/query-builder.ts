/**
 * Shared query builder helper for Strapi v5 REST API.
 * Strapi v5 uses:
 *   - pagination[page] / pagination[pageSize]
 *   - sort[0]=field:dir, sort[1]=...
 *   - filters[field][$eq]=value
 *   - populate=*  or  populate[relation][fields][0]=...
 */
import type { PaginationParams } from './types';

export function buildSearchParams(params?: PaginationParams): URLSearchParams {
  const sp = new URLSearchParams();

  if (params?.page) sp.set('pagination[page]', String(params.page));
  if (params?.pageSize) sp.set('pagination[pageSize]', String(params.pageSize));

  if (params?.sort) {
    const sorts = Array.isArray(params.sort) ? params.sort : [params.sort];
    sorts.forEach((s, i) => sp.set(`sort[${i}]`, s));
  }

  if (params?.filters) {
    const flattenFilters = (
      obj: Record<string, unknown>,
      prefix = 'filters'
    ) => {
      Object.entries(obj).forEach(([key, value]) => {
        const path = `${prefix}[${key}]`;
        if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
          flattenFilters(value as Record<string, unknown>, path);
        } else {
          sp.set(path, String(value));
        }
      });
    };
    flattenFilters(params.filters);
  }

  if (params?.populate) {
    const pop = Array.isArray(params.populate) ? params.populate.join(',') : params.populate;
    sp.set('populate', pop);
  }

  return sp;
}

export function buildPath(collection: string, params?: PaginationParams): string {
  const sp = buildSearchParams(params);
  const qs = sp.toString();
  return `/${collection}${qs ? `?${qs}` : ''}`;
}
