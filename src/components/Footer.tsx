import { ArrowRight, Mail, Phone, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-20">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronta para <span className="text-primary-glow">transformar</span> sua vida?
          </h2>
          <p className="text-xl text-background/80 max-w-3xl mx-auto mb-8">
            Não deixe para depois o que pode mudar sua vida hoje. 
            Sua jornada de autoconhecimento está a um clique de distância.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-glow text-primary-foreground text-lg px-8 py-6 hover-glow"
          >
            Começar Minha Transformação
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-background/80">contato@mentoria.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-background/80">(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="text-background/80">WhatsApp</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-primary" />
                <span className="text-background/80">@mentoria.autoconhecimento</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Mentoria</h3>
            <div className="space-y-2 text-background/80">
              <p>Comunicação Consciente</p>
              <p>Autoconhecimento</p>
              <p>Desenvolvimento Pessoal</p>
              <p>Relacionamentos Saudáveis</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Resultados</h3>
            <div className="space-y-2 text-background/80">
              <p>+500 mulheres transformadas</p>
              <p>98% de satisfação</p>
              <p>10+ anos de experiência</p>
              <p>Garantia de resultados</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © 2024 Mentoria em Autoconhecimento. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Atualizado
