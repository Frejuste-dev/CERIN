import { useSearchParams } from "react-router";
import { SearchResultType } from "../types/search.types";

interface Props {
  counts: {
    all: number;
    formation: number;
    actualite: number;
    faq: number;
  };
}

export function TypeFilter({ counts }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeType = searchParams.get("type") || "all";

  const setType = (type: string) => {
    const params = new URLSearchParams(searchParams);
    if (type === "all") params.delete("type");
    else params.set("type", type);
    setSearchParams(params); // Push
  };

  const types: { label: string; value: string; count: number }[] = [
    { label: "Tout", value: "all", count: counts.all },
    { label: "Formations", value: "formation", count: counts.formation },
    { label: "Actualités", value: "actualite", count: counts.actualite },
    { label: "FAQ", value: "faq", count: counts.faq },
  ];

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {types.map((t) => (
        <button
          key={t.value}
          onClick={() => setType(t.value)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeType === t.value
              ? "bg-[#7AC943] text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {t.label} ({t.count})
        </button>
      ))}
    </div>
  );
}
