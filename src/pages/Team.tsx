import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Linkedin, 
  Mail, 
  ArrowRight,
  Wrench,
  Cpu,
  Cog,
  Zap,
  TrendingUp,
  Users,
  DollarSign,
  Megaphone,
  PenTool,
  Award,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const departments = [
  { name: "Mechanical Design", icon: Cog, color: "bg-primary", description: "Engineering excellence" },
  { name: "Manufacturing", icon: Wrench, color: "bg-accent", description: "Precision crafting" },
  { name: "CAE / Analysis", icon: Cpu, color: "bg-primary", description: "Advanced simulation" },
  { name: "Electrical / Controls", icon: Zap, color: "bg-accent", description: "Smart systems" },
  { name: "Sales & Marketing", icon: TrendingUp, color: "bg-primary", description: "Market leadership" },
  { name: "Finance & Operations", icon: DollarSign, color: "bg-accent", description: "Strategic planning" },
];

const leadership = [
  { name: "Dr. P.M. Patare", role: "HoD Mech. Dept", type: "Faculty" },
  { name: "Dr. S.S. Ingle", role: "Faculty Advisor", type: "Faculty" },
  { name: "Mr. Pravin Khairnar", role: "SAE Team Mentor", type: "Mentor" },
  { name: "Mr. B.P. Tirumala", role: "SAE Team Mentor", type: "Mentor" },
];

const teamLeads = [
  { name: "Mr. Keshar Shinde", role: "Captain", icon: Users, linkedin: "https://www.linkedin.com/in/keshar-shinde-ba13182b7", email: "kesharshindemech111@gmail.com" },
  { name: "Mr. Ritesh Rajput", role: "Vice-Captain", icon: Users, linkedin: "https://www.linkedin.com/in/ritesh-rajput-7a5b56288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", email: "rajputritesh2053@gmail.com" },
  { name: "Mr. Shantanu Thange", role: "Treasurer", icon: DollarSign, linkedin: "https://linkedin.com/in/shantanuthange", email: "shantanuthange5@gmail.com" },
  { name: "Mr. Omprakash Pawar", role: "Sponsorship Lead", icon: TrendingUp, linkedin: "https://www.linkedin.com/in/omprakash-pawar-bb54b9258", email: "pawaromprakash11@gmail.com" },
  { name: "Mr. Bhushan Pawar", role: "Manufacturing Lead", icon: Wrench, linkedin: "https://www.linkedin.com/in/bhushan-pawar-838160326", email: "bhushanpawar1289@gmail.com" },
  { name: "Mr. Abhishek Nale", role: "Design Lead", icon: PenTool, linkedin: "https://www.linkedin.com/in/abhishek-nale-711490289", email: "abhisheknale9657@gmail.com" },
  { name: "Mr. Dhruv Inamke", role: "Sales & Marketing Lead", icon: Megaphone, linkedin: "https://www.linkedin.com/in/dhruv-inamke-45629728a", email: "dhruvinamke911@gmail.com" },
  { name: "Mr. Tejas Sonawane", role: "Social & Patent Lead", icon: Zap, linkedin: "https://www.linkedin.com/in/tejas-sonawane-3bb8202b6", email: "tejassonawane1940@gmail.com" },
];

const teamMembers = [
  // Row 1
  { name: "Mr. Vedant Rindhe", role: "Member", linkedin: "https://www.linkedin.com/in/vedant-rindhe-8b1034241", email: "rindhevedant@gmail.com" },
  { name: "Mr. Kaushik Barhate", role: "Member", linkedin: "https://www.linkedin.com/in/kaushik-barhate-234b81288", email: "kaushikbarhate@gmail.com" },
  { name: "Mr. Atharva Sathe", role: "Member", linkedin: "https://www.linkedin.com/in/atharva-sathe-157640288", email: "satheatharva105@gmail.com" },
  { name: "Miss. Nishita Malviya", role: "Member", linkedin: "https://www.linkedin.com/in/nishita-malviya-53a798330", email: "nishitavmalviya14@gmail.com" },
  { name: "Miss. Shraddha Shirole", role: "Member", linkedin: "https://www.linkedin.com/in/shraddha-shirole-28474832a", email: "shraddhashirole24@gmail.com" },
  { name: "Miss. Pranjali Jejurkar", role: "Member", linkedin: "https://www.linkedin.com/in/pranjali-jejurkar-96306732b", email: "pranjalijejurkar26@gmail.com" },
  // Row 2
  { name: "Miss. Sanika Wakchaure", role: "Member", linkedin: "https://www.linkedin.com/in/sanika-wakchaure-5222733a4", email: "sanikawakchaure04@gmail.com" },
  { name: "Mr. Vishal Kadam", role: "Member", linkedin: "https://www.linkedin.com/in/vishal-kadam-b47545328", email: "kadampatil9765@gmail.com" },
  { name: "Mr. Saiayush Ugale", role: "Member", linkedin: "https://www.linkedin.com/in/saiayush-ugale-341b2135a", email: "saiayushugale37@gmail.com" },
  { name: "Mr. Pratik Jagtap", role: "Member", linkedin: "https://www.linkedin.com/in/pratik-jagtap-40937832b", email: "pratik002pj@gmail.com" },
  { name: "Mr. Prathamesh Chine", role: "Member", linkedin: "https://www.linkedin.com/in/prathamesh-chine", email: "prathameshchine06@gmail.com" },
  { name: "Mr. Atharv Karkhile", role: "Member", linkedin: "https://www.linkedin.com/in/atharv-karkhile-971a72385", email: "satheatharva105@gmail.com" },
];

// Load team photos from `src/assets/team` (supported formats: png, jpg, jpeg, webp)
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

import { usePageTitle } from "@/lib/usePageTitle";

// SVG pattern for hero background
const heroPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

const Team = () => {
  usePageTitle("Our Team", "Meet SANJIVANI 4.0 - Engineers and innovators from Sanjivani College of Engineering");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-hero-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url('${heroPattern}')` }}></div>
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
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground/90 text-sm font-medium mb-6 border border-primary-foreground/20"
              >
                SANJIVANI 4.0
              </motion.span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-primary-foreground">
              The People Behind the 
              <span className="text-accent block mt-2"> Innovation</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl leading-relaxed mb-8">
              Meet our dedicated team of engineers, designers, and innovators from 
              Sanjivani College of Engineering, Kopargaon, passionate about transforming 
              agriculture through technology.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <CheckCircle2 size={18} className="text-accent" />
                <span className="text-sm font-medium">20+ Team Members</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <CheckCircle2 size={18} className="text-accent" />
                <span className="text-sm font-medium">All India Rank 1</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <CheckCircle2 size={18} className="text-accent" />
                <span className="text-sm font-medium">Multiple Awards</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="py-24 bg-gradient-to-b from-background via-card-gradient to-background relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              Our Capabilities
            </motion.span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Cross-functional teams working together to deliver excellence in every domain
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-7xl mx-auto">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.5, type: "spring", stiffness: 100 }}
                className="group relative"
              >
                <div className="relative h-full p-6 md:p-7 rounded-3xl bg-card border border-border/50 text-center overflow-hidden transition-all duration-500 hover:border-primary/60 hover:shadow-elevated hover:-translate-y-2">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-accent/5 transition-all duration-500 rounded-3xl"></div>
                  
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl -z-10"></div>
                  </div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-5">
                    <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full ${dept.color} flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-xl`}>
                      {/* Icon glow effect */}
                      <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                      <dept.icon size={32} className="relative text-primary-foreground z-10 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    {/* Decorative dot */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="font-display font-bold text-base md:text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {dept.name}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {dept.description}
                    </p>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom decorative element */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent"
          ></motion.div>
        </div>
      </section>

      {/* Faculty & Mentors Section */}
      <section className="py-24 bg-card-gradient border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <Award size={14} />
              Guidance & Leadership
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Faculty & Mentors
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Experienced professionals guiding our team toward excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {leadership.map((person, index) => {
              const photo = findPhotoFor(person.name);
              return (
                <motion.div
                  key={person.name}
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
                              alt={person.name} 
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
                      <div className="flex-1 mb-4">
                        <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {person.name}
                        </h3>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-3">
                          <Award size={14} />
                          {person.type}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm text-center">{person.role}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Leads Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Users size={14} />
              Core Leadership
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Team Leads
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Driven leaders shaping the future of agricultural innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {teamLeads.map((lead, index) => {
              const photo = findPhotoFor(lead.name);
              const hasContact = lead.linkedin || lead.email;
              return (
                <motion.div
                  key={lead.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
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
                              alt={lead.name} 
                              className="relative w-32 h-32 rounded-full object-cover border-4 border-card shadow-elevated group-hover:scale-105 transition-transform duration-300" 
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center border-4 border-card shadow-elevated">
                            <lead.icon size={48} className="text-primary/50" />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex-1 mb-4">
                        <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {lead.name.replace('Mr. ', '').replace('Miss. ', '')}
                        </h3>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-3">
                          <lead.icon size={14} />
                          {lead.role}
                        </div>
                      </div>
                      
                      {hasContact && (
                        <div className="flex gap-2 pt-4 border-t border-border">
                          {lead.linkedin && (
                            <a 
                              href={lead.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium group/btn"
                              aria-label="LinkedIn"
                            >
                              <Linkedin size={16} className="group-hover/btn:scale-110 transition-transform" />
                              <span className="hidden sm:inline">Connect</span>
                            </a>
                          )}
                          {lead.email && (
                            <a 
                              href={`mailto:${lead.email}`}
                              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-accent/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300 text-sm font-medium group/btn"
                              aria-label="Email"
                            >
                              <Mail size={16} className="group-hover/btn:scale-110 transition-transform" />
                              <span className="hidden sm:inline">Email</span>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-24 bg-card-gradient border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Team Members
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Dedicated individuals working across departments to bring innovation to life
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => {
              const photo = findPhotoFor(member.name);
              const hasContact = member.linkedin || member.email;
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03, duration: 0.4 }}
                  className="group"
                >
                  <div className="relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    {/* Profile Image */}
                    <div className="relative pt-6 px-6 pb-4">
                      <div className="relative mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity"></div>
                        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto overflow-hidden border-2 border-border group-hover:border-primary/50 transition-colors">
                          {photo ? (
                            <img src={photo} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                          ) : (
                            <span className="font-display text-2xl font-bold text-primary">
                              {member.name.split(' ').pop()?.charAt(0)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="px-4 pb-4 flex-1 flex flex-col text-center">
                      <h4 className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors leading-tight">
                        {member.name.replace('Mr. ', '').replace('Miss. ', '')}
                      </h4>
                      <p className="text-muted-foreground text-xs mb-3">{member.role}</p>
                      
                      {hasContact && (
                        <div className="flex gap-1.5 justify-center mt-auto">
                          {member.linkedin && (
                            <a 
                              href={member.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/link"
                              aria-label="LinkedIn"
                            >
                              <Linkedin size={14} className="group-hover/link:scale-110 transition-transform" />
                            </a>
                          )}
                          {member.email && (
                            <a 
                              href={`mailto:${member.email}`}
                              className="p-2 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-all duration-300 group/link"
                              aria-label="Email"
                            >
                              <Mail size={14} className="group-hover/link:scale-110 transition-transform" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 bg-dark-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_hsl(var(--primary))_0%,_transparent_50%)] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground/90 text-sm font-medium mb-6 border border-primary-foreground/20">
              Join Our Mission
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
              Ready to Make an Impact?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              We're always looking for passionate individuals who want to make a difference 
              in agricultural technology. Join SANJIVANI 4.0 and be part of something extraordinary!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild className="text-lg px-8">
                <Link to="/contact">
                  Get in Touch <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild className="text-lg px-8">
                <Link to="/about">
                  Learn More About Us <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
