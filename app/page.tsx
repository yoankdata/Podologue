import { Hero } from "@/components/sections/Hero";
import { ExpertiseGrid } from "@/components/sections/ExpertiseGrid";

// Méta-données spécifiques à la page d'accueil
export const metadata = {
  title: "Cabinet de Pédicurie-Podologie Vanessa LAGARRIGUE | Toulouse Sept Deniers",
  description: "Pédicure-Podologue à Toulouse Sept Deniers (31200). Soins de pédicurie, semelles orthopédiques thermoformées, podologie du sport et posturologie. Prenez RDV en ligne.",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      {/* 1. HERO: Promesse + Autorité immédiate */}
      <Hero />

      {/* 2. EXPERTISE: Vos outils, regroupés par valeur */}
      <ExpertiseGrid />
    </div>
  );
}