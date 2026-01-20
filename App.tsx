
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
const Logo = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  const [imgError, setImgError] = useState(false);
  
  const sizeClasses = {
    small: 'h-20 md:h-24',
    default: 'h-24 md:h-36',
    large: 'h-32 md:h-44'
  };

  return (
    <div className="flex items-center group cursor-pointer">
      {!imgError ? (
        <img 
          src="/logo.png" 
          alt="IDE Digital" 
          className={`${sizeClasses[size]} w-auto object-contain transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]`}
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
          <a href="https://wa.me/351936758693?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20IDE%20Digital." target="_blank" rel="noopener noreferrer">
            <GoldButton variant="outline" className="px-6 py-2.5 text-[10px]">Falar com Especialista</GoldButton>
          </a>
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
          <a href="https://wa.me/351936758693?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20IDE%20Digital." target="_blank" rel="noopener noreferrer" className="w-full">
            <GoldButton className="w-full">Falar com Especialista</GoldButton>
          </a>
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
        <a href="https://wa.me/351936758693?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20IDE%20Digital." target="_blank" rel="noopener noreferrer">
          <GoldButton variant="cta" className="group text-lg px-12 py-5 border-3">
            FALE COM A IDE DIGITAL AGORA <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </GoldButton>
        </a>
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
          <p className="text-gray-300 mt-8 leading-relaxed text-sm font-medium">
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
            <li>Lourinhã, Portugal</li>
            <li>idedigital.pt@gmail.com</li>
            <li>+351 936 758 693</li>
          </ul>
        </div>
        
        <div className="col-span-1 md:col-span-1">
          <h4 className="font-bold text-sm uppercase tracking-[0.2em] mb-8 text-[#d4af37]">Solicitar Contato</h4>
          <p className="text-gray-300 text-sm mb-6 font-medium">Preencha e entraremos em contato consigo.</p>
          <form 
            className="space-y-4" 
            action="https://formsubmit.co/ajax/idedigital.pt@gmail.com" 
            method="POST"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const formData = new FormData(form);
              const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
              const originalText = submitBtn.innerHTML;
              submitBtn.innerHTML = 'A enviar...';
              submitBtn.disabled = true;
              
              try {
                const response = await fetch('https://formsubmit.co/ajax/idedigital.pt@gmail.com', {
                  method: 'POST',
                  body: formData,
                  headers: {
                    'Accept': 'application/json'
                  }
                });
                
                if (response.ok) {
                  alert('Mensagem enviada com sucesso! Entraremos em contacto em breve.');
                  form.reset();
                } else {
                  alert('Erro ao enviar. Por favor tente novamente.');
                }
              } catch (error) {
                alert('Erro ao enviar. Por favor tente novamente.');
              }
              
              submitBtn.innerHTML = originalText;
              submitBtn.disabled = false;
            }}
          >
            <input type="hidden" name="_subject" value="Novo contacto do site IDE Digital" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input 
              type="email" 
              name="email"
              placeholder="Seu e-mail" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-[#d4af37] transition-all" 
            />
            <input 
              type="tel" 
              name="phone"
              placeholder="Seu telemóvel" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-[#d4af37] transition-all" 
            />
            <select 
              name="service"
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-[#d4af37] transition-all text-gray-400 appearance-none cursor-pointer"
            >
              <option value="" disabled selected>Selecione o serviço</option>
              <option value="Criação de Site">Criação de Site</option>
              <option value="SEO e Otimização">SEO e Otimização</option>
              <option value="Gestão de Redes Sociais">Gestão de Redes Sociais</option>
              <option value="Marketing Digital">Marketing Digital</option>
              <option value="Outro">Outro</option>
            </select>
            <textarea 
              name="message"
              placeholder="Descreva o que pretende (opcional)"
              rows={3}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-[#d4af37] transition-all resize-none"
            ></textarea>
            <button 
              type="submit"
              className="w-full bg-gold-gradient text-black py-3 px-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              Enviar <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 text-center text-xs text-gray-400 uppercase tracking-widest">
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
