import { Heart, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Sua jornada de <span className="gradient-text">autoconhecimento</span> 
            começa aqui
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sou especialista em comunicação consciente e desenvolvimento pessoal. 
            Há mais de 10 anos ajudo mulheres a descobrirem seu verdadeiro potencial 
            através da conexão consigo mesmas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center hover-scale border-none shadow-soft">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Autoconhecimento Profundo</h3>
              <p className="text-muted-foreground">
                Descubra quem você realmente é, seus valores, desejos e 
                propósito de vida através de técnicas comprovadas.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-scale border-none shadow-soft">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Relacionamentos Saudáveis</h3>
              <p className="text-muted-foreground">
                Aprenda a se comunicar de forma assertiva e empática, 
                criando conexões mais profundas e verdadeiras.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-scale border-none shadow-soft">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Transformação Real</h3>
              <p className="text-muted-foreground">
                Resultados tangíveis que vão além da teoria - uma mudança 
                real na forma como você se relaciona com o mundo.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Por que escolher esta mentoria?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Não é apenas mais um curso. É uma experiência transformadora 
            personalizada para mulheres que querem despertar seu potencial 
            através da comunicação consciente.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">+500</div>
              <div className="text-sm text-muted-foreground">Mulheres transformadas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Taxa de satisfação</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Anos de experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};