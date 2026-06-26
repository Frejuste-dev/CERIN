export default {
  // Disable telemetry
  telemetry: {
    enabled: false,
  },
  // Upload plugin configuration
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        destination: './public/uploads',
      },
      sizeLimit: 20 * 1024 * 1024, // 20MB
      breakpoints: {
        large: 1000,
        medium: 750,
        small: 500,
        tiny: 200,
      },
      mimeTypes: [
        'image/jpeg',
        'image/png',
        'image/webp',
        'image/gif',
        'application/pdf',
      ],
    },
  },
  // Users & Permissions plugin
  'users-permissions': {
    config: {
      jwtSecret: process.env.JWT_SECRET || 'change_me',
      jwtExpiration: '7d',
      resetPasswordJwtExpiration: '10m',
      emailConfirmationJwtExpiration: '7d',
      registration: {
        enabled: true,
        allowUserRegistration: false,
      },
      email: {
        enabled: false,
        provider: 'nodemailer',
        providerOptions: {
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          username: process.env.SMTP_USERNAME,
          password: process.env.SMTP_PASSWORD,
          secure: process.env.SMTP_SECURE === 'true',
        },
      },
    },
  },
};
