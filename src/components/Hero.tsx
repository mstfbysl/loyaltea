import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Play, Gift } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 animate-slide-in-left">
              <Gift className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">{t("hero.badge")}</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-fade-in-up">
              {t("hero.title")}{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-foreground">{t("hero.titleHighlight")}</span>
                <span className="absolute inset-0 blur-xl bg-gradient-primary opacity-30"></span>
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              {t("hero.description")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Button size="lg" className="text-lg shadow-elegant hover:shadow-glow transition-all duration-300 group">
                {t("hero.getStarted")}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg glass group"
                onClick={() => setIsDialogOpen(true)}
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                {t("hero.watchDemo")}
              </Button>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogContent className="max-w-4xl p-0">
                <DialogHeader className="p-6 pb-0">
                  <DialogTitle>Product Demo</DialogTitle>
                </DialogHeader>
                <div className="aspect-video w-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Product Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-b-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>
            
            <div className="flex flex-wrap items-center gap-6 lg:gap-8 pt-8 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <div className="glass-card px-6 py-4 rounded-xl">
                <div className="text-3xl font-bold text-gradient">50K+</div>
                <div className="text-sm text-muted-foreground">{t("hero.activeBusinesses")}</div>
              </div>
              <div className="glass-card px-6 py-4 rounded-xl">
                <div className="text-3xl font-bold text-gradient">4.8★</div>
                <div className="text-sm text-muted-foreground">{t("hero.userRating")}</div>
              </div>
              <div className="glass-card px-6 py-4 rounded-xl">
                <div className="text-3xl font-bold text-gradient">10M+</div>
                <div className="text-sm text-muted-foreground">{t("hero.rewardsRedeemed")}</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-3xl animate-float" />
            <div className="relative glass-card p-2 rounded-3xl">
              <img 
                src={heroDashboard} 
                alt="Loyalty Platform Dashboard Preview" 
                className="relative rounded-2xl shadow-card w-full hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
