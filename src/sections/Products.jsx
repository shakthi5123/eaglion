// import React from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const productData = [
    {
      image: "/products/img1.jpeg",
      title: "Labubu Bunny Keychain",
      description:
        "Soft, collectible, and full of charm. Meet Labubu — your quirky new companion! & more colors available",
      tag: "Trending Now",
      price: "999",
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
      title: "Moon Crystal Light Lamp",
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
      title: "Mini Travel Fruit Juice Blender",
      description:
        "Easy to make juice, milkshake, smoothie and other baby food. It's very portable and great for traveling.",
      tag: "Trending Now",
      price: "699",
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
      title: "Gua Sha face massager",
      description:
        "Gua Sha Face Massager Tool For Glowing Skin & Reducing Stress & Eye Puffiness and Relax Muscles.",
      tag: "Trending Now",
      price: "229",
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
      price: "699",
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
      title: "Rechargeable Panda Lamp",
      description:
        "Bring warmth and charm into your room with this adorable panda-shaped lamp.",
      tag: "Trending Now",
      price: "349",
    },
    {
      image: "/products/img12.jpeg",
      title: "Mini Bugatti Toy Car",
      description:
        "Made from durable steel with a sleek finish. This small-sized collectible is perfect for kids or car enthusiast.",
      tag: "Trending Now",
      price: "1599",
    },
    {
      image: "/products/img13.jpeg",
      title: "Dream Rotating Lamp",
      description:
        "Create a magical night sky indoors with the Star Master Dream Rotating Projection Lamp.",
      tag: "Trending Now",
      price: "349",
    },
    {
      image: "/products/img14.jpeg",
      title: "Astronaut Galaxy Projector",
      description:
        "Transform your room into a cosmic wonder with mesmerizing nebula and star projections.",
      tag: "Trending Now",
      price: "699",
    },
    {
      image: "/products/img15.jpeg",
      title: "Titanic Liquid Desk Toy",
      description:
        "A mini floating Titanic in liquid, perfect as a paperweight or desk decor.",
      tag: "Trending Now",
      price: "349",
    },
    {
      image: "/products/img16.jpeg",
      title: "Hot Wheels Car Collection",
      description:
        "A set of stylish, high-speed miniature cars built for racing fun and collecting.",
      tag: "Trending Now",
      price: "799",
    },
    {
      image: "/products/img17.jpeg",
      title: "Baby casting kit",
      description:
        "Create lasting 3D hand and foot impressions of your baby with safe, easy-to-use materials.",
      tag: "Trending Now",
      price: "799",
    },
    {
      image: "/products/img18.jpeg",
      title: "BMW Car Toy",
      description:
        "A durable, sleek miniature made from premium steel, perfect for kids and collectors alike.",
      tag: "Trending Now",
      price: "1999",
    },
    {
      image: "/products/img19.jpeg",
      title: "Wireless Keyboard and Mouse ",
      description:
        "Sleek, ergonomic, and cable-free set for smooth typing and precise control.",
      tag: "Trending Now",
      price: "1499",
    },
    {
      image: "/products/img20.jpeg",
      title: "Rolls-Royce Toy Car",
      description:
        "A premium miniature with sleek detailing and durable build, perfect for kids or collectors.",
      tag: "Trending Now",
      price: "1499",
    },
    {
      image: "/products/img21.jpeg",
      title: "Luxurious Desktop Lamp ",
      description:
        "Elegant design with premium finish, offering warm ambient lighting for a stylish workspace.",
      tag: "Trending Now",
      price: "599",
    },
    {
      image: "/products/img22.jpeg",
      title: "Glass sippy cup ",
      description:
        "Safe, durable, and eco-friendly cup with spill-proof design, perfect for toddlers transitioning from bottles.",
      tag: "Trending Now",
      price: "399",
    },
    {
      image: "/products/img23.jpeg",
      title: "Rolls-Royce Toy Car",
      description:
        "A premium miniature with sleek detailing and durable build, perfect for kids or collectors.",
      tag: "Trending Now",
      price: "1900",
    },
    {
      image: "/products/img24.jpeg",
      title: "LED Mirror Light",
      description:
        "Modern mirror with built-in electronic light, temperature display, and sleek design for any room.",
      tag: "Trending Now",
      price: "799",
    },
    {
      image: "/products/img25.jpeg",
      title: "Waterproof Speaker",
      description:
        "Portable, durable, and splash-proof with powerful sound for indoor and outdoor use.",
      tag: "Trending Now",
      price: "799",
    },
    {
      image: "/products/img26.jpeg",
      title: "Micro stream iron machine ",
      description:
        "Compact and portable steamer for quick wrinkle removal and easy garment care.",
      tag: "Trending Now",
      price: "799",
    },
    {
      image: "/products/img27.jpeg",
      title: "Toy car Steel",
      description:
        " Durable miniature car with sleek design, perfect for kids and collectors alike.",
      tag: "Trending Now",
      price: "1599rs",
    },
    {
      image: "/products/img28.jpeg",
      title: "Modern crystal lamp",
      description:
        " Elegant design with sparkling crystal accents, perfect for adding a touch of luxury to any room.",
      tag: "Trending Now",
      price: "799",
    },
    {
      image: "/products/img29.jpeg",
      title: "Bluetooth speaker ",
      description:
        "Compact, wireless, and delivers powerful sound anywhere.",
      tag: "Trending Now",
      price: "1699",
    },
    {
      image: "/products/img30.jpeg",
      title: "Ferrari Toy Car",
      description:
        "Sleek, high-quality miniature car designed for collectors and racing enthusiasts.",
      tag: "Trending Now",
      price: "1799",
    },
    {
      image: "/products/img31.jpeg",
      title: "Cosmetic storage makeup box",
      description:
        " Stylish and organized makeup storage with compartments to keep all your beauty essentials",
      tag: "Trending Now",
      price: "2499",
    },
    {
      image: "/products/img32.jpeg",
      title: "P9 headset",
      description:
        "Comfortable, high-quality audio headset with clear sound for gaming, calls, or music.",
      tag: "Trending Now",
      price: "1299",
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
