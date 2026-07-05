import { useState } from "react";
import { Send, Mail, MapPin, Phone, User, MessageSquare, CheckCircle, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { personalData } from "@/data/personal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollAnimation } from "@/components/shared/ScrollAnimation";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollAnimation>
          <SectionHeading
            title="Let&apos;s Work Together"
            subtitle="Looking for a full-stack engineer to build SaaS dashboards, APIs, admin portals, or automation workflows? I&apos;m open to remote roles, freelance projects, and serious product opportunities."
          />
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl">
          {/* Contact info */}
          <ScrollAnimation animation="slide-in-left">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold">Email</h4>
                  <a href={personalData.social.email} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {personalData.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold">Location</h4>
                  <p className="text-sm text-muted-foreground">{personalData.location}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
              Send me a message with what you&apos;re building, what stage it&apos;s in, and where you need engineering help. I&apos;ll get back with a clear response.
              </p>
              
              <div className="pt-4">
                <Button className="w-full gap-2 rounded-xl" asChild>
                  <a href={personalData.calendarUrl} target="_blank" rel="noopener noreferrer">
                    <Calendar className="h-4 w-4" /> Book a Call
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Or send me a message using the form →
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Form or Thank You */}
          <ScrollAnimation animation="fade-up" delay={200}>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="rounded-xl bg-card border-border pl-10"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="rounded-xl bg-card border-border pl-10"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="tel"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="rounded-xl bg-card border-border pl-10"
                    />
                  </div>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="rounded-xl bg-card border-border resize-none pl-10"
                    />
                  </div>
                  <Button type="submit" className="w-full rounded-xl gap-2">
                    <Send className="h-4 w-4" /> Send Message
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="thanks"
                  className="flex flex-col items-center justify-center text-center py-16 px-6 bg-card border border-border rounded-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="h-16 w-16 text-primary mb-6" />
                  </motion.div>
                  <h3 className="font-heading text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Your message has been sent successfully. I'll get back to you as soon as possible.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 rounded-xl"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", message: "" });
                    }}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
