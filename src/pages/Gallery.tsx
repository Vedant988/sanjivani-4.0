import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

// Import all gallery images
import SAE from '../Gallery/SAE.jpg';
import sae2 from '../Gallery/sae2.jpg';
import sae3 from '../Gallery/sae3.png';
import sae5 from '../Gallery/sae5.jpg';
import team045 from '../Gallery/TEAM_SANJIVANI 4.0.pdf-image-045.jpg';
import team048 from '../Gallery/TEAM_SANJIVANI 4.0.pdf-image-048.jpg';
import team054 from '../Gallery/TEAM_SANJIVANI 4.0.pdf-image-054.jpg';
import whatsapp1 from '../Gallery/WhatsApp Image 2026-01-10 at 12.14.33 PM.jpeg';
import whatsapp2 from '../Gallery/WhatsApp Image 2026-01-10 at 12.26.19 PM (1).jpeg';
import whatsapp3 from '../Gallery/WhatsApp Image 2026-01-10 at 12.26.34 PM (1).jpeg';
import whatsapp4 from '../Gallery/WhatsApp Image 2026-01-10 at 12.26.35 PM (1).jpeg';
import whatsapp5 from '../Gallery/WhatsApp Image 2026-01-10 at 12.26.35 PM.jpeg';
import whatsapp6 from '../Gallery/WhatsApp Image 2026-01-10 at 12.52.49 PM (1).jpeg';
import whatsapp7 from '../Gallery/WhatsApp Image 2026-01-10 at 12.52.49 PM.jpeg';
import whatsapp8 from '../Gallery/WhatsApp Image 2026-01-11 at 18.24.10.jpeg';
import whatsapp9 from '../Gallery/WhatsApp Image 2026-01-11 at 18.24.18 (1).jpeg';

const categories = ["All", "Workshop", "Testing", "Team", "Events"];

const galleryItems = [
  { id: 1, src: SAE, title: 'SAE Competition Highlights', category: 'Events' },
  { id: 2, src: sae2, title: 'SAE Workshop Session', category: 'Workshop' },
  { id: 3, src: sae3, title: 'Testing Phase', category: 'Testing' },
  { id: 4, src: sae5, title: 'SAE Event Moments', category: 'Events' },
  { id: 5, src: team045, title: 'Team Sanjivani 4.0', category: 'Team' },
  { id: 6, src: team048, title: 'Team Collaboration', category: 'Team' },
  { id: 7, src: team054, title: 'Team Achievements', category: 'Team' },
  { id: 8, src: whatsapp1, title: 'Project Showcase', category: 'Events' },
  { id: 9, src: whatsapp2, title: 'Innovation Demo', category: 'Events' },
  { id: 10, src: whatsapp3, title: 'Team Building Activity', category: 'Events' },
  { id: 11, src: whatsapp4, title: 'Technical Discussion', category: 'Workshop' },
  { id: 12, src: whatsapp5, title: 'Prototype Testing', category: 'Testing' },
  { id: 13, src: whatsapp6, title: 'Field Testing', category: 'Testing' },
  { id: 14, src: whatsapp7, title: 'Equipment Setup', category: 'Workshop' },
  { id: 15, src: whatsapp8, title: 'Event Highlights', category: 'Events' },
  { id: 16, src: whatsapp9, title: 'Team Meeting', category: 'Team' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<{ src: string; title: string; category: string } | null>(null);

  const filteredItems = galleryItems.filter(item => activeCategory === "All" || item.category === activeCategory);

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
              Gallery
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-primary-foreground">
              Our Journey in 
              <span className="text-accent"> Pictures</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
              A visual chronicle of our work, achievements, and the team behind the innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card-gradient border-b border-border sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-background border border-border text-foreground hover:border-primary/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedItem(item)}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-accent text-xs font-medium">{item.category}</span>
                    <h3 className="text-primary-foreground font-semibold text-sm mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 p-2 rounded-lg bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="max-w-4xl w-full">
            <img
              src={selectedItem.src}
              alt={selectedItem.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
            <div className="mt-4 text-center">
              <span className="text-accent text-sm">{selectedItem.category}</span>
              <h3 className="text-primary-foreground font-display text-xl font-semibold mt-1">
                {selectedItem.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
