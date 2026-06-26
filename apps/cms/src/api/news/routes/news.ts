export default {
  routes: [
    {
      method: 'GET',
      path: '/news',
      handler: 'news.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/news/:slug',
      handler: 'news.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
