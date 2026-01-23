
import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Search, 
  Share2, 
  CheckCircle, 
  ChevronDown, 
  Instagram, 
  Facebook, 
  Linkedin, 
  MessageCircle,
  Menu,
  X,
  ArrowRight,
  Target,
  Users,
  Award
} from 'lucide-react';
import { ServiceItem, BenefitItem, Testimonial, FAQItem, PortfolioItem } from './types';

// Components
const GoldButton = ({ children, onClick, variant = 'primary', className = '' }: { 
  children?: React.ReactNode; 
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'cta';
  className?: string;
}) => {
  const baseStyles = "px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gold-gradient text-black gold-shadow hover:brightness-110",
    outline: "border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black",
    cta: "bg-transparent border-2 border-black text-black hover:bg-black hover:text-[#d4af37]"
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

// Componente de Logo Atualizado com a nova imagem enviada
const Logo = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex items-center group cursor-pointer">
      {!imgError ? (
        <img 
          src="logo.png" 
          alt="IDE Digital" 
          className="h-12 md:h-16 w-auto object-contain transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="flex flex-col items-center leading-none">
          <span className="text-2xl font-bold tracking-tighter gold-gradient">IDE</span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400">Digital</span>
        </div>
      )}
    </div>
  );
};

const SectionTitle = ({ subtitle, title, centered = true }: { subtitle: string; title: string; centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    <span className="text-[#d4af37] font-bold tracking-[0.3em] uppercase text-sm block mb-4">{subtitle}</span>
    <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">{title}</h2>
    <div className={`h-1 w-24 bg-gold-gradient mt-6 ${centered ? 'mx-auto' : ''}`}></div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Preços', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md py-3 border-b border-[#d4af37]/20' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-xs font-semibold uppercase tracking-widest hover:text-[#d4af37] transition-colors">{link.name}</a>
          ))}
          <GoldButton variant="outline" className="px-6 py-2.5 text-[10px]">Falar com Especialista</GoldButton>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-[#d4af37]/20 py-8 px-6 md:hidden flex flex-col gap-6 animate-fade-in-down">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium border-b border-white/10 pb-2">{link.name}</a>
          ))}
          <GoldButton className="w-full">WhatsApp</GoldButton>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* Ambient light */}
    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#d4af37] opacity-[0.08] blur-[150px] rounded-full"></div>
    
    <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
      <div className="animate-fade-in">
        <span className="text-[#d4af37] font-bold tracking-[0.4em] uppercase mb-6 block">Premium Digital Agency</span>
        <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-8">
          Sua marca com <br />
          <span className="gold-gradient">autoridade máxima</span> no digital.
        </h1>
        <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
          Estratégias personalizadas de alta performance para quem não aceita ser apenas mais um no mercado.
        </p>
        <div className="flex flex-col sm:flex-row gap-5">
          <GoldButton className="group">
            Começar Agora <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </GoldButton>
          <GoldButton variant="outline">
            Ver Portfólio
          </GoldButton>
        </div>
      </div>
      
      <div className="relative hidden md:block group">
        <div className="relative z-10 rounded-2xl overflow-hidden gold-border gold-shadow transform hover:scale-[1.02] transition-all duration-700">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
            alt="Estratégia Digital" 
            className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000"
          />
        </div>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold-gradient opacity-20 blur-3xl animate-pulse"></div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services: ServiceItem[] = [
    {
      id: '1',
      title: 'Criação de Sites Profissionais',
      description: 'Sites ultra-rápidos, responsivos e focados na conversão dos seus visitantes em clientes.',
      icon: <Globe size={48} className="text-[#d4af37]" />
    },
    {
      id: '2',
      title: 'SEO e Otimização Google',
      description: 'Apareça na primeira página do Google para quem realmente busca pelo que você oferece.',
      icon: <Search size={48} className="text-[#d4af37]" />
    },
    {
      id: '3',
      title: 'Gestão de Redes Sociais',
      description: 'Estratégia de conteúdo, anúncios segmentados e crescimento orgânico para sua audiência.',
      icon: <Share2 size={48} className="text-[#d4af37]" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="p-10 bg-[#0a0a0a] border border-white/5 rounded-2xl hover:bg-[#0f0f0f] transition-all duration-500 group border-b-2 hover:border-b-[#d4af37]">
              <div className="mb-8 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-5 leading-tight">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-8 text-sm">{service.description}</p>
              <a href="#" className="inline-flex items-center gap-3 text-[#d4af37] font-extrabold text-xs uppercase tracking-[0.2em] group/link">
                Saiba Mais <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MidCTA = () => (
  <section className="py-24 bg-gold-gradient relative overflow-hidden">
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    </div>
    <div className="container mx-auto px-6 text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-display font-bold text-black mb-10 max-w-4xl mx-auto leading-tight italic">
        “Chegou a hora da sua marca aparecer.”
      </h2>
      <div className="flex justify-center">
        <GoldButton variant="cta" className="group text-lg px-12 py-5 border-3">
          FALE COM A IDE DIGITAL AGORA <ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </GoldButton>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-black">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
      <div className="relative">
        <div className="absolute -inset-4 bg-gold-gradient opacity-10 blur-2xl rounded-full"></div>
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" alt="Equipe IDE" className="rounded-2xl relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" />
      </div>
      <div>
        <SectionTitle subtitle="Nossa Essência" title="Conectando seu propósito ao mundo digital" centered={false} />
        <p className="text-gray-300 mb-8 text-lg leading-relaxed font-light">
          A <span className="text-[#d4af37] font-bold">IDE Digital</span> é mais que uma agência. Somos o braço estratégico de negócios que buscam não apenas existir, mas liderar no ambiente digital.
        </p>
        <div className="space-y-6">
          {[
            { icon: <Target className="text-[#d4af37]" />, title: "Foco em Resultados", desc: "Não entregamos apenas artes, entregamos retorno sobre investimento." },
            { icon: <Award className="text-[#d4af37]" />, title: "Design de Elite", desc: "Sua marca com o visual das maiores empresas do mundo." }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Portfolio = () => {
  const projects: PortfolioItem[] = [
    { id: '1', title: 'Modern Real Estate', category: 'Web Design', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600' },
    { id: '2', title: 'Premium E-commerce', category: 'Vendas Online', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600' },
    { id: '3', title: 'Advocacia de Elite', category: 'Autoridade Digital', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600' },
    { id: '4', title: 'Consultoria Financeira', category: 'Landing Page', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Nossos Cases" title="Projetos que inspiram" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map(project => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-black">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-[#d4af37] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">{project.category}</span>
                <h4 className="text-xl font-bold">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs: FAQItem[] = [
    { id: '1', question: 'Qual o tempo de entrega de um projeto?', answer: 'Trabalhamos com prazos ágeis, variando de 10 a 25 dias úteis dependendo da complexidade do site ou estratégia.' },
    { id: '2', question: 'Como funciona o pagamento?', answer: 'Facilitamos através de PIX com desconto ou parcelamento no cartão de crédito em até 12x.' },
    { id: '3', question: 'Terei suporte pós-entrega?', answer: 'Sim, todos os nossos projetos acompanham suporte técnico e treinamento básico para você gerenciar seu conteúdo.' }
  ];

  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionTitle subtitle="Dúvidas" title="Perguntas Frequentes" />
        <div className="space-y-5">
          {faqs.map(faq => (
            <div key={faq.id} className="border border-white/5 rounded-2xl overflow-hidden bg-[#0a0a0a] transition-all">
              <button 
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full p-6 text-left flex justify-between items-center group"
              >
                <span className="font-bold text-lg group-hover:text-[#d4af37] transition-colors">{faq.question}</span>
                <ChevronDown className={`text-[#d4af37] transition-transform duration-500 ${openId === faq.id ? 'rotate-180' : ''}`} />
              </button>
              {openId === faq.id && (
                <div className="p-6 pt-0 text-gray-400 border-t border-white/5 animate-fade-in text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-black pt-24 pb-12 border-t border-[#d4af37]/10">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-1">
          <Logo />
          <p className="text-gray-500 mt-8 leading-relaxed text-sm">
            Especialistas em transformar ideias em presenças digitais luxuosas e lucrativas.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-all"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-all"><Linkedin size={18} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-sm uppercase tracking-[0.2em] mb-8 text-[#d4af37]">Navegação</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">Sobre</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Serviços</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-sm uppercase tracking-[0.2em] mb-8 text-[#d4af37]">Contato</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li>São Paulo, SP</li>
            <li>contato@idedigital.com</li>
            <li>+55 (11) 99999-9999</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-sm uppercase tracking-[0.2em] mb-8 text-[#d4af37]">Newsletter</h4>
          <p className="text-gray-500 text-xs mb-6">Receba insights sobre o mercado digital.</p>
          <div className="relative">
            <input type="email" placeholder="Seu e-mail" className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 text-sm focus:outline-none focus:border-[#d4af37] transition-all" />
            <button className="absolute right-2 top-2 bg-gold-gradient text-black p-1.5 rounded-full"><ArrowRight size={16} /></button>
          </div>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 text-center text-[10px] text-gray-600 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} IDE Digital. Transformando o futuro hoje.</p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <main className="antialiased overflow-x-hidden selection:bg-[#d4af37] selection:text-black">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <MidCTA />
      <Portfolio />
      
      {/* Testimonials */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Depoimentos" title="Quem confia na IDE" />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Dr. André Santos", role: "Advogado Premium", content: "A IDE Digital elevou o patamar da minha banca. Hoje meu site transmite exatamente a autoridade que meus clientes buscam." },
              { name: "Clara Oliveira", role: "E-commerce Founder", content: "Resultados práticos. Em 3 meses nossa taxa de conversão dobrou graças à nova interface e estratégias de SEO." }
            ].map((t, idx) => (
              <div key={idx} className="p-10 bg-[#0a0a0a] border border-white/5 rounded-3xl relative">
                <p className="text-gray-300 italic text-lg mb-8">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-1 bg-gold-gradient"></div>
                  <div>
                    <h5 className="font-bold">{t.name}</h5>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Tabela de Preços" title="Serviços Individuais e Pacotes" />
          
          {/* Criação de Sites */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8">Criação de Sites</h3>
            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/5 bg-[#0f0f0f]">
                    <th className="p-6 font-bold text-[#d4af37] uppercase tracking-widest">Serviço</th>
                    <th className="p-6 font-bold text-[#d4af37] uppercase tracking-widest">Preço Estimado</th>
                    <th className="p-6 font-bold text-[#d4af37] uppercase tracking-widest">Observação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5 hover:bg-[#0f0f0f] transition-colors">
                    <td className="p-6">Site institucional simples (5 páginas)</td>
                    <td className="p-6 font-bold">350 € – 800 €</td>
                    <td className="p-6 text-gray-400">Valor médio de mercado</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-[#0f0f0f] transition-colors">
                    <td className="p-6">Site profissional completo</td>
                    <td className="p-6 font-bold">800 € – 2 500 €</td>
                    <td className="p-6 text-gray-400">Dependendo de funcionalidades e design</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-[#0f0f0f] transition-colors">
                    <td className="p-6">Loja online básica</td>
                    <td className="p-6 font-bold">1 200 € – 3 500 €</td>
                    <td className="p-6 text-gray-400">E-commerce simples</td>
                  </tr>
                  <tr className="hover:bg-[#0f0f0f] transition-colors">
                    <td className="p-6">Website personalizado avançado</td>
                    <td className="p-6 font-bold">2 500 € – 10 000 €+</td>
                    <td className="p-6 text-gray-400">Com base de dados ou funcionalidades específicas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Gestão de Redes Sociais */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8">Gestão de Redes Sociais</h3>
            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/5 bg-[#0f0f0f]">
                    <th className="p-6 font-bold text-[#d4af37] uppercase tracking-widest">Serviço</th>
                    <th className="p-6 font-bold text-[#d4af37] uppercase tracking-widest">Preço Estimado</th>
                    <th className="p-6 font-bold text-[#d4af37] uppercase tracking-widest">O que pode incluir</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5 hover:bg-[#0f0f0f] transition-colors">
                    <td className="p-6">Básico (2-3 posts/mês)</td>
                    <td className="p-6 font-bold">100 € – 250 €/mês</td>
                    <td className="p-6 text-gray-400">Criação de posts e gestão simples</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-[#0f0f0f] transition-colors">
                    <td className="p-6">Médio (conteúdo + estratégia)</td>
                    <td className="p-6 font-bold">245 € – 350 €/mês</td>
                    <td className="p-6 text-gray-400">Posts + relatórios + criação gráfica</td>
                  </tr>
                  <tr className="hover:bg-[#0f0f0f] transition-colors">
                    <td className="p-6">Completo (posts frequentes + vídeos)</td>
                    <td className="p-6 font-bold">350 € – 500 €+/mês</td>
                    <td className="p-6 text-gray-400">Conteúdo avançado e interação</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SEO */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8">SEO (Otimização para Motores de Busca)</h3>
            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/5 bg-[#0f0f0f]">
                    <th className="p-6 font-bold text-[#d4af37] uppercase tracking-widest">Serviço</th>
                    <th className="p-6 font-bold text-[#d4af37] uppercase tracking-widest">Preço Estimado</th>
                    <th className="p-6 font-bold text-[#d4af37] uppercase tracking-widest">Detalhes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5 hover:bg-[#0f0f0f] transition-colors">
                    <td className="p-6">Auditoria SEO (única)</td>
                    <td className="p-6 font-bold">240 € – 1 050 €</td>
                    <td className="p-6 text-gray-400">Análise técnica e recomendações</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-[#0f0f0f] transition-colors">
                    <td className="p-6">SEO local / mensal</td>
                    <td className="p-6 font-bold">500 € – 1 500 €/mês</td>
                    <td className="p-6 text-gray-400">Serviços contínuos para negócios locais</td>
                  </tr>
                  <tr className="hover:bg-[#0f0f0f] transition-colors">
                    <td className="p-6">Conteúdo SEO por artigo</td>
                    <td className="p-6 font-bold">130 € – 330 €/artigo</td>
                    <td className="p-6 text-gray-400">Artigos otimizados para SEO</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 📦 Pacotes Estratégicos */}
          <div>
            <h3 className="text-3xl font-bold mb-12 text-center">Pacotes Estratégicos</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Pacote Presença Local */}
              <div className="p-10 bg-gradient-to-br from-[#0a0a0a] to-[#0f0f0f] border border-white/5 rounded-2xl hover:border-[#d4af37]/50 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-3xl">🟢</span>
                  <h4 className="text-2xl font-bold">Presença Local</h4>
                </div>
                <ul className="space-y-4 mb-10 text-gray-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-[#d4af37] flex-shrink-0" />
                    <span>Site institucional simples</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-[#d4af37] flex-shrink-0" />
                    <span>SEO local básico</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-[#d4af37] flex-shrink-0" />
                    <span>Google Business Profile otimizado</span>
                  </li>
                </ul>
                <div className="pt-8 border-t border-white/5">
                  <p className="text-sm text-gray-500 mb-2 uppercase tracking-widest">Investimento:</p>
                  <p className="text-2xl font-bold text-[#d4af37]">€500 - €900</p>
                  <p className="text-xs text-gray-500 mt-2">Pagamento único ou com entrada + parcelas</p>
                </div>
              </div>

              {/* Pacote Crescimento Digital */}
              <div className="p-10 bg-gradient-to-br from-[#0a0a0a] to-[#0f0f0f] border border-white/5 rounded-2xl hover:border-[#d4af37]/50 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-3xl">🔵</span>
                  <h4 className="text-2xl font-bold">Crescimento Digital</h4>
                </div>
                <ul className="space-y-4 mb-10 text-gray-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-[#d4af37] flex-shrink-0" />
                    <span>Site profissional</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-[#d4af37] flex-shrink-0" />
                    <span>Gestão básica de redes sociais</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-[#d4af37] flex-shrink-0" />
                    <span>SEO local mensal</span>
                  </li>
                </ul>
                <div className="pt-8 border-t border-white/5">
                  <p className="text-sm text-gray-500 mb-2 uppercase tracking-widest">Investimento Mensal:</p>
                  <p className="text-2xl font-bold text-[#d4af37]">€650 - €1.000</p>
                </div>
              </div>

              {/* Pacote Autoridade Online */}
              <div className="p-10 bg-gradient-to-br from-[#0a0a0a] to-[#0f0f0f] border border-white/5 rounded-2xl hover:border-[#d4af37]/50 transition-all duration-300 group ring-2 ring-[#d4af37]/30">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-3xl">🟣</span>
                  <h4 className="text-2xl font-bold">Autoridade Online</h4>
                </div>
                <div className="absolute top-4 right-4 bg-[#d4af37] text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Popular</div>
                <ul className="space-y-4 mb-10 text-gray-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-[#d4af37] flex-shrink-0" />
                    <span>Site profissional completo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-[#d4af37] flex-shrink-0" />
                    <span>Gestão completa de redes sociais</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-[#d4af37] flex-shrink-0" />
                    <span>SEO mensal avançado</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-[#d4af37] flex-shrink-0" />
                    <span>Relatórios mensais</span>
                  </li>
                </ul>
                <div className="pt-8 border-t border-white/5">
                  <p className="text-sm text-gray-500 mb-2 uppercase tracking-widest">Investimento Mensal:</p>
                  <p className="text-2xl font-bold text-[#d4af37]">€1.000 - €1.500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
      
      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] transition-all active:scale-95 animate-bounce"
        aria-label="WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </main>
  );
}

export default App;
