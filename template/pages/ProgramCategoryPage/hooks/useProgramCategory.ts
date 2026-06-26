import { useMemo } from "react";
import { useParams } from "react-router";
import { MOCK_CATEGORIES } from "../data/mock-categories";
import { ALL_PROGRAMS } from "../../FormationsPage/data/mock-formations";
import { ProgramCategory } from "../types/category.types";
import { Program } from "../../FormationsPage/types/formations.types";

interface UseProgramCategory {
  category: ProgramCategory | undefined;
  programs: Program[];
  isLoading: boolean;
  error: string | null;
}

export const useProgramCategory = (): UseProgramCategory => {
  const { category: categorySlug } = useParams<{ category: string }>();

  const category = useMemo(() => {
    return MOCK_CATEGORIES.find((cat) => cat.slug === categorySlug);
  }, [categorySlug]);

  const programs = useMemo(() => {
    if (!categorySlug) return [];
    return ALL_PROGRAMS.filter((p) => p.category === categorySlug);
  }, [categorySlug]);

  return {
    category,
    programs,
    isLoading: false,
    error: category ? null : "Catégorie non trouvée",
  };
};
