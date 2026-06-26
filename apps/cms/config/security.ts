export default ({ env }) => {
  const generateFallbackSecret = () => {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return 'change_me_generate_with_openssl_or_node_crypto';
  };

  return {
    cors: {
      enabled: true,
      origin: env('CORS_ORIGIN', 'http://localhost:4321').split(',').map((o) => o.trim()),
      credentials: true,
      headers: [
        'Content-Type',
        'Authorization',
        'X-Requested-With',
        'Accept',
        'Origin',
        'Access-Control-Allow-Origin',
      ],
    },
    headers: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'http://localhost:1337', 'http://localhost:4321', 'http://localhost:3001'],
          'img-src': ["'self'", 'data:', 'blob:', 'http://localhost:1337'],
          'media-src': ["'self'", 'data:', 'blob:', 'http://localhost:1337'],
          upgradeInsecureRequests: null,
        },
      },
      crossOriginEmbedderPolicy: 'unsafe-none',
      crossOriginOpenerPolicy: 'same-origin-allow-popups',
      crossOriginResourcePolicy: 'cross-origin',
      referrerPolicy: 'no-referrer',
      strictTransportSecurity: env.bool('HSTS_ENABLED', false)
        ? {
            maxAge: 31536000,
            includeSubDomains: true,
            preload: true,
          }
        : undefined,
    },
    rateLimit: {
      enabled: true,
      windowMs: env.int('RATE_LIMIT_WINDOW_MS', 900000),
      max: env.int('RATE_LIMIT_MAX', 100),
    },
    jwt: {
      secret: env('JWT_SECRET', generateFallbackSecret()),
      expiresIn: env('JWT_EXPIRES_IN', '7d'),
    },
    admin: {
      jwt: {
        secret: env('ADMIN_JWT_SECRET', generateFallbackSecret()),
        expiresIn: env('ADMIN_JWT_EXPIRES_IN', '30d'),
      },
      auth: {
        secret: env('ADMIN_AUTH_SECRET', generateFallbackSecret()),
      },
    },
  };
};
