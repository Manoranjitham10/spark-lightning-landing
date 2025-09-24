import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      {/* Features Section */}
      <section id="features" className="relative py-16 lg:py-24">
        <div className="container mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Financial Transaction",
                desc: "Manage everything from the app or website with real‑time insights.",
              },
              {
                title: "Easy To Use System",
                desc: "Each card has its own unique holder name and balance.",
              },
              {
                title: "Secure & Reliable",
                desc: "Enterprise‑grade security with continuous monitoring and backups.",
              },
            ].map((item) => (
              <Card key={item.title} className="group border-border/40 bg-card/60 hover:bg-card/80 transition-colors duration-300">
                <CardHeader className="flex-row items-center gap-4 p-5">
                  <div className="w-10 h-10 rounded-lg bg-gradient-electric grid place-items-center text-primary-foreground shadow-md group-hover:scale-105 transition-transform">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0">
                  <CardDescription className="leading-relaxed">{item.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
