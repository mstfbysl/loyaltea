import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const companies = [
  "Microsoft", "Google", "Amazon", "Stripe", "Shopify", "Salesforce"
];

const TrustSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="py-12 border-y border-border/50 bg-muted/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-6">
          {t("trust.title")}
        </p>
        <div 
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {companies.map((company, index) => (
            <div
              key={company}
              className="text-center opacity-60 hover:opacity-100 transition-opacity"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-2xl font-bold text-muted-foreground">{company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
