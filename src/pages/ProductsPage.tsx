import React from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import FeaturesFilterGrid from "@/components/sections/features/FeaturesFilterGrid";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function ProductsPage() {
  const menuCategories = ["Starters", "Pizza", "Pasta", "Mains", "Sides", "Desserts", "Drinks"];

  const menuItems = [
    { name: "Artisanal Garlic Bread", category: "Starters", imageSrc: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80" },
    { name: "Truffle Burrata", category: "Starters", imageSrc: "https://images.unsplash.com/photo-1592417817098-8f3d69293149?auto=format&fit=crop&w=800&q=80" },
    { name: "Margherita Speciale", category: "Pizza", imageSrc: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80" },
    { name: "Spicy Diavola", category: "Pizza", imageSrc: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80" },
    { name: "Creamy Carbonara", category: "Pasta", imageSrc: "https://images.unsplash.com/photo-1621996346565-e3d5d6281318?auto=format&fit=crop&w=800&q=80" },
    { name: "Wild Mushroom Tagliatelle", category: "Pasta", imageSrc: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80" },
    { name: "Grilled Ribeye Steak", category: "Mains", imageSrc: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" },
    { name: "Pan-Seared Salmon", category: "Mains", imageSrc: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80" },
    { name: "Crispy Truffle Fries", category: "Sides", imageSrc: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=800&q=80" },
    { name: "Classic Tiramisu", category: "Desserts", imageSrc: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80" },
    { name: "Signature Italian Soda", category: "Drinks", imageSrc: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80" },
    { name: "Craft Citrus Lemonade", category: "Drinks", imageSrc: "https://images.unsplash.com/photo-1523371054106-bbf80586c38c?auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="Gourmet Bistro"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Order Online", href: "#menu" }}
      />
      <HeroBillboard
        tag="Our Menu"
        title="Handcrafted Culinary Delights"
        description="Explore our curated selection of fresh starters, wood-fired pizzas, authentic pastas, delicious mains, sides, desserts, and refreshing drinks."
        primaryButton={{ text: "Browse Categories", href: "#menu" }}
        secondaryButton={{ text: "Book a Table", href: "/contact" }}
        imageSrc="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
        textAnimation="slide-up"
      />
      <div id="menu">
        <FeaturesFilterGrid
          tag="Menu Selection"
          title="Explore by Category"
          description="Filter through our signature dishes made fresh to order with authentic seasonal ingredients."
          categories={menuCategories}
          items={menuItems}
          textAnimation="slide-up"
        />
      </div>
      <ContactCta
        tag="Reserve Today"
        text="Ready for an exceptional dining experience? Book your table or order online now."
        primaryButton={{ text: "Order Online", href: "#menu" }}
        secondaryButton={{ text: "Contact Us", href: "/contact" }}
        textAnimation="slide-up"
      />
      <FooterSimple
        brand="Gourmet Bistro"
        columns={[
          { title: "Categories", items: menuCategories.slice(0, 4).map((c) => ({ label: c, href: "#menu" })) },
          { title: "More", items: [{ label: "About Us", href: "/about" }, { label: "Reservations", href: "/contact" }] }
        ]}
        copyright="© 2025 Gourmet Bistro. All rights reserved."
        links={[{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }]}
      />
    </div>
  );
}