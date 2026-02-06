import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Leaf, 
  TrendingUp, 
  Award,
  ArrowRight,
  Lightbulb,
  Wrench,
  GraduationCap,
  Trophy,
  Calendar,
  Rocket,
  CheckCircle,
  Youtube,
  ExternalLink,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { usePageTitle } from "@/lib/usePageTitle";

// Load team photos from `src/assets/team` and `src/Team Members`
const teamImages = {
  ...import.meta.glob('/src/assets/team/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' }),
  ...import.meta.glob('/src/Team Members/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' }),
} as Record<string, string>;

function normalizeNameForMatch(s: string) {
  return s.replace(/Mr\. |Miss\. |Dr\. /g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function findPhotoFor(name: string) {
  const slug = normalizeNameForMatch(name);
  for (const key of Object.keys(teamImages)) {
    const base = key.split('/').pop()?.replace(/\.[^/.]+$/, '') || '';
    const baseSlug = base.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    if (baseSlug === slug || baseSlug.includes(slug) || slug.includes(baseSlug)) {
      return teamImages[key];
    }
  }
  return null;
}

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Developing creative solutions using modern engineering technologies.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Growing together through collaboration and shared responsibility.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Maintaining high standards in design, fabrication, and testing.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Creating efficient, cost-effective, and eco-friendly agricultural solutions.",
  },
];

const milestones = [
  { 
    year: "2018", 
    title: "TIFAN Participation", 
    description: "Participated in Technology Innovation Forum For Agricultural Nurturing",
    icon: Rocket,
    color: "bg-primary/10 text-primary",
    iconColor: "text-primary"
  },
  { 
    year: "2021", 
    title: "FMAE Recognition", 
    description: "Fraternity of Mechanical and Automotive Engineers acknowledgment",
    icon: Award,
    color: "bg-accent/10 text-accent",
    iconColor: "text-accent"
  },
  { 
    year: "2023", 
    title: "All India Rank 1", 
    description: "Best Innovation & Design at SAEINDIA TIFAN, MPKV Rahuri",
    icon: Trophy,
    color: "bg-accent/20 text-accent",
    iconColor: "text-accent"
  },
  { 
    year: "2024", 
    title: "National Exhibition Win", 
    description: "1st Prize at IET Karmaveer Expo'24 for Multi-Vegetable Transplanter",
    icon: Trophy,
    color: "bg-accent/20 text-accent",
    iconColor: "text-accent"
  },
  { 
    year: "2025", 
    title: "SAE TIFAN 2025-26", 
    description: "Preparing for the next generation of agricultural innovation",
    icon: Calendar,
    color: "bg-primary/10 text-primary",
    iconColor: "text-primary"
  },
];

const missionPoints = [
  {
    title: "Develop high-performance, efficient, and innovative vehicles",
    description: "We design and build vehicles that are competition-ready and reflect cutting-edge engineering practices."
  },
  {
    title: "Gain hands-on experience in design, fabrication, and testing",
    description: "Through CAD modeling, simulations, fabrication, and real-world testing, our team gains practical skills."
  },
  {
    title: "Represent our college at national-level competitions",
    description: "SAE TIFAN gives us a platform to showcase our talent competing against the best engineering minds in India."
  },
  {
    title: "Promote sustainable and responsible engineering practices",
    description: "Our mission is to adopt eco-friendly practices and responsible engineering approaches for a greener future."
  },
];

const About = () => {
  usePageTitle("Teamwork", "About SANJIVANI 4.0 - Teamwork and College Background");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-hero-gradient text-primary-foreground relative overflow-hidden">
        {/* Background Pattern */}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-primary-foreground">
              SANJIVANI 4.0 
              <span className="text-accent"> SAE TIFAN 2025-2026</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl leading-relaxed mb-8">
              A dedicated group of engineering students from Sanjivani College of Engineering, 
              Kopargaon, driven by innovation, teamwork, and excellence in automotive engineering. 
              We design, build, and test vehicles for SAE India competitions.
            </p>
            
            {/* Statistics Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-6 mt-8"
            >
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
                <Users size={24} className="text-accent" />
                <div>
                  <span className="block text-2xl font-bold text-accent">20+</span>
                  <span className="text-sm text-primary-foreground/80">Team Members</span>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
                <Trophy size={24} className="text-accent" />
                <div>
                  <span className="block text-2xl font-bold text-accent">2+</span>
                  <span className="text-sm text-primary-foreground/80">National Awards</span>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
                <Award size={24} className="text-accent" />
                <div>
                  <span className="block text-2xl font-bold text-accent">1st</span>
                  <span className="text-sm text-primary-foreground/80">All India Rank</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Team & College */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl bg-card-gradient border border-border hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6">
                <Users size={32} className="text-primary-foreground" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                About SANJIVANI 4.0
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                 SANJIVANI 4.0 is a dynamic team of engineering students from Sanjivani College 
                of Engineering, Kopargaon, dedicated to innovation and excellence in agricultural 
                engineering solutions. The team actively participates in TIFAN competitions, working 
                on the design and development of an automatic vegetable transplanter aimed at improving 
                farming efficiency and reducing manual effort. Through hands-on design, fabrication, 
                automation, and system integration, the team continuously enhances its technical 
                expertise while contributing to sustainable and smart agriculture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl bg-hero-gradient text-primary-foreground hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6">
                <GraduationCap size={32} className="text-accent-foreground" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
                About the College
              </h2>
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                Sanjivani College of Engineering, Kopargaon, established in 1983, is one of the 
                leading engineering institutes in Maharashtra, known for its commitment to academic 
                excellence, research, and innovation. It is a premier institute fostering innovation, 
                technical excellence, and practical learning for students. Our college provides a 
                platform for hands-on engineering experiences and participation in national 
                competitions like SAE TIFAN.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-card-gradient border-y border-border relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl bg-card border border-border hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6">
                <Eye size={32} className="text-primary-foreground" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Vision
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                "To become pioneers in Automotive Engineering innovation while fostering technical 
                 skills and teamwork among students." At SANJIVANI 4.0, our vision goes beyond 
                just building vehicles. We aspire to be leaders in student-driven automotive innovation, 
                setting benchmarks in design, efficiency, and sustainability. By continuously challenging 
                ourselves with real-world engineering problems, we cultivate an environment where 
                creativity meets practicality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 md:p-12 rounded-3xl bg-card border border-border hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6">
                <Target size={32} className="text-accent-foreground" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <div className="space-y-5">
                {missionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2 text-base">{point.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background Pattern */}
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
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              The principles that guide every decision we make and every machine we build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/50 hover:shadow-elevated hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <value.icon size={36} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Motive */}
      <section className="py-24 bg-card-gradient border-y border-border relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Rocket size={14} />
              Our Motive
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Pushing Engineering Boundaries
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our motive is to push engineering boundaries while transforming theoretical knowledge 
              into practical, real-world applications. Through SAE TIFAN, we aim to develop 
              industry-ready skills, deliver farmer-centric innovations, and build leadership 
              and resilience among team members.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-10">
              {[
                { icon: CheckCircle, text: "Industry-Ready Skills" },
                { icon: CheckCircle, text: "Farmer-Centric Innovation" },
                { icon: CheckCircle, text: "Leadership & Resilience" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-card border border-border">
                  <item.icon size={20} className="text-accent" />
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline / Journey */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background Pattern */}
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <TrendingUp size={14} />
              Our Journey
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              From Idea to Impact
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A timeline of our achievements and milestones in agricultural engineering innovation.
            </p>
          </motion.div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 flex items-center justify-center">
                  <milestone.icon size={12} className="text-primary-foreground" />
                </div>

                {/* Content Card */}
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-16" : "pl-16"}`}>
                  <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`inline-block px-3 py-1.5 rounded-full ${milestone.color} text-sm font-semibold`}>
                        {milestone.year}
                      </span>
                      <milestone.icon size={18} className={milestone.iconColor} />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Timeline - Simplified Vertical Layout */}
          <div className="md:hidden space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-soft transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`inline-block px-3 py-1.5 rounded-full ${milestone.color} text-sm font-semibold`}>
                      {milestone.year}
                    </span>
                    <milestone.icon size={18} className={milestone.iconColor} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Mentors */}
      <section className="py-24 bg-card-gradient border-y border-border relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Faculty Mentors
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Guided by Excellence
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our experienced faculty and industry mentors who guide and inspire our team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { name: "Dr. P.M. Patare", role: "HoD Mech. Dept", type: "Faculty" },
              { name: "Dr. S.S. Ingle", role: "Faculty Advisor", type: "Faculty" },
              { name: "Mr. Pravin Khairnar", role: "SAE Team Mentor (John Deere)", type: "Mentor" },
              { name: "Mr. B.P. Tirumala", role: "SAE Team Mentor (John Deere)", type: "Mentor" },
            ].map((mentor, index) => {
              const photo = findPhotoFor(mentor.name);
              return (
                <motion.div
                  key={mentor.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="relative rounded-3xl bg-gradient-to-br from-card to-card border border-border overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                    {/* Profile Image Section */}
                    <div className="relative h-48 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-60"></div>
                      {photo ? (
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                            <img 
                              src={photo} 
                              alt={mentor.name} 
                              className="relative w-32 h-32 rounded-full object-cover border-4 border-card shadow-elevated group-hover:scale-105 transition-transform duration-300" 
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center border-4 border-card shadow-elevated">
                            <Award size={48} className="text-primary/50" />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex-1 mb-3">
                        <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors text-center">
                          {mentor.name}
                        </h3>
                        <p className="text-muted-foreground text-sm text-center mb-2">{mentor.role}</p>
                        <span className={`inline-block mx-auto px-2 py-1 rounded-full text-xs font-medium ${
                          mentor.type === "Faculty" 
                            ? "bg-primary/10 text-primary" 
                            : "bg-accent/10 text-accent"
                        }`}>
                          {mentor.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* YouTube Channel Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background Pattern */}
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
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Youtube size={16} />
              YouTube Channel
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              See Us in Action
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Watch our latest videos showcasing project builds, field tests, team activities, and competition highlights on the SANJIVANI 4.0 YouTube Channel.
            </p>
          </motion.div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
            {[
              { 
                id: "is1ilpIq-uA", 
                url: "https://youtube.com/shorts/is1ilpIq-uA?feature=share",
                title: "Farmer Review"
              },
              { 
                id: "qA6yZ6JMxMM", 
                url: "https://youtube.com/shorts/qA6yZ6JMxMM?si=LDjOPuTI4YtD-eBI",
                title: "Faculty Review"
              },
              { 
                id: "AI6hh-u0N_A", 
                url: "https://youtube.com/shorts/AI6hh-u0N_A?feature=share",
                title: "Farmer Review"
              },
            ].map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 hover:shadow-elevated hover:-translate-y-2 transition-all duration-300"
              >
                {/* Video Embed Container */}
                <div className="relative aspect-[9/16] bg-black overflow-hidden rounded-t-2xl">
                  <iframe
                    title={`YouTube Short ${video.title}`}
                    src={`https://www.youtube.com/embed/${video.id}?modestbranding=1&rel=0&controls=1`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* YouTube Badge */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-accent text-accent-foreground px-2 py-1 rounded-md flex items-center gap-1 text-xs font-semibold">
                      <Youtube size={12} />
                      YouTube
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-5 bg-card">
                  <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-all group/link"
                  >
                    <Play size={14} fill="currentColor" />
                    Watch on YouTube
                    <ExternalLink size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Channel Link Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <Button
              variant="hero"
              size="lg"
              asChild
            >
              <a
                href="https://www.youtube.com/@team_sanjivani_4.0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Youtube size={20} />
                Visit Our YouTube Channel
                <ExternalLink size={18} />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark-gradient text-primary-foreground relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
              Want to Be Part of Our Story?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Join us as a team member, sponsor, or partner and help shape the future of agriculture.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/team">
                  Meet Our Team <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/sponsors">
                  Become a Sponsor
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
