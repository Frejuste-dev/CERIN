import { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, Search, ArrowRight } from "lucide-react";
import type { News } from "../../lib/api/types";

export interface NewsSectionProps {
  articles?: News[];
}

const cats = ["Tous", "Événement", "Réussite", "Partenariat", "Formation", "Sport"];

const catColors: Record<string, string> = {
  Événement: "#7AC943",
  Réussite: "#F4D000",
  Partenariat: "#7AC943",
  Formation: "#0B0B0B",
  Sport: "#F4D000",
};

export function NewsSection({ articles = [] }: NewsSectionProps) {
  const G = "#7AC943";
  const BG = "#F5F6F8";

  const [filter, setFilter] = useState("Tous");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const PER_PAGE = 6;

  const mappedArticles = articles.map((a) => ({
    id: a.id,
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt || a.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
    date: new Date(a.published_at).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }),
    cat: a.category,
    img: typeof a.image === 'object' && a.image ? a.image.url : '/images/placeholder.svg',
    featured: a.featured,
  }));

  const filtered = mappedArticles.filter((a) => {
    const matchesCat = filter === "Tous" || a.cat === filter;
    const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase()) ||
                          a.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featured = filtered.find((a) => a.featured) || filtered[0];
  const rest = featured ? filtered.filter((a) => a.id !== featured.id) : filtered;
  const paginated = rest.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const totalPages = Math.ceil(rest.length / PER_PAGE);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {articles.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">Aucun article disponible pour le moment.</p>
            <p className="text-gray-400 text-sm mt-2">Revenez bientôt pour découvrir nos dernières actualités.</p>
          </div>
        ) : (
        <>
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
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
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
          <a href={`/actualites/${featured.slug}`} className="group block rounded-3xl overflow-hidden mb-10" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.10)" }}>
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
                  <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: catColors[featured.cat] || G, color: catColors[featured.cat] === "#F4D000" ? "#0B0B0B" : "white" }}>{featured.cat}</span>
                  <span className="text-xs text-gray-400 flex items-center gap-1"><Calendar size={11} /> {featured.date}</span>
                </div>
                <h2 className="text-gray-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 800 }}>{featured.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>{featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: G }}>
                  Lire l'article complet <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </a>
        )}

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {paginated.map((a) => (
            <a key={a.id} href={`/actualites/${a.slug}`} className="group block bg-white rounded-2xl overflow-hidden transition-all hover:-translate-y-1" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
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
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: catColors[a.cat] || G, color: catColors[a.cat] === "#F4D000" ? "#0B0B0B" : "white" }}>{a.cat}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2"><Calendar size={11} /> {a.date}</div>
                <h3 className="text-gray-800 font-bold mb-2 leading-snug" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}>{a.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>{a.excerpt}</p>
                <span className="text-xs font-semibold flex items-center gap-1" style={{ color: G }}>Lire <ArrowRight size={11} /></span>
              </div>
            </a>
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
        </>
        )}
      </div>
    </section>
  );
}
