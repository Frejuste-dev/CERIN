import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { SearchResult } from "../types/search.types";

interface Props {
  result: SearchResult;
  query: string;
}

function highlight(text: string, query: string): JSX.Element {
  if (!query) return <span>{text}</span>;
  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase()
          ? <mark key={i} className="bg-[#7AC943]/20 text-[#0B0B0B] rounded px-0.5">{part}</mark>
          : <span key={i}>{part}</span>
      )}
    </span>
  );
}

const typeConfig = {
  formation: { label: "Formation", color: "bg-[#7AC943]" },
  actualite: { label: "Actualité", color: "bg-[#3B82F6]" },
  faq: { label: "FAQ", color: "bg-[#F97316]" },
};

export function ResultCard({ result, query }: Props) {
  const config = typeConfig[result.type];

  return (
    <Link to={result.url} className="block p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
      <div className="flex items-center gap-3 mb-3">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${config.color}`}>
          {config.label}
        </span>
        <span className="text-xs text-gray-500 uppercase tracking-wide">{result.category}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {highlight(result.title, query)}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-2">
        {highlight(result.excerpt, query)}
      </p>
      <div className="flex items-center text-[#7AC943] font-medium group-hover:gap-2 transition-all">
        Consulter <ArrowRight size={16} className="ml-1" />
      </div>
    </Link>
  );
}
