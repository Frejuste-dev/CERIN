import { usePrograms } from "../../../hooks/usePrograms";
import { useMemo } from "react";

export function useTechnicalPrograms() {
  const { data, loading, error } = usePrograms();

  const technicalPrograms = useMemo(() => {
    return data.filter(p => p.category === "TECH" || p.category === "PROFESSIONNEL");
  }, [data]);

  return { technicalPrograms, loading, error };
}
