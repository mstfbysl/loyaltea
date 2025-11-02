import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { t } = useLanguage();

  const features = [
    t("pricing.allFeatures"),
    t("pricing.unlimitedCustomers"),
    t("pricing.emailAutomation"),
    t("pricing.customerSegmentation"),
    t("pricing.qrScanning"),
    t("pricing.giftManagement"),
    t("pricing.fullyCustomizable"),
    t("pricing.whiteLabel"),
    t("pricing.prioritySupport"),
    t("pricing.regularUpdates"),
    t("pricing.noSetupFees"),
    t("pricing.freeTrial")
  ];

  return (
    <section id="pricing" ref={ref} className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`text-center mb-16 space-y-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold">
            {t("pricing.title")}{" "}
            <span className="text-gradient">{t("pricing.titleHighlight")}</span>{" "}
            {t("pricing.titleEnd")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card
            className={`p-10 glass-card border-primary shadow-elegant relative overflow-hidden transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="absolute top-0 right-0 bg-gradient-primary text-white px-6 py-2 text-sm font-semibold rounded-bl-lg shadow-glow">
              {t("pricing.bestValue")}
            </div>
              
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-3 text-foreground">{t("pricing.planTitle")}</h3>
              <p className="text-muted-foreground">{t("pricing.planSubtitle")}</p>
            </div>

            <div className="text-center mb-10">
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-6xl font-bold text-gradient">$99</span>
                <span className="text-muted-foreground ml-3 text-xl">{t("pricing.perMonth")}</span>
              </div>
              <p className="text-sm text-muted-foreground">{t("pricing.billingInfo")}</p>
            </div>

            <Button 
              className="w-full mb-10 shadow-elegant hover:shadow-glow group transition-all duration-300 text-lg h-14"
            >
              {t("pricing.startTrial")}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
