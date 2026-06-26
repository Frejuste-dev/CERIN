import { ArrowRight, Calendar, Tag } from "lucide-react";

const news = [
  {
    id: 1,
    title: "Portes Ouvertes 2025 : Rencontrez nos équipes pédagogiques",
    excerpt: "Le Groupe CERIN vous accueille pour une journée de découverte de nos formations, campus et méthodes pédagogiques innovantes.",
    date: "14 juin 2025",
    category: "Événement",
    categoryColor: "#2EA82A",
    image: "https://source.unsplash.com/800x500/?education,university",
    featured: true,
  },
  {
    id: 2,
    title: "Nos étudiants BTS remportent le Trophée National de la Vente",
    excerpt: "L'équipe du CERIN a décroché la première place au concours national organisé par la CCI, face à 48 établissements concurrents.",
    date: "28 mai 2025",
    category: "Réussite",
    categoryColor: "#F5C800",
    image: "https://source.unsplash.com/800x500/?education,university",
    featured: false,
  },
  {
    id: 3,
    title: "Nouveau partenariat avec InnoTech pour les stages en alternance",
    excerpt: "Le CERIN signe une convention avec le groupe InnoTech, ouvrant 30 nouvelles places de stage pour les étudiants en informatique.",
    date: "10 mai 2025",
    category: "Partenariat",
    categoryColor: "#1E8A1A",
    image: "https://source.unsplash.com/800x500/?education,university",
    featured: false,
  },
];

export function News() {
  const [featured, ...rest] = news;

  return (
    <section id="news" className="py-24" style={{ background: "#F8FBF8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-3" style={{ background: "#F0FAF0", color: "#2EA82A" }}>
              Actualités
            </div>
            <h2 className="text-gray-900" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700 }}>
              Dernières nouvelles du CERIN
            </h2>
          </div>
          <a href="#all-news" className="inline-flex items-center gap-2 text-sm font-semibold shrink-0" style={{ color: "#2EA82A" }}>
            Toutes les actualités <ArrowRight size={15} />
          </a>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Featured */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1" style={{ background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
            <div className="relative h-64 overflow-hidden">
              <img  src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"  onError={(e) => {
    e.currentTarget.src = '/images/placeholder.svg';
    e.currentTarget.onerror = null;
  }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.35))" }} />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold" style={{ background: featured.categoryColor, color: featured.categoryColor === "#F5C800" ? "#0F2010" : "white" }}>
                {featured.category}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                <Calendar size={12} />
                {featured.date}
              </div>
              <h3 className="text-gray-800 mb-3 leading-snug" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.2rem", fontWeight: 700 }}>
                {featured.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                {featured.excerpt}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "#2EA82A" }}>
                Lire l'article <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Secondary articles */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {rest.map((article) => (
              <div key={article.id} className="rounded-2xl overflow-hidden group cursor-pointer flex gap-4 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md" style={{ background: "white" }}>
                <div className="w-28 h-24 rounded-xl overflow-hidden shrink-0">
                  <img  src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"  onError={(e) => {
    e.currentTarget.src = '/images/placeholder.svg';
    e.currentTarget.onerror = null;
  }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Tag size={10} style={{ color: article.categoryColor }} />
                    <span className="text-xs font-semibold" style={{ color: article.categoryColor }}>{article.category}</span>
                  </div>
                  <h3 className="text-gray-800 leading-snug mb-2 line-clamp-2" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.875rem", fontWeight: 600 }}>
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar size={10} />
                    {article.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
