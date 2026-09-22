import FeaturesFilterGrid from "@/components/sections/features/FeaturesFilterGrid";

export default function MenuPage() {
  return (
    <>
      <div data-webild-section="FeaturesFilterGrid"><FeaturesFilterGrid
        tag="E17 Italian Kitchen"
        title="Crafted with Passion & Italian Heritage"
        description="Explore hand-crafted starters, wood-fired pizzas, fresh pasta, rich mains, sides, desserts, and drinks made fresh daily in Walthamstow."
        categories={["All","Starters","Pizza","Pasta","Mains","Sides","Desserts","Drinks"]}
        items={[{"name":"Burrata & Heirloom Tomatoes","category":"Starters","imageSrc":"https://img.freepik.com/free-photo/caprese-salad-with-mozzarella-tomatoes_23-2148281890.jpg"},{"name":"Wood-Fired Margherita","category":"Pizza","imageSrc":"https://img.freepik.com/free-photo/freshly-baked-pizza-wooden-board_23-2149028913.jpg"},{"name":"Handmade Tagliatelle Ragù","category":"Pasta","imageSrc":"https://img.freepik.com/free-photo/pasta-spaghetti-with-tomato-sauce-cheese_23-2148008272.jpg"},{"name":"Slow-Cooked Ossobuco","category":"Mains","imageSrc":"https://img.freepik.com/free-photo/grilled-meat-steak-with-herbs-spices_23-2148293963.jpg"},{"name":"Rosemary & Sea Salt Focaccia","category":"Sides","imageSrc":"https://img.freepik.com/free-photo/side-view-focaccia-bread-with-rosemary_23-2148814392.jpg"},{"name":"Traditional Tiramisù","category":"Desserts","imageSrc":"https://img.freepik.com/free-photo/tiramisu-dessert-served-plate_23-2148651034.jpg"},{"name":"Classic Aperol Spritz","category":"Drinks","imageSrc":"https://img.freepik.com/free-photo/glass-cocktail-with-orange-slice_23-2148651035.jpg"},{"name":"Antipasto Misto Board","category":"Starters","imageSrc":"https://img.freepik.com/free-photo/delicious-italian-food-composition_23-2148906233.jpg"}]}
        textAnimation="fade-blur"
      /></div>
    </>
  );
}
