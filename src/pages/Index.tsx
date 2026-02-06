import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Wrench, 
  ShoppingCart, 
  Users, 
  Handshake,
  Award,
  Target,
  ChevronRight,
  Play,
  Trophy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/Sanjivani 4.0 Images/Sanjivani College Profile.png";
import YouTubeChannel from "@/components/YouTubeChannel";
// TIFAN Industry Connect sponsors (homepage section)
import araiLogo from "@/Industry Sponsors/ARAI.png";
import magicLogo from "@/Industry Sponsors/MAGIC.png";
import cumminsLogo from "@/Industry Sponsors/Cummins.png";
import johnDeereLogo from "@/Industry Sponsors/JOHN DEERE.png";
import altairLogo from "@/Industry Sponsors/ALTAIR.png";
import mathworksLogo from "@/Industry Sponsors/Mathworks.png";
import mahindraLogo from "@/Industry Sponsors/Mahindra Rise.png";
import trizLogo from "@/Industry Sponsors/TRIZ.png";
import akshayaAgriLogo from "@/Industry Sponsors/Akshaya Agri.png";
import bktLogo from "@/Industry Sponsors/BKT.png";

const services = [
  {
    icon: Wrench,
    title: "Book an Engineer",
    description: "Get expert engineering consultation for your agricultural machinery needs.",
    link: "/book-engineer",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
  },
  {
    icon: ShoppingCart,
    title: "Buy Machine",
    description: "Purchase our innovative, cost-effective agricultural equipment.",
    link: "/products",
    iconBg: "bg-accent/15",
    iconColor: "text-accent",
  },
  {
    icon: Handshake,
    title: "Become a Sponsor",
    description: "Partner with us to drive agricultural innovation forward.",
    link: "/sponsors",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
  },
  {
    icon: Users,
    title: "Our Team",
    description: "Be part of our mission to revolutionize farming technology.",
    link: "/team",
    iconBg: "bg-accent/15",
    iconColor: "text-accent",
  },
];

const achievements = [
  {
    title: "All India Rank 1",
    description: "Best Innovation & Design at SAEINDIA TIFAN 2023, MPKV Rahuri",
  },
  {
    title: "1st Prize - National Level",
    description: "Project Exhibition 2024 (IET Karmaveer Expo'24) for Multi-Vegetable Transplanter",
  },
  {
    title: "3rd Rank - SAEINDIA TIFAN",
    description: "Outstanding performance in the 1st Round of SAEINDIA TIFAN competition",
  },
];

const stats = [
  { icon: Trophy, value: "1st", label: "All India Rank - Best Innovation", numericValue: 1 },
  { icon: Users, value: "20+", label: "Team Members", numericValue: 20 },
  { icon: Award, value: "2+", label: "National Awards", numericValue: 2 },
  { icon: Handshake, value: "5+", label: "Industry Partners", numericValue: 5 },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Number counting animation hook
const useCountUp = (end: number, duration: number = 2000, start: number = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * (end - start) + start));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, start, duration]);

  return { count, ref };
};

// Stat Counter Component
const StatCounter = ({ 
  icon: Icon, 
  value, 
  label, 
  numericValue 
}: { 
  icon: React.ElementType; 
  value: string; 
  label: string; 
  numericValue: number;
}) => {
  const { count, ref } = useCountUp(numericValue, 2000);
  const hasPlus = value.includes("+");
  const isOrdinal = value.includes("st") || value.includes("nd") || value.includes("rd") || value.includes("th");

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/15 text-primary mb-5 hover:scale-110 transition-transform duration-300">
        <Icon size={28} aria-hidden="true" />
      </div>
      <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
        {isOrdinal ? value : `${count}${hasPlus ? "+" : ""}`}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed" aria-label={label}>
        {label}
      </p>
    </motion.div>
  );
};

import { usePageTitle } from "@/lib/usePageTitle";

const Index = () => {
  usePageTitle("Engineering Innovation", "SANJIVANI 4.0 - Engineering Innovation");
  
  // Parallax scroll for hero background
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background Image with Parallax */}
        <div className="absolute inset-0">
          <motion.img
            src={heroImage}
            alt="Automated Multi-Vegetable Transplanter by SANJIVANI 4.0"
            className="w-full h-full object-cover"
            style={{ y: heroY, opacity: heroOpacity }}
            aria-hidden="true"
          />
          {/* Dark green gradient overlay slightly increased in opacity for stronger presence */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/98 via-primary/95 to-primary/92" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/97 via-primary/90 to-transparent" />
          {/* Subtle white pattern overlay for texture */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
            aria-hidden="true"
          />
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-0 px-4 py-2 rounded-full bg-white/25 text-white border border-white/30 text-sm font-medium mb-6">
                SAEINDIA TIFAN | Sanjivani College of Engineering Kopargaon
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
            >
              SANJIVANI 4.0
              <br />
              <span className="text-accent">Automated Multi-Vegetable</span> Transplanter
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-primary-foreground/90 max-w-2xl mb-10 leading-relaxed"
            >
              A dedicated group of engineering students driven by innovation, teamwork, 
              and excellence in automotive engineering. We design, build, and test vehicles 
              for SAEINDIA competitions, applying knowledge in mechanical design, fabrication, 
              electronics, and project management.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="xl" className="text-lg px-10" asChild>
                <Link to="/products" aria-label="Explore our machines and products">
                  Explore Our Machines
                  <ArrowRight size={20} className="ml-2" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" className="text-lg px-10" asChild>
                <Link to="/about" aria-label="Watch our story and learn more about us">
                  <Play size={20} className="mr-2" aria-hidden="true" />
                  Watch Our Story
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-label="Scroll down indicator"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
          </motion.div>
        </motion.div>
      </section>

      

      {/* Stats Section */}
      <section 
        className="py-20 bg-card-gradient border-y border-border relative overflow-hidden"
        aria-label="Statistics and achievements"
      >
        {/* Subtle background pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <StatCounter
                key={stat.label}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                numericValue={stat.numericValue}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services / CTAs Section */}
      <section 
        className="py-24 bg-background relative"
        aria-label="Services and how we can help"
      >
        {/* Subtle background pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              How Can We Help You?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              From engineering consultations to purchasing machinery, we're here to serve 
              your agricultural innovation needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div 
                  className="group h-full p-8 rounded-3xl bg-card border border-border hover:border-primary/50 hover:shadow-elevated hover:-translate-y-2 transition-all duration-300 flex flex-col"
                  role="article"
                  aria-label={`Service: ${service.title}`}
                >
                  <div className={`w-16 h-16 rounded-full ${service.iconBg} ${service.iconColor} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <service.icon size={32} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <Button variant="default" className="w-full" size="default" asChild>
                    <Link to={service.link} aria-label={`Learn more about ${service.title}`}>
                      Learn More <ChevronRight size={16} className="ml-1" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section 
        className="py-24 bg-hero-gradient text-primary-foreground overflow-hidden relative"
        aria-label="About SANJIVANI 4.0"
      >
        {/* Enhanced gradient overlay with pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm font-medium mb-6">
                About SANJIVANI 4.0
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-primary-foreground">
                Engineering the Future of 
                <span className="text-accent"> Sustainable Farming</span>
              </h2>
              <p className="text-primary-foreground/90 text-lg leading-relaxed mb-8">
                SANJIVANI 4.0 is a dedicated group of engineering students from 
                Sanjivani College of Engineering, Kopargaon, driven by innovation, teamwork, 
                and excellence in automotive engineering. We design, build, and test vehicles 
                for SAEINDIA competitions.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:scale-105 transition-transform duration-300">
                  <h4 className="font-display text-3xl font-bold text-accent mb-2">1983</h4>
                  <p className="text-primary-foreground/80 text-sm">College Established</p>
                </div>
                <div className="p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:scale-105 transition-transform duration-300">
                  <h4 className="font-display text-3xl font-bold text-accent mb-2">500+</h4>
                  <p className="text-primary-foreground/80 text-sm">Farmers Impacted</p>
                </div>
              </div>
              <Button variant="hero" size="lg" asChild>
                <Link to="/about" aria-label="Read our full story">
                  Our Full Story <ArrowRight size={18} className="ml-2" aria-hidden="true" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 p-8 relative overflow-hidden hover:shadow-elevated transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
                <div className="relative h-full flex flex-col justify-center">
                  <div className="space-y-5">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="p-5 rounded-xl bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/20 hover:scale-105 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-accent/25 flex items-center justify-center shrink-0">
                            <Award size={24} className="text-accent" aria-hidden="true" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-primary-foreground mb-2 text-lg">
                              {achievement.title}
                            </h4>
                            <p className="text-primary-foreground/80 text-sm leading-relaxed">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section 
        className="py-24 bg-gradient-to-b from-background via-card-gradient to-background relative overflow-hidden"
        aria-label="Our partners and sponsors"
      >
        {/* Enhanced background pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/15 text-accent text-sm font-semibold mb-6 border border-accent/20 shadow-sm">
              TIFAN Industry Connect 
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Backed by Industry Leaders
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              We are proud to partner with organizations that share our vision for 
              agricultural innovation and engineering excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-12 max-w-6xl mx-auto">
            {[
              { name: "Mahindra & Mahindra", logo: mahindraLogo },
              { name: "John Deere", logo: johnDeereLogo },
              { name: "ARAI", logo: araiLogo },
              { name: "MAGIC by CMIA", logo: magicLogo },
              { name: "Cummins", logo: cumminsLogo },
              { name: "Altair", logo: altairLogo },
              { name: "MathWorks", logo: mathworksLogo },
              { name: "TRIZ Association of Asia", logo: trizLogo },
              { name: "Akshaya Agri", logo: akshayaAgriLogo },
              { name: "BKT", logo: bktLogo },
            ].map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="aspect-[3/2] rounded-xl bg-card border border-border flex flex-col items-center justify-center p-4 hover:border-primary/50 hover:shadow-soft hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
                role="article"
                aria-label={`Partner: ${sponsor.name}`}
              >
                {sponsor.logo ? (
                  <>
                    <div className="w-full flex-1 flex items-center justify-center mb-2 min-h-0">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <h3 className="font-display font-bold text-foreground text-center text-xs sm:text-sm md:text-base group-hover:text-primary transition-colors leading-tight line-clamp-2">
                      {sponsor.name}
                    </h3>
                  </>
                ) : (
                  <>
                    <p className="font-display font-semibold text-foreground text-center text-xs sm:text-sm leading-tight line-clamp-2">
                      {sponsor.name}
                    </p>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button variant="primaryGlow" size="lg" className="text-lg px-8 shadow-lg" asChild>
              <Link to="/sponsors" aria-label="Become a sponsor">
                Become a Sponsor <Handshake size={20} className="ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-24 bg-dark-gradient text-primary-foreground relative"
        aria-label="Call to action"
      >
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-primary-foreground">
              Ready to Transform Agriculture?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you're a farmer looking for innovative machinery, an industry 
              partner, or a passionate engineer—we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" className="text-lg px-10" asChild>
                <Link to="/contact" aria-label="Get in touch with us">
                  Get in Touch <ArrowRight size={20} className="ml-2" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" className="text-lg px-10" asChild>
                <Link to="/team" aria-label="Join our team">
                  Join Our Team <Users size={20} className="ml-2" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
