import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Carolina",
      role: "Empresária, 34 anos",
      content: "A mentoria transformou completamente minha forma de me comunicar. Hoje me sinto mais confiante e autêntica em todos os relacionamentos.",
      rating: 5
    },
    {
      name: "Juliana Santos",
      role: "Psicóloga, 28 anos", 
      content: "Descobri aspectos de mim mesma que nem sabia que existiam. O autoconhecimento que desenvolvi mudou minha vida profissional e pessoal.",
      rating: 5
    },
    {
      name: "Mariana Costa",
      role: "Gerente de Marketing, 41 anos",
      content: "Finalmente encontrei meu propósito e aprendi a me comunicar de forma assertiva. Meus relacionamentos nunca foram tão saudáveis.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Histórias de <span className="gradient-text">transformação</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja como outras mulheres transformaram suas vidas através da comunicação consciente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-scale border-none shadow-soft relative overflow-hidden">
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-gradient-hero rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-background"></div>
              ))}
            </div>
            <span className="text-sm font-medium ml-2">
              +500 mulheres já transformaram suas vidas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};