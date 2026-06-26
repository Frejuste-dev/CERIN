import { useState, useEffect } from "react";

export interface Program {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
  category: string;
  spotsTotal: number;
  spotsRemaining: number;
  fee: string;
  href: string;
}

const API_URL = import.meta.env.VITE_API_URL || "/api";

/**
 * Hook to manage program data.
 * Fetches from the backend API.
 */
export function usePrograms() {
  const [data, setData] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/programs`);
        
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        
        const programs = await response.json();
        
        // Map backend fields to frontend interface if needed
        // (The backend implementation now matches the expected frontend props mostly)
        const mappedData = programs.map((p: any) => ({
          ...p,
          level: p.category === "GENERAL" ? "Général" : p.category === "TECH" ? "Technique" : "Supérieur",
        }));
        
        setData(mappedData);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch programs:", err);
        setError("Impossible de charger les programmes.");
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  return { data, loading, error };
}
