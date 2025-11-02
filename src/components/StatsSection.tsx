import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { TrendingUp, Users, Shield, Zap } from "lucide-react";

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const { t } = useLanguage();

  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: t("stats.activeBusinesses"),
      description: t("stats.activeBusinessesDesc")
    },
    {
      icon: TrendingUp,
      value: "10M+",
      label: t("stats.rewardsRedeemed"),
      description: t("stats.rewardsRedeemedDesc")
    },
    {
      icon: Shield,
      value: "99.9%",
      label: t("stats.uptime"),
      description: t("stats.uptimeDesc")
    },
    {
      icon: Zap,
      value: "<0.5s",
      label: t("stats.qrScanTime"),
      description: t("stats.qrScanTimeDesc")
    }
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-4 group-hover:animate-pulse-glow transition-all">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
