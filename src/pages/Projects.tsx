import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ExternalLink, 
  ChevronRight, 
  Calendar,
  Target,
  Lightbulb,
  Wrench,
  TestTube,
  CheckCircle,
  Trophy,
  Award,
  Gauge,
  Zap,
  Shield,
  TrendingUp,
  Sparkles,
  Factory,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

// Project images (place files in src/assets/projects/)
import tifan2023 from "@/assets/projects/tifan-2023.jpg";
import ietExpo2024 from "@/assets/projects/iet-expo-2024.jpg";
import teamTicket from "@/assets/projects/team-ticket.jpg";
import onionHarvester from "@/assets/projects/onion-harvester.jpg";

const workflow = [
  { phase: "Problem Statement", icon: Target, description: "Identifying farmer challenges and requirements" },
  { phase: "Design", icon: Lightbulb, description: "CAD modeling, FEA, and simulation-driven design" },
  { phase: "Manufacturing", icon: Wrench, description: "Precision fabrication and assembly" },
  { phase: "Testing", icon: TestTube, description: "Field trials and performance validation" },
];

const currentProjectFeatures = [
  "Automated planting process for multiple vegetable crops",
  "Precision and consistency in plant spacing",
  "Reduces manual labor significantly",
  "Improves planting efficiency and uniformity",
  "Sustainable solution for modern agriculture",
  "Cost-effective operation and maintenance",
];

const competitionEvents = [
  { 
    name: "Design Event", 
    description: "Evaluation of CAD design, analysis, and engineering calculations",
    icon: Lightbulb,
    color: "bg-primary/10 text-primary border-primary/20"
  },
  { 
    name: "Acceleration Test", 
    description: "Assessment of speed and drivetrain performance",
    icon: Zap,
    color: "bg-accent/10 text-accent border-accent/20"
  },
  { 
    name: "Endurance Test", 
    description: "Field testing for durability, reliability, and stability",
    icon: Shield,
    color: "bg-primary/10 text-primary border-primary/20"
  },
  { 
    name: "Efficiency Event", 
    description: "Measurement of fuel/energy efficiency and cost-effectiveness",
    icon: TrendingUp,
    color: "bg-accent/10 text-accent border-accent/20"
  },
  { 
    name: "Innovation & Utility", 
    description: "Recognition of farmer-friendly and innovative features",
    icon: Sparkles,
    color: "bg-primary/10 text-primary border-primary/20"
  },
];

const pastProjects = [
  {
    year: "2023",
    title: "Multi-Vegetable Transplanter",
    status: "All India Rank 1",
    description: "Best Innovation & Design at SAEINDIA TIFAN 2023, held at Mahatma Phule Krishi Vidyapeeth (MPKV), Rahuri.",
    achievements: [
      "All India Rank 1 - Best Innovation & Design",
      "Successfully passed endurance and efficiency tests",
    ],
    images: [tifan2023],
  },
  {
    year: "2024",
    title: "Multi-Vegetable Transplanter (IET Expo)",
    status: "1st Prize",
    description: "National Level Project Exhibition 2024 at IET Karmaveer Expo'24.",
    achievements: [
      "1st Prize - National Level Project Exhibition",
      "Recognition for innovation in agricultural technology",
    ],
    images: [ietExpo2024],
  },
  {
    year: "2018",
    title: "Onion Harvester Machine",
    status: "Participant",
    description: "Technology Innovation Forum For Agricultural Nurturing (TIFAN) 2018 at MPKV, Rahuri.",
    achievements: [
      "Participation in design and manufacturing demonstration",
      "Foundation for future TIFAN competitions",
    ],
    images: [onionHarvester],
    captain: "—",
    viceCaptain: "—",
  },
];

const Projects = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-hero-gradient text-primary-foreground relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm font-medium mb-6">
              SAE TIFAN Projects
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-primary-foreground">
              From Concept to 
              <span className="text-accent"> Field-Ready</span> Solutions
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl leading-relaxed mb-8">
              Explore our portfolio of innovative agricultural machinery projects for 
              SAE TIFAN competitions, from our current development efforts to award-winning solutions.
            </p>
            
            {/* Statistics Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors">
                <Trophy size={24} className="text-accent" />
                <div>
                  <span className="block text-2xl font-bold text-accent">1st</span>
                  <span className="text-sm text-primary-foreground/80">All India Rank</span>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors">
                <Award size={24} className="text-accent" />
                <div>
                  <span className="block text-2xl font-bold text-accent">3+</span>
                  <span className="text-sm text-primary-foreground/80">Projects</span>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors">
                <Sparkles size={24} className="text-accent" />
                <div>
                  <span className="block text-2xl font-bold text-accent">5</span>
                  <span className="text-sm text-primary-foreground/80">Competition Events</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About SAE TIFAN */}
      <section className="py-20 bg-card-gradient border-b border-border relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-2H0v-2h20v-2H0v-2h20v-2H0v-2h20zM0 20h2v2H0v-2zm4 0h2v2H4v-2zm4 0h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 4h2v2h-2v-2zm0-4h2v2h-2v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              About SAE TIFAN
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              The Technology Innovation Forum for Agricultural Nurturing (TIFAN) competition, 
              organized by SAE India, is one of the nation's most prestigious engineering events 
              for students. It challenges young innovators to design and fabricate a multipurpose 
              agricultural vehicle prototype that addresses real-world farming challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:bg-primary/15 transition-colors">
                <Lightbulb size={16} />
                Encourages Engineering Innovation
              </span>
              <span className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent/10 text-accent text-sm font-medium border border-accent/20 hover:bg-accent/15 transition-colors">
                <Wrench size={16} />
                Hands-on Design & Fabrication
              </span>
              <span className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:bg-primary/15 transition-colors">
                <Factory size={16} />
                Industry Interaction
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Project */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Current Project - SAE TIFAN 2025-2026
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Automated Multi-Vegetable Transplanter
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Project Image Placeholder */}
              <div className="mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 p-8 border border-border">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                  <div className="text-center">
                    <Wrench size={48} className="text-primary/50 mx-auto mb-4" />
                    <p className="text-muted-foreground text-sm">Project Visualization</p>
                  </div>
                </div>
              </div>

              <p className="text-accent font-semibold text-xl mb-4">
                Simplifying and Speeding Up Planting
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The Automated Multi-Vegetable Transplanter is designed to simplify and speed up 
                the planting process for multiple crops with precision and consistency. It reduces 
                manual labor, improves planting efficiency, and ensures uniform spacing, making it 
                a practical and sustainable solution for modern agriculture.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="px-5 py-3 rounded-xl bg-card border-2 border-primary/30 shadow-sm">
                  <span className="text-muted-foreground text-sm block mb-1">Status:</span>
                  <span className="font-bold text-lg text-primary">In Development</span>
                </div>
                <div className="px-5 py-3 rounded-xl bg-card border-2 border-accent/30 shadow-sm flex items-center gap-2">
                  <Calendar size={18} className="text-accent" />
                  <div>
                    <span className="text-muted-foreground text-sm block">Timeline:</span>
                    <span className="font-bold text-lg">2025-2026</span>
                  </div>
                </div>
              </div>

              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentProjectFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-soft transition-all duration-300"
                  >
                    <CheckCircle size={20} className="text-accent mb-2" />
                    <p className="text-foreground text-sm font-medium">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Workflow */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-8 rounded-3xl bg-card-gradient border border-border shadow-soft">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
                  Development Workflow
                </h3>
                <div className="relative">
                  {/* Connecting Line */}
                  <div className="absolute left-6 top-12 bottom-12 w-0.5 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/30 hidden md:block" />
                  
                  <div className="space-y-8">
                    {workflow.map((step, index) => (
                      <motion.div
                        key={step.phase}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        className="relative flex items-start gap-4"
                      >
                        {/* Step Number Badge */}
                        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0 z-10 border-4 border-background shadow-md">
                          <span className="text-primary-foreground font-bold text-lg">{index + 1}</span>
                        </div>
                        
                        {/* Content Card */}
                        <div className="flex-1 p-5 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-soft transition-all duration-300">
                          <div className="flex items-center gap-3 mb-2">
                            <step.icon size={24} className="text-primary" />
                            <h4 className="font-semibold text-foreground text-lg">
                              {step.phase}
                            </h4>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-border">
                  <Button variant="primaryGlow" className="w-full" size="lg" asChild>
                    <Link to="/contact">
                      Learn More About This Project <ArrowRight size={18} />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Competition Events */}
      <section className="py-24 bg-card-gradient border-y border-border relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-2H0v-2h20v-2H0v-2h20v-2H0v-2h20zM0 20h2v2H0v-2zm4 0h2v2H4v-2zm4 0h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 4h2v2h-2v-2zm0-4h2v2h-2v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Competition Events
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              SAE TIFAN Evaluation
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {competitionEvents.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${event.color.split(' ')[0]} flex items-center justify-center mb-4 border ${event.color.split(' ')[2]}`}>
                  <event.icon size={28} className={event.color.split(' ')[1]} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {event.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Projects */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-2H0v-2h20v-2H0v-2h20v-2H0v-2h20zM0 20h2v2H0v-2zm4 0h2v2H4v-2zm4 0h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 4h2v2h-2v-2zm0-4h2v2h-2v-2z'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <Trophy size={14} />
              Project Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Previous Projects & Achievements
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of our completed projects that have earned national recognition.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/50 hover:shadow-elevated hover:-translate-y-2 transition-all duration-300"
              >
                {/* Project Image or Gallery */}
                {project.images && project.images.length > 0 ? (
                  <div className="mb-6 overflow-hidden rounded-2xl border border-border">
                    <img src={project.images[0]} alt={`${project.title} - main`} className="w-full h-56 object-cover rounded-t-2xl" />
                    {project.images.length > 1 && (
                      <div className="grid grid-cols-3 gap-1 p-2 bg-card rounded-b-2xl">
                        {project.images.map((img, idx) => (
                          <img key={idx} src={img} alt={`${project.title} ${idx + 1}`} className="w-full h-24 object-cover rounded" />
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 mb-6 overflow-hidden border border-border">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/30 to-accent/30 group-hover:scale-110 transition-transform duration-300">
                      <Wrench size={48} className="text-primary/50" />
                    </div>
                  </div>
                )}

                {/* Year Badge - More Prominent */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-4 py-2 rounded-full bg-accent/20 text-accent font-bold text-sm border border-accent/30">
                    {project.year}
                  </span>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    project.status.includes('Rank 1') || project.status.includes('1st') 
                      ? 'bg-accent/20 text-accent border border-accent/30' 
                      : 'bg-primary/10 text-primary border border-primary/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Achievements - More Prominent */}
                <div className="space-y-3">
                  {project.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/50">
                      <Award size={18} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark-gradient text-primary-foreground relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Interested in Our Technology?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you're a farmer, industry partner, or potential sponsor—let's 
              explore how our innovations can help you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8" asChild>
                <Link to="/products">
                  View Our Products <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" className="text-lg px-8" asChild>
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
