export const navLinks = [
  { href: "/", num: "01", label: "Accueil" },
  { href: "/a-propos", num: "02", label: "À propos" },
  { href: "/livres", num: "03", label: "Livres" },
  { href: "/reflexions", num: "04", label: "Réflexions" },
  { href: "/publications", num: "05", label: "Publications" },
  { href: "/contact", num: "06", label: "Contact" },
];

export const footerLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/livres", label: "Livres" },
  { href: "/reflexions", label: "Réflexions" },
  { href: "/contact", label: "Contact" },
];

export const concepts = [
  { num: "01", title: "L'Éducation", text: "Une base essentielle pour construire l'avenir" },
  { num: "02", title: "La Société", text: "Former des citoyens responsables, conscients et engagés" },
  { num: "03", title: "Le Développement", text: "Créer les conditions nécessaires au progrès humain" },
];

export type Book = {
  slug: string;
  title: string;
  summary: string;
  cover?: string;
  body?: string[];
};

export const books: Book[] = [
  {
    slug: "une-education-pour-le-progres-et-le-developpement",
    title: "Une Éducation Pour Le Progrès et Le Développement",
    summary: "Une réflexion sur l'importance d'une éducation adaptée au progrès humain et au développement d'une nation.",
    cover: "/images/une-education-pour-le-progres.png",
    body: [
      "Dans cet ouvrage, Paul Gonave Tirogène présente une réflexion approfondie sur le rôle de l'éducation dans la construction d'une société meilleure.",
      "L'auteur démontre que le progrès et le développement commencent par un système éducatif capable de former des citoyens instruits, responsables, créatifs et conscients de leur rôle dans la société.",
      "Ce livre propose une vision où l'éducation devient un véritable moteur de transformation sociale, économique et humaine.",
    ],
  },
  {
    slug: "le-sacre-bon-sens",
    title: "Le Sacré Bon Sens",
    summary: "Une réflexion sur la responsabilité des dirigeants, la gouvernance, la morale et les conditions nécessaires au bien-être humain.",
  },
  {
    slug: "une-nouvelle-education-pour-une-nouvelle-societe",
    title: "Une Nouvelle Éducation Pour Une Nouvelle Société",
    summary: "Une vision d'une nouvelle société construite grâce à la connaissance, l'histoire, la culture et une éducation tournée vers l'avenir.",
  },
];

export const reflections = [
  {
    slug: "l-importance-de-l-education",
    title: "L'importance de l'éducation",
    summary: "Pourquoi une éducation de qualité représente la première étape vers une société plus juste et plus développée.",
  },
  {
    slug: "le-role-de-l-enseignant",
    title: "Le rôle de l'enseignant",
    summary: "L'enseignant comme modèle, guide et acteur essentiel du progrès humain.",
  },
  {
    slug: "former-les-generations-futures",
    title: "Former les générations futures",
    summary: "Développer la connaissance, la conscience et les valeurs nécessaires pour construire demain.",
  },
];

export const quotes = [
  "Après le pain, l'éducation est la meilleure chose qu'un parent doit donner à ses enfants.",
  "On doit tout faire dans le sens du progrès et du développement.",
  "Chaque fois qu'on enseigne à autrui, on enseigne à soi-même.",
];

export const contact = {
  email: "contact@paulgonavetirogene.com",
  phone: "+509 00 00 0000",
  social: "Facebook · Instagram · LinkedIn",
};
