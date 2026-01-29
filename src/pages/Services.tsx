import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  Wrench,
  Cpu,
  Cog,
  Factory,
  Lightbulb,
  Handshake,
  Award,
  Users,
  MessageCircle,
  FileText,
  Rocket,
  Package
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const services = [
  {
    icon: Wrench,
    title: "Engineering Design Services",
    description: "Complete design solutions from concept to detailed CAD models, optimized for manufacturability and performance.",
    features: [
      "Product conceptualization and ideation",
      "3D CAD modeling and drafting",
      "Design for manufacturing (DFM)",
      "Tolerance analysis and GD&T",
    ],
  },
  {
    icon: Cpu,
    title: "CAE & Simulation",
    description: "Advanced simulation and analysis services to validate designs before manufacturing, reducing costs and time-to-market.",
    features: [
      "Finite Element Analysis (FEA)",
      "Computational Fluid Dynamics (CFD)",
      "Fatigue and durability analysis",
      "Multi-body dynamics simulation",
    ],
  },
  {
    icon: Factory,
    title: "Prototyping & Manufacturing",
    description: "End-to-end manufacturing support from rapid prototyping to small-batch production.",
    features: [
      "Rapid prototyping (3D printing)",
      "CNC machining and fabrication",
      "Sheet metal and welding",
      "Assembly and quality control",
    ],
  },
  {
    icon: Cog,
    title: "Agricultural Equipment Consulting",
    description: "Expert consulting for agricultural machinery needs, from selection guidance to customization.",
    features: [
      "Equipment selection and evaluation",
      "Customization recommendations",
      "Performance optimization",
      "Maintenance planning",
    ],
  },
  {
    icon: Lightbulb,
    title: "Innovation & R&D",
    description: "Collaborative research and development partnerships for new agricultural technology solutions.",
    features: [
      "Feasibility studies",
      "Technology scouting",
      "Patent research and IP strategy",
      "Grant proposal support",
    ],
  },
  {
    icon: Handshake,
    title: "Industry & Startup Collaborations",
    description: "Partnership opportunities for companies and startups looking to leverage our engineering expertise.",
    features: [
      "Joint product development",
      "Technology transfer",
      "Student internship programs",
      "Sponsored research projects",
    ],
  },
];

const process = [
  { 
    step: 1, 
    title: "Consultation", 
    description: "Understand your requirements and challenges",
    icon: MessageCircle,
    color: "bg-primary/10 text-primary"
  },
  { 
    step: 2, 
    title: "Proposal", 
    description: "Detailed scope, timeline, and cost estimate",
    icon: FileText,
    color: "bg-accent/10 text-accent"
  },
  { 
    step: 3, 
    title: "Execution", 
    description: "Expert team delivers the solution",
    icon: Rocket,
    color: "bg-primary/10 text-primary"
  },
  { 
    step: 4, 
    title: "Delivery", 
    description: "Quality-assured deliverables and support",
    icon: Package,
    color: "bg-accent/10 text-accent"
  },
];

const Services = () => {
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
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-primary-foreground">
              Engineering Expertise for 
              <span className="text-accent"> Your Success</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl leading-relaxed mb-8">
              From design and analysis to prototyping and consulting—we offer 
              comprehensive engineering services tailored to your agricultural needs.
            </p>
            
            {/* Statistics Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors">
                <Award size={24} className="text-accent" />
                <div>
                  <span className="block text-2xl font-bold text-accent">50+</span>
                  <span className="text-sm text-primary-foreground/80">Projects Completed</span>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors">
                <Users size={24} className="text-accent" />
                <div>
                  <span className="block text-2xl font-bold text-accent">100%</span>
                  <span className="text-sm text-primary-foreground/80">Client Satisfaction</span>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors">
                <Rocket size={24} className="text-accent" />
                <div>
                  <span className="block text-2xl font-bold text-accent">6</span>
                  <span className="text-sm text-primary-foreground/80">Service Categories</span>
                </div>
              </div>
            </motion.div>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button variant="hero" size="lg" className="text-lg px-8" asChild>
                <Link to="/book-engineer">
                  Get Started <ArrowRight size={18} />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-2H0v-2h20v-2H0v-2h20v-2H0v-2h20zM0 20h2v2H0v-2zm4 0h2v2H4v-2zm4 0h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 4h2v2h-2v-2zm0-4h2v2h-2v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/50 hover:shadow-elevated hover:-translate-y-2 transition-all duration-300"
              >
                {/* Larger Icon */}
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon size={32} className="text-primary group-hover:text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features as Cards */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="p-3 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors">
                      <CheckCircle size={16} className="text-accent mb-1" />
                      <p className="text-foreground text-xs font-medium leading-tight">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button variant="default" className="w-full" size="default" asChild>
                  <Link to="/contact">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card-gradient border-y border-border relative overflow-hidden">
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
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A streamlined process designed to deliver results efficiently.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Connecting Arrow */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/20">
                    <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-primary" size={20} />
                  </div>
                )}

                {/* Step Card */}
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-soft hover:-translate-y-1 transition-all duration-300">
                  {/* Step Number Badge */}
                  <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-display text-2xl font-bold shadow-md">
                    {step.step}
                  </div>
                  
                  {/* Step Icon */}
                  <div className={`w-12 h-12 rounded-full ${step.color.split(' ')[0]} flex items-center justify-center mx-auto mb-4 border ${step.color.split(' ')[2] || 'border-primary/20'}`}>
                    <step.icon size={24} className={step.color.split(' ')[1]} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
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
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a consultation with our engineering team to discuss your project requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8" asChild>
                <Link to="/book-engineer">
                  Book an Engineer <ArrowRight size={18} />
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

export default Services;
