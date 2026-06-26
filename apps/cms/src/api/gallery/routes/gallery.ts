export default {
  routes: [
    {
      method: 'GET',
      path: '/gallery',
      handler: 'gallery.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
