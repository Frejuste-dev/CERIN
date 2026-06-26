import 'dotenv/config';
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import { sequelize, ensureDatabaseExists } from "./database.js";
import candidaturesRoutes from "./routes/candidatures.routes.js";
import contactRoutes from "./routes/contact.routes.js";

const app = express();
const PORT = parseInt(process.env.PORT || '8080');

// CORS configuration
const allowedOrigins = [
  ...(process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : []),
  'http://localhost:4321',
  'http://localhost:3000',
  'http://localhost:3001',
];

app.use(helmet());
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
app.use(express.json());

// Logging middleware global (optionnel mais utile)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Serve uploaded files (optional but good practice)
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running smoothly" });
});

// Use candidatures routes
app.use("/api/candidatures", candidaturesRoutes);

// Use contact routes
app.use("/api/contact", contactRoutes);

// Global Error Handler Middleware (Centralized error handling)
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(`[Error] ${new Date().toISOString()}:`, err.message || err);

  // Catch Multer errors or specific validation errors
  if (err.name === 'MulterError') {
    return res.status(400).json({ success: false, error: `Erreur de fichier: ${err.message}` });
  }

  // Catch Custom File Type errors
  if (err.message === 'Type de fichier non autorisé. Seuls PDF, JPG et PNG sont acceptés.') {
    return res.status(400).json({ success: false, error: err.message });
  }

  // Default internal server error (normalize output, hide stack trace)
  res.status(500).json({
    success: false,
    error: "Erreur interne du serveur. Veuillez réessayer plus tard.",
  });
});

// Sync database and start server
ensureDatabaseExists()
  .then(() => sequelize.sync())
  .then(() => {
    console.log('[database]: Database connected and synchronized.');
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`[server]: Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('[database]: Unable to connect to the database:', error);
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`[server]: Server running on port ${PORT} (without database connection)`);
    });
  });
