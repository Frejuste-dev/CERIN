import type { Request, Response, NextFunction } from 'express';

/**
 * adminAuth — Static API Key middleware
 *
 * Protects admin-only routes (e.g. GET /api/candidatures).
 * Usage: router.get('/', adminAuth, handler)
 *
 * Request must include:
 *   Authorization: Bearer <ADMIN_API_KEY>
 *
 * Replace with JWT verification in Sprint A4
 * when the admin dashboard is implemented.
 */
export function adminAuth(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({
      error: 'Unauthorized',
      message: 'Authorization header required. Use: Authorization: Bearer <key>',
    });
    return;
  }

  const token = authHeader.split(' ')[1];
  const validKey = process.env.ADMIN_API_KEY;

  if (!validKey) {
    console.error(
      '[adminAuth] ADMIN_API_KEY is not set in environment variables. ' +
      'Set it in server/.env before starting the server.'
    );
    res.status(500).json({
      error: 'Server configuration error',
      message: 'Admin authentication is not properly configured.',
    });
    return;
  }

  if (token !== validKey) {
    res.status(403).json({
      error: 'Forbidden',
      message: 'Invalid API key.',
    });
    return;
  }

  next();
}
