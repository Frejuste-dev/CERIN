import { Program } from "../types/program.types";

export const MOCK_PROGRAM_BTS_INFO: Program = {
  id: "bts-info-001",
  title: "BTS Informatique - Développeur d'Applications",
  slug: "bts-informatique",
  category: "enseignement-superieur",
  programCode: "BTS INFO",
  diploma: "BTS",
  level: "Baccalauréat (Toutes séries)",
  duration: "2 ans",
  studyMode: "Présentiel (Cours du jour)",
  campus: "Plateau, Abidjan",
  description: "Le BTS Informatique forme des techniciens supérieurs capables de concevoir, développer et maintenir des solutions informatiques. La formation met l'accent sur les technologies web, mobiles et les systèmes de gestion de base de données.",
  objectives: [
    "Maîtriser les langages de programmation modernes (Python, JS, Java)",
    "Concevoir et modéliser des bases de données relationnelles",
    "Développer des applications web et mobiles multi-plateformes",
    "Assurer la maintenance et l'évolution des parcs applicatifs",
  ],
  learningOutcomes: [
    "Développement d'interfaces utilisateurs ergonomiques",
    "Mise en œuvre de services backend sécurisés",
    "Gestion de projets informatiques en mode Agile",
    "Configuration et administration de serveurs web",
  ],
  curriculum: [
    {
      year: 1,
      semesters: [
        {
          number: 1,
          subjects: [
            { name: "Algorithmique et Logique", credits: 6, hours: 60 },
            { name: "Architecture des Ordinateurs", credits: 4, hours: 45 },
            { name: "Mathématiques Générales", credits: 4, hours: 40 },
            { name: "Anglais Technique I", credits: 2, hours: 30 },
            { name: "Économie et Organisation", credits: 4, hours: 40 },
          ],
        },
        {
          number: 2,
          subjects: [
            { name: "Programmation Orientée Objet", credits: 6, hours: 75 },
            { name: "Bases de Données SQL", credits: 5, hours: 60 },
            { name: "Réseaux Locaux", credits: 4, hours: 45 },
            { name: "Comptabilité de Gestion", credits: 3, hours: 40 },
            { name: "Droit Informatique", credits: 2, hours: 30 },
          ],
        },
      ],
    },
    {
      year: 2,
      semesters: [
        {
          number: 3,
          subjects: [
            { name: "Développement Web Full-stack", credits: 8, hours: 90 },
            { name: "Développement Mobile (Android/iOS)", credits: 6, hours: 75 },
            { name: "Sécurité des Applications", credits: 4, hours: 45 },
            { name: "Gestion de Projet Agile", credits: 2, hours: 30 },
          ],
        },
        {
          number: 4,
          subjects: [
            { name: "Projet de Fin de Cycle", credits: 10, hours: 120 },
            { name: "Cloud Computing", credits: 4, hours: 45 },
            { name: "Intelligence Artificielle de Base", credits: 4, hours: 45 },
            { name: "Stage en Entreprise (12 semaines)", credits: 2, hours: 0 },
          ],
        },
      ],
    },
  ],
  careerProspects: [
    {
      title: "Développeur Web & Mobile",
      description: "Conception et réalisation d'applications web et d'applications mobiles natives ou hybrides.",
      salaryRange: "350.000 - 650.000 FCFA",
      employabilityLevel: "Très Élevé",
      industries: ["Startups", "Agences Digitales", "Banques"],
    },
    {
      title: "Analyste Programmeur",
      description: "Analyse des besoins des utilisateurs et développement de solutions logicielles sur mesure.",
      salaryRange: "400.000 - 750.000 FCFA",
      employabilityLevel: "Très Élevé",
      industries: ["Sociétés de Services (SSII)", "Grandes Entreprises"],
    },
    {
      title: "Administrateur de Bases de Données",
      description: "Gestion, maintenance et sécurisation des données stratégiques de l'entreprise.",
      salaryRange: "450.000 - 850.000 FCFA",
      employabilityLevel: "Élevé",
      industries: ["Télécoms", "Administrations Publiques"],
    },
    {
      title: "Consultant IT Junior",
      description: "Accompagnement des entreprises dans leur transformation digitale et choix technologiques.",
      salaryRange: "400.000 - 700.000 FCFA",
      employabilityLevel: "Moyen",
      industries: ["Cabinets de Conseil", "Freelance"],
    },
    {
      title: "Technicien Support Applicatif",
      description: "Assistance aux utilisateurs et correction des bugs de niveau 1 et 2.",
      salaryRange: "250.000 - 450.000 FCFA",
      employabilityLevel: "Élevé",
      industries: ["Toutes Industries"],
    },
  ],
  admissionRequirements: [
    "Être titulaire d'un Baccalauréat (toutes séries)",
    "Passer l'entretien de motivation",
    "Tests de niveau en logique et mathématiques",
  ],
  requiredDocuments: [
    "Copie de la CNI ou passeport",
    "Copie légalisée du diplôme du Bac",
    "Relevés de notes de la terminale",
    "4 photos d'identité couleur",
    "Extrait de naissance original",
  ],
  tuition: {
    registration: "150.000 FCFA",
    tuition: "850.000 FCFA / an",
    installmentPlan: "Paiement en 6 mensualités possible",
  },
  paymentOptions: [
    "Paiement comptant (5% de remise)",
    "Paiement par chèque ou virement",
    "Mobile Money (Orange, MTN, Moov)",
  ],
  employmentRate: "92%",
  availableSeats: 35,
  applicationDeadline: "31 Août 2026",
  internshipIncluded: true,
  companiesPartners: ["Orange CI", "MTN Côte d'Ivoire", "CIE", "NSIA", "SNDI"],
  relatedPrograms: [
    {
      title: "Bachelor Informatique",
      slug: "bachelor-informatique",
      category: "enseignement-superieur",
      diploma: "Bachelor",
      image: "https://source.unsplash.com/800x500/?education,university",
    },
    {
      title: "BTS Comptabilité",
      slug: "bts-comptabilite",
      category: "enseignement-superieur",
      diploma: "BTS",
      image: "https://source.unsplash.com/800x500/?education,university",
    },
    {
      title: "Master Systèmes d'Information",
      slug: "master-si",
      category: "enseignement-superieur",
      diploma: "Master",
      image: "https://source.unsplash.com/800x500/?education,university",
    },
  ],
  testimonials: [
    {
      name: "Amadou Koné",
      role: "Promotion 2022",
      company: "Orange CI",
      quote: "Grâce au BTS Informatique du Groupe CERI, j'ai acquis des bases solides en programmation. J'ai été recruté dès mon stage de fin d'études chez Orange.",
      avatar: "https://source.unsplash.com/100x100/?person,portrait",
    },
    {
      name: "Marie-Claire Yao",
      role: "Promotion 2023",
      company: "Digital Africa",
      quote: "Les projets pratiques m'ont permis de me sentir prête pour le marché du travail. L'ambiance au campus est excellente et les professeurs très disponibles.",
      avatar: "https://source.unsplash.com/100x100/?person,portrait",
    },
    {
      name: "Jean-Philippe Kouassi",
      role: "Promotion 2021",
      company: "Freelance",
      quote: "Le CERI ne se contente pas de nous enseigner le code, on apprend aussi la gestion de projet et l'entrepreneuriat. Aujourd'hui, je gère ma propre agence web.",
      avatar: "https://source.unsplash.com/100x100/?person,portrait",
    },
  ],
  faq: [
    {
      question: "Le diplôme est-il reconnu par l'État ?",
      answer: "Oui, tous nos BTS sont agréés et reconnus par le Ministère de l'Enseignement Supérieur et de la Recherche Scientifique de Côte d'Ivoire.",
    },
    {
      question: "Peut-on payer la scolarité par mensualités ?",
      answer: "Absolument. Nous proposons un plan de paiement échelonné sur 6 mois après le règlement des frais d'inscription.",
    },
    {
      question: "Aidez-vous les étudiants à trouver un stage ?",
      answer: "Oui, notre service carrière accompagne les étudiants dans la rédaction de leur CV et les met en relation avec notre réseau d'entreprises partenaires.",
    },
    {
      question: "Quels sont les débouchés après ce BTS ?",
      answer: "Vous pouvez devenir développeur web, mobile, analyste programmeur ou poursuivre vos études en Bachelor ou Licence Pro.",
    },
  ],
  brochurePdf: "/brochures/bts-informatique.pdf",
  heroImage: "https://source.unsplash.com/1200x600/?university,campus,africa",
  seoTitle: "BTS Informatique à Abidjan | Groupe CERI",
  seoDescription: "Devenez développeur d'applications avec le BTS Informatique du Groupe CERI. Formation d'excellence à Abidjan, 92% d'insertion professionnelle.",
  publishedAt: new Date().toISOString(),
};

export const MOCK_PROGRAMS: Record<string, Program> = {
  [MOCK_PROGRAM_BTS_INFO.slug]: MOCK_PROGRAM_BTS_INFO,
};
