export default {
  routes: [
    {
      method: 'GET',
      path: '/programs',
      handler: 'program.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/programs/:slug',
      handler: 'program.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
