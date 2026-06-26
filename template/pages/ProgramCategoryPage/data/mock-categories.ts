import { ProgramCategory } from "../types/category.types";

export const MOCK_CATEGORIES: ProgramCategory[] = [
  {
    id: "gen",
    name: "Enseignement Général",
    slug: "enseignement-general",
    description: "Le Groupe CERI propose un encadrement d'excellence pour le cycle secondaire. Notre pédagogie est centrée sur l'épanouissement de l'élève et la préparation rigoureuse aux examens nationaux (BEPC et Baccalauréat). Avec des infrastructures modernes et un corps professoral dévoué, nous garantissons un environnement propice à la réussite académique.",
    shortDescription: "Formez les esprits de demain avec un parcours académique d'excellence du Collège au Lycée.",
    heroTitle: "Excellence Académique pour le Secondaire",
    heroSubtitle: "Préparez votre avenir avec un encadrement pédagogique de haut niveau et des résultats garantis.",
    seoTitle: "Enseignement Général : Collège et Lycée d'Excellence | Groupe CERI",
    seoDescription: "Découvrez notre parcours d'enseignement général. Un encadrement rigoureux pour réussir le BEPC et le Baccalauréat avec mention. Inscrivez-vous maintenant.",
    heroImage: "https://source.unsplash.com/1200x600/?university,campus,africa",
    programCount: 4,
    studentCount: 1200,
    employmentRate: "98% de réussite",
    partnerCompanies: 0,
    faq: [
      {
        question: "Quels sont les frais d'inscription pour le collège ?",
        answer: "Les frais d'inscription varient selon le niveau. Nous vous invitons à télécharger la brochure ou à contacter notre service administratif pour le détail des tarifs."
      },
      {
        question: "Proposez-vous un internat ?",
        answer: "Oui, le Groupe CERI dispose d'un internat moderne et sécurisé pour les élèves de l'enseignement général, offrant un cadre d'étude optimal."
      },
      {
        question: "Comment se fait le suivi des élèves ?",
        answer: "Nous utilisons une plateforme numérique permettant aux parents de suivre en temps réel les notes, l'assiduité et le comportement de leurs enfants."
      }
    ],
    featuredPrograms: ["gen-1", "gen-2", "gen-4"],
    testimonials: [
      {
        id: "t-gen-1",
        name: "Jean-Marc Kouadio",
        photo: "https://source.unsplash.com/100x100/?person,portrait",
        quote: "Grâce à la rigueur des professeurs du CERI, j'ai obtenu mon Bac C avec mention Très Bien.",
        position: "Étudiant en Ingénierie",
        company: "INPHB"
      }
    ]
  },
  {
    id: "tech",
    name: "Enseignement Technique",
    slug: "enseignement-technique",
    description: "L'enseignement technique au Groupe CERI est conçu pour transformer la passion en expertise. Nos ateliers équipés aux normes internationales permettent une immersion totale dans la pratique professionnelle. Nous formons des techniciens qualifiés, prêts à relever les défis industriels et technologiques de demain.",
    shortDescription: "Apprenez un métier concret avec nos formations techniques et professionnelles de pointe.",
    heroTitle: "Maîtrisez les Métiers de Demain",
    heroSubtitle: "Une formation technique orientée pratique pour une insertion professionnelle immédiate et réussie.",
    seoTitle: "Enseignement Technique et Professionnel | Formations BT et CAP | Groupe CERI",
    seoDescription: "Devenez un expert technique en Comptabilité, Électronique ou Mécanique. Formations pratiques certifiées pour une carrière solide. Découvrez nos programmes.",
    heroImage: "https://source.unsplash.com/1200x600/?university,campus,africa",
    programCount: 5,
    studentCount: 850,
    employmentRate: "89% d'insertion",
    partnerCompanies: 45,
    faq: [
      {
        question: "Quels diplômes peut-on obtenir en technique ?",
        answer: "Nous préparons aux Brevets de Techniciens (BT) et aux Certificats d'Aptitude Professionnelle (CAP) reconnus par l'État."
      },
      {
        question: "Y a-t-il des stages obligatoires ?",
        answer: "Oui, tous nos cursus techniques incluent des périodes de stage en entreprise pour valider les compétences pratiques."
      },
      {
        question: "L'équipement est-il fourni ?",
        answer: "Le Groupe CERI fournit l'accès à tous les outils et machines nécessaires dans nos ateliers spécialisés."
      }
    ],
    featuredPrograms: ["tech-1", "tech-3", "tech-4"],
    testimonials: [
      {
        id: "t-tech-1",
        name: "Awa Touré",
        photo: "https://source.unsplash.com/100x100/?person,portrait",
        quote: "Le BT Comptabilité m'a permis d'intégrer une grande entreprise dès la fin de mes études.",
        position: "Comptable Junior",
        company: "NSIA"
      }
    ]
  },
  {
    id: "sup",
    name: "Enseignement Supérieur",
    slug: "enseignement-superieur",
    description: "Le pôle Supérieur du Groupe CERI forme les cadres et leaders de l'économie numérique et commerciale. Nos cursus (BTS, Licence, Master) sont élaborés en étroite collaboration avec le monde professionnel. Nous mettons l'accent sur l'employabilité, l'entrepreneuriat et l'innovation pour garantir à nos étudiants un avenir brillant.",
    shortDescription: "Propulsez votre carrière avec des diplômes supérieurs reconnus et tournés vers l'entreprise.",
    heroTitle: "L'Université du Succès Professionnel",
    heroSubtitle: "Rejoignez l'élite et obtenez des diplômes prestigieux (BTS, Licence, Master) pour conquérir le marché.",
    seoTitle: "Enseignement Supérieur : BTS, Licence et Master à Abidjan | Groupe CERI",
    seoDescription: "Formations supérieures d'excellence : Informatique, Marketing, RH et Finance. Diplômes reconnus, corps professoral expert. Boostez votre employabilité.",
    heroImage: "https://source.unsplash.com/1200x600/?university,campus,africa",
    programCount: 6,
    studentCount: 1500,
    employmentRate: "95% d'employabilité",
    partnerCompanies: 120,
    faq: [
      {
        question: "Peut-on faire les cours en alternance ?",
        answer: "Oui, nos cycles Licence et Master proposent des options en alternance pour concilier théorie et expérience terrain."
      },
      {
        question: "Quels sont les critères d'admission en BTS ?",
        answer: "L'admission se fait sur dossier et entretien de motivation pour les titulaires d'un Baccalauréat."
      },
      {
        question: "Aidez-vous à trouver un emploi ?",
        answer: "Notre bureau d'insertion professionnelle accompagne les étudiants : ateliers CV, simulations d'entretiens et forums de recrutement."
      }
    ],
    featuredPrograms: ["sup-1", "sup-3", "sup-4"],
    testimonials: [
      {
        id: "t-sup-1",
        name: "Marc Koffi",
        photo: "https://source.unsplash.com/100x100/?person,portrait",
        quote: "Le Master au CERI a été le véritable tremplin pour mon poste de responsable marketing.",
        position: "Responsable Digital",
        company: "Orange CI"
      }
    ]
  }
];
