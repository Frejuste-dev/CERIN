import { usePrograms, Program } from "../../../hooks/usePrograms";

export function useEducationPrograms() {
  const { data, loading, error } = usePrograms();

  // Filter and map programs as needed for GeneralEducationPage
  const collegePrograms = data.filter(p => p.category === "COLLÈGE");
  const lyceePrograms = data.filter(p => p.category === "LYCÉE");

  return {
    collegePrograms,
    lyceePrograms,
    loading,
    error
  };
}
