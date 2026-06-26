import { NewsArticle } from "../types/news.types";

export const MOCK_NEWS: NewsArticle[] = [
  {
    id: 1,
    title: "Ouverture des admissions pour la rentrée 2026-2027",
    slug: "ouverture-admissions-2026-2027",
    category: "Admission",
    excerpt: "Le Groupe CERIN annonce officiellement l'ouverture de sa campagne d'admission pour la prochaine année académique. Découvrez les nouvelles filières et les modalités d'inscription.",
    content: `
      <p>Le Groupe CERIN est heureux d'annoncer que les inscriptions pour l'année académique 2026-2027 sont désormais ouvertes. Fidèle à sa mission d'excellence, notre établissement continue d'innover pour offrir aux étudiants ivoiriens et de la sous-région une formation de classe mondiale.</p>
      <h2>Nouvelles Filières et Innovations</h2>
      <p>Pour cette nouvelle rentrée, nous introduisons plusieurs innovations majeures, notamment dans le domaine du numérique et de la transition écologique. Nos cursus ont été revus en collaboration avec nos partenaires industriels pour garantir une employabilité maximale dès la sortie de l'école.</p>
      <p>Les candidats peuvent désormais postuler directement via notre plateforme en ligne, simplifiant ainsi le processus de dépôt de dossier. Nos équipes d'orientation sont également disponibles sur nos différents campus pour accompagner les futurs étudiants dans leur choix de carrière.</p>
      <blockquote>"L'éducation est l'arme la plus puissante que l'on puisse utiliser pour changer le monde. Au CERIN, nous forgeons les outils de ce changement."</blockquote>
      <h2>Modalités Pratiques</h2>
      <p>Les dossiers de candidature doivent être déposés avant le 31 août 2026. Les tests de niveau et les entretiens de motivation débuteront dès le mois de juillet. Nous encourageons les candidats à entamer leurs démarches le plus tôt possible, le nombre de places étant limité pour garantir un encadrement de qualité.</p>
    `,
    author: {
      name: "Jean-Marc Kouassi",
      role: "Directeur des Admissions",
      avatar: "https://source.unsplash.com/100x100/?person,portrait"
    },
    tags: ["Admission", "Rentrée 2026", "Inscription"],
    image: "https://source.unsplash.com/800x450/?africa,education,news",
    imageAlt: "Étudiants s'inscrivant au Groupe CERIN",
    readingTime: 5,
    isFeatured: true,
    publishedAt: "2026-05-15T10:00:00Z",
    seoTitle: "Admissions 2026-2027 Ouvertes | Groupe CERIN",
    seoDescription: "Inscrivez-vous dès maintenant pour la rentrée 2026-2027 au Groupe CERIN. Découvrez nos filières d'excellence et postulez en ligne."
  },
  {
    id: 2,
    title: "Félicitations à nos lauréats du BTS 2025",
    slug: "laureats-bts-2025",
    category: "Réussite",
    excerpt: "Avec un taux de réussite exceptionnel de 94%, nos étudiants de BTS ont une fois de plus démontré l'excellence de la formation au CERIN.",
    content: `
      <p>Les résultats du BTS 2025 sont tombés, et le Groupe CERIN célèbre une année historique. Avec un taux de réussite global de 94%, nos étudiants se placent parmi les meilleurs de Côte d'Ivoire. Cette performance est le fruit d'un travail acharné des étudiants et de l'encadrement dévoué de nos professeurs.</p>
      <h2>Une Réussite Collective</h2>
      <p>Particulièrement dans les filières Informatique et Gestion, nos étudiants ont brillé avec des mentions honorables. Ces résultats confirment la pertinence de notre approche pédagogique axée sur la pratique et l'accompagnement personnalisé.</p>
      <p>Nous tenons à féliciter chaque diplômé pour sa persévérance. Votre voyage ne fait que commencer, et nous sommes fiers de vous avoir comptés parmi nous.</p>
    `,
    author: {
      name: "Dr. Alimatou Traoré",
      role: "Doyenne des Études",
      avatar: "https://source.unsplash.com/100x100/?person,portrait"
    },
    tags: ["BTS", "Réussite", "Diplôme"],
    image: "https://source.unsplash.com/800x450/?africa,education,news",
    imageAlt: "Cérémonie de remise de diplômes",
    readingTime: 4,
    isFeatured: false,
    publishedAt: "2026-04-20T14:30:00Z",
    seoTitle: "Résultats BTS 2025 : 94% de réussite | Groupe CERIN",
    seoDescription: "Le Groupe CERIN célèbre l'excellence de ses étudiants aux examens du BTS 2025 avec un taux de réussite exceptionnel."
  },
  {
    id: 3,
    title: "Nouveau partenariat avec Orange Côte d'Ivoire",
    slug: "partenariat-orange-ci",
    category: "Partenariat",
    excerpt: "Le Groupe CERIN et Orange CI signent une convention stratégique pour favoriser l'insertion professionnelle des étudiants dans le secteur des télécoms.",
    content: `
      <p>Le Groupe CERIN est fier d'annoncer la signature d'un partenariat majeur avec Orange Côte d'Ivoire, leader des télécommunications dans la région. Cette alliance stratégique vise à réduire l'écart entre la formation académique et les besoins réels du marché du travail.</p>
      <h2>Des Stages et des Formations Certifiantes</h2>
      <p>Grâce à cet accord, nos étudiants bénéficieront d'un accès privilégié à des stages d'immersion et à des programmes de mentorat animés par des experts d'Orange. De plus, des modules de formation certifiants sur les technologies de pointe seront intégrés à nos cursus.</p>
      <p>Ce partenariat renforce notre engagement à offrir à nos étudiants les meilleures opportunités de carrière.</p>
    `,
    author: {
      name: "Moussa Diabaté",
      role: "Responsable Partenariats",
      avatar: "https://source.unsplash.com/100x100/?person,portrait"
    },
    tags: ["Partenariat", "Orange CI", "Télécoms"],
    image: "https://source.unsplash.com/800x450/?africa,education,news",
    imageAlt: "Signature de convention CERI et Orange",
    readingTime: 3,
    isFeatured: false,
    publishedAt: "2026-03-10T09:15:00Z",
    seoTitle: "Partenariat CERIN & Orange CI | Insertion Professionnelle",
    seoDescription: "Le Groupe CERIN et Orange Côte d'Ivoire s'unissent pour booster l'employabilité des étudiants dans le numérique."
  },
  {
    id: 4,
    title: "Journée Portes Ouvertes 2026 : Venez découvrir le Groupe CERIN",
    slug: "journee-portes-ouvertes-2026",
    category: "Événement",
    excerpt: "Rejoignez-nous le 12 juillet prochain pour explorer nos campus, rencontrer nos enseignants et découvrir votre futur parcours académique.",
    content: `
      <p>Le Groupe CERI vous invite à sa grande Journée Portes Ouvertes annuelle. C'est l'occasion idéale pour les bacheliers et les parents de découvrir nos infrastructures modernes et de discuter de vive voix avec notre corps professoral.</p>
      <h2>Au Programme</h2>
      <ul>
        <li>Visite guidée des laboratoires et des salles de classe</li>
        <li>Ateliers de démonstration technique</li>
        <li>Conférences sur les métiers d'avenir</li>
        <li>Rencontres avec les associations étudiantes</li>
      </ul>
      <p>Nous vous attendons nombreux pour construire ensemble votre avenir.</p>
    `,
    author: {
      name: "Sarah Touré",
      role: "Responsable Communication",
      avatar: "https://source.unsplash.com/100x100/?person,portrait"
    },
    tags: ["Événement", "JPO", "Orientation"],
    image: "https://source.unsplash.com/800x450/?africa,education,news",
    imageAlt: "Campus du Groupe CERI lors d'un événement",
    readingTime: 6,
    isFeatured: false,
    publishedAt: "2026-06-01T11:00:00Z",
    seoTitle: "Journée Portes Ouvertes 2026 | Groupe CERI",
    seoDescription: "Participez à la JPO du Groupe CERI le 12 juillet. Visites de campus, rencontres et ateliers d'orientation."
  },
  {
    id: 5,
    title: "Nos étudiants remportent le hackathon national",
    slug: "hackathon-national-victoire",
    category: "Réussite",
    excerpt: "L'équipe 'CERI-Dev' a décroché la première place lors de la compétition nationale d'innovation numérique avec leur projet de santé connectée.",
    content: `
      <p>C'est une immense fierté pour notre institution. Une équipe composée de quatre étudiants en troisième année d'Informatique a remporté le Hackathon National d'Innovation. Leur projet, une application de télémédecine adaptée aux zones rurales, a séduit le jury par son impact social et sa robustesse technique.</p>
      <p>Cette victoire témoigne de la qualité de la formation technique dispensée au CERI et de l'esprit d'innovation qui anime nos étudiants.</p>
    `,
    author: {
      name: "Dr. Alimatou Traoré",
      role: "Doyenne des Études",
      avatar: "https://source.unsplash.com/100x100/?person,portrait"
    },
    tags: ["Hackathon", "Innovation", "Santé"],
    image: "https://source.unsplash.com/800x450/?africa,education,news",
    imageAlt: "Étudiants travaillant sur un projet innovant",
    readingTime: 5,
    isFeatured: false,
    publishedAt: "2026-05-25T16:45:00Z",
    seoTitle: "Victoire Hackathon National | Étudiants CERI",
    seoDescription: "Le Groupe CERI célèbre la victoire de ses étudiants au Hackathon National d'Innovation numérique."
  },
  {
    id: 6,
    title: "Modernisation de nos laboratoires de réseaux",
    slug: "modernisation-laboratoires-reseaux",
    category: "Actualité",
    excerpt: "De nouveaux équipements de dernière génération ont été installés pour offrir aux étudiants un environnement d'apprentissage à la pointe de la technologie.",
    content: `
      <p>Le Groupe CERI continue d'investir dans ses infrastructures. Nos laboratoires de réseaux et télécoms viennent de bénéficier d'une mise à jour majeure avec l'acquisition de serveurs et de routeurs Cisco de dernière génération.</p>
      <p>Ces investissements garantissent que nos étudiants travaillent sur le même matériel que celui utilisé dans les plus grandes entreprises mondiales.</p>
    `,
    author: {
      name: "Jean-Marc Kouassi",
      role: "Directeur Technique",
      avatar: "https://source.unsplash.com/100x100/?person,portrait"
    },
    tags: ["Infrastructures", "Réseaux", "Technologie"],
    image: "https://source.unsplash.com/800x450/?africa,education,news",
    imageAlt: "Serveurs informatiques dans un laboratoire",
    readingTime: 4,
    isFeatured: false,
    publishedAt: "2026-02-15T13:00:00Z",
    seoTitle: "Nouveaux Labos Réseaux | Groupe CERI",
    seoDescription: "Découvrez les nouveaux laboratoires de réseaux du Groupe CERI, équipés des dernières technologies Cisco."
  },
  {
    id: 7,
    title: "Séminaire sur la Cybersécurité : Enjeux et Perspectives",
    slug: "seminaire-cybersecurite-2026",
    category: "Événement",
    excerpt: "Des experts internationaux se sont réunis au CERI pour débattre des défis de la sécurité numérique en Afrique de l'Ouest.",
    content: `
      <p>Le Groupe CERI a accueilli un séminaire de haut niveau sur la cybersécurité. Pendant deux jours, des experts venus d'Europe et d'Afrique ont partagé leurs analyses sur les menaces croissantes dans le cyberespace africain.</p>
      <p>L'événement a permis à nos étudiants en Master Sécurité de confronter leurs connaissances théoriques aux réalités du terrain.</p>
    `,
    author: {
      name: "Sarah Touré",
      role: "Responsable Communication",
      avatar: "https://source.unsplash.com/100x100/?person,portrait"
    },
    tags: ["Cybersécurité", "Séminaire", "Conférence"],
    image: "https://source.unsplash.com/800x450/?africa,education,news",
    imageAlt: "Conférence sur la cybersécurité",
    readingTime: 7,
    isFeatured: false,
    publishedAt: "2026-05-10T15:00:00Z",
    seoTitle: "Séminaire Cybersécurité | Groupe CERI",
    seoDescription: "Le Groupe CERI organise un séminaire international sur les enjeux de la cybersécurité en Afrique."
  },
  {
    id: 8,
    title: "Lancement du programme 'CERI-Entrepreneur'",
    slug: "lancement-ceri-entrepreneur",
    category: "Actualité",
    excerpt: "Un nouvel incubateur interne voit le jour pour accompagner les projets de création d'entreprise de nos étudiants les plus ambitieux.",
    content: `
      <p>Parce que nous croyons que nos étudiants ont le potentiel de devenir les créateurs d'emplois de demain, nous lançons 'CERI-Entrepreneur'. Cet incubateur fournira un espace de travail, du mentorat et un accès à des financements pour les startups étudiantes.</p>
      <p>Le premier appel à projets sera lancé en septembre prochain.</p>
    `,
    author: {
      name: "Moussa Diabaté",
      role: "Responsable Partenariats",
      avatar: "https://source.unsplash.com/100x100/?person,portrait"
    },
    tags: ["Entrepreneuriat", "Incubateur", "Startup"],
    image: "https://source.unsplash.com/800x450/?africa,education,news",
    imageAlt: "Étudiants discutant de business plan",
    readingTime: 5,
    isFeatured: false,
    publishedAt: "2026-01-20T10:00:00Z",
    seoTitle: "Incubateur CERI-Entrepreneur | Création d'Entreprise",
    seoDescription: "Le Groupe CERI lance son propre incubateur pour accompagner les étudiants entrepreneurs."
  },
  {
    id: 9,
    title: "Conférence de presse : Bilan et Perspectives 2026",
    slug: "conference-presse-bilan-2026",
    category: "Événement",
    excerpt: "La direction du Groupe CERI a présenté les résultats de l'année écoulée et dévoilé les grands axes de développement pour les cinq prochaines années.",
    content: `
      <p>Lors d'une conférence de presse tenue sur le campus du Plateau, la direction du Groupe CERI a dressé un bilan positif de l'année académique. Avec une croissance continue de l'effectif et des partenariats internationaux renforcés, l'institution s'affirme comme un pilier de l'enseignement supérieur privé.</p>
      <p>Parmi les projets phares, citons la construction d'un nouveau campus intelligent et le lancement de programmes de double diplômation.</p>
    `,
    author: {
      name: "Jean-Marc Kouassi",
      role: "Directeur Général",
      avatar: "https://source.unsplash.com/100x100/?person,portrait"
    },
    tags: ["Bilan", "Stratégie", "Développement"],
    image: "https://source.unsplash.com/800x450/?africa,education,news",
    imageAlt: "Direction du Groupe CERI devant la presse",
    readingTime: 8,
    isFeatured: false,
    publishedAt: "2026-06-10T14:00:00Z",
    seoTitle: "Bilan CERI 2026 | Perspectives et Développement",
    seoDescription: "Découvrez le bilan stratégique du Groupe CERI et ses projets de développement pour les années à venir."
  }
];
