import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Calendar,
  Clock,
  User,
  CheckCircle,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import { bookingAPI } from "@/lib/api";

const departments = [
  "Mechanical Design",
  "Manufacturing",
  "CAE / Analysis",
  "Electrical / Controls",
  "General Consultation",
];

const timeSlots = [
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
  "4:00 PM - 5:00 PM",
];

const BookEngineer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    department: "",
    date: "",
    timeSlot: "",
    purpose: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await bookingAPI.submit({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        organization: formData.organization,
        type: "engineer",
        department: formData.department,
        preferredDate: formData.date ? new Date(formData.date).toISOString() : undefined,
        timeSlot: formData.timeSlot,
        purpose: formData.purpose,
      });

      if (result.success) {
        toast({
          title: "Booking Request Submitted!",
          description: result.message || "We'll confirm your appointment within 24 hours.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          department: "",
          date: "",
          timeSlot: "",
          purpose: "",
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to submit booking request. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Booking form error:", error);
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
              Book an Engineer
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary-foreground">Expert Engineering</span> 
              <span className="text-accent"> Consultation</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
              Schedule a one-on-one consultation with our engineering experts for 
              design guidance, technical advice, or project collaboration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                How It Works
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">Submit Request</h3>
                    <p className="text-muted-foreground text-sm">
                      Fill out the booking form with your details and preferred slot.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">Get Confirmation</h3>
                    <p className="text-muted-foreground text-sm">
                      We'll review and confirm your booking within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">Consultation</h3>
                    <p className="text-muted-foreground text-sm">
                      Meet with our expert (in-person or virtual) at the scheduled time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-display font-semibold text-foreground mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">1-hour consultation session</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">Expert from your chosen department</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">Follow-up summary and recommendations</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">Option for continued engagement</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="p-8 rounded-3xl bg-card border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Book Your Consultation
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill in your details and we'll get back to you with confirmation.
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
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                        Organization
                      </label>
                      <Input
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Company or farm name"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-foreground mb-2">
                      Department *
                    </label>
                    <select
                      id="department"
                      name="department"
                      required
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full h-12 px-3 rounded-lg border border-input bg-background text-foreground"
                    >
                      <option value="">Select a department</option>
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                        Preferred Date *
                      </label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeSlot" className="block text-sm font-medium text-foreground mb-2">
                        Preferred Time *
                      </label>
                      <select
                        id="timeSlot"
                        name="timeSlot"
                        required
                        value={formData.timeSlot}
                        onChange={handleChange}
                        className="w-full h-12 px-3 rounded-lg border border-input bg-background text-foreground"
                      >
                        <option value="">Select a time slot</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="purpose" className="block text-sm font-medium text-foreground mb-2">
                      Purpose of Consultation *
                    </label>
                    <Textarea
                      id="purpose"
                      name="purpose"
                      required
                      value={formData.purpose}
                      onChange={handleChange}
                      placeholder="Briefly describe what you'd like to discuss..."
                      rows={4}
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
                      "Submitting..."
                    ) : (
                      <>
                        Book Consultation <Send size={18} />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookEngineer;
