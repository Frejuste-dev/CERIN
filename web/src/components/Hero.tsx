import { ArrowRight, Play, GraduationCap, Users, Award } from "lucide-react";

const stats = [
  { icon: Users, val: "4 500+", label: "Étudiants" },
  { icon: Award, val: "92%", label: "Taux de réussite" },
  { icon: GraduationCap, val: "60+", label: "Formations" },
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-br from-[#0B0B0B] via-[#173a0a] to-[#7AC943]"
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none bg-[#FEFF01]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none bg-[#FEFF01]"
        aria-hidden="true"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-[#FEFF01]/15 text-[#FEFF01] border border-[#FEFF01]/30">
              <GraduationCap size={15} aria-hidden="true" />
              Excellence académique depuis 1998
            </div>

            <h1 className="text-white leading-tight mb-6 font-['Poppins',sans-serif] font-extrabold text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.15]">
              Trouvez votre{" "}
              <span className="text-[#FEFF01]">parcours académique</span>{" "}
              au sein du Groupe CERIN
            </h1>

            <p className="text-green-100 text-lg leading-relaxed mb-10 max-w-lg font-['Inter',sans-serif]">
              Du collège au Master, découvrez une offre de formation complète qui prépare aux métiers de demain. Rejoignez une communauté de 4 500+ étudiants engagés.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm font-['Poppins',sans-serif] bg-[#F4D000] text-[#0B0B0B] transition-all duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#F4D000] focus:ring-offset-2 focus:ring-offset-[#0B0B0B]"
              >
                Candidater maintenant
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a
                href="#programmes"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm font-['Poppins',sans-serif] border-2 border-white/60 text-white transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B0B0B]"
              >
                <Play size={15} fill="white" aria-hidden="true" />
                Découvrir nos formations
              </a>
            </div>

            {/* Mini stats */}
            <div className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/20">
              {stats.map(({ icon: Icon, val, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#FEFF01]/20">
                    <Icon size={18} className="text-[#FEFF01]" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl font-['Poppins',sans-serif]">{val}</div>
                    <div className="text-green-300 text-xs">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual card stack */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
                  alt="Étudiants du Groupe CERIN sur le campus d'Abidjan"
                  className="w-full h-56 object-cover rounded-xl mb-4"
                />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-800 font-['Poppins',sans-serif]">Campus Principal</p>
                    <p className="text-sm text-gray-500">Abidjan, Côte d'Ivoire</p>
                  </div>
                  <div className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FEFF01]/10 text-[#FEFF01] border border-[#FEFF01]/30">
                    Inscriptions ouvertes
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-[#FEFF01] text-[#0B0B0B] rounded-2xl px-5 py-3 shadow-lg">
                <div className="text-2xl font-black font-['Poppins',sans-serif]">98%</div>
                <div className="text-xs font-semibold">Satisfaction</div>
              </div>

              {/* Bottom floating card */}
              <div className="absolute -bottom-6 -left-6 bg-[#0B0B0B] text-white rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#7AC943]">
                  <GraduationCap size={20} aria-hidden="true" />
                </div>
                <div>
                  <div className="font-bold text-sm font-['Poppins',sans-serif]">250+ Diplômés</div>
                  <div className="text-xs text-green-300">Promotion 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0 80L1440 80L1440 20C1200 70 960 0 720 40C480 80 240 10 0 50L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}