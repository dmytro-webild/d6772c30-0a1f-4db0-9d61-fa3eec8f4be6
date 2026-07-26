import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroTiltedCards from '@/components/sections/hero/HeroTiltedCards';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import TestimonialMarqueeCards from '@/components/sections/testimonial/TestimonialMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroTiltedCards
      tag="Authentic Cuisine"
      title="Experience Italy in London"
      description="Tuto Restaurant brings the traditional flavors of Italy to 110 Wood Street. Join us for a culinary journey of passion and quality."
      primaryButton={{
        text: "Call to Book",
        href: "tel:02081497688",
      }}
      secondaryButton={{
        text: "See Menu",
        href: "#menu",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/wedding-reception-room-with-decorated-table-setting-sea-view-through-window_637285-984.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-man-putting-mozzarella-baked-pizza-dough-with-smoked-salmon-slices_23-2148785701.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-sandwiches-with-tomatoes-olives-inside-plate-white-background-toast-bread-lunch-burger-horizontal-meal-food_140725-158810.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/spaghetti-with-mussels-bell-peppers-served-with-white-wine_140725-8468.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-tasty-meatballs-soup-with-vegetables-dark-table-sauce-dish-colors_140725-81719.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutMediaOverlay
      tag="Our Story"
      title="Authentic Italian Hospitality"
      description="Tuto Restaurant is a family-run gem in E17. We pride ourselves on using locally sourced ingredients alongside the finest Italian imports to craft dishes that honor our heritage."
      imageSrc="http://img.b2bpic.net/free-photo/surface-with-different-foodstuffs_23-2147612075.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="menu" data-section="menu">
    <SectionErrorBoundary name="menu">
          <FeaturesRevealCardsBento
      tag="From the Kitchen"
      title="Our Signature Flavors"
      description="Explore our curated selection of classic Italian dishes."
      items={[
        {
          title: "Homemade Pasta",
          description: "Freshly prepared daily with traditional techniques.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/baking-delicious-pizza-with-wood-fired-oven_23-2150134278.jpg",
        },
        {
          title: "Wood-Fired Pizza",
          description: "Crispy base, authentic toppings, perfection.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/salad-with-tomato-cheese-slices_140725-2835.jpg",
        },
        {
          title: "Seafood Special",
          description: "Fresh catch prepared in the Mediterranean style.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/red-wine-carafe-glass-table_23-2149706791.jpg",
        },
        {
          title: "Antipasti Platter",
          description: "Perfect selection to start your dining journey.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/minestrone-soup-pan-light-table-top-view-italian-soup-with-pasta-seasonal-vegetables-delicious-vegetarian-food-concept_127032-2696.jpg",
        },
        {
          title: "Classic Risotto",
          description: "Creamy, flavorful, and cooked to perfection.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/plate-with-delicious-italian-pasta-dish_23-2149460134.jpg",
        },
        {
          title: "Tiramisu",
          description: "Our signature Italian dessert ender.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/healthy-mexican-salad_23-2148140257.jpg",
        },
        {
          title: "Fine Wines",
          description: "Curated selection from Italian regions.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/cast-iron-pan-mussels-cream-sauce-garnished-with-fresh-herbs_140725-1442.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Our Excellence"
      title="Rated Among the Best"
      description="Our dedication to quality has earned us a prestigious 4.8-star rating from our wonderful diners."
      metrics={[
        {
          value: "4.8",
          title: "Google Rating",
          features: [
            "Over 100+ Reviews",
            "Top Rated Quality",
            "Authentic Experience",
          ],
        },
        {
          value: "110",
          title: "Location",
          features: [
            "110 Wood St, London",
            "E17 3HX",
            "Easy Access",
          ],
        },
        {
          value: "0208",
          title: "Contact",
          features: [
            "Call for Reservations",
            "Daily Support",
            "Open Hours Available",
          ],
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialMarqueeCards
      tag="Diner Reviews"
      title="Words from our Customers"
      description="Join our community of happy diners who love the Tuto experience."
      testimonials={[
        {
          name: "Sarah J.",
          role: "Foodie",
          quote: "The absolute best Italian food in E17. Pasta is always fresh and perfect.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-beautiful-black-skinned-woman-wearing-blouse-flower-headband-enjoying-dinner-while-eating-restaurant_613910-5658.jpg",
        },
        {
          name: "Mark D.",
          role: "Local",
          quote: "Fantastic service and incredible wine list. Highly recommend the risotto.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-male-courier-yellow-uniform-cape-with-round-delivery-bowl-his-hands-pink-background_140725-40591.jpg",
        },
        {
          name: "Elena V.",
          role: "Diner",
          quote: "A truly authentic atmosphere. Felt like I was back in Rome for a few hours.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-asian-man-friends-reunion_23-2149244687.jpg",
        },
        {
          name: "David R.",
          role: "Guest",
          quote: "The 4.8 rating is well deserved. Everything from appetizer to dessert was flawless.",
          imageSrc: "http://img.b2bpic.net/free-photo/enthusiastic-asian-female-entrepreneur-cafe-owner-with-tablet-wearing-shop-uniform-standing-with_1258-197423.jpg",
        },
        {
          name: "Claire P.",
          role: "Frequent Diner",
          quote: "The staff are so friendly and the quality of ingredients really shines through.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-dinner_23-2148060594.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="Common Questions"
      title="Everything You Need to Know"
      description="Have questions about your visit? Here are the most frequently asked questions."
      items={[
        {
          question: "Do I need to book in advance?",
          answer: "We strongly recommend booking in advance, especially for weekend evenings.",
        },
        {
          question: "Where are you located?",
          answer: "Find us at 110 Wood St, London E17 3HX.",
        },
        {
          question: "Do you offer vegetarian options?",
          answer: "Yes, we have a variety of delicious vegetarian dishes on our menu.",
        },
        {
          question: "Can I bring my family?",
          answer: "Absolutely! We welcome families and provide a warm environment for all.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-crystal-glasses_1203-631.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Ready to Visit?"
      text="Call us today to reserve your table and enjoy the finest Italian dining in Walthamstow."
      primaryButton={{
        text: "Call Now",
        href: "tel:02081497688",
      }}
      secondaryButton={{
        text: "Get Directions",
        href: "https://maps.app.goo.gl/deDepYPcpYD5o9nt7",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
