import { Zap, Calculator, HardHat, FileText, HeartPulse } from "lucide-react";

const industrial = [
  { code: "F2", name: "Génie Électronique", icon: Zap, desc: "Électronique, automatisme, télécommunications" },
  { code: "F3", name: "Électrotechnique", icon: Zap, desc: "Électricité industrielle, motorisation" },
  { code: "F4", name: "Génie Civil", icon: HardHat, desc: "Topographie, béton armé, dessin technique" },
];
const admin = [
  { code: "G2", name: "Comptabilité", icon: Calculator, desc: "Comptabilité générale, gestion, fiscalité" },
  { code: "G3", name: "Secrétariat", icon: FileText, desc: "Organisation, bureautique, communication" },
  { code: "G4", name: "Action Sociale", icon: HeartPulse, desc: "Santé, social, service à la personne" },
];

function FieldCard({ item }: { item: typeof industrial[0] }) {
  const Icon = item.icon;
  return (
    <div className="bg-background rounded-2xl p-5 shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/10">
          <Icon size={18} className="text-primary" />
        </div>
        <span className="font-black text-xs px-2 py-1 rounded-lg bg-primary text-white font-poppins">
          Série {item.code}
        </span>
      </div>
      <p className="font-bold text-foreground text-sm mb-1 font-poppins">{item.name}</p>
      <p className="text-xs text-muted-foreground font-inter">{item.desc}</p>
    </div>
  );
}

export function Fields() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-8 rounded-full bg-primary" />
              <div>
                <h2 className="font-black text-foreground font-poppins text-2xl">Filières Industrielles</h2>
                <p className="text-muted-foreground text-sm">Mécanique, électrique, génie civil</p>
              </div>
            </div>
            <div className="grid gap-4">
              {industrial.map((i) => <FieldCard key={i.code} item={i} />)}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-8 rounded-full bg-accent" />
              <div>
                <h2 className="font-black text-foreground font-poppins text-2xl">Filières Tertiaires</h2>
                <p className="text-muted-foreground text-sm">Gestion, secrétariat, action sociale</p>
              </div>
            </div>
            <div className="grid gap-4">
              {admin.map((i) => <FieldCard key={i.code} item={i} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
