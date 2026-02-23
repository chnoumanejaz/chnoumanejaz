import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { testimonialsData } from "@/data/testimonials";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/shared/ScrollAnimation";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollAnimation>
          <SectionHeading
            title="Loved by Clients & Colleagues"
            subtitle="Here's what people I've worked with have to say about our collaborations."
          />
        </ScrollAnimation>

        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
          staggerDelay={0.1}
        >
          {testimonialsData.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <motion.div
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 h-full flex flex-col"
                whileHover={{ y: -4, boxShadow: "0 15px 30px -10px hsl(var(--primary) / 0.1)" }}
              >
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>

                {/* Testimonial content */}
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-sm font-bold text-primary">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
