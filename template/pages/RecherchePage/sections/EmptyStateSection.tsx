import { Link } from "react-router";
import { SearchX } from "lucide-react";

interface Props {
  query: string;
}

export function EmptyStateSection({ query }: Props) {
  return (
    <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 shadow-sm">
      <SearchX size={64} className="mx-auto text-gray-300 mb-6" />
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Aucun résultat pour "{query}"</h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Vérifiez l'orthographe de votre recherche ou utilisez des termes plus généraux.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/formations" className="text-[#7AC943] font-medium hover:text-green-700">→ Toutes les formations</Link>
        <Link to="/actualites" className="text-[#7AC943] font-medium hover:text-green-700">→ Actualités</Link>
        <Link to="/faq" className="text-[#7AC943] font-medium hover:text-green-700">→ FAQ</Link>
        <Link to="/contact" className="text-[#7AC943] font-medium hover:text-green-700">→ Contact</Link>
      </div>
    </div>
  );
}
