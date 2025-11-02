import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import professional from "@/assets/professional.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t("testimonials.sarah"),
      role: t("testimonials.sarahRole"),
      content: t("testimonials.sarahQuote"),
      rating: 5,
    },
    {
      name: t("testimonials.michael"),
      role: t("testimonials.michaelRole"),
      content: t("testimonials.michaelQuote"),
      rating: 5,
    },
    {
      name: t("testimonials.emily"),
      role: t("testimonials.emilyRole"),
      content: t("testimonials.emilyQuote"),
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`text-center mb-16 space-y-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold">
            {t("testimonials.title")}{" "}
            <span className="text-gradient">{t("testimonials.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`p-8 glass-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 relative group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={professional}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
