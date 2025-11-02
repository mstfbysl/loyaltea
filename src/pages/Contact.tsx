import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">{t("contact.title")}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="p-8 glass-card">
                <h2 className="text-2xl font-bold mb-6">{t("contact.sendMessage")}</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">{t("contact.name")}</label>
                    <Input placeholder={t("contact.namePlaceholder")} />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">{t("contact.email")}</label>
                    <Input type="email" placeholder={t("contact.emailPlaceholder")} />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">{t("contact.subject")}</label>
                    <Input placeholder={t("contact.subjectPlaceholder")} />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">{t("contact.message")}</label>
                    <Textarea 
                      placeholder={t("contact.messagePlaceholder")} 
                      rows={6}
                    />
                  </div>
                  
                  <Button className="w-full shadow-elegant hover:shadow-glow transition-all duration-300">
                    {t("contact.sendButton")}
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6 glass-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{t("contact.emailTitle")}</h3>
                    <p className="text-muted-foreground mb-2">{t("contact.emailDesc")}</p>
                    <a href="mailto:support@loyaltea.com" className="text-primary hover:underline">
                      support@loyaltea.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 glass-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{t("contact.phoneTitle")}</h3>
                    <p className="text-muted-foreground mb-2">{t("contact.phoneDesc")}</p>
                    <a href="tel:+1234567890" className="text-primary hover:underline">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 glass-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{t("contact.officeTitle")}</h3>
                    <p className="text-muted-foreground mb-2">{t("contact.officeDesc")}</p>
                    <p className="text-foreground">
                      123 Business Street<br />
                      San Francisco, CA 94102<br />
                      United States
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 glass-card bg-gradient-hero">
                <h3 className="font-bold text-lg mb-2">{t("contact.helpTitle")}</h3>
                <p className="text-muted-foreground mb-4">
                  {t("contact.helpDesc")}
                </p>
                <Button variant="outline" className="w-full">
                  {t("contact.viewDocs")}
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
