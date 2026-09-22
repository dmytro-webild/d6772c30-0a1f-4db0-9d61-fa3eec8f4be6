import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AvatarGroup from "@/components/ui/AvatarGroup";
import FeaturesFilterGrid from "@/components/sections/features/FeaturesFilterGrid";
import { ArrowUpRight, Loader2 } from "lucide-react";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import useProducts from "@/hooks/useProducts";

export default function ProductsPage() {
  return (
    <>
      <div data-webild-section="HeroBillboard"><section aria-label="Hero section" className="relative pt-25 pb-20 md:pt-30"><HeroBackgroundSlot /><div className="flex flex-col gap-12 md:gap-15 w-content-width mx-auto"><div className="flex flex-col items-center gap-3 text-center"><AvatarGroup avatarsSrc={["https://img.freepik.com/free-photo/portrait-happy-young-woman-smiling_23-2148435773.jpg","https://img.freepik.com/free-photo/handsome-bearded-man-smiling_23-2148213400.jpg","https://img.freepik.com/free-photo/young-man-cheerful-expression-portrait_23-2148435780.jpg"]} label="Loved by E17 foodies & regulars" className="mb-1" /><TextAnimation text="Handcrafted Pizzas, Pasta & Italian Classics" variant="slide-up" gradientText={true} tag="h1" className="md:max-w-8/10 text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-center text-balance" /><TextAnimation text="Discover authentic stone-baked pizzas, fresh pasta made daily, classic mains, and curated wines crafted with fine Italian imports in E17." variant="slide-up" gradientText={false} tag="p" className="md:max-w-7/10 text-lg md:text-xl leading-snug text-balance" /><div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3"><Button text="Browse Categories" href="#categories" variant="primary" /><Button text="Book a Table" href="/booking" variant="secondary" animationDelay={0.1} /></div></div><ScrollReveal variant="fade-blur" delay={0.2} className="w-full p-2 xl:p-3 2xl:p-4 card rounded overflow-hidden"><ImageOrVideo imageSrc="https://img.freepik.com/free-photo/delicious-pizza-indoors-shot_23-2150873870.jpg" className="aspect-4/5 md:aspect-video" /></ScrollReveal></div></section></div>
      <div data-webild-section="FeaturesFilterGrid"><FeaturesFilterGrid
        tag="Our Menu"
        title="Authentic Italian Dishes Handcrafted in E17"
        description="Explore our handcrafted wood-fired pizzas, fresh pasta, antipasti, and curated wines prepared daily with local ingredients and finest Italian imports."
        categories={["Starters","Pizza","Pasta","Mains","Sides","Desserts","Drinks"]}
        items={[{"name":"Burrata Pugliese & Tomatoes","category":"Starters","imageSrc":"https://img.freepik.com/free-photo/delicious-fresh-burrata-cheese-salad-with-tomatoes-basil-pesto_1268-21245.jpg"},{"name":"Wood-Fired Margherita Verace","category":"Pizza","imageSrc":"https://img.freepik.com/free-photo/crispy-mixed-pizza-with-olives-sausage_140725-1158.jpg"},{"name":"Tagliatelle al Tartufo Fresh Pasta","category":"Pasta","imageSrc":"https://img.freepik.com/free-photo/top-view-delicious-pasta-plate_23-2148567083.jpg"},{"name":"Slow-Braised Chicken Cacciatore","category":"Mains","imageSrc":"https://img.freepik.com/free-photo/grilled-chicken-breast-fried-potatoes-vegetables-plate_2829-19762.jpg"},{"name":"Rosemary & Parmesan Truffle Fries","category":"Sides","imageSrc":"https://img.freepik.com/free-photo/crispy-french-fries-with-sauce-plate_140725-8321.jpg"},{"name":"Classic Tuto House Tiramisù","category":"Desserts","imageSrc":"https://img.freepik.com/free-photo/delicious-tiramisu-dessert-table_23-2148769223.jpg"},{"name":"Signature Italian Negroni","category":"Drinks","imageSrc":"https://img.freepik.com/free-photo/glass-red-cocktail-ice-orange-slice_140725-8022.jpg"}]}
        textAnimation="slide-up"
      /></div>
      <div data-webild-section="ProductMediaCards"><section aria-label="Products section" className="py-20"><div className="w-content-width mx-auto flex justify-center"><Loader2 className="size-8 animate-spin text-foreground" strokeWidth={1.5} /></div></section></div>
    </>
  );
}
