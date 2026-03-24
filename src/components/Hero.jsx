"use client";

import content from "@/data/content.json";
import { PulseFitHero } from "@/components/ui/pulse-fit-hero";

const SERVICE_IMAGES = [
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=500&fit=crop", // Physiotherapy
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=500&fit=crop", // Osteopathy
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=500&fit=crop", // Quiropraxia
  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&h=500&fit=crop", // Massagem
];

const SOCIAL_PROOF_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
];

export default function Hero() {
  const { hero, servicos } = content;

  // Transform data to fit the generic Hero component
  const formatPrograms = servicos.map((service, index) => ({
    image: SERVICE_IMAGES[index] || SERVICE_IMAGES[0],
    category: "Serviço",
    title: service.titulo,
    onClick: () => {
      document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
    },
  }));

  const handlePrimaryClick = () => {
    window.location.href = hero.primaryCtaHref;
  };

  const handleSecondaryClick = () => {
    window.location.href = hero.secondaryCtaHref;
  };

  return (
    <PulseFitHero
      logo={null} // Disabling built-in generic logo since the Navbar handles logo
      navigation={[]} // Disabling built-in generic nav since Navbar handles this
      title={
        <span className="block">
          {hero.headline.split(' ').map((word, i) => 
            word === "Coimbra" ? <span key={i} className="text-blue-600">Coimbra</span> : word + " "
          )}
        </span>
      }
      subtitle={hero.subheadline}
      primaryAction={{
        label: hero.primaryCtaLabel,
        onClick: handlePrimaryClick,
      }}
      secondaryAction={{
        label: hero.secondaryCtaLabel,
        onClick: handleSecondaryClick,
      }}
      socialProof={{
        avatars: SOCIAL_PROOF_AVATARS,
        text: "+1.000 pacientes recuperados",
      }}
      disclaimer={`📍 ${content.morada}`}
      programs={formatPrograms}
      className="pb-20"
    />
  );
}