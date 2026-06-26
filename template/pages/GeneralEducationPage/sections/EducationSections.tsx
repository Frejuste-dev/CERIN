import { Award } from "lucide-react";
import { useEducationPrograms } from "../hooks/useEducationPrograms";

export function CollegeSection() {
  const { collegePrograms, loading } = useEducationPrograms();

  if (loading) return <section className="py-20 bg-muted"><div className="max-w-7xl mx-auto px-4 text-center">Chargement...</div></section>;

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1.5 h-8 rounded-full bg-primary" />
          <div>
            <h2 className="text-foreground font-poppins text-2xl md:text-4xl font-extrabold">Collège — 6ème à 3ème</h2>
            <p className="text-muted-foreground text-sm">Un enseignement complet, encadré et progressif</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {collegePrograms.map((c) => (
            <div key={c.id} className="bg-background rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-primary/10">
                <span className="font-black text-sm text-primary font-poppins">{c.title}</span>
              </div>
              <p className="font-bold text-foreground mb-1 font-poppins">{c.title}</p>
              <p className="text-xs text-muted-foreground mb-4 font-inter">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LyceeSection() {
  const { lyceePrograms, loading } = useEducationPrograms();

  if (loading) return <section className="py-20 bg-background"><div className="max-w-7xl mx-auto px-4 text-center">Chargement...</div></section>;

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1.5 h-8 rounded-full bg-accent" />
          <div>
            <h2 className="text-foreground font-poppins text-2xl md:text-4xl font-extrabold">Lycée — Seconde à Terminale</h2>
            <p className="text-muted-foreground text-sm">Toutes les séries, vers le baccalauréat</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {lyceePrograms.map((c) => (
            <div key={c.id} className="rounded-2xl p-6 border-2 border-primary/40 bg-primary/5 transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-primary">
                <Award size={18} className="text-white" />
              </div>
              <p className="font-bold text-foreground mb-1 text-sm font-poppins">{c.title}</p>
              <p className="text-xs text-muted-foreground font-inter">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
