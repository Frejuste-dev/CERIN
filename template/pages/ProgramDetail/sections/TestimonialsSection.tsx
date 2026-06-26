import React from "react";
import { TestimonialCarousel } from "../../../components";
import { Program } from "../types/program.types";

interface TestimonialsSectionProps {
  program: Program;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ program }) => {
  const testimonials = program.testimonials.map((t, i) => ({
    id: i,
    name: t.name,
    role: t.role,
    company: t.company,
    avatar: t.avatar,
    quote: t.quote,
    stars: 5
  }));

  return (
    <div className="my-16">
      <TestimonialCarousel variant="premium" testimonials={testimonials} />
    </div>
  );
};
