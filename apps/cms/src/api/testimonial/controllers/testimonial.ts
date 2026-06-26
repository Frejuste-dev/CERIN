import { CoreService } from '@strapi/strapi';

export default {
  async find(ctx: any) {
    const { query } = ctx;
    const sanitizedQuery = await this.sanitizeQuery(query);
    const populatedQuery = await this.populateQuery(sanitizedQuery, ['image']);

    const data = await strapi.db.query('api::testimonial.testimonial').findMany(populatedQuery);
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
      return data.map((item) => this.formatTestimonial(item));
    }
    return this.formatTestimonial(data);
  },

  formatTestimonial(testimonial: any) {
    const { password, ...rest } = testimonial;
    return {
      ...rest,
    };
  },
};
