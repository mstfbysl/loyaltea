import { Card } from "@/components/ui/card";
import { Gift, Users, Mail, Sparkles, QrCode, Settings, Palette, Tag } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { t } = useLanguage();

  const features = [
    {
      icon: Gift,
      title: t("features.rewards"),
      description: t("features.rewardsDesc"),
    },
    {
      icon: Users,
      title: t("features.segmentation"),
      description: t("features.segmentationDesc"),
    },
    {
      icon: Mail,
      title: t("features.email"),
      description: t("features.emailDesc"),
    },
    {
      icon: Sparkles,
      title: t("features.marketing"),
      description: t("features.marketingDesc"),
    },
    {
      icon: QrCode,
      title: t("features.qr"),
      description: t("features.qrDesc"),
    },
    {
      icon: Tag,
      title: t("features.gift"),
      description: t("features.giftDesc"),
    },
    {
      icon: Settings,
      title: t("features.customizable"),
      description: t("features.customizableDesc"),
    },
    {
      icon: Palette,
      title: t("features.whiteLabel"),
      description: t("features.whiteLabelDesc"),
    },
  ];

  return (
    <section id="features" ref={ref} className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`text-center mb-16 space-y-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold">
            {t("features.title")}{" "}
            <span className="text-gradient">{t("features.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`p-8 glass-card transition-opacity duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
