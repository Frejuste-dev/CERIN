import { CoreService } from '@strapi/strapi';
import type { Program, ProgramCreateInput, ProgramUpdateInput } from '../../../../../../packages/types/src';

export default {
  async find(ctx: any) {
    const { query } = ctx;
    const sanitizedQuery = await this.sanitizeQuery(query);
    const populatedQuery = await this.populateQuery(sanitizedQuery, ['image', 'og_image']);

    const data = await strapi.db.query('api::program.program').findMany(populatedQuery);

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
      .query('api::program.program')
      .findOne({
        where: { slug },
        ...populatedQuery,
      });

    if (!data) {
      return ctx.notFound('Program not found');
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
      return data.map((item) => this.formatProgram(item));
    }
    return this.formatProgram(data);
  },

  formatProgram(program: any) {
    const { password, ...rest } = program;
    return {
      ...rest,
      seo_title: program.seo_title || `${program.title} | Groupe CERIN`,
      seo_description: program.seo_description || program.excerpt || program.description?.substring(0, 160),
    };
  },
};
