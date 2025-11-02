import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-lg p-4 md:p-6 shadow-elegant relative">
          <button
            onClick={handleDecline}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={t("cookie.close")}
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 pr-8">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">
                {t("cookie.title")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("cookie.description")}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <Button
                variant="outline"
                onClick={handleDecline}
                className="w-full sm:w-auto"
              >
                {t("cookie.decline")}
              </Button>
              <Button
                onClick={handleAccept}
                className="w-full sm:w-auto"
              >
                {t("cookie.accept")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;