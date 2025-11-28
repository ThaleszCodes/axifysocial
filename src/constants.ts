
import type { ServiceCategory, Feature, FAQItem, Testimonial } from './types';
import { Instagram, Video, CheckCircle, Rocket, ShieldCheck, MessageSquare, Tag, Server, CreditCard } from 'lucide-react';

const whatsappMessage = encodeURIComponent("Olá! Vim pela página da Axify Social e gostaria de mais informações sobre os serviços.");
export const WHATSAPP_LINK = `https://wa.me/5553991257648?text=${whatsappMessage}`;
export const SIMULATOR_LINK = "https://axify-lab.vercel.app/"; // Placeholder link

export const FEATURES: Feature[] = [
  { icon: Rocket, text: "Entrega automática" },
  { icon: ShieldCheck, text: "Estabilidade e qualidade" },
  { icon: CheckCircle, text: "Serviços 100% testados" },
  { icon: MessageSquare, text: "Suporte no WhatsApp" },
  { icon: Tag, text: "Preços acessíveis" },
  { icon: Server, text: "Sistema próprio e privado" },
  { icon: CreditCard, text: "Pagamento rápido e simples" }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    platform: "Instagram",
    icon: Instagram,
    services: [
      {
        name: "Seguidores Brasileiros (Premium)",
        description: "Aumente sua autoridade e credibilidade com seguidores brasileiros de alta qualidade. Perfeito para perfis que buscam engajamento local."
      },
      {
        name: "Seguidores Mundiais",
        description: "Impulsione seus números rapidamente e crie uma prova social forte. Ideal para dar aquele empurrão inicial no seu perfil e atrair mais visibilidade."
      },
      {
        name: "Curtidas Brasileiras",
        description: "Destaque suas publicações para o público certo. Curtidas de perfis brasileiros aumentam a relevância do seu post e o alcance orgânico."
      },
      {
        name: "Curtidas Mundiais",
        description: "Receba curtidas rapidamente em suas fotos e vídeos para aumentar o engajamento imediato e sinalizar popularidade ao algoritmo."
      },
      {
        name: "Visualizações Mundiais (Reels)",
        description: "Faça seus Reels viralizarem. Mais visualizações aumentam drasticamente a chance de seu conteúdo aparecer em 'Explorar' e alcançar novas audiências."
      }
    ]
  },
  {
    platform: "TikTok",
    icon: Video,
    services: [
      {
        name: "Curtidas Mundiais",
        description: "Aumente a popularidade dos seus vídeos e suas chances de aparecer na página 'Para Você'. Mais curtidas geram mais alcance e engajamento."
      },
      {
        name: "Seguidores Brasileiros (Premium)",
        description: "Construa uma comunidade local e engajada. Seguidores brasileiros de alta qualidade para quem busca relevância no mercado nacional."
      },
      {
        name: "Visualizações Mundiais",
        description: "O empurrão que seu vídeo precisa para se tornar um hit. Essencial para o algoritmo do TikTok recomendar seu conteúdo para mais pessoas."
      }
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Os serviços são seguros para meu perfil?",
    answer: "Sim, 100% seguros. Utilizamos métodos que não violam as diretrizes das redes sociais. Sua conta estará completamente segura conosco."
  },
  {
    question: "Em quanto tempo recebo meu pedido?",
    answer: "A entrega é iniciada automaticamente logo após a confirmação do pagamento. O tempo total pode variar dependendo da quantidade, mas geralmente começa em poucos minutos."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos as principais formas de pagamento, incluindo PIX, cartão de crédito e boleto bancário, tudo através de um checkout rápido e seguro."
  },
  {
    question: "Os seguidores/curtidas são de perfis reais?",
    answer: "Trabalhamos com perfis de alta qualidade para garantir a estabilidade do serviço. Oferecemos opções de seguidores brasileiros e mundiais para atender às suas necessidades."
  },
  {
    question: "Preciso informar minha senha?",
    answer: "Não. Nunca solicitaremos sua senha ou qualquer acesso administrativo ao seu perfil. Precisamos apenas do seu nome de usuário (ex: @seu_perfil) para realizar a entrega."
  },
  {
    question: "O que é o Axify Lab?",
    answer: "O Axify Lab é nosso simulador de preços. Nele, você pode escolher o serviço, a quantidade desejada e ver o valor exato do seu pedido de forma transparente, antes de qualquer compromisso."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "A entrega foi absurdamente rápida e os seguidores são de ótima qualidade. Minha loja ganhou muito mais credibilidade. Recomendo demais!",
    name: "Juliana Souza",
    handle: "@jujustore.br",
    avatarUrl: "https://avatar.vercel.sh/juliana.png"
  },
  {
    quote: "O que mais me impressionou foi o suporte no WhatsApp. Fui atendido na hora e tiraram todas as minhas dúvidas. Profissionalismo nota 10.",
    name: "Marcos Andrade",
    handle: "CEO, Digitaliza+",
    avatarUrl: "https://avatar.vercel.sh/marcos.png"
  },
  {
    quote: "Usei o Axify Lab para simular e o preço foi muito justo. O pagamento foi simples e o serviço começou em minutos. Exatamente o que eu precisava.",
    name: "Carla Martins",
    handle: "Influencer",
    avatarUrl: "https://avatar.vercel.sh/carla.png"
  }
];
