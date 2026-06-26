import { CoreService } from '@strapi/strapi';

export default {
  async find(ctx: any) {
    const { query } = ctx;
    const sanitizedQuery = await this.sanitizeQuery(query);
    const populatedQuery = await this.populateQuery(sanitizedQuery, ['image', 'og_image']);

    const data = await strapi.db.query('api::news.news').findMany(populatedQuery);
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
    const populatedQuery = await this.populateQuery(sanitizedQuery, ['image', 'og_image']);

    const data = await strapi.db
      .query('api::news.news')
      .findOne({
        where: { slug },
        ...populatedQuery,
      });

    if (!data) {
      return ctx.notFound('News not found');
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
    const { filters = {}, sort = ['published_at:desc'], fields = [], populate = '*' } = query;
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
      return data.map((item) => this.formatNews(item));
    }
    return this.formatNews(data);
  },

  formatNews(news: any) {
    const { password, ...rest } = news;
    return {
      ...rest,
      seo_title: news.seo_title || `${news.title} | Groupe CERIN`,
      seo_description: news.seo_description || news.excerpt || news.content?.substring(0, 160),
    };
  },
};
