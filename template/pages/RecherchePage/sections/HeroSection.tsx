import { Link } from "react-router";
import { SearchInput } from "../components/SearchInput";

interface Props {
  query: string;
  totalCount: number;
}

export function HeroSection({ query, totalCount }: Props) {
  const getSubtitle = () => {
    if (!query) return "Recherchez parmi nos formations, actualités et FAQ";
    if (totalCount === 0) return `Aucun résultat pour "${query}"`;
    return `${totalCount} ${totalCount === 1 ? "résultat" : "résultats"} pour "${query}"`;
  };

  return (
    <section className="bg-gray-50 pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <nav className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#7AC943]">Accueil</Link> &gt; Recherche
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Recherche</h1>
        <SearchInput />
        <p className="mt-6 text-lg text-gray-600">{getSubtitle()}</p>
      </div>
    </section>
  );
}
