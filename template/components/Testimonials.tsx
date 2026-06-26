import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sofia Benali",
    role: "BTS MCO – Promotion 2023",
    company: "Responsable commerciale chez Marjane",
    avatar: "https://source.unsplash.com/100x100/?person,portrait",
    quote:
      "Le Groupe CERIN m'a donné les outils concrets pour réussir dans le monde professionnel. La qualité des intervenants et le suivi personnalisé font toute la différence. J'ai trouvé un emploi dès la fin de mon BTS.",
    stars: 5,
  },
  {
    id: 2,
    name: "Youssef Karimi",
    role: "Bachelor Informatique – Promotion 2022",
    company: "Développeur Full-Stack chez InnoTech",
    avatar: "https://source.unsplash.com/100x100/?person,portrait",
    quote:
      "La formation Bachelor en informatique au CERIN est vraiment excellente. Les projets pratiques et les partenariats avec les entreprises nous ont permis d'acquérir une expérience concrète avant même l'obtention du diplôme.",
    stars: 5,
  },
  {
    id: 3,
    name: "Imane Touzani",
    role: "Master Gestion de Projet – Promotion 2024",
    company: "Chef de projet chez PwC Maroc",
    avatar: "https://source.unsplash.com/100x100/?person,portrait",
    quote:
      "Le master au CERIN m'a ouvert des portes incroyables. La rigueur académique combinée aux études de cas réels m'ont préparé à relever les défis du cabinet dès le premier jour.",
    stars: 5,
  },
  {
    id: 4,
    name: "Mehdi Ouali",
    role: "Bac Pro Systèmes Numériques – 2023",
    company: "Technicien réseau chez Maroc Telecom",
    avatar: "https://source.unsplash.com/100x100/?person,portrait",
    quote:
      "L'alternance organisée par le CERIN m'a permis d'être directement opérationnel en entreprise. Les professeurs sont disponibles et passionnés par leur métier. Je recommande vivement cette école.",
    stars: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-24" style={{ background: "#F8FBF8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4" style={{ background: "#F0FAF0", color: "#2EA82A" }}>
            Témoignages
          </div>
          <h2 className="text-gray-900" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700 }}>
            Ce que disent nos diplômés
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-10 md:p-14" style={{ background: "white", boxShadow: "0 8px 40px rgba(46,168,42,0.12)" }}>
            {/* Quote icon */}
            <div className="absolute top-8 right-10 w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "#F0FAF0" }}>
              <Quote size={28} style={{ color: "#2EA82A" }} />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.stars }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" fill="#F5C800" className="w-5 h-5">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 max-w-3xl" style={{ fontFamily: "'Inter', sans-serif" }}>
              "{t.quote}"
            </blockquote>

            <div className="flex items-center gap-4">
              <img  src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2" style={{ borderColor: "#2EA82A" }}  onError={(e) => {
    e.currentTarget.src = '/images/placeholder.jpg';
    e.currentTarget.onerror = null;
  }} />
              <div>
                <p className="font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>{t.name}</p>
                <p className="text-sm" style={{ color: "#2EA82A" }}>{t.role}</p>
                <p className="text-xs text-gray-400">{t.company}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="rounded-full transition-all duration-200"
                    style={{
                      width: i === current ? "28px" : "8px",
                      height: "8px",
                      background: i === current ? "#2EA82A" : "#D1E8D1",
                    }}
                    aria-label={`Aller au témoignage ${i + 1}`}
                  />
                ))}
              </div>
              <div className="ml-auto flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full flex items-center justify-center border transition-all hover:border-[#2EA82A] hover:text-[#2EA82A]"
                  style={{ border: "1.5px solid #D1D5DB", color: "#6B7280" }}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  style={{ background: "#2EA82A", color: "white" }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
