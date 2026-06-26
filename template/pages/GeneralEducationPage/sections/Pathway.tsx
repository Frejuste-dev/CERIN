import { BookOpen, ChevronRight } from "lucide-react";
import { useEducationPrograms } from "../hooks/useEducationPrograms";

export function Pathway() {
  const { collegePrograms, lyceePrograms, loading } = useEducationPrograms();
  const allLevels = [
    { label: "Collège", sub: "6ème → 3ème", count: collegePrograms.length, color: "bg-primary" },
    { label: "Lycée", sub: "Seconde → Terminale", count: lyceePrograms.length, color: "bg-accent" },
  ];

  if (loading) return <section className="py-20 bg-background"><div className="max-w-7xl mx-auto px-4 text-center">Chargement...</div></section>;

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-foreground mb-3 font-poppins text-2xl md:text-4xl font-extrabold">
            Votre parcours académique
          </h2>
          <p className="text-muted-foreground font-inter">Du collège au baccalauréat, nous préparons votre entrée dans le supérieur</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-0">
          {allLevels.map((step, i) => (
            <div key={step.label} className="flex flex-col md:flex-row items-center">
              <div className={`flex flex-col items-center p-8 rounded-2xl bg-white border-2 text-center w-52 ${step.color.replace('bg-', 'border-')}`}>
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 ${step.color}`}>
                  <BookOpen size={22} className="text-white" />
                </div>
                <p className="font-black text-foreground mb-1 font-poppins">{step.label}</p>
                <p className="text-xs text-muted-foreground mb-2">{step.sub}</p>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${step.color} text-white`}>
                  {step.count} programmes
                </span>
              </div>
              {i < allLevels.length - 1 && (
                <div className="flex items-center my-4 md:my-0 md:mx-3">
                  <div className="hidden md:flex items-center gap-1">
                    <div className="w-8 h-0.5 bg-primary" />
                    <ChevronRight size={18} className="text-primary" />
                  </div>
                  <div className="md:hidden flex flex-col items-center gap-1">
                    <div className="w-0.5 h-6 bg-primary" />
                    <ChevronRight size={18} className="text-primary rotate-90" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
