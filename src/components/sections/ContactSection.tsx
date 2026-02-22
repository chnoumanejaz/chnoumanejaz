import { useState } from "react";
import { Send, Mail, MapPin, Phone, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { personalData } from "@/data/personal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollAnimation } from "@/components/shared/ScrollAnimation";
import { toast } from "sonner";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <SectionHeading
            title="Get In Touch"
            subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
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
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great. Feel free to reach out!
              </p>
            </div>
          </ScrollAnimation>

          {/* Form */}
          <ScrollAnimation animation="fade-up" delay={200}>
            <form onSubmit={handleSubmit} className="space-y-4">
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
            </form>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
