import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database.js';

export class Candidature extends Model {
  public candidatureID!: string;
  public poste!: string;
  public nom!: string;
  public prenom!: string;
  public date_naissance!: Date;
  public lieu_naissance!: string;
  public diplome!: string;
  public cv_path!: string;
  public demande_path!: string;
  public attestation_path!: string;
  public cni_path!: string;
  public extrait_path!: string;
  public readonly created_at!: Date;
}

Candidature.init(
  {
    candidatureID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    poste: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_naissance: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    lieu_naissance: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    diplome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cv_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    demande_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    attestation_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cni_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    extrait_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'candidatures',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false,
  }
);
