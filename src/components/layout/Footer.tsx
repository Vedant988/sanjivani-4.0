import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin, 
  ArrowUpRight,
  MessageCircle,
  Youtube
} from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/team" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
  ],
  services: [
    { name: "Engineering Services", path: "/services" },
    { name: "Buy Machine", path: "/products" },
    { name: "Book an Engineer", path: "/book-engineer" },
    { name: "Consulting", path: "/services#consulting" },
  ],
  getInvolved: [
    { name: "Become a Sponsor", path: "/sponsors" },
    { name: "Join the Team", path: "/join" },
    { name: "Careers", path: "/careers" },
    { name: "Partner With Us", path: "/sponsors#partners" },
  ],
  resources: [
    { name: "FAQ", path: "/faq" },
    { name: "News & Achievements", path: "/news" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/team-sanjivani4-o-804b98386" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/team_sanjivani_4.0" },
  { name: "WhatsApp", icon: MessageCircle, url: "https://whatsapp.com/channel/0029VbC4JfO6xCSSuXg2YJ2i" },
  { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/@team_sanjivani_4.0" },
];

export function Footer() {
  return (
    <footer className="bg-dark-gradient text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" srcSet="/logo@2x.png 2x" alt="SANJIVANI 4.0" className="w-12 h-12 object-contain rounded-xl shadow-glow-accent" />
              <div>
                <h2 className="font-display font-bold text-xl text-primary-foreground">SANJIVANI 4.0</h2>
                <p className="text-sm text-primary-foreground/60">Engineering Innovation</p>
              </div>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-sm">
              Pioneering agricultural machinery innovation through engineering excellence. 
              Empowering farmers with cutting-edge solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-primary-foreground">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-primary-foreground">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-primary-foreground">Get Involved</h3>
            <ul className="space-y-3">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-primary-foreground">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/70">
                Sanjivani College of Engineering, Kopargaon<br />
                Shingnapur, Kopargaon, Dist-Ahilyanagar, 423601<br />
                Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-accent shrink-0" />
                <a href="mailto:tifan26sanjivani4.0@gmail.com" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  tifan26sanjivani4.0@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-accent shrink-0" />
                <a href="tel:+918766674036" className="text-primary-foreground/70 hover:text-accent transition-colors">
                +91 87666 74036
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} SANJIVANI 4.0. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
