import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useState } from "react";

const MenuSection = ({ translations, language }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "traditional", label: translations.menu.categories.traditional },
    { id: "desserts", label: translations.menu.categories.desserts },
    { id: "hotMeals", label: translations.menu.categories.hotMeals },
    { id: "drinks", label: translations.menu.categories.drinks },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section
      className="h-full w-full overflow-y-auto py-12 md:py-16 px-4 md:px-6 pb-24 md:pb-16"
      style={{ background: "linear-gradient(to bottom, #FFF5F5 0%, #FFFFFF 100%)" }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4"
            style={{
              background: "linear-gradient(135deg, #731919, #E52B2B, #FF6B6B)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {translations.menu.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {translations.menu.subtitle}
          </motion.p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              variant={activeCategory === cat.id ? "default" : "outline"}
              className="text-sm md:text-base"
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredProducts.map((product, index) => (
            <Tilt
              key={product.id}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              scale={1.02}
              data-aos="flip-up"
              data-aos-delay={index * 100}
            >
              <Card className="h-full flex flex-col bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={product.image}
                    alt={product.name[language]}
                    className="w-full h-full object-cover"
                  />
                  {product.popular && (
                    <Badge
                      className="absolute top-2 md:top-3 right-2 md:right-3 border-0 shadow-lg text-xs"
                      style={{ background: "linear-gradient(135deg, #FFA500, #FF6347)" }}
                    >
                      {translations.menu.popular}
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <CardHeader className="p-3 md:p-4">
                  <CardTitle className="text-lg md:text-xl" style={{ color: "#731919" }}>
                    {product.name[language]}
                  </CardTitle>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {product.description[language]}
                  </p>
                </CardHeader>

                <CardContent className="flex-grow p-3 md:p-4 pt-0">
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-2xl md:text-3xl font-bold"
                      style={{ color: "#E52B2B" }}
                    >
                      €{product.price.toFixed(2)}
                    </span>
                  </div>
                </CardContent>

                {/* Footer bez add-to-cart dugmeta (samo cijena ili prazan) */}
                <CardFooter className="mt-auto p-3 md:p-4 pt-0" />
              </Card>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
