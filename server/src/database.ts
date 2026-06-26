import { Sequelize } from 'sequelize';
import 'dotenv/config';

// Vérification de la présence des variables d'environnement au démarrage
if (!process.env.DB_NAME || !process.env.DB_USER) {
  console.warn('[database]: AVERTISSEMENT - Variables d\'environnement DB_NAME ou DB_USER manquantes.');
  console.warn('[database]: Utilisation des valeurs de secours (fallback) pour le développement local.');
}

const dbName = process.env.DB_NAME || 'cerin_db';
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || '';
const dbHost = process.env.DB_HOST || 'localhost';

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'mysql',
  logging: false,
});

export async function ensureDatabaseExists(): Promise<void> {
  const adminConnection = new Sequelize('mysql', dbUser, dbPassword, {
    host: dbHost,
    dialect: 'mysql',
    logging: false,
  });

  try {
    await adminConnection.authenticate();
    await adminConnection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
    console.log(`[database]: Base de données '${dbName}' vérifiée/créée.`);
  } catch (error) {
    console.error('[database]: Impossible de créer la base de données:', error);
    throw error;
  } finally {
    await adminConnection.close();
  }
}
