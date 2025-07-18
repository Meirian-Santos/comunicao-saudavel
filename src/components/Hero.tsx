import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-warm">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full organic-blob opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-secondary rounded-full organic-blob-2 opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center gap-2 text-primary">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium tracking-wide uppercase">Transformação Pessoal</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Desperte o seu{" "}
              <span className="gradient-text">potencial</span>{" "}
              através da comunicação
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Descubra como a comunicação consciente pode transformar seus relacionamentos, 
              sua carreira e sua relação consigo mesma. Uma jornada de autoconhecimento 
              que vai despertar a mulher extraordinária que existe em você.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
              >
                Começar Minha Transformação
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
              >
                Saiba Mais
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-delay">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Mulher confiante representando transformação pessoal" 
                className="w-full h-auto rounded-2xl shadow-elevated"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-secondary rounded-2xl -z-10 organic-blob"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Atualizado
