import React from 'react';
import TextAnimation from "@/components/ui/TextAnimation";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function MetricsSection() {
  const metrics = [
    {
      value: "10+",
      label: "Years Experience",
    },
    {
      value: "5k+",
      label: "Happy Customers",
    },
    {
      value: "50+",
      label: "Menu Items",
    },
    {
      value: "4.9",
      label: "Star Rating",
    }
  ];

  return (
    <section id="metrics" className="bg-background">
      <div className="flex flex-col w-content-width mx-auto">
        <div className="text-center flex flex-col items-center gap-4">
          <TextAnimation 
            text="Tuto Restaurant" 
            variant="slide-up" 
            gradientText={true} 
            tag="h2" 
            className="text-5xl md:text-6xl font-bold" 
          />
        </div>
        <ScrollReveal variant="slide-up">
          <GridOrCarousel>
            {metrics.map((m, i) => (
              <div key={i} className="card p-8 rounded flex flex-col items-center text-center gap-2">
                <span className="text-5xl font-bold text-primary-cta">{m.value}</span>
                <span className="text-lg font-medium">{m.label}</span>
              </div>
            ))}
          </GridOrCarousel>
        </ScrollReveal>
      </div>
    </section>
  );
}