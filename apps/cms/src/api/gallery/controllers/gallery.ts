import { CoreService } from '@strapi/strapi';

export default {
  async find(ctx: any) {
    const { query } = ctx;
    const sanitizedQuery = await this.sanitizeQuery(query);
    const populatedQuery = await this.populateQuery(sanitizedQuery, ['image']);

    const data = await strapi.db.query('api::gallery.gallery').findMany(populatedQuery);
    const sanitizedData = await this.sanitizeOutput(data);

    ctx.body = {
      data: sanitizedData.map((item: any) => ({
        id: item.id,
        ...item,
      })),
      meta: {},
    };
  },

  async sanitizeQuery(query: any) {
    const { filters = {}, sort = ['created_at:desc'], fields = [], populate = '*' } = query;
    return { filters, sort, fields, populate };
  },

  async populateQuery(query: any, relations: string[]) {
    if (query.populate === '*') {
      return { ...query, populate: relations };
    }
    return query;
  },

  async sanitizeOutput(data: any) {
    if (Array.isArray(data)) {
      return data.map((item) => this.formatGallery(item));
    }
    return this.formatGallery(data);
  },

  formatGallery(gallery: any) {
    const { password, ...rest } = gallery;
    return {
      ...rest,
    };
  },
};
