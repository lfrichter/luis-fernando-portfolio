/**
 * Configuration and Contact Constants for NiceMove Landing Page
 * 
 * PRODUCT TRUTH GATE:
 * Only verified contact channels from the project profile are used.
 */

export const NICEMOVE_CONFIG = {
  productName: 'NiceMove',
  tagline: 'Seu próximo atendimento começa antes do corretor.',
  badge: '⚡ Atendimento em segundos',
  description:
    'A NiceMove atende seus leads pelo WhatsApp em segundos, entende o que eles procuram, encontra imóveis compatíveis e conduz cada oportunidade até o próximo passo.',
  contact: {
    whatsappNumber: '5515981308235',
    whatsappMessage: 'Olá! Gostaria de agendar uma demonstração da NiceMove.',
    whatsappUrl: 'https://wa.me/5515981308235?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20da%20NiceMove.',
    email: 'fernando.richter@gmail.com',
    linkedinUrl: 'https://linkedin.com/in/lfrichter',
    githubUrl: 'https://github.com/lfrichter',
  },
  meta: {
    title: 'NiceMove | Atendimento Inteligente de Leads Imobiliários no WhatsApp',
    description: 'A NiceMove atende leads imobiliários no WhatsApp em segundos, qualifica intenções, busca imóveis compatíveis e valida disponibilidade com regras determinísticas.',
  }
} as const;

// Legacy alias for internal backward compatibility
export const IMOBFLOW_CONFIG = NICEMOVE_CONFIG;
