import { Clock, Users, BarChart2, ArrowRight, Star } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "BTS Management Commercial Opérationnel",
    category: "BTS",
    image: "https://source.unsplash.com/800x500/?education,university",
    duration: "2 ans",
    students: 120,
    level: "Bac+2",
    rating: 4.8,
    reviews: 94,
    tag: "Populaire",
    tagColor: "#F5C800",
    tagText: "#0F2010",
  },
  {
    id: 2,
    title: "Bachelor Informatique & Digital",
    category: "Licence",
    image: "https://source.unsplash.com/800x500/?education,university",
    duration: "3 ans",
    students: 85,
    level: "Bac+3",
    rating: 4.9,
    reviews: 67,
    tag: "Nouveau",
    tagColor: "#2EA82A",
    tagText: "#fff",
  },
  {
    id: 3,
    title: "Master Gestion de Projet & Innovation",
    category: "Master",
    image: "https://source.unsplash.com/800x500/?education,university",
    duration: "2 ans",
    students: 48,
    level: "Bac+5",
    rating: 4.7,
    reviews: 39,
    tag: "Premium",
    tagColor: "#1A3A1A",
    tagText: "#F5C800",
  },
  {
    id: 4,
    title: "Bac Pro Systèmes Numériques",
    category: "Bac Pro",
    image: "https://source.unsplash.com/800x500/?education,university",
    duration: "3 ans",
    students: 72,
    level: "Terminale",
    rating: 4.6,
    reviews: 58,
    tag: "Alternance",
    tagColor: "#F5C800",
    tagText: "#0F2010",
  },
  {
    id: 5,
    title: "BTS Négociation & Digitalisation de la Relation Client",
    category: "BTS",
    image: "https://source.unsplash.com/800x500/?education,university",
    duration: "2 ans",
    students: 96,
    level: "Bac+2",
    rating: 4.5,
    reviews: 81,
    tag: "Alternance",
    tagColor: "#F5C800",
    tagText: "#0F2010",
  },
  {
    id: 6,
    title: "Terminale Générale – Parcours Scientifique",
    category: "Lycée",
    image: "https://source.unsplash.com/800x500/?education,university",
    duration: "1 an",
    students: 145,
    level: "Terminale",
    rating: 4.8,
    reviews: 112,
    tag: "Populaire",
    tagColor: "#2EA82A",
    tagText: "#fff",
  },
];

const categories = ["Tous", "BTS", "Licence", "Master", "Bac Pro", "Lycée"];

import { useState } from "react";

export function PopularCourses() {
  const [active, setActive] = useState("Tous");
  const filtered = active === "Tous" ? courses : courses.filter((c) => c.category === active);

  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-3" style={{ background: "#F0FAF0", color: "#2EA82A" }}>
              Formations phares
            </div>
            <h2 className="text-gray-900" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700 }}>
              Nos formations les plus demandées
            </h2>
          </div>
          <a href="#toutes-formations" className="inline-flex items-center gap-2 text-sm font-semibold shrink-0" style={{ color: "#2EA82A" }}>
            Voir toutes les formations <ArrowRight size={15} />
          </a>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={
                active === cat
                  ? { background: "#2EA82A", color: "white" }
                  : { background: "#F8FBF8", color: "#4A6B4A" }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <div
              key={course.id}
              className="rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1"
              style={{ background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
            >
              <div className="relative h-44 overflow-hidden">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 onError={(e) => {
        e.currentTarget.src = '/images/placeholder.svg';
    e.currentTarget.onerror = null;
  }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5))" }} />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold" style={{ background: course.tagColor, color: course.tagText }}>
                  {course.tag}
                </div>
                <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white" style={{ background: "rgba(0,0,0,0.5)" }}>
                  {course.category}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-gray-800 mb-3 leading-snug" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.95rem" }}>
                  {course.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <span className="flex items-center gap-1"><Clock size={12} /> {course.duration}</span>
                  <span className="flex items-center gap-1"><Users size={12} /> {course.students} étudiants</span>
                  <span className="flex items-center gap-1"><BarChart2 size={12} /> {course.level}</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <Star size={13} fill="#F5C800" style={{ color: "#F5C800" }} />
                    <span className="text-sm font-semibold text-gray-700">{course.rating}</span>
                    <span className="text-xs text-gray-400">({course.reviews})</span>
                  </div>
                  <a href="#" className="text-xs font-semibold flex items-center gap-1 transition-colors" style={{ color: "#2EA82A" }}>
                    En savoir plus <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
