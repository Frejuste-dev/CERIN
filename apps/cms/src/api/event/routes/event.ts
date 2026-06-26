export default {
  routes: [
    {
      method: 'GET',
      path: '/events',
      handler: 'event.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/events/:slug',
      handler: 'event.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
