import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import NavbarFullscreenStatic from '@/components/ui/NavbarFullscreenStatic';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Facebook, Instagram, Phone } from "lucide-react";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Menu",
    "href": "#menu"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  { name: "Menu", href: "/menu" },

];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="noise" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFullscreenStatic
      logo="Tuto"
      ctaButton={{
        text: "Book Now",
        href: "tel:02081497688",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <footer data-section="footer" aria-label="Site footer" className="relative w-full py-20">
          <div className="flex flex-col w-content-width mx-auto px-10 pb-5 rounded-lg card">
            <div className="py-12 text-center">
              <h2 className="text-5xl 2xl:text-6xl leading-[1.15] font-semibold text-balance">Tuto Restaurant</h2>
            </div>
            <div className="h-px w-full mb-5 bg-foreground/50" />
            <div className="flex flex-col gap-3 items-center justify-between md:flex-row">
              <span className="text-base opacity-75">© 2026 Tuto Restaurant. All rights reserved.</span>
              <div className="flex items-center gap-3">
                <a href="#" className="flex items-center justify-center size-10 rounded-full primary-button text-primary-cta-text">
                  <Instagram className="size-4" strokeWidth={1.5} />
                </a>
                <a href="#" className="flex items-center justify-center size-10 rounded-full primary-button text-primary-cta-text">
                  <Facebook className="size-4" strokeWidth={1.5} />
                </a>
                <a href="tel:02081497688" className="flex items-center justify-center size-10 rounded-full primary-button text-primary-cta-text">
                  <Phone className="size-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
