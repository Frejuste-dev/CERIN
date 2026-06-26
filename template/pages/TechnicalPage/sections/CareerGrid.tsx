import { useTechnicalPrograms } from "../hooks/useTechnicalPrograms";
import { getIcon } from "../components/ProgramIcon";

export function CareerGrid() {
  const { technicalPrograms, loading } = useTechnicalPrograms();

  if (loading) return <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 text-center">Chargement...</div></section>;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-3 bg-accent/20 text-accent">Métiers préparés</span>
          <h2 className="text-foreground mb-2 font-poppins text-2xl md:text-4xl font-extrabold">
            Des formations orientées métier
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto font-inter">
            Chaque cursus est conçu avec les professionnels du secteur pour garantir une insertion rapide.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {technicalPrograms.map((p) => {
            const Icon = getIcon(p.title);
            return (
              <div key={p.id} className="group p-6 rounded-2xl border-2 border-transparent hover:border-accent/40 shadow-sm hover:shadow-lg transition-all cursor-pointer bg-muted">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-primary text-white">
                    {p.level}
                  </span>
                </div>
                <h3 className="font-bold text-foreground mb-1 font-poppins">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-inter">{p.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
