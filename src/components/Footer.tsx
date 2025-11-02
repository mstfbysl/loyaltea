import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import loyalteaLogoWhite from "@/assets/loyaltea-logo-white.png";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <img src={loyalteaLogoWhite} alt="Loyaltea" className="h-8" />
            <p className="text-background/70">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">{t("footer.product")}</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">{t("footer.features")}</a></li>
              <li><a href="#" className="hover:text-background transition-colors">{t("footer.pricing")}</a></li>
              <li><a href="#" className="hover:text-background transition-colors">{t("footer.security")}</a></li>
              <li><a href="#" className="hover:text-background transition-colors">{t("footer.updates")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">{t("footer.company")}</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="/about" className="hover:text-background transition-colors">{t("footer.about")}</a></li>
              <li><a href="/contact" className="hover:text-background transition-colors">{t("footer.contact")}</a></li>
              <li><a href="/blog" className="hover:text-background transition-colors">{t("footer.blog")}</a></li>
              <li><a href="/terms" className="hover:text-background transition-colors">{t("footer.terms")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">{t("footer.newsletter")}</h4>
            <p className="text-background/70 mb-4">
              {t("footer.newsletterDesc")}
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder={t("footer.emailPlaceholder")}
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button variant="secondary">{t("footer.subscribe")}</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/70 text-sm">
          <p>&copy; 2025 Loyaltea. {t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
