import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Program } from "../types/program.types";
import { MOCK_PROGRAMS } from "../data/mock-program";

export function useProgram() {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const [program, setProgram] = useState<Program | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    // Simulate API fetch
    const fetchProgram = () => {
      setLoading(true);
      
      // Artificial delay for realism
      setTimeout(() => {
        const foundProgram = MOCK_PROGRAMS[slug || ""];
        
        if (foundProgram && foundProgram.category === category) {
          setProgram(foundProgram);
          setError(false);
        } else {
          setProgram(null);
          setError(true);
        }
        setLoading(false);
      }, 300);
    };

    fetchProgram();
  }, [category, slug]);

  return { program, loading, error };
}
