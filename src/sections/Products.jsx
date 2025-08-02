// import React from "react";
import ProductCard from "../components/ProductCard";
// import product1 from "/products/img1.jpeg";
// import product2 from "/products/img2.jpeg";
// import product3 from "/products/img3.jpeg";
// import product4 from "/products/img4.jpeg";
// import product5 from "/products/img5.jpeg";
// import product6 from "/products/img6.jpeg";
// import product7 from "/products/img7.jpeg";
// import product8 from "/products/img8.jpeg";
// import product9 from "/products/img9.jpeg";
// import product10 from "/products/img10.jpeg";
// import product11 from "/products/img11.jpeg";
// import product12 from "/products/img12.jpeg";

const Products = () => {
  const productData = [
    {
      image: "/products/img1.jpeg",
      title: "Labubu Bunny Keychain",
      description:
        "Soft, collectible, and full of charm. Meet Labubu — your quirky new companion! & more colors available",
      tag: "Trending Now",
      price: "599",
    },
    {
      image: "/products/img2.jpeg",
      title: "Colorful Labubu  Collection",
      description:
        "Collect them all! Each Labubu comes in a fun, vibrant color — same quirky charm, endless personality.",
      tag: "Trending Now",
      price: "1200",
    },
    {
      image: "/products/img3.jpeg",
      title: "3D Moon Night Light Lamp",
      description:
        "Bring the moon to your room! This 3D-printed Moon Lamp glows in warm and cool tones",
      tag: "Trending Now",
      price: "499",
    },
    {
      image: "/products/img4.jpeg",
      title: "Solar System Crystal Lamp",
      description:
        "A stunning fusion of science and serenity — this 3D-engraved crystal planets balls",
      tag: "Trending Now",
      price: "349",
    },
    {
      image: "/products/img5.jpeg",
      title: "Tap Extender for kitchen Sink",
      description:
        "Flexible 360° swivel tap extender for easy rinsing and splash-free cleaning.",
      tag: "Trending Now",
      price: "349",
    },
    {
      image: "/products/img6.jpeg",
      title: "Stanley Quencher Tumbler",
      description:
        "Hydrate in style. Keeps drinks hot or cold for hours with a spill-resistant lid and sleek design.",
      tag: "Trending Now",
      price: "1999",
    },
    {
      image: "/products/img7.jpeg",
      title: "Super Silent Water Fan",
      description:
        "Stay cool in peace. Whisper-quiet breeze with a refreshing mist — perfect for work, sleep, or study.",
      tag: "Trending Now",
      price: "499",
    },
    {
      image: "/products/img8.jpeg",
      title: "Aurora Waves Ambient Lamp",
      description:
        "Dreamy, color-shifting waves that light up your space with a calming, magical ambiance.",
      tag: "Trending Now",
      price: "399",
    },
    {
      image: "/products/img9.jpeg",
      title: "Electric Scalp Massager",
      description:
        "Scalp Massager, Portable  Waterproof Massager, 3 Modes, Handheld Head Massager for Head.",
      tag: "Trending Now",
      price: "599",
    },
    {
      image: "/products/img10.jpeg",
      title: "Portable Sealer",
      description:
        "Portable Mini Sealing Machine, Packet Sealer for Food, Snacks, Plastic Bags Sealing",
      tag: "Trending Now",
      price: "149",
    },
    {
      image: "/products/img11.jpeg",
      title: "Solar Car Air Refresher",
      description:
        "Breathe fresh, drive fresh — solar-powered and scent-filled for a clean, energized car every ride.",
      tag: "Trending Now",
      price: "599",
    },
    {
      image: "/products/img12.jpeg",
      title: "Mini Turbo Jet Blower",
      description:
        "Compact but powerful — blast away dust in seconds with this turbo-charged mini blower.",
      tag: "Trending Now",
      price: "1999",
    },
  ];

  return (
    <section id="products" className="scroll-mt-20 mb-32 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Explore Our Trending Picks
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We showcase the coolest products that dominate the internet. These
          aren’t your regular finds — they’re viral, visual, and perfect for
          trendsetters.
        </p>
        <div className="px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
            {productData.map((item, index) => (
              <ProductCard
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                tag={item.tag}
                price={item.price}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
