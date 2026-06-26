import http from 'node:http';
import { createStrapi } from '@strapi/strapi';

const strapi = createStrapi();

async function bootstrap() {
  await strapi.load();
  await strapi.start();

  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Strapi CMS is running');
  });

  server.listen(process.env.PORT || 1337, () => {
    console.log(`Server running on port ${process.env.PORT || 1337}`);
  });
}

bootstrap();
