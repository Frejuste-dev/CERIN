import { useEffect, useState } from "react";
import { Music, Dumbbell, Globe, Users, Calendar, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { PageHero } from "../components/shared/PageHero";

const G = "#7AC943";
const Y = "#F4D000";
const BG = "#F5F6F8";

function Campus() {
  const photos = [
    { src: "https://source.unsplash.com/800x500/?education,university", caption: "Salle de cours moderne" },
    { src: "https://source.unsplash.com/800x500/?education,university", caption: "Bibliothèque & espaces de travail" },
    { src: "https://source.unsplash.com/800x500/?education,university", caption: "Salle informatique équipée" },
  ];
  const [idx, setIdx] = useState(0);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "#F0FAF0", color: G }}>Notre campus</span>
            <h2 className="text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.5rem)", fontWeight: 800 }}>
              Un environnement propice à l'excellence
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              Le campus CERIN offre des infrastructures modernes conçues pour favoriser l'apprentissage, la créativité et l'épanouissement personnel.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { emoji: "📚", title: "Bibliothèque numérique", desc: "10 000+ ressources en ligne" },
                { emoji: "💻", title: "Lab Informatique", desc: "100 postes haute performance" },
                { emoji: "🏋️", title: "Salle de sport", desc: "Équipement professionnel" },
                { emoji: "🍽️", title: "Cantine", desc: "Restauration équilibrée" },
              ].map((f) => (
                <div key={f.title} className="flex gap-3 p-4 rounded-2xl" style={{ background: BG }}>
                  <span className="text-2xl shrink-0">{f.emoji}</span>
                  <div>
                    <p className="font-bold text-gray-800 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>{f.title}</p>
                    <p className="text-xs text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.15)" }}>
            <img
              src={photos[idx].src}
              alt={photos[idx].caption}
              className="w-full h-80 object-cover"
              onError={(e) => {
                e.currentTarget.src = '/images/placeholder.svg';
                e.currentTarget.onerror = null;
              }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.40))" }} />
            <p className="absolute bottom-5 left-5 text-white text-sm font-semibold">{photos[idx].caption}</p>
            <div className="absolute top-4 right-4 flex gap-2">
              <button onClick={() => setIdx((idx - 1 + photos.length) % photos.length)} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}><ChevronLeft size={15} color="white" /></button>
              <button onClick={() => setIdx((idx + 1) % photos.length)} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: G }}><ChevronRight size={15} color="white" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Activities() {
  const acts = [
    { icon: Dumbbell, title: "Sport & Bien-être", desc: "Football, basketball, volleyball, athlétisme — équipes compétitives et loisirs.", color: G },
    { icon: Music, title: "Culture & Arts", desc: "Chorale, théâtre, photographie, club cinéma pour explorer votre créativité.", color: Y },
    { icon: Globe, title: "Clubs académiques", desc: "Débat, langues, robotique, entrepreneuriat — développez vos compétences extra-scolaires.", color: G },
    { icon: Users, title: "Associations étudiantes", desc: "Solidarité, engagement associatif, projets humanitaires et leadership.", color: Y },
  ];
  return (
    <section className="py-20" style={{ background: BG }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "#F0FAF0", color: G }}>Vie étudiante</span>
          <h2 className="text-gray-900" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.5rem)", fontWeight: 800 }}>
            Activités & vie de campus
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {acts.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.title} className="bg-white rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: a.color === G ? "#F0FAF0" : "#FFF8CC" }}>
                  <Icon size={26} style={{ color: a.color }} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>{a.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{a.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Events() {
  const events = [
    { date: "20 Jun 2025", title: "Tournoi sportif inter-filières", type: "Sport", color: G },
    { date: "5 Jul 2025", title: "Conférence entrepreneuriat jeunesse", type: "Académique", color: Y },
    { date: "15 Jul 2025", title: "Gala de fin d'année – Promotion 2025", type: "Gala", color: "#0B0B0B" },
    { date: "1 Sep 2025", title: "Rentrée scolaire 2025-2026", type: "Rentrée", color: G },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <Calendar size={22} style={{ color: G }} />
          <h2 className="text-gray-900" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800 }}>
            Agenda des événements
          </h2>
        </div>
        <div className="space-y-4 max-w-2xl">
          {events.map((ev, i) => (
            <div key={i} className="flex gap-5 p-5 rounded-2xl border-l-4 transition-all hover:shadow-md" style={{ background: BG, borderLeftColor: ev.color }}>
              <div className="shrink-0 text-center w-16">
                <p className="text-xs text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>{ev.date.split(" ")[1]} {ev.date.split(" ")[2]}</p>
                <p className="font-black text-2xl text-gray-800" style={{ fontFamily: "'Poppins', sans-serif" }}>{ev.date.split(" ")[0]}</p>
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold mb-1" style={{ background: ev.color, color: ev.color === Y ? "#0B0B0B" : "white" }}>{ev.type}</span>
                <p className="font-semibold text-gray-800" style={{ fontFamily: "'Poppins', sans-serif" }}>{ev.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Associations() {
  const assocs = ["Bureau des Étudiants (BDE)", "Club Informatique CERIN", "Équipe Football CERIN", "Club Théâtre & Expression", "Association Humanitaire", "Club Entrepreneuriat Jeunesse"];
  return (
    <section className="py-20" style={{ background: BG }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-gray-900 mb-10 text-center" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800 }}>
          Nos associations étudiantes
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {assocs.map((a) => (
            <div key={a} className="px-5 py-3 rounded-2xl bg-white font-semibold text-sm text-gray-700 hover:shadow-md transition-all cursor-pointer border-2 border-transparent hover:border-green-200" style={{ fontFamily: "'Poppins', sans-serif", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
              {a}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StudentTestimonials() {
  const [idx, setIdx] = useState(0);
  const data = [
    { name: "Paola Essono", role: "Étudiante en BTS – 2ème année", avatar: "https://source.unsplash.com/100x100/?person,portrait", quote: "La vie au CERIN c'est bien plus que les cours. J'ai découvert ma passion pour le théâtre dans notre club et j'ai développé une vraie confiance en moi." },
    { name: "Jean-Luc Fouda", role: "Lycéen – Terminale C", avatar: "https://source.unsplash.com/100x100/?person,portrait", quote: "Notre équipe de football a remporté le tournoi inter-lycées ! Le CERIN investit vraiment dans le sport et le bien-être de ses élèves." },
  ];
  const t = data[idx];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-gray-900 mb-10" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800 }}>
          La parole aux étudiants
        </h2>
        <div className="relative bg-white rounded-3xl p-10" style={{ boxShadow: "0 8px 40px rgba(122,201,67,0.1)" }}>
          <div className="absolute top-8 right-8 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "#F0FAF0" }}>
            <Quote size={20} style={{ color: G }} />
          </div>
          <blockquote className="text-gray-700 text-lg leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>"{t.quote}"</blockquote>
          <img
            src={t.avatar}
            alt={t.name}
            className="w-14 h-14 rounded-full object-cover border-2 mx-auto mb-3"
            style={{ borderColor: G }}
            onError={(e) => {
              e.currentTarget.src = '/images/placeholder.svg';
              e.currentTarget.onerror = null;
            }}
          />
          <p className="font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>{t.name}</p>
          <p className="text-sm" style={{ color: G }}>{t.role}</p>
          <div className="flex justify-center gap-2 mt-6">
            {data.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} className="rounded-full transition-all" style={{ width: i === idx ? "24px" : "8px", height: "8px", background: i === idx ? G : "#D1D5DB" }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Gallery
function Gallery() {
  const imgs = [
    "https://source.unsplash.com/800x500/?education,university",
    "https://source.unsplash.com/800x500/?education,university",
    "https://source.unsplash.com/800x500/?education,university",
    "https://source.unsplash.com/1200x600/?university,campus,africa",
    "https://source.unsplash.com/800x500/?education,university",
    "https://source.unsplash.com/800x500/?education,university",
  ];
  return (
    <section className="py-20" style={{ background: BG }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-gray-900 text-center mb-10" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800 }}>
          Galerie du campus
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {imgs.map((src, i) => (
            <div key={i} className={`rounded-2xl overflow-hidden group cursor-pointer ${i === 3 ? "row-span-2" : ""}`} style={{ height: i === 3 ? undefined : "200px" }}>
              <img
                src={src}
                alt={`Campus ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ height: "100%" }}
                onError={(e) => {
                  e.currentTarget.src = '/images/placeholder.svg';
                  e.currentTarget.onerror = null;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CampusLifePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <PageHero
        title="La vie au Groupe CERIN"
        subtitle="Un campus vivant, une communauté soudée, des opportunités pour s'épanouir au-delà des cours."
        image="https://source.unsplash.com/1200x600/?university,campus,africa"
        breadcrumbs={[{ label: "Vie CERIN" }]}
        accent={Y}
      />
      <Campus />
      <Activities />
      <Events />
      <Associations />
      <StudentTestimonials />
      <Gallery />
    </>
  );
}
