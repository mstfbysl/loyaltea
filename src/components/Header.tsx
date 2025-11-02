import { Button } from "@/components/ui/button";
import { Menu, Globe } from "lucide-react";
import { useState } from "react";
import loyalteaLogo from "@/assets/loyaltea-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  
  const displayLanguage = language.toUpperCase();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/">
              <img src={loyalteaLogo} alt="Loyaltea" className="h-8" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("features")} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              {t("header.features")}
            </button>
            <button onClick={() => scrollToSection("pricing")} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              {t("header.pricing")}
            </button>
            <a href="/about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              {t("header.about")}
            </a>
            <a href="/blog" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              {t("header.blog")}
            </a>
            <a href="/contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              {t("header.contact")}
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  {displayLanguage}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="glass">
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("es")}>
                  Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              {t("header.getStarted")}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1">
                  <Globe className="h-4 w-4" />
                  {displayLanguage}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="glass">
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("es")}>
                  Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-2">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="glass">
                <nav className="flex flex-col gap-6 mt-8">
                  <button onClick={() => scrollToSection("features")} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors text-left">
                    {t("header.features")}
                  </button>
                  <button onClick={() => scrollToSection("pricing")} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors text-left">
                    {t("header.pricing")}
                  </button>
                  <a href="/about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors text-left">
                    {t("header.about")}
                  </a>
                  <a href="/blog" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors text-left">
                    {t("header.blog")}
                  </a>
                  <a href="/contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors text-left">
                    {t("header.contact")}
                  </a>
                  <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 w-full mt-4">
                    {t("header.getStarted")}
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
