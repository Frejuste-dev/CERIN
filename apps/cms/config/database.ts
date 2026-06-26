import path from 'path';

export default ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'postgres'),
    host: env('DATABASE_HOST', 'localhost'),
    port: env.int('DATABASE_PORT', 5432),
    database: env('DATABASE_NAME', 'cerin_cms'),
    username: env('DATABASE_USERNAME', 'cerin_cms'),
    password: env('DATABASE_PASSWORD', ''),
    ssl: env.bool('DATABASE_SSL', false),
    pool: {
      min: 2,
      max: 10,
    },
  },
  debug: false,
});
