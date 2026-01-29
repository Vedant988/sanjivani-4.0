import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Download, 
  CheckCircle,
  MessageCircle,
  Package,
  X,
  Eye,
  ShoppingCart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

// Import product images
import saplingTrayImg from "@/assets/products/sapling-germination-tray.png";
import stepperDriverImg from "@/assets/products/dm556-stepper-driver.png";
import bearingImg from "@/assets/products/ucp204-bearing.png";
import conveyorImg from "@/assets/products/seedx-pro-tray-conveyor.png";

interface Product {
  id: number;
  name: string;
  category: string;
  tagline: string;
  features: string[];
  specifications: { label: string; value: string }[];
  price: string;
  image: string;
  inStock: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Sapling Germination Tray",
    category: "Planting",
    tagline: "High-quality plastic trays designed for optimal seedling growth and easy transplanting.",
    features: ["Durable construction", "High-quality material", "Round cavity design", "Perfect for nurseries"],
    specifications: [
      { label: "Material", value: "Plastic" },
      { label: "Cavity Shape", value: "Round" },
      { label: "Number of Cavities", value: "126 per tray" },
      { label: "Tray Size", value: "520 × 340 mm" },
      { label: "Top Diameter (each cavity)", value: "32 mm" },
      { label: "Bottom Diameter (each cavity)", value: "20 mm" },
      { label: "Depth (each cavity)", value: "35 mm" },
    ],
    price: "₹203",
    image: saplingTrayImg,
    inStock: true,
  },
  {
    id: 2,
    name: "DM556 Stepper Driver",
    category: "Processing",
    tagline: "Versatile microstep driver with wide voltage compatibility and built-in protection features.",
    features: ["Wide voltage compatibility", "Overheat protection", "Overcurrent protection", "8-level adjustable current"],
    specifications: [
      { label: "Model", value: "DM556" },
      { label: "Insulation Resistance", value: ">500 MΩ" },
      { label: "Output Current", value: "1.0 to 5.6 A (adjustable, 8 levels, 0.5A resolution)" },
      { label: "Power Supply", value: "DC 20-50V" },
      { label: "Response Frequency", value: "Max 200 kHz" },
      { label: "Dimensions", value: "118 × 75.5 × 34 mm" },
    ],
    price: "₹856",
    image: stepperDriverImg,
    inStock: true,
  },
  {
    id: 3,
    name: "UCP204 Pedestal Bearing Pillow Block Unit",
    category: "Processing",
    tagline: "Durable cast iron and chrome steel bearing unit designed for reliable rotational support.",
    features: ["Durable construction", "High-quality materials", "Chrome steel bearing", "Cast iron housing"],
    specifications: [
      { label: "Shaft Diameter", value: "20 mm" },
      { label: "Material", value: "Cast iron housing with chrome steel bearing" },
      { label: "Color", value: "Blue (full unit)" },
      { label: "Type", value: "Pillow Block Unit" },
    ],
    price: "₹550",
    image: bearingImg,
    inStock: true,
  },
  {
    id: 4,
    name: "Compatible Tray for Seedx Pro Tray Conveyor",
    category: "Planting",
    tagline: "Reliable conveyor components designed for seamless integration with Seedx Pro systems.",
    features: ["Durable build", "Reliable performance", "Compatible with Seedx Pro", "Easy installation"],
    specifications: [
      { label: "Compatibility", value: "Seedx Pro Tray Conveyor System" },
      { label: "Type", value: "Conveyor Component Set" },
    ],
    price: "₹2,498",
    image: conveyorImg,
    inStock: true,
  },
];

const categories = ["All", "Planting", "Processing"];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  // Keyboard support for modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedProduct) {
        setSelectedProduct(null);
      }
    };

    if (selectedProduct) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedProduct]);

  // Get product count for each category
  const getCategoryCount = (category: string) => {
    if (category === "All") return products.length;
    return products.filter(p => p.category === category).length;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-hero-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.25] z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm font-medium mb-6">
              Our Products
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-primary-foreground">
              Innovative Machinery for 
              <span className="text-accent"> Modern Farming</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
              Discover our range of affordable, efficient agricultural equipment 
              designed to maximize your farm's productivity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card-gradient border-b border-border sticky top-16 z-30 backdrop-blur-sm bg-card-gradient/95">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => {
              const count = getCategoryCount(category);
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-background border border-border text-foreground hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  {category}
                  {count > 0 && (
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                      activeCategory === category
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group rounded-3xl bg-card border border-border overflow-hidden hover:shadow-elevated hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                {/* Product Image */}
                <div className="aspect-[3/2] bg-gradient-to-br from-muted/50 to-muted/30 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Stock Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-md ${
                      product.inStock 
                        ? "bg-accent text-accent-foreground" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      <CheckCircle size={14} className={product.inStock ? "text-accent-foreground" : ""} />
                      {product.inStock ? "In Stock" : "Coming Soon"}
                    </span>
                  </div>

                  {/* Quick View Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Button 
                      size="sm" 
                      variant="default"
                      className="shadow-lg"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <Eye size={14} className="mr-1.5" />
                      Quick View
                    </Button>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  {/* Category */}
                  <span className="text-accent text-xs font-semibold uppercase tracking-wide mb-2">
                    {product.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                    {product.tagline}
                  </p>

                  {/* Features Preview */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {product.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="mt-auto pt-4 border-t border-border mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-muted-foreground text-sm">Price:</span>
                      <span className="font-display font-bold text-foreground text-2xl">
                        {product.price}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1" 
                      size="default"
                      variant="default"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <Eye size={16} className="mr-2" />
                      View Details
                    </Button>
                    <Button 
                      size="default"
                      variant="outline"
                      className="px-4"
                      asChild
                    >
                      <Link to="/contact">
                        <ShoppingCart size={16} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-card border border-border rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all duration-200 shadow-lg hover:scale-110"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="bg-gradient-to-br from-muted/50 to-muted/30 p-8 md:p-12 flex items-center justify-center">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="max-w-full max-h-96 object-contain"
                  />
                </div>

                {/* Details Section */}
                <div className="p-8 md:p-10 overflow-y-auto max-h-[90vh]">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-accent/20 text-accent uppercase tracking-wide">
                      {selectedProduct.category}
                    </span>
                  </div>

                  <h2 className="font-display text-3xl font-bold text-foreground mb-3">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                    {selectedProduct.tagline}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-lg">
                      <Package size={20} className="text-primary" />
                      Key Features
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.features.map((feature, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold border border-primary/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-foreground mb-4 text-lg">Specifications</h3>
                    <div className="space-y-3 bg-muted/30 rounded-xl p-4">
                      {selectedProduct.specifications.map((spec, i) => (
                        <div key={i} className="flex justify-between items-start gap-4 py-2 border-b border-border/50 last:border-0">
                          <span className="text-muted-foreground text-sm font-medium flex-shrink-0">{spec.label}</span>
                          <span className="text-foreground text-sm font-semibold text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-muted-foreground text-sm block mb-1">Price</span>
                        <p className="font-display text-4xl font-bold text-foreground">
                          {selectedProduct.price}
                        </p>
                      </div>
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 ${
                        selectedProduct.inStock 
                          ? "bg-accent/20 text-accent" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        <CheckCircle size={16} />
                        {selectedProduct.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>
                    <Button className="w-full" size="lg" asChild>
                      <Link to="/contact">
                        Enquire Now <ArrowRight size={20} className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Support Section */}
      <section className="py-20 bg-card-gradient border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Download size={28} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2 text-lg">
                Download Brochures
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Get detailed specifications and pricing in our product brochures.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Download PDF <Download size={14} className="ml-2" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <MessageCircle size={28} className="text-accent" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2 text-lg">
                Get a Quote
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Contact us for customized pricing and bulk order discounts.
              </p>
              <Button variant="default" size="sm" className="w-full" asChild>
                <Link to="/contact">
                  Request Quote <MessageCircle size={14} className="ml-2" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <CheckCircle size={28} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2 text-lg">
                After-Sales Support
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Comprehensive warranty and maintenance support for all products.
              </p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/contact">
                  Learn More <ArrowRight size={14} className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Need Help Choosing?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Our team can help you find the right equipment for your farm's specific needs.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/book-engineer">
                Book a Consultation <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
