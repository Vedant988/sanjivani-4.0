import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Team", path: "/team" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const ctaLinks = [
  { name: "Book Engineer", path: "/book-engineer" },
  { name: "Sponsor Us", path: "/sponsors" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderShrunk, setIsHeaderShrunk] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Handle scroll for sticky behavior and header shrinking
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      setIsHeaderShrunk(scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Keyboard navigation for desktop
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (isMobileMenuOpen) return;

    const currentIndex = focusedIndex ?? -1;

    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        const nextIndex = currentIndex < navLinks.length - 1 ? currentIndex + 1 : 0;
        setFocusedIndex(nextIndex);
        linkRefs.current[nextIndex]?.focus();
        break;
      case "ArrowLeft":
        e.preventDefault();
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : navLinks.length - 1;
        setFocusedIndex(prevIndex);
        linkRefs.current[prevIndex]?.focus();
        break;
      case "Home":
        e.preventDefault();
        setFocusedIndex(0);
        linkRefs.current[0]?.focus();
        break;
      case "End":
        e.preventDefault();
        const lastIndex = navLinks.length - 1;
        setFocusedIndex(lastIndex);
        linkRefs.current[lastIndex]?.focus();
        break;
      case "Enter":
      case " ":
        if (currentIndex >= 0 && linkRefs.current[currentIndex]) {
          e.preventDefault();
          navigate(navLinks[currentIndex].path);
        }
        break;
      case "Escape":
        setFocusedIndex(null);
        (e.target as HTMLElement).blur();
        break;
    }
  }, [focusedIndex, isMobileMenuOpen, navigate]);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-medium"
            : "bg-transparent",
          isHeaderShrunk ? "py-2" : "py-4"
        )}
        role="banner"
      >
        <div className="container mx-auto px-4">
          <nav 
            className="flex items-center justify-between"
            role="navigation"
            aria-label="Main navigation"
            onKeyDown={handleKeyDown}
            ref={navRef}
          >
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group"
              aria-label="Team Sanjivani 4.0 Home"
            >
              <motion.div 
                className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center shadow-soft group-hover:shadow-glow-primary transition-all duration-150"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src="/logo.png" 
                  srcSet="/logo@2x.png 2x" 
                  alt="Team Sanjivani 4.0" 
                  className="w-full h-full object-contain" 
                />
              </motion.div>
              <div className={cn("hidden sm:block transition-all duration-300", isHeaderShrunk && "opacity-0 sm:opacity-100")}>
                <h1 className={cn(
                  "font-display font-bold text-xl transition-colors",
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                )}>
                  Team Sanjivani 4.0
                </h1>
                <p className={cn(
                  "text-xs -mt-0.5 transition-colors",
                  isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"
                )}>
                  Engineering Innovation
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div 
              className="hidden lg:flex items-center gap-1"
              role="menubar"
            >
              {navLinks.map((link, index) => {
                const active = isActive(link.path);
                return (
                  <div key={link.path} className="relative group">
                    <Link
                      ref={(el) => {
                        linkRefs.current[index] = el;
                      }}
                      to={link.path}
                      className={cn(
                        "relative px-4 py-2 text-sm font-medium transition-all duration-150",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg",
                        active
                          ? isScrolled
                            ? "text-primary"
                            : "text-primary-foreground"
                          : isScrolled
                          ? "text-foreground/80"
                          : "text-primary-foreground/80"
                      )}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onFocus={() => setFocusedIndex(index)}
                      onBlur={() => setFocusedIndex(null)}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.name}
                      {/* Active indicator bar */}
                      <motion.div
                        className={cn(
                          "absolute bottom-0 left-0 right-0 h-0.5 rounded-full",
                          active 
                            ? "" 
                            : ""
                        )}
                        style={{
                          backgroundColor: active || hoveredIndex === index 
                            ? "hsl(38 92% 50%)" 
                            : "transparent"
                        }}
                        initial={false}
                        animate={{
                          scaleX: active || hoveredIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className={cn(
              "hidden lg:flex items-center gap-3 transition-all duration-300",
              isHeaderShrunk && "gap-2"
            )}>
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Button
                  variant={isScrolled ? "outline" : "heroOutline"}
                  size={isHeaderShrunk ? "sm" : "default"}
                  asChild
                  className="transition-all duration-150"
                >
                  <Link to="/book-engineer">Book Engineer</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Button
                  variant={isScrolled ? "accent" : "hero"}
                  size={isHeaderShrunk ? "sm" : "default"}
                  asChild
                  className="transition-all duration-150"
                >
                  <Link to="/sponsors">Sponsor Us</Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-all duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                isScrolled
                  ? "text-foreground hover:bg-muted"
                  : "text-primary-foreground hover:bg-primary-foreground/10"
              )}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
            id="mobile-menu"
          >
            <div
              className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute right-0 top-0 h-full w-80 max-w-full bg-background shadow-elevated p-6 pt-20"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const active = isActive(link.path);
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.15 }}
                    >
                      <Link
                        to={link.path}
                        className={cn(
                          "relative block px-4 py-3 rounded-lg text-base font-medium transition-all duration-150",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                          active
                            ? "bg-primary/10 text-primary"
                            : "text-foreground/70 hover:text-foreground hover:bg-muted"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-current={active ? "page" : undefined}
                      >
                        {link.name}
                        {/* Active indicator for mobile */}
                        {active && (
                          <motion.div
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full"
                            layoutId="mobile-active-indicator"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
                <div className="h-px bg-border my-4" />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05, duration: 0.15 }}
                >
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/book-engineer">Book Engineer</Link>
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 + 0.05, duration: 0.15 }}
                >
                  <Button variant="accent" className="w-full" asChild>
                    <Link to="/sponsors">Sponsor Us</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
