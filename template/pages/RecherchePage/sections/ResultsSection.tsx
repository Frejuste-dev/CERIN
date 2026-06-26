import { Link } from "react-router";
import { SearchResult, SearchResultType } from "../types/search.types";
import { ResultCard } from "../components/ResultCard";

interface Props {
  results: SearchResult[];
  activeType: SearchResultType | "all";
  query: string;
}

export function ResultsSection({ results, activeType, query }: Props) {
  if (results.length === 0) return null;

  if (activeType !== "all") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((r) => (
          <ResultCard key={r.id} result={r} query={query} />
        ))}
      </div>
    );
  }

  const grouped = {
    formation: results.filter((r) => r.type === "formation"),
    actualite: results.filter((r) => r.type === "actualite"),
    faq: results.filter((r) => r.type === "faq"),
  };

  return (
    <div className="space-y-12">
      {Object.entries(grouped).map(([type, items]) => {
        if (items.length === 0) return null;
        
        const labels: Record<string, string> = {
          formation: "Formations",
          actualite: "Actualités",
          faq: "FAQ",
        };
        const urls: Record<string, string> = {
          formation: "/formations",
          actualite: "/actualites",
          faq: "/faq",
        };

        return (
          <section key={type}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {labels[type]} ({items.length})
              </h2>
              {items.length > 3 && (
                <Link to={`${urls[type]}?q=${query}`} className="text-[#7AC943] font-medium hover:text-green-700">
                  Voir toutes les {labels[type].toLowerCase()} →
                </Link>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.slice(0, 3).map((r) => (
                <ResultCard key={r.id} result={r} query={query} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
