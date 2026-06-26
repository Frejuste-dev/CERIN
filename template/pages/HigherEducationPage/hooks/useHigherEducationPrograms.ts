import { usePrograms } from "../../../hooks/usePrograms";
import { useMemo } from "react";

export function useHigherEducationPrograms() {
  const { data, loading, error } = usePrograms();

  const programsByLevel = useMemo(() => {
    const bts = data.filter(p => p.category === "BTS");
    const licence = data.filter(p => p.category === "LICENCE" || p.category === "BACHELOR");
    const master = data.filter(p => p.category === "MASTER");
    return { BTS: bts, Licence: licence, Master: master };
  }, [data]);

  return { programsByLevel, loading, error };
}
