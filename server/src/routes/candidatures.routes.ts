import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { z } from 'zod';
import rateLimit from 'express-rate-limit';
import { Candidature } from '../models/Candidature.js';
import { adminAuth } from '../middleware/adminAuth.js';

const router = Router();

// Ensure uploads directory exists
const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Rate Limiting: 10 requests per minute per IP
const candidatureLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // Limit each IP to 10 requests per `window`
  message: { success: false, error: "Trop de requêtes, veuillez réessayer plus tard." },
  standardHeaders: true,
  legacyHeaders: false,
});

// Zod Schema Validation
const candidatureSchema = z.object({
  poste: z.enum(["teacher_permanent", "teacher_temporary", "enseignement_general", "technique", "superieur_bts", "superieur_licence", "superieur_master"]),
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  prenom: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  date_naissance: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Date de naissance invalide",
  }),
  lieu_naissance: z.string().min(1, "Le lieu de naissance est requis"),
  diplome: z.string().min(1, "Le diplôme est requis"),
});

// Configure Multer storage & security
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit per file
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Type de fichier non autorisé. Seuls PDF, JPG et PNG sont acceptés.'));
    }
  }
});

// Configure expected files
const uploadFields = upload.fields([
  { name: 'cv', maxCount: 1 },
  { name: 'demande', maxCount: 1 },
  { name: 'attestation', maxCount: 1 },
  { name: 'cni', maxCount: 1 },
  { name: 'extrait', maxCount: 1 },
]);

// Route Handler
router.post('/', candidatureLimiter, uploadFields, async (req: any, res: any, next: any) => {
  try {
    const files = req.files as { [fieldname: string]: Express.Multer.File[] } | undefined;

    // Zod Validation
    const validationResult = candidatureSchema.safeParse(req.body);
    if (!validationResult.success) {
      console.warn(`[Validation Failed] POST /api/candidatures: ${validationResult.error.issues.map((e: any) => e.message).join(', ')}`);
      return res.status(400).json({ 
        success: false, 
        error: "validation_error", 
        details: validationResult.error.issues.map((e: any) => e.message) 
      });
    }

    const { poste, nom, prenom, date_naissance, lieu_naissance, diplome } = validationResult.data;

    // Check all required files are present
    if (!files?.cv || !files?.demande || !files?.attestation || !files?.cni || !files?.extrait) {
      return res.status(400).json({ success: false, error: "Tous les documents obligatoires n'ont pas été fournis." });
    }

    // Save to database
    const newCandidature = await Candidature.create({
      poste,
      nom,
      prenom,
      date_naissance,
      lieu_naissance,
      diplome,
      cv_path: files.cv[0].path,
      demande_path: files.demande[0].path,
      attestation_path: files.attestation[0].path,
      cni_path: files.cni[0].path,
      extrait_path: files.extrait[0].path,
    });

    // Logging Success
    console.log(`[Success] Nouvelle candidature reçue (${poste}) par ${prenom} ${nom}. Fichiers: ${Object.keys(files).join(', ')}`);

    // Standardized Success Response
    res.status(201).json({
      success: true,
      message: 'Candidature enregistrée avec succès',
      candidatureId: newCandidature.candidatureID,
    });
  } catch (error) {
    // Pass unexpected errors to the global error handler middleware
    next(error);
  }
});


// ─── GET /api/candidatures — List all (admin only) ──────────────────────────
router.get('/', adminAuth, async (req: any, res: any, next: any) => {
  try {
    const candidatures = await Candidature.findAll({
      order: [['createdAt', 'DESC']],
      // Exclude file paths from the response for extra safety
      attributes: { exclude: ['cv_path', 'demande_path', 'attestation_path', 'cni_path', 'extrait_path'] },
    });
    res.status(200).json({ success: true, data: candidatures });
  } catch (error) {
    next(error);
  }
});

// ─── GET /api/candidatures/:id — Get one by ID (admin only) ─────────────────
router.get('/:id', adminAuth, async (req: any, res: any, next: any) => {
  try {
    const candidature = await Candidature.findByPk(req.params.id, {
      attributes: { exclude: ['cv_path', 'demande_path', 'attestation_path', 'cni_path', 'extrait_path'] },
    });
    if (!candidature) {
      return res.status(404).json({ success: false, error: 'Candidature not found' });
    }
    res.status(200).json({ success: true, data: candidature });
  } catch (error) {
    next(error);
  }
});

export default router;
