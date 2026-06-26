import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Calendar, Tag, ChevronLeft, ChevronRight, Search, ArrowRight } from "lucide-react";
import { PageHero } from "../components/shared/PageHero";

const G = "#7AC943";
const Y = "#F4D000";
const BG = "#F5F6F8";

const allArticles = [
  { id: 1, title: "Portes Ouvertes 2025 : Venez découvrir nos formations", excerpt: "Le Groupe CERIN vous accueille pour une journée de découverte de nos campus, formations et méthodes pédagogiques innovantes. Rencontrez nos équipes et futurs camarades.", date: "14 juin 2025", cat: "Événement", img: "https://source.unsplash.com/800x500/?education,university", featured: true },
  { id: 2, title: "Nos étudiants BTS remportent le Trophée National de la Vente", excerpt: "L'équipe du CERIN a décroché la première place au concours national organisé par la CCI, face à 48 établissements.", date: "28 mai 2025", cat: "Réussite", img: "https://source.unsplash.com/800x500/?education,university", featured: false },
  { id: 3, title: "Nouveau partenariat avec InnoTech pour l'alternance", excerpt: "Le CERIN signe une convention avec InnoTech, ouvrant 30 nouvelles places de stage pour les étudiants en informatique.", date: "10 mai 2025", cat: "Partenariat", img: "https://source.unsplash.com/800x500/?education,university", featured: false },
  { id: 4, title: "Résultats BAC 2025 : 94% de réussite au Groupe CERIN", excerpt: "Fierté pour toute la communauté CERIN ! Nos lycéens ont obtenu un taux de réussite exceptionnel au baccalauréat.", date: "2 mai 2025", cat: "Réussite", img: "https://source.unsplash.com/800x500/?education,university", featured: false },
  { id: 5, title: "Conférence entrepreneuriat jeunesse : innovation et avenir", excerpt: "Entrepreneurs, startuppers et mentors ont inspiré nos étudiants lors d'une journée riche en témoignages et ateliers.", date: "18 avril 2025", cat: "Événement", img: "https://source.unsplash.com/800x500/?education,university", featured: false },
  { id: 6, title: "Lancement du nouveau programme Master Systèmes d'Information", excerpt: "Le CERIN annonce l'ouverture d'un Master SI pour la rentrée 2025-2026, en partenariat avec des entreprises tech leaders.", date: "5 avril 2025", cat: "Formation", img: "https://source.unsplash.com/800x500/?education,university", featured: false },
  { id: 7, title: "Tournoi sportif inter-lycées : CERIN champion !", excerpt: "Notre équipe de football a remporté le tournoi régional inter-lycées pour la 3ème année consécutive.", date: "20 mars 2025", cat: "Sport", img: "https://source.unsplash.com/800x500/?education,university", featured: false },
];

const cats = ["Tous", "Événement", "Réussite", "Partenariat", "Formation", "Sport"];
const catColors: Record<string, string> = { Événement: G, Réussite: Y, Partenariat: G, Formation: "#0B0B0B", Sport: Y };

export function NewsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [filter, setFilter] = useState("Tous");
  const [page, setPage] = useState(1);
  const PER_PAGE = 6;

  const filtered = filter === "Tous" ? allArticles : allArticles.filter((a) => a.cat === filter);
  const featured = filtered[0];
  const rest = filtered.slice(1);
  const paginated = rest.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const totalPages = Math.ceil(rest.length / PER_PAGE);

  return (
    <>
      <PageHero
        title="Actualités & Événements"
        subtitle="Suivez toute la vie du Groupe CERIN : réussites, partenariats, événements et annonces."
        breadcrumbs={[{ label: "Actualités" }]}
        accent={G}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters + Search */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-between items-center">
            <div className="flex flex-wrap gap-2">
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => { setFilter(c); setPage(1); }}
                  className="px-4 py-2 rounded-full text-xs font-semibold transition-all"
                  style={filter === c ? { background: G, color: "white" } : { background: BG, color: "#6B7280" }}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un article…"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border text-sm outline-none"
                style={{ border: "1.5px solid #E5E7EB", fontFamily: "'Inter', sans-serif" }}
                onFocus={(e) => (e.target.style.borderColor = G)}
                onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
              />
            </div>
          </div>

          {/* Featured */}
          {featured && (
            <div className="group rounded-3xl overflow-hidden mb-10 cursor-pointer" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.10)" }}>
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={featured.img}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = '/images/placeholder.svg';
                      e.currentTarget.onerror = null;
                    }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent, rgba(0,0,0,0.05))" }} />
                </div>
                <div className="p-8 lg:p-12 bg-white flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: catColors[featured.cat] || G, color: catColors[featured.cat] === Y ? "#0B0B0B" : "white" }}>{featured.cat}</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1"><Calendar size={11} /> {featured.date}</span>
                  </div>
                  <h2 className="text-gray-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 800 }}>{featured.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>{featured.excerpt}</p>
                  <a href="#" className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: G }}>
                    Lire l'article complet <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {paginated.map((a) => (
              <div key={a.id} className="group bg-white rounded-2xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = '/images/placeholder.svg';
                      e.currentTarget.onerror = null;
                    }}
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: catColors[a.cat] || G, color: catColors[a.cat] === Y ? "#0B0B0B" : "white" }}>{a.cat}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2"><Calendar size={11} /> {a.date}</div>
                  <h3 className="text-gray-800 font-bold mb-2 leading-snug" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}>{a.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>{a.excerpt}</p>
                  <a href="#" className="text-xs font-semibold flex items-center gap-1" style={{ color: G }}>Lire <ArrowRight size={11} /></a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2">
              <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1} className="w-10 h-10 rounded-xl flex items-center justify-center border disabled:opacity-40 transition-all hover:border-green-400" style={{ border: "1.5px solid #E5E7EB" }}>
                <ChevronLeft size={16} />
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className="w-10 h-10 rounded-xl text-sm font-bold transition-all"
                  style={page === i + 1 ? { background: G, color: "white" } : { background: BG, color: "#6B7280" }}
                >
                  {i + 1}
                </button>
              ))}
              <button onClick={() => setPage(Math.min(totalPages, page + 1))} disabled={page === totalPages} className="w-10 h-10 rounded-xl flex items-center justify-center border disabled:opacity-40 transition-all hover:border-green-400" style={{ border: "1.5px solid #E5E7EB" }}>
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
