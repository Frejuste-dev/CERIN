import 'dotenv/config';
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import { sequelize, ensureDatabaseExists } from "./database.js";
import candidaturesRoutes from "./routes/candidatures.routes.js";
import contactRoutes from "./routes/contact.routes.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(helmet());
app.use(cors());
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
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('[database]: Unable to connect to the database:', error);
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port} (without database connection)`);
    });
  });
