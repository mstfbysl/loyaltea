import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutUs = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-gradient">{t("about.title")}</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-xl leading-relaxed">
              {t("about.intro")}
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{t("about.storyTitle")}</h2>
            <p className="leading-relaxed">
              {t("about.storyText")}
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{t("about.offerTitle")}</h2>
            <p className="leading-relaxed">
              {t("about.offerText")}
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{t("about.missionTitle")}</h2>
            <p className="leading-relaxed">
              {t("about.missionText")}
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">{t("about.whyTitle")}</h2>
            <ul className="list-disc pl-6 space-y-3 leading-relaxed">
              <li>{t("about.reason1")}</li>
              <li>{t("about.reason2")}</li>
              <li>{t("about.reason3")}</li>
              <li>{t("about.reason4")}</li>
              <li>{t("about.reason5")}</li>
              <li>{t("about.reason6")}</li>
            </ul>

            <div className="mt-12 p-8 glass-card rounded-2xl">
              <h3 className="text-xl font-bold text-foreground mb-4">{t("about.ctaTitle")}</h3>
              <p className="leading-relaxed mb-6">
                {t("about.ctaText")}
              </p>
              <a 
                href="/" 
                className="inline-block px-6 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                {t("about.ctaButton")}
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
