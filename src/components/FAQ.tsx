import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Para quem é indicada esta mentoria?",
      answer: "Esta mentoria é perfeita para mulheres que desejam desenvolver sua comunicação, aumentar a autoconfiança e construir relacionamentos mais saudáveis. Ideal para quem busca crescimento pessoal e profissional através do autoconhecimento."
    },
    {
      question: "Como funciona o processo de mentoria?",
      answer: "O processo é personalizado e inclui sessões individuais online, materiais exclusivos, exercícios práticos e acompanhamento contínuo. Cada jornada é única e adaptada às suas necessidades específicas."
    },
    {
      question: "Quanto tempo dura a mentoria?",
      answer: "O programa tem duração de 3 meses, com possibilidade de extensão. Incluem sessões semanais de 1 hora, além de suporte via WhatsApp e materiais complementares."
    },
    {
      question: "Que tipo de resultados posso esperar?",
      answer: "Você desenvolverá maior autoconfiança, comunicação assertiva, relacionamentos mais saudáveis, clareza sobre seus objetivos e uma conexão mais profunda consigo mesma."
    },
    {
      question: "E se eu não ficar satisfeita?",
      answer: "Oferecemos garantia de satisfação. Se em 30 dias você não estiver satisfeita com os resultados, devolvemos 100% do seu investimento, sem questionamentos."
    },
    {
      question: "As sessões são online?",
      answer: "Sim, todas as sessões são realizadas online via videochamada, o que oferece flexibilidade e comodidade. Você pode participar de qualquer lugar do mundo."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tire suas dúvidas sobre a mentoria e dê o primeiro passo
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl border-none shadow-soft px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

// Atualizado
