import { CoreService } from '@strapi/strapi';

export default {
  async find(ctx: any) {
    const { query } = ctx;
    const sanitizedQuery = await this.sanitizeQuery(query);
    const populatedQuery = await this.populateQuery(sanitizedQuery, ['image']);

    const data = await strapi.db.query('api::event.event').findMany(populatedQuery);
    const sanitizedData = await this.sanitizeOutput(data);

    ctx.body = {
      data: sanitizedData.map((item: any) => ({
        id: item.id,
        ...item,
      })),
      meta: {},
    };
  },

  async findOne(ctx: any) {
    const { slug } = ctx.params;
    const { query } = ctx;
    const sanitizedQuery = await this.sanitizeQuery(query);
    const populatedQuery = await this.populateQuery(sanitizedQuery, ['image']);

    const data = await strapi.db
      .query('api::event.event')
      .findOne({
        where: { slug },
        ...populatedQuery,
      });

    if (!data) {
      return ctx.notFound('Event not found');
    }

    const sanitizedData = await this.sanitizeOutput(data);

    ctx.body = {
      data: {
        id: sanitizedData.id,
        ...sanitizedData,
      },
      meta: {},
    };
  },

  async sanitizeQuery(query: any) {
    const { filters = {}, sort = ['start_date:asc'], fields = [], populate = '*' } = query;
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
      return data.map((item) => this.formatEvent(item));
    }
    return this.formatEvent(data);
  },

  formatEvent(event: any) {
    const { password, ...rest } = event;
    return {
      ...rest,
    };
  },
};
