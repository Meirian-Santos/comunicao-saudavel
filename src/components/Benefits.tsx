import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Benefits = () => {
  const benefits = [
    {
      title: "Comunicação Assertiva",
      description: "Aprenda a expressar suas necessidades e opiniões de forma clara e respeitosa",
      icon: "💬"
    },
    {
      title: "Autoconfiança Genuína",
      description: "Desenvolva uma confiança sólida baseada no autoconhecimento profundo",
      icon: "✨"
    },
    {
      title: "Relacionamentos Saudáveis",
      description: "Construa conexões mais profundas e significativas em todas as áreas da vida",
      icon: "💖"
    },
    {
      title: "Inteligência Emocional",
      description: "Gerencie suas emoções e compreenda melhor as dos outros",
      icon: "🧠"
    },
    {
      title: "Presença Magnética",
      description: "Desenvolva uma presença que inspire e influencie positivamente",
      icon: "🌟"
    },
    {
      title: "Propósito Claro",
      description: "Descubra seu verdadeiro propósito e alinhe suas ações com seus valores",
      icon: "🎯"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            O que você vai <span className="gradient-text">conquistar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados reais que vão transformar sua vida pessoal e profissional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover-scale border-none shadow-soft bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-center text-primary-foreground">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pronta para sua transformação?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Não espere mais para se conectar com seu verdadeiro potencial. 
            Sua jornada de autoconhecimento começa agora.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6"
          >
            Quero Começar Agora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

// Atualizado
