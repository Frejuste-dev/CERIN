import { useState } from "react";
import { Link } from "react-router";
import { useHigherEducationPrograms } from "../hooks/useHigherEducationPrograms";
import { getIcon } from "../components/ProgramIcon";

export function ProgramSelector() {
  const { programsByLevel, loading } = useHigherEducationPrograms();
  const [tab, setTab] = useState<"BTS" | "Licence" | "Master">("BTS");
  const tabs: Array<"BTS" | "Licence" | "Master"> = ["BTS", "Licence", "Master"];
  const labels: Record<string, string> = { BTS: "BTS — Bac+2", Licence: "Licence / Bachelor — Bac+3", Master: "Master — Bac+5" };

  if (loading) return <section className="py-24 bg-white"><div className="max-w-7xl mx-auto px-4 text-center">Chargement...</div></section>;

  const currentPrograms = programsByLevel[tab];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 bg-primary/10 text-primary">Programmes</span>
          <h2 className="text-foreground mb-3 font-poppins text-2xl md:text-4xl font-extrabold">
            Choisissez votre niveau
          </h2>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-2xl p-1.5 bg-muted">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  tab === t ? "bg-primary text-white shadow-lg" : "text-muted-foreground"
                }`}
              >
                {labels[t]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentPrograms.map((p) => {
            const Icon = getIcon(p.title);
            return (
              <Link 
                to={p.href} 
                key={p.id} 
                className="bg-white rounded-2xl p-6 border-2 border-transparent hover:border-primary/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-primary/10">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary text-white">
                    {p.level}
                  </span>
                </div>
                <h3 className="font-bold text-foreground mb-2 font-poppins">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 font-inter">{p.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-muted-foreground/10 text-xs text-muted-foreground">
                  <span>⏱ {p.duration}</span>
                  <span>{p.spotsRemaining} places</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
