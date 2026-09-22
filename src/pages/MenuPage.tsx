import React from "react";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import FeaturesFilterGrid from "@/components/sections/features/FeaturesFilterGrid";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { routes } from "@/routes";

const categories = ["Starters", "Pizza", "Pasta", "Mains", "Sides", "Desserts", "Drinks"];

const menuItems = [
  { name: "Truffle Arancini", category: "Starters", imageSrc: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=600&q=80" },
  { name: "Burrata & Tomatoes", category: "Starters", imageSrc: "https://images.unsplash.com/photo-1592417817098-8f3d6eb1b7a5?auto=format&fit=crop&w=600&q=80" },
  { name: "Margherita Sublime", category: "Pizza", imageSrc: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80" },
  { name: "Diavola Spicy Salami", category: "Pizza", imageSrc: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80" },
  { name: "Handmade Tagliatelle Ragu", category: "Pasta", imageSrc: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80" },
  { name: "Truffle Cacio e Pepe", category: "Pasta", imageSrc: "https://images.unsplash.com/photo-1621996346565-e3d5d6288339?auto=format&fit=crop&w=600&q=80" },
  { name: "Barolo Braised Beef", category: "Mains", imageSrc: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" },
  { name: "Pan-Seared Sea Bass", category: "Mains", imageSrc: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80" },
  { name: "Parmesan Truffle Fries", category: "Sides", imageSrc: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80" },
  { name: "Classic Tiramisu", category: "Desserts", imageSrc: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80" },
  { name: "Aged Negroni", category: "Drinks", imageSrc: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80" },
  { name: "Aperol Spritz", category: "Drinks", imageSrc: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80" }
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="BellaGusto"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Book Table", href: "/contact" }}
      />

      <HeroBillboard
        tag="Culinary Experience"
        title="Explore Our Artisanal Menu"
        description="Fresh seasonal ingredients, hand-rolled pasta, and traditional wood-fired pizzas."
        primaryButton={{ text: "View Dishes", href: "#menu" }}
        secondaryButton={{ text: "Reserve Table", href: "/contact" }}
        textAnimation="slide-up"
      />

      <div className="sticky top-16 z-30 border-y border-border bg-background/95 backdrop-blur-md py-4">
        <div className="container mx-auto flex items-center justify-center gap-2 overflow-x-auto px-4">
          {categories.map((cat) => (
            <a
              key={cat}
              href="#menu"
              className="px-4 py-2 text-sm font-medium transition-colors rounded-full bg-card hover:bg-primary-cta hover:text-primary-cta hover:bg-opacity-90 border border-border shrink-0"
            >
              {cat}
            </a>
          ))}
        </div>
      </div>

      <div id="menu">
        <FeaturesFilterGrid
          tag="Full Selection"
          title="Curated Italian Delicacies"
          description="Filter by category to explore our authentic recipes made fresh daily."
          categories={categories}
          items={menuItems}
          textAnimation="slide-up"
        />
      </div>

      <ContactCta
        tag="Reservations"
        text="Planning a special dinner? Reserve your table in advance for an unforgettable evening."
        primaryButton={{ text: "Book a Table", href: "/contact" }}
        secondaryButton={{ text: "Contact Us", href: "/contact" }}
        textAnimation="slide-up"
      />

      <FooterSimple
        brand="BellaGusto"
        copyright="© 2025 BellaGusto Restaurant. All rights reserved."
        columns={[
          { title: "Navigation", items: routes.map((r) => ({ label: r.label, href: r.path })) },
          { title: "Hours", items: [{ label: "Mon-Fri: 12pm - 10pm" }, { label: "Sat-Sun: 11am - 11pm" }] }
        ]}
        links={[{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Service", href: "/terms" }]}
      />
    </div>
  );
}