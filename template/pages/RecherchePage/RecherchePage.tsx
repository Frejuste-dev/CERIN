import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { useUnifiedSearch } from "./hooks/useUnifiedSearch";
import { HeroSection } from "./sections/HeroSection";
import { TypeFilter } from "./components/TypeFilter";
import { ResultsSection } from "./sections/ResultsSection";
import { EmptyStateSection } from "./sections/EmptyStateSection";
import { ResultCount } from "./components/ResultCount";

const POPULAR_SEARCHES = ["BTS Informatique", "Admissions 2026", "Frais de scolarité", "Stages"];

export function RecherchePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const { results, activeType, totalCount } = useUnifiedSearch();

  useEffect(() => {
    document.title = query ? `Résultats pour ${query} | Groupe CERI` : "Recherche | Groupe CERI";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', `Recherche sur le site du Groupe CERI ${query ? `pour ${query}` : ""}`);
    
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!query) {
      if (!metaRobots) {
        metaRobots = document.createElement('meta');
        metaRobots.setAttribute('name', 'robots');
        document.head.appendChild(metaRobots);
      }
      metaRobots.setAttribute('content', 'noindex');
    } else if (metaRobots) {
      document.head.removeChild(metaRobots);
    }
  }, [query]);

  const handlePopularClick = (term: string) => {
    setSearchParams({ q: term });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection query={query} totalCount={totalCount} />

      <main className="max-w-7xl mx-auto px-4 py-12">
        {!query ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Recherches populaires :</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {POPULAR_SEARCHES.map((term) => (
                <button
                  key={term}
                  onClick={() => handlePopularClick(term)}
                  className="px-6 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:border-[#7AC943] hover:text-[#7AC943] transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {totalCount > 0 && (
              <TypeFilter
                counts={{
                  all: totalCount,
                  formation: results.filter(r => r.type === 'formation').length,
                  actualite: results.filter(r => r.type === 'actualite').length,
                  faq: results.filter(r => r.type === 'faq').length,
                }}
              />
            )}
            
            {results.length > 0 ? (
              <>
                <ResultCount count={totalCount} />
                <ResultsSection results={results} activeType={activeType} query={query} />
              </>
            ) : (
              <EmptyStateSection query={query} />
            )}
          </>
        )}
      </main>
    </div>
  );
}
