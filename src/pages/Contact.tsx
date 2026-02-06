import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageSquare,
  Clock,
  ArrowRight,
  Linkedin,
  Instagram,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import { contactAPI } from "@/lib/api";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "tifan26sanjivani4.0@gmail.com",
    secondaryValue: "tifan26sanjivani4.0@sanjivanicoe.org",
    link: "mailto:tifan26sanjivani4.0@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    phones: [
      {
        label: "Mr. Keshar Shinde",
        value: "+91 87666 74036",
        link: "tel:+918766674036",
      },
      {
        label: "Mr. Ritesh Rajput",
        value: "+91 96576 07191",
        link: "tel:+919657607191",
      },
    ],
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Sanjivani College of Engineering, Kopargaon",
    secondaryValue: "Shingnapur, Dist-Ahilyanagar, 423603 Maharashtra, India",
    link: "https://maps.google.com/?q=Sanjivani+College+of+Engineering+Kopargaon",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM",
    secondaryValue: "Closed on Sundays",
    link: null,
  },
];

const teamContacts = [
  {
    name: "Dr. S.S. Ingle",
    role: "Faculty Advisor",
    phone: "+91 98509 70327",
    email: "inglesumedhmech@sanjivani.org.in",
  },
  {
    name: "Mr. Keshar Shinde",
    role: "Captain",
    phone: "+91 87666 74036",
    email: "kesharshindemech111@gmail.com",
  },
  {
    name: "Mr. Ritesh Rajput",
    role: "Vice Captain",
    phone: "+91 96576 07191",
    email: "rajputritesh2053@gmail.com",
  },
  {
    name: "Mr. Omprakash Pawar",
    role: "Sponsorship Coordinator",
    phone: "+91 98349 06320",
    email: "pawaromprakash11@gmail.com",
  },
  {
    name: "Mr. Dhruv Inamke",
    role: "Sales & Marketing",
    phone: "+91 97669 46674",
    email: "dhruvinamke911@gmail.com",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await contactAPI.submit({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      });

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: result.message || "We'll get back to you within 24-48 hours.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-hero-gradient text-primary-foreground relative overflow-hidden">
        {/* Green pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm font-medium mb-6">
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-primary-foreground">
              Let's Start a 
              <span className="text-accent"> Conversation</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
              Have questions about our products, services, or partnership opportunities? 
              SANJIVANI 4.0 would love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're a farmer, industry partner, or potential sponsor—we're 
                here to help. Reach out through any of the channels below.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>

                      {"phones" in info && Array.isArray((info as any).phones) ? (
                        <div className="space-y-1">
                          {(info as any).phones.map(
                            (phone: { label: string; value: string; link: string }) => (
                              <div key={phone.value} className="text-sm">
                                <a
                                  href={phone.link}
                                  className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                  {phone.value}
                                </a>
                                <p className="text-muted-foreground/70 text-xs">
                                  {phone.label}
                                </p>
                              </div>
                            ),
                          )}
                        </div>
                      ) : info.link ? (
                        <a
                          href={info.link}
                          target={info.title === "Address" ? "_blank" : undefined}
                          rel={info.title === "Address" ? "noopener noreferrer" : undefined}
                          className="text-muted-foreground hover:text-primary transition-colors block text-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <>
                          {info.value && (
                            <p className="text-muted-foreground text-sm">{info.value}</p>
                          )}
                          {info.secondaryValue && (
                            <p className="text-muted-foreground/70 text-xs mt-1">
                              {info.secondaryValue}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-8 border-t border-border"
              >
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/team-sanjivani4-o-804b98386"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://instagram.com/TEAM_SANJIVANI_4.0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </motion.div>

              {/* WhatsApp Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-6"
              >
                <Button variant="accent" size="lg" className="w-full" asChild>
                  <a
                    href="https://wa.me/918766674036"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare size={20} />
                    Chat on WhatsApp
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="p-8 rounded-3xl bg-card border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24-48 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your inquiry..."
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primaryGlow"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Contacts */}
      <section className="py-16 bg-card-gradient border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Direct Contacts
            </h2>
            <p className="text-muted-foreground">
              Reach out to specific team members for your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {teamContacts.map((contact, index) => (
              <motion.div
                key={contact.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-card border border-border text-center hover:shadow-soft hover:-translate-y-1 transition-all flex flex-col items-center h-full"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <User size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {contact.name}
                </h3>
                <p className="text-accent text-xs font-medium mb-3">{contact.role}</p>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="hover:text-primary transition-colors block"
                  >
                    {contact.phone}
                  </a>
                  {contact.email && (
                    <a
                      href={`mailto:${contact.email}`}
                      className="hover:text-primary transition-colors block truncate"
                    >
                      {contact.email}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="bg-background">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Find Us Here
            </h2>
            <p className="text-muted-foreground">
              Visit our workshop at Sanjivani College of Engineering, Kopargaon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[16/6] rounded-2xl overflow-hidden border border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.9041397078384!2d74.49260067519285!3d19.90161708150654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc7e8c7e8c7e8c%3A0x8c8c8c8c8c8c8c8c!2sSanjivani%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sanjivani College of Engineering Location"
            />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
