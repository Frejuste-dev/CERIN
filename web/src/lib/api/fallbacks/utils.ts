import type { PaginationParams } from '../types';

export function applyQueryParams<T extends Record<string, any>>(
  data: T[],
  params?: PaginationParams
): T[] {
  let result = [...data];

  // 1. Apply filters
  if (params?.filters) {
    Object.entries(params.filters).forEach(([key, filterVal]) => {
      if (typeof filterVal === 'object' && filterVal !== null) {
        // e.g., { category: { $eq: 'SUPERIEUR' } }
        Object.entries(filterVal).forEach(([op, val]) => {
          if (op === '$eq') {
            result = result.filter(item => item[key] === val);
          } else if (op === '$gte') {
            result = result.filter(item => {
              const itemDate = new Date(item[key]).getTime();
              const compareDate = new Date(val as string).getTime();
              return itemDate >= compareDate;
            });
          } else if (op === '$lte') {
            result = result.filter(item => {
              const itemDate = new Date(item[key]).getTime();
              const compareDate = new Date(val as string).getTime();
              return itemDate <= compareDate;
            });
          }
        });
      } else {
        result = result.filter(item => item[key] === filterVal);
      }
    });
  }

  // 2. Apply sorting
  if (params?.sort) {
    const sorts = Array.isArray(params.sort) ? params.sort : [params.sort];
    sorts.forEach(sortStr => {
      const [field, direction] = sortStr.split(':');
      result.sort((a, b) => {
        let valA = a[field];
        let valB = b[field];

        if (typeof valA === 'string' && (field.includes('date') || field === 'published_at' || field === 'created_at')) {
          valA = new Date(valA).getTime();
          valB = new Date(valB).getTime();
        }

        if (valA < valB) return direction?.toLowerCase() === 'desc' ? 1 : -1;
        if (valA > valB) return direction?.toLowerCase() === 'desc' ? -1 : 1;
        return 0;
      });
    });
  }

  // 3. Apply pagination
  if (params?.page || params?.pageSize) {
    const page = params.page || 1;
    const pageSize = params.pageSize || 10;
    const start = (page - 1) * pageSize;
    result = result.slice(start, start + pageSize);
  }

  return result;
}
