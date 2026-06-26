import { Router } from 'express';
import { z } from 'zod';
import rateLimit from 'express-rate-limit';

const router = Router();

const contactLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: { success: false, error: "Trop de requêtes, veuillez réessayer plus tard." },
  standardHeaders: true,
  legacyHeaders: false,
});

const contactSchema = z.object({
  prenom: z.string().min(2, "Le prénom est requis"),
  nom: z.string().min(2, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(8, "Le téléphone est requis"),
  subject: z.string().min(2, "Le sujet est requis"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

router.post('/', contactLimiter, (req: any, res: any, next: any) => {
  try {
    const validation = contactSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({
        success: false,
        error: "validation_error",
        details: validation.error.issues.map((e: any) => e.message),
      });
    }

    const data = validation.data;
    console.log(`[Contact] Nouveau message de ${data.prenom} ${data.nom} (${data.email}): ${data.subject}`);

    res.status(200).json({
      success: true,
      message: 'Message envoyé avec succès',
    });
  } catch (error) {
    next(error);
  }
});

export default router;
