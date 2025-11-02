import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const blogPosts = [
  {
    title: "10 Ways to Boost Customer Retention",
    excerpt: "Discover proven strategies to keep your customers coming back for more and build lasting relationships.",
    date: "March 15, 2025",
    author: "Sarah Johnson",
    category: "Strategy"
  },
  {
    title: "The Power of Email Automation",
    excerpt: "Learn how automated email campaigns can transform your customer engagement and drive sales.",
    date: "March 10, 2025",
    author: "Michael Chen",
    category: "Marketing"
  },
  {
    title: "Customer Segmentation Best Practices",
    excerpt: "Master the art of segmenting your audience for more targeted and effective marketing campaigns.",
    date: "March 5, 2025",
    author: "Emily Rodriguez",
    category: "Analytics"
  },
  {
    title: "QR Codes: The Future of Loyalty Programs",
    excerpt: "Why QR codes are revolutionizing how businesses interact with customers and manage rewards.",
    date: "February 28, 2025",
    author: "David Park",
    category: "Technology"
  },
  {
    title: "Building a White Label Loyalty Program",
    excerpt: "Everything you need to know about creating a branded loyalty experience for your customers.",
    date: "February 20, 2025",
    author: "Lisa Thompson",
    category: "Business"
  },
  {
    title: "Marketing Automation Trends 2025",
    excerpt: "Stay ahead of the curve with these emerging trends in marketing automation and customer engagement.",
    date: "February 15, 2025",
    author: "James Wilson",
    category: "Trends"
  }
];

const Blog = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">{t("blog.title")}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("blog.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="p-6 glass-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="flex items-center gap-2 text-sm text-primary mb-3">
                  <span className="px-3 py-1 bg-primary/10 rounded-full">{post.category}</span>
                </div>
                
                <h2 className="text-xl font-bold text-foreground mb-3 hover:text-gradient transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border/50">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
