import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";

const ComparisonSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { t } = useLanguage();

  const features = [
    { name: t("comparison.webBased"), us: true, others: false },
    { name: t("comparison.rewards"), us: true, others: true },
    { name: t("comparison.segmentation"), us: true, others: false },
    { name: t("comparison.email"), us: true, others: true },
    { name: t("comparison.marketing"), us: true, others: false },
    { name: t("comparison.qr"), us: true, others: false },
    { name: t("comparison.gift"), us: true, others: true },
    { name: t("comparison.whiteLabel"), us: true, others: false },
  ];

  return (
    <section ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div 
          className={`text-center mb-16 space-y-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold">
            {t("comparison.title")} <span className="text-gradient">{t("comparison.titleHighlight")}</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("comparison.subtitle")}
          </p>
        </div>

        <Card 
          className={`max-w-4xl mx-auto overflow-hidden transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-3 bg-gradient-primary text-white p-6">
            <div className="text-lg font-semibold">{t("comparison.feature")}</div>
            <div className="text-lg font-semibold text-center">{t("comparison.loyaltea")}</div>
            <div className="text-lg font-semibold text-center">{t("comparison.others")}</div>
          </div>
          
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 p-6 border-b border-border/50 last:border-0 hover:bg-muted/50 transition-colors ${
                index % 2 === 0 ? 'bg-background' : 'bg-muted/20'
              }`}
            >
              <div className="font-medium text-foreground">{feature.name}</div>
              <div className="flex justify-center">
                {feature.us ? (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <X className="w-5 h-5 text-muted-foreground" />
                  </div>
                )}
              </div>
              <div className="flex justify-center">
                {feature.others ? (
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <Check className="w-5 h-5 text-muted-foreground" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <X className="w-5 h-5 text-muted-foreground" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </Card>
      </div>
    </section>
  );
};

export default ComparisonSection;
