import { Quote, Star } from "lucide-react";

export interface TestimonialCardData {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  stars: number;
}

export function TestimonialCard({ testimonial, isActive = false }: { testimonial: TestimonialCardData; isActive?: boolean }) {
  return (
    <div 
      className={`relative rounded-2xl p-8 md:p-10 transition-all duration-300 ${
        isActive ? "scale-100 opacity-100" : "scale-95 opacity-60 pointer-events-none"
      }`}
      style={{ 
        background: "white", 
        boxShadow: isActive ? "0 12px 48px rgba(46,168,42,0.15)" : "0 4px 20px rgba(0,0,0,0.08)"
      }}
      role="article"
      aria-label={`Témoignage de ${testimonial.name}`}
    >
      {/* Quote icon - top right */}
      <div 
        className="absolute top-6 right-6 w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ background: "#F0FAF0" }}
        aria-hidden="true"
      >
        <Quote size={24} style={{ color: "#2EA82A" }} />
      </div>

      {/* Star rating */}
      <div className="flex gap-1 mb-6" role="img" aria-label={`${testimonial.stars} sur 5 étoiles`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            fill={i < testimonial.stars ? "#F5C800" : "#E5E7EB"}
            style={{ color: i < testimonial.stars ? "#F5C800" : "#D1D5DB" }}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Quote text */}
      <blockquote 
        className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 max-w-2xl"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        "{testimonial.quote}"
      </blockquote>

      {/* Author info */}
      <div className="flex items-center gap-4">
        <img  
          src={testimonial.avatar} 
          alt={`${testimonial.name} - Portrait`}
          className="w-14 h-14 rounded-full object-cover border-2"
          style={{ borderColor: "#2EA82A" }}
         onError={(e) => {
    e.currentTarget.src = '/images/placeholder.jpg';
    e.currentTarget.onerror = null;
  }} />
        <div>
          <p 
            className="font-bold text-gray-900"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {testimonial.name}
          </p>
          <p className="text-sm font-medium" style={{ color: "#2EA82A" }}>
            {testimonial.role}
          </p>
          <p className="text-xs text-gray-500">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
}
