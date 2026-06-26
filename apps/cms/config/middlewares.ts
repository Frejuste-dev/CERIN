export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      cors: {
        enabled: true,
        origin: ['http://localhost:4321', 'http://localhost:3000'],
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::ip',
    config: {
      enabled: true,
    },
  },
  {
    name: 'strapi::rateLimit',
    config: {
      enabled: true,
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100,
    },
  },
  {
    name: 'strapi::responses',
    config: {
      default: {
        enabled: true,
      },
    },
  },
];
