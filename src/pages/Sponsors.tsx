import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Eye, 
  Users, 
  Award, 
  TrendingUp,
  Download,
  CheckCircle,
  Star,
  Target,
  Briefcase,
  Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import dassaultSystemesLogo from "@/Sponsors/Dassault Systemes.png";
import rapidexLogo from "@/Sponsors/Rapidex Engineering Services.jpeg";
import dhruvLogo from "@/Sponsors/Dhruv Computers and Electronics.png";
import saishAgencyLogo from "@/Sponsors/Saish Agency.png";
import siddhiEnterprisesLogo from "@/Sponsors/Siddhi Enterprises.png";

const sponsorTiers = [
  {
    name: "Platinum",
    highlight: true,
    benefits: [
      "Prominent logo on all machinery",
      "Website homepage featured sponsor",
      "Social media shoutouts (monthly)",
      "Exclusive recruitment access",
      "Event naming rights",
      "Direct mentorship opportunities",
      "Custom project collaboration",
    ],
  },
  {
    name: "Gold",
    highlight: false,
    benefits: [
      "Logo on machinery and website",
      "Social media mentions (quarterly)",
      "Recruitment event access",
      "Annual impact report",
      "Workshop tour and demo",
    ],
  },
  {
    name: "Silver",
    highlight: false,
    benefits: [
      "Logo on website sponsors page",
      "Social media acknowledgment",
      "Event invitations",
      "Annual newsletter feature",
    ],
  },
  {
    name: "In-Kind",
    highlight: false,
    benefits: [
      "Logo recognition",
      "Social media mentions",
      "Material/service acknowledgment",
      "Event participation",
    ],
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Proven Track Record of Excellence",
    points: [
      "Recognition in Design and Innovation Awards at previous SAE TIFAN editions",
      "Successfully developed working prototypes that passed rigorous endurance and efficiency tests",
      "Consistent improvement and professional growth with every competition",
    ],
  },
  {
    icon: Eye,
    title: "Strong Brand Visibility for Sponsors",
    points: [
      "Your name will be honored and included in the Department Alumni Fund List",
      "National-level exposure at SAE TIFAN, attended by top engineering institutes and industry leaders",
      "Brand placement opportunities on our vehicle, uniforms, banners, and digital media",
      "Promotion across college events, workshops, and social media platforms",
    ],
  },
  {
    icon: Briefcase,
    title: "Industry-Academia Bridge",
    points: [
      "Your sponsorship directly connects you with future-ready engineers trained in real-world problem solving",
      "Opportunities for technical collaborations, internships, and recruitment pipelines with talented students",
    ],
  },
  {
    icon: Lightbulb,
    title: "Innovation with Social Impact",
    points: [
      "SAE TIFAN projects focus on agriculture and rural innovation",
      "Your support contributes to farmer-friendly, sustainable engineering solutions",
      "Sponsorship = investment in nation-building through technology",
    ],
  },
  {
    icon: Users,
    title: "Passionate & Dedicated Team",
    points: [
      "Highly motivated students with specialized sub-teams (Design, Fabrication, Electronics, Media & Sponsorship)",
      "Guided by experienced faculty mentors and industry advisors",
      "A culture of hard work, creativity, and never-give-up spirit",
    ],
  },
];

const currentSponsors = [
  { name: "Dassault Systemes", tier: "Technical Partner", logo: dassaultSystemesLogo },
  { name: "Rapidex Engineering Services", tier: "Partner", logo: rapidexLogo },
  { name: "Dhruv Computers and Electronics", tier: "Partner", logo: dhruvLogo },
  { name: "Saish Agency", tier: "Partner", logo: saishAgencyLogo },
  { name: "Siddhi Enterprises", tier: "Partner", logo: siddhiEnterprisesLogo },
];

const impactStats = [
  { icon: Eye, value: "10K+", label: "Social Media Reach" },
  { icon: Users, value: "500+", label: "Farmers Impacted" },
  { icon: Award, value: "3+", label: "National Awards" },
  { icon: TrendingUp, value: "40+", label: "Years of Excellence (College)" },
];

const Sponsors = () => {
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
              Sponsorship Opportunities
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary-foreground">Partner With Team Sanjivani 4.0 to</span> 
              <span className="text-accent"> Transform Agriculture</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
              Join our mission to make innovative agricultural technology accessible 
              to farmers everywhere. Your support drives real-world impact and helps 
              us excel at SAE TIFAN 2025-2026.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 bg-card-gradient border-b border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-8 md:p-12 rounded-3xl bg-card border border-border">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Welcome Message for Sponsors
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                It gives us immense pleasure to present Team Sanjivani 4.0 as we gear up for 
                SAE TIFAN 2025-2026. Our journey is not just about building a vehicle — it is 
                about building innovation, teamwork and the spirit of Engineering excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We sincerely invite you to be a part of this exciting endeavour. With your support, we aim to:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Enhance our prototype vehicle's performance and reliability",
                  "Represent our institute at the national stage with pride",
                  "Showcase your brand across vehicle panels, uniforms, media coverage, and event platforms",
                  "Inspire the next generation of Engineering through innovation and collaboration",
                  "Support skill development, innovation, and sustainable Engineering practices",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground italic">
                Your Sponsorship will directly contribute to making our dream a reality. 
                Together, we can accelerate innovation, fuel creativity, and drive success.
              </p>
              <p className="text-primary font-semibold mt-4">
                — Team Sanjivani 4.0, Sanjivani College of Engineering, Kopargaon
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-card-gradient border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Why Sponsor Us?
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Team Sanjivani 4.0
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              "At Team Sanjivani 4.0, we don't just build vehicles — we build innovation, 
              teamwork, and impact. By sponsoring us, you become part of a journey that 
              goes beyond competition."
            </p>
          </motion.div>

          <div className="space-y-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 md:p-8 rounded-2xl bg-card border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <reason.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                      {index + 1}. {reason.title}
                    </h3>
                    <ul className="space-y-2">
                      {reason.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle size={14} className="text-accent shrink-0 mt-1" />
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sponsorship Tiers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose a sponsorship level that aligns with your goals and budget.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl border ${
                  tier.highlight
                    ? "bg-hero-gradient text-primary-foreground border-primary"
                    : "bg-card border-border"
                }`}
              >
                {tier.highlight && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-accent text-accent-foreground text-xs font-medium mb-3">
                    <Star size={12} /> Most Popular
                  </span>
                )}
                <h3 className={`font-display text-2xl font-bold mb-4 ${
                  tier.highlight ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {tier.name}
                </h3>
                <ul className="space-y-3">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={16} className={`shrink-0 mt-0.5 ${
                        tier.highlight ? "text-accent" : "text-accent"
                      }`} />
                      <span className={tier.highlight ? "text-primary-foreground/90" : "text-foreground"}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              <Download size={18} />
              Download Sponsorship Proposal
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-24 bg-card-gradient border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Partners
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Current Sponsors & Partners
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're grateful for the support of these organizations who believe in our mission.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {currentSponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="aspect-[3/2] rounded-xl bg-card border border-border flex flex-col items-center justify-center p-4 hover:border-primary/50 hover:shadow-soft hover:-translate-y-1 transition-all duration-300 group"
              >
                {sponsor.logo ? (
                  <>
                    <div className="w-full h-full flex items-center justify-center mb-2">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <span className="text-xs text-muted-foreground group-hover:text-accent transition-colors mt-auto">
                      {sponsor.tier}
                    </span>
                  </>
                ) : (
                  <>
                    <p className="font-display font-semibold text-foreground text-center">
                      {sponsor.name}
                    </p>
                    <span className="text-xs text-accent mt-1">{sponsor.tier}</span>
                  </>
                )}
              </motion.div>
            ))}
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
              Ready to Make an Impact?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-2xl mx-auto">
              Join our family of sponsors and help us drive agricultural innovation forward. 
              Together, we can accelerate innovation, fuel creativity, and drive success.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Become a Sponsor <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Sponsors;
