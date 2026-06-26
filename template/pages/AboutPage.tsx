import { useEffect } from "react";
import { Target, Eye, Heart, Shield, Star, Users } from "lucide-react";
import { PageHero } from "../components/shared/PageHero";

const G = "#7AC943";
const Y = "#F4D000";
const BG = "#F5F6F8";

function History() {
  const timeline = [
    { year: "1998", title: "Fondation du Groupe CERIN", desc: "Création de l'établissement avec 200 élèves et une vision d'excellence pour l'éducation ivoirienne." },
    { year: "2004", title: "Ouverture du département technique", desc: "Lancement des filières professionnelles et techniques pour répondre aux besoins du marché de l'emploi." },
    { year: "2010", title: "Accréditation Enseignement Supérieur", desc: "Le CERIN reçoit l'accréditation pour ouvrir ses premières classes de BTS et bachelor." },
    { year: "2016", title: "Lancement des programmes Master", desc: "Ouverture des cycles Master en partenariat avec des universités internationales." },
    { year: "2020", title: "Transformation numérique", desc: "Digitalisation complète des ressources pédagogiques et déploiement des cours hybrides." },
    { year: "2025", title: "5 000+ étudiants & 10 filières", desc: "Aujourd'hui, le Groupe CERIN est l'un des établissements privés leaders en Afrique de l'Ouest." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "#F0FAF0", color: G }}>Notre histoire</span>
          <h2 className="text-gray-900" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 800 }}>
            25 ans d'excellence éducative
          </h2>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 hidden lg:block" style={{ background: "linear-gradient(to bottom, transparent, #E5E7EB, transparent)", transform: "translateX(-50%)" }} />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={item.year} className={`flex items-center gap-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                <div className="flex-1 hidden lg:block" />
                {/* Center dot */}
                <div className="hidden lg:flex w-12 h-12 rounded-full items-center justify-center shrink-0 z-10" style={{ background: i % 2 === 0 ? G : Y, boxShadow: `0 0 0 4px white, 0 0 0 6px ${i % 2 === 0 ? G : Y}40` }}>
                  <span className="text-xs font-black" style={{ color: i % 2 === 0 ? "white" : "#0B0B0B", fontFamily: "'Poppins', sans-serif" }}>{item.year.slice(2)}</span>
                </div>
                <div className="flex-1">
                  <div className="p-6 rounded-2xl hover:shadow-lg transition-all" style={{ background: BG }}>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3" style={{ background: i % 2 === 0 ? G : Y, color: i % 2 === 0 ? "white" : "#0B0B0B" }}>{item.year}</span>
                    <h3 className="font-bold text-gray-800 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VisionMission() {
  return (
    <section className="py-20" style={{ background: "#0B0B0B" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {[
            { icon: Eye, title: "Notre Vision", color: G, content: "Être l'institution éducative de référence en Afrique de l'Ouest, reconnue pour l'excellence de ses formations, la qualité de son encadrement et le rayonnement de ses diplômés à l'échelle internationale." },
            { icon: Target, title: "Notre Mission", color: Y, content: "Offrir à chaque étudiant un parcours académique et professionnel personnalisé, centré sur l'acquisition de compétences concrètes, la pensée critique et les valeurs humaines qui font les leaders de demain." },
          ].map(({ icon: Icon, title, color, content }) => (
            <div key={title} className="p-8 rounded-3xl" style={{ border: `2px solid ${color}30`, background: `${color}08` }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: color === G ? "rgba(122,201,67,0.15)" : "rgba(244,208,0,0.15)" }}>
                <Icon size={26} style={{ color }} />
              </div>
              <h3 className="font-black text-white text-xl mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>{title}</h3>
              <p className="text-gray-400 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  const vals = [
    { icon: Star, title: "Excellence", desc: "Nous visons les plus hauts standards académiques et pédagogiques dans tout ce que nous faisons.", color: G },
    { icon: Heart, title: "Bienveillance", desc: "Chaque étudiant est unique. Nous l'accompagnons avec respect, empathie et attention.", color: Y },
    { icon: Shield, title: "Intégrité", desc: "Transparence, honnêteté et éthique guident chacune de nos décisions institutionnelles.", color: G },
    { icon: Users, title: "Communauté", desc: "Ensemble nous sommes plus forts. La solidarité et l'entraide sont au cœur de notre culture.", color: Y },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "#F0FAF0", color: G }}>Nos valeurs</span>
          <h2 className="text-gray-900" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.5rem)", fontWeight: 800 }}>Ce qui nous anime</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {vals.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="p-6 rounded-2xl text-center hover:-translate-y-1 hover:shadow-lg transition-all" style={{ background: BG }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: v.color === G ? "#F0FAF0" : "#FFF8CC" }}>
                  <Icon size={26} style={{ color: v.color }} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>{v.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Director() {
  return (
    <section className="py-20" style={{ background: BG }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://source.unsplash.com/600x400/?school,students"
              alt="Directeur Général"
              className="w-full rounded-3xl object-cover"
              style={{ height: "450px", boxShadow: "0 16px 48px rgba(0,0,0,0.15)" }}
             onError={(e) => {
    e.currentTarget.src = '/images/placeholder.jpg';
    e.currentTarget.onerror = null;
  }} />
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-5 py-4 shadow-xl">
              <p className="font-black text-gray-900 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>Prof. Antoine Nkomo</p>
              <p className="text-xs" style={{ color: G }}>Fondateur & Directeur Général</p>
            </div>
          </div>
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ background: "#F0FAF0", color: G }}>Message du Directeur</span>
            <h2 className="text-gray-900 mb-5" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800 }}>
              "L'éducation est le plus bel investissement pour l'avenir"
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
              Depuis la fondation du Groupe CERIN en 1998, notre engagement est inébranlable : offrir à chaque jeune Ivoirien les meilleures chances de réussir dans un monde en constante évolution.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              Nos 5 000 étudiants et nos centaines de diplômés qui rayonnent dans les entreprises et institutions du pays témoignent de la force de notre mission éducative.
            </p>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" viewBox="0 0 20 20" fill={Y}><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <PageHero
        title="À propos du Groupe CERIN"
        subtitle="25 ans au service de l'éducation, de l'excellence et du développement humain en Afrique de l'Ouest."
        image="https://source.unsplash.com/1200x600/?university,campus,africa"
        breadcrumbs={[{ label: "À propos" }]}
        accent={G}
      />
      <History />
      <VisionMission />
      <Values />
      <Director />
    </>
  );
}
