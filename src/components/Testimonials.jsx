"use client";

import { useState } from "react";
import { TestimonialCard } from "@/components/ui/testimonial-cards";
import content from "@/data/content.json";

// We need an array of images for the testimonials
const UNPLASH_IMAGES = [
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=300", 
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300"
];

const testimonialsData = content.testemunhos.map((t, i) => ({
  id: i + 1,
  testimonial: t.texto,
  author: t.nome,
  role: t.origem,
  imageSrc: UNPLASH_IMAGES[i % UNPLASH_IMAGES.length]
}));

export default function Testimonials() {
  const [positions, setPositions] = useState(["front", "middle", "back"]);

  const handleShuffle = () => {
    const newPositions = [...positions];
    newPositions.unshift(newPositions.pop());
    setPositions(newPositions);
  };

  return (
    <section id="testemunhos" className="py-20 lg:py-28 bg-background overflow-hidden overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-wider uppercase mb-3">
            Testemunhos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            O que dizem os nossos{" "}
            <span className="text-blue-600">pacientes</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A satisfação de quem nos escolhe é o melhor indicador da qualidade
            do nosso trabalho.
          </p>
        </div>

        {/* Shuffle Cards Layout */}
        <div className="flex justify-center items-center py-12 px-8 min-h-[500px]">
          {/* We use negative margin here to account for the card translation to keeping it centered in standard viewport sizes */}
          <div className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                {...testimonial}
                handleShuffle={handleShuffle}
                position={positions[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
