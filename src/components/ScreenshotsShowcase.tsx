import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import customersDashboard from "@/assets/customers-dashboard.png";
import automationsDashboard from "@/assets/automations-dashboard.png";
import campaignsDashboard from "@/assets/campaigns-dashboard.png";
import { Sparkles, Users, Zap } from "lucide-react";

const ScreenshotsShowcase = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { t } = useLanguage();

  const showcaseItems = [
    {
      title: t("screenshots.customerManagement"),
      description: t("screenshots.customerManagementDesc"),
      image: customersDashboard,
      icon: Users,
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: t("screenshots.powerfulAutomations"),
      description: t("screenshots.powerfulAutomationsDesc"),
      image: automationsDashboard,
      icon: Zap,
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: t("screenshots.campaignManagement"),
      description: t("screenshots.campaignManagementDesc"),
      image: campaignsDashboard,
      icon: Sparkles,
      gradient: "from-pink-500/20 to-orange-500/20",
    },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`text-center mb-20 space-y-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold">
            {t("screenshots.title")}{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-gradient">{t("screenshots.titleHighlight")}</span>
              <span className="absolute inset-0 blur-xl bg-gradient-primary opacity-30"></span>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("screenshots.subtitle")}
          </p>
        </div>

        <div className="space-y-32">
          {showcaseItems.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Content */}
                <div 
                  className={`space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-primary/20">
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-foreground">{t("screenshots.featureSpotlight")}</span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 pt-4">
                    <div className="glass-card px-4 py-2 rounded-lg">
                      <span className="text-sm font-medium text-foreground">✨ {t("screenshots.easyToUse")}</span>
                    </div>
                    <div className="glass-card px-4 py-2 rounded-lg">
                      <span className="text-sm font-medium text-foreground">⚡ {t("screenshots.lightningFast")}</span>
                    </div>
                    <div className="glass-card px-4 py-2 rounded-lg">
                      <span className="text-sm font-medium text-foreground">🎯 {t("screenshots.resultsDriven")}</span>
                    </div>
                  </div>
                </div>

                {/* Screenshot */}
                <div 
                  className={`relative group ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  {/* Gradient Glow */}
                  <div className={`absolute -inset-8 bg-gradient-to-br ${item.gradient} rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  {/* Main Image Container */}
                  <div className="relative glass-card p-3 rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="relative rounded-xl shadow-card w-full"
                    />
                    
                    {/* Floating Badge */}
                    <div className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-full border border-primary/20 shadow-elegant animate-float">
                      <span className="text-sm font-bold text-gradient">{t("screenshots.liveDemo")}</span>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsShowcase;
