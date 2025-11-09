import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Code2, Download, Award, Users, Clock, Target, Lightbulb, Zap, Info } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ScrollLink } from "@/components/ScrollLink";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useInViewTypewriter } from "@/hooks/useInViewTypewriter";
import { useState } from "react";
import { TechModal } from "@/components/TechModal";
import { SoftSkillModal } from "@/components/SoftSkillModal";
import { ProjectModal } from "@/components/ProjectModal";
import cafeteriaImg from "@/assets/cafeteria-project.jpg";
import gameDealsImg from "@/assets/game-deals-project.jpg";
import portfolioImg from "@/assets/portfolio-project.jpg";

const Index = () => {
  const [showFullAbout, setShowFullAbout] = useState(false);
  const [selectedTech, setSelectedTech] = useState<any>(null);
  const [selectedSoftSkill, setSelectedSoftSkill] = useState<any>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  
  const nameText = "Pedro Henrique De Lima Arêas";
  const subtitleText = "Desenvolvedor Front-end apaixonado por criar experiências web modernas e intuitivas";
  
  const { displayedText: displayedName } = useTypewriter({ text: nameText, speed: 80, delay: 300 });
  const { displayedText: displayedSubtitle } = useTypewriter({ text: subtitleText, speed: 40, delay: nameText.length * 80 + 500 });
  
  const skills = [
    { 
      name: "React", 
      category: "Framework JavaScript",
      description: "Biblioteca JavaScript para construção de interfaces de usuário modernas e reativas. Utilizo React para criar componentes reutilizáveis e gerenciar o estado da aplicação de forma eficiente."
    },
    { 
      name: "TypeScript", 
      category: "Linguagem de Programação",
      description: "Superset do JavaScript que adiciona tipagem estática. Uso TypeScript para garantir maior segurança de código, melhor autocompletar e prevenir bugs durante o desenvolvimento."
    },
    { 
      name: "JavaScript", 
      category: "Linguagem de Programação",
      description: "Linguagem fundamental para desenvolvimento web. Domino JavaScript moderno (ES6+) para criar lógicas complexas e interações dinâmicas nas aplicações."
    },
    { 
      name: "Tailwind CSS", 
      category: "Framework CSS",
      description: "Framework CSS utility-first que permite criar designs customizados rapidamente. Utilizo Tailwind para criar interfaces responsivas e consistentes com produtividade elevada."
    },
    { 
      name: "HTML5", 
      category: "Linguagem de Marcação",
      description: "Linguagem de marcação padrão para estruturar conteúdo web. Aplico HTML semântico para melhor acessibilidade e SEO das aplicações."
    },
    { 
      name: "CSS3", 
      category: "Linguagem de Estilo",
      description: "Linguagem de estilos para design web. Domino CSS moderno incluindo Flexbox, Grid, animações e técnicas avançadas de layout responsivo."
    },
    { 
      name: "Git", 
      category: "Controle de Versão",
      description: "Sistema de controle de versão distribuído. Utilizo Git para gerenciar código, trabalhar em equipe e manter histórico organizado de alterações."
    },
    { 
      name: "Responsive Design", 
      category: "Metodologia",
      description: "Técnica de desenvolvimento que garante ótima experiência em qualquer dispositivo. Crio interfaces que se adaptam perfeitamente a desktops, tablets e smartphones."
    },
    { 
      name: "REST API", 
      category: "Arquitetura",
      description: "Padrão arquitetural para comunicação entre sistemas. Tenho experiência em consumir e integrar APIs REST para conectar front-end com serviços back-end."
    },
    { 
      name: "Node.js", 
      category: "Runtime JavaScript",
      description: "Ambiente de execução JavaScript server-side. Utilizo Node.js para criar ferramentas de build, scripts e entender melhor o ecossistema JavaScript."
    },
    { 
      name: "Next.js", 
      category: "Framework React",
      description: "Framework React para produção com SSR e SSG. Experiência em criar aplicações web performáticas com renderização otimizada e SEO aprimorado."
    }
  ];

  const softSkills = [
    { 
      name: "Pontualidade", 
      icon: Clock,
      description: "Valorizo o tempo e compromissos. Sempre chego antes do horário combinado e entrego projetos dentro dos prazos estabelecidos, demonstrando respeito pela equipe e pelo processo."
    },
    { 
      name: "Comprometimento", 
      icon: Target,
      description: "Dedico-me totalmente aos projetos e objetivos da equipe. Vindo do futebol profissional, aprendi que comprometimento é fundamental para alcançar resultados excepcionais."
    },
    { 
      name: "Trabalho em Equipe", 
      icon: Users,
      description: "Experiência em liderar e colaborar em times. No futebol e no corporativo, desenvolvi a habilidade de trabalhar harmoniosamente com diferentes perfis para atingir objetivos comuns."
    },
    { 
      name: "Fácil Aprendizado", 
      icon: Lightbulb,
      description: "Capacidade comprovada de absorver novos conhecimentos rapidamente. Em um ano, migrei do futebol para desenvolvimento front-end, dominando múltiplas tecnologias através de autodidatismo."
    },
    { 
      name: "Resolução de Problemas", 
      icon: Zap,
      description: "Habilidade de analisar desafios e encontrar soluções criativas. Tanto no campo quanto no código, sei identificar obstáculos e traçar estratégias efetivas para superá-los."
    },
    { 
      name: "Adaptabilidade e Flexibilidade", 
      icon: Award,
      description: "Capacidade de me ajustar rapidamente a novos ambientes e mudanças. Transições de carreira bem-sucedidas demonstram minha flexibilidade e resiliência diante de novos desafios."
    },
    { 
      name: "Criatividade e Inovação", 
      icon: Code2,
      description: "Busco constantemente maneiras inovadoras de resolver problemas e criar interfaces. Combino criatividade com conhecimento técnico para desenvolver soluções únicas e impactantes."
    }
  ];

  const certificates = [
    {
      title: "Curso Web Frontend Fundamentos HTML CSS JS + de 10 Projetos",
      issuer: "Udemy",
      instructor: "Daniel Tapias Morales, Serliv Cursos",
      progress: "50%",
      link: "#"
    },
    {
      title: "Formação Inteligência Artificial: Do Zero ao Avançado 2025",
      issuer: "Udemy",
      instructor: "Andre Iacono",
      progress: "100%",
      link: "#https://www.udemy.com/certificate/UC-b4de11fe-f227-46f1-ab28-9d7e812b5bde/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com"
    },
    {
      title: "POWER BI 2025: Power Bi Completo - Do Básico ao Avançado",
      issuer: "Udemy",
      instructor: "POWER BI: Power Bi Completo",
      progress: "100%",
      link: "https://www.udemy.com/certificate/UC-3111136d-f1fb-40b1-8d2d-2bd6746982a4/"
    },
    {
      title: "Java COMPLETO Programação Orientada a Objetos + Projetos",
      issuer: "Udemy",
      instructor: "Nelio Alves",
      progress: "Iniciar",
      link: "#"
    },
    {
      title: "Curso Web Moderno Completo com JavaScript + Projetos",
      issuer: "Udemy",
      instructor: "Cod3r Cursos",
      progress: "Concluído",
      link: "50"
    },
    {
      title: "Curso de JavaScript e TypeScript do básico ao avançado JS/TS",
      issuer: "Udemy",
      instructor: "Luiz Otávio Miranda",
      progress: "Concluído",
      link: "50"
    }
  ];

  const projects = [
    {
      title: "Cafeteria Website",
      description: "Website moderno e elegante para uma cafeteria, com design responsivo e interface intuitiva. Apresenta o cardápio de forma atrativa, com foco em experiência do usuário e conversão de visitantes em clientes.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      image: cafeteriaImg,
      liveLink: "https://cafeteria-drab-sigma.vercel.app/",
      repoLink: "https://github.com/Pedrooareas06/CAFETERIA"
    },
    {
      title: "Game Deals Dashboard",
      description: "Dashboard interativo para visualização de ofertas de jogos em tempo real. Interface moderna com filtros avançados, cards dinâmicos e integração com APIs de lojas de games para encontrar as melhores promoções.",
      tech: ["React", "TypeScript", "API REST", "Tailwind CSS"],
      image: gameDealsImg,
      liveLink: "https://game-deals-dashboard-ashen.vercel.app/",
      repoLink: "https://github.com/Pedrooareas06/game-deals-dashboard"
    },
    {
      title: "Portfolio Pessoal",
      description: "Portfolio profissional desenvolvido com foco em design moderno e animações suaves. Apresenta projetos, habilidades e experiências de forma interativa, com modo escuro/claro e efeitos de digitação.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: portfolioImg,
      liveLink: "#",
      repoLink: "https://github.com/Pedrooareas06"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar - Fixed Position */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">PH</span>
              <div className="hidden md:flex gap-6">
                <ScrollLink href="#inicio">Início</ScrollLink>
                <ScrollLink href="#sobre">Sobre</ScrollLink>
                <ScrollLink href="#habilidades">Habilidades</ScrollLink>
                <ScrollLink href="#certificados">Certificados</ScrollLink>
                <ScrollLink href="#projetos">Projetos</ScrollLink>
                <ScrollLink href="#contato">Contato</ScrollLink>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl animate-pulse"></div>
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <div className="inline-block mb-4 animate-scale-in">
            <Badge variant="secondary" className="text-sm px-4 py-1 hover-scale">
              <Code2 className="w-3 h-3 mr-2 inline" />
              Front-end Developer
            </Badge>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-2 animate-fade-in">
            Olá, mundo! 👋
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fade-in min-h-[120px] md:min-h-[160px]">
            Eu me chamo {displayedName}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in min-h-[80px]">
            {displayedSubtitle}
            {displayedSubtitle.length < subtitleText.length && <span className="animate-pulse">|</span>}
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-fade-in">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 hover-scale" asChild>
              <a href="mailto:Pedrooareas06@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Entre em Contato
              </a>
            </Button>
            <Button size="lg" variant="outline" className="hover-scale" asChild>
              <a href="https://github.com/Pedrooareas06" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Ver Projetos
              </a>
            </Button>
            <Button size="lg" variant="secondary" className="hover-scale" asChild>
              <a href="#" download>
                <Download className="w-4 h-4 mr-2" />
                Baixar Currículo
              </a>
            </Button>
          </div>
          <div className="flex gap-4 justify-center mt-8 animate-fade-in">
            <Button variant="ghost" size="icon" className="hover-scale" asChild>
              <a href="https://github.com/Pedrooareas06" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover-scale" asChild>
              <a href="https://www.linkedin.com/in/pedrohenriquefrontend/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover-scale" asChild>
              <a href="mailto:Pedrooareas06@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre">
        <AboutSection showFullAbout={showFullAbout} setShowFullAbout={setShowFullAbout} />
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">Habilidades</h2>
          
          {/* Hard Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-center">Tecnologias</h3>
            <p className="text-center text-sm text-muted-foreground mb-4 flex items-center justify-center gap-2">
              <Info className="w-4 h-4" />
              Clique para ver detalhes sobre cada tecnologia
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill.name} 
                  variant="secondary" 
                  onClick={() => setSelectedTech(skill)}
                  className="text-base px-6 py-2 hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Soft Skills</h3>
            <p className="text-center text-sm text-muted-foreground mb-4 flex items-center justify-center gap-2">
              <Info className="w-4 h-4" />
              Clique nos cards para saber mais sobre cada habilidade
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Card 
                    key={skill.name} 
                    onClick={() => setSelectedSoftSkill(skill)}
                    className="p-4 hover:shadow-xl transition-all hover-lift animate-fade-in cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificados" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">Certificados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <Card 
                key={cert.title} 
                className="p-6 hover:shadow-lg transition-all hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground mt-1">{cert.instructor}</p>
                    <p className="text-xs text-primary font-semibold mt-2">{cert.progress}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <a href={cert.link}>
                    Ver Certificado
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">Projetos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                onClick={() => setSelectedProject(project)}
                className="p-6 hover:shadow-2xl transition-all hover-lift animate-fade-in overflow-hidden group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 min-h-[60px] line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" className="w-full hover-scale">
                  Ver Detalhes
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Vamos Trabalhar Juntos?</h2>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
            Estou sempre aberto a novos projetos e oportunidades. Entre em contato!
          </p>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 hover-scale animate-fade-in" asChild>
            <a href="mailto:Pedrooareas06@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Pedrooareas06@gmail.com
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="animate-fade-in">© 2025 Pedro Henrique De Lima Arêas. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Modals */}
      {selectedTech && (
        <TechModal 
          isOpen={!!selectedTech}
          onClose={() => setSelectedTech(null)}
          tech={selectedTech}
        />
      )}
      
      {selectedSoftSkill && (
        <SoftSkillModal 
          isOpen={!!selectedSoftSkill}
          onClose={() => setSelectedSoftSkill(null)}
          skill={selectedSoftSkill}
        />
      )}
      
      {selectedProject && (
        <ProjectModal 
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </div>
  );
};

const AboutSection = ({ showFullAbout, setShowFullAbout }: { showFullAbout: boolean; setShowFullAbout: (value: boolean) => void }) => {
  const shortAbout = "Desenvolvedor Front-end com 19 anos, apaixonado por criar interfaces modernas e intuitivas. Com experiência em liderança e trabalho em equipe desenvolvida durante anos no futebol , hoje aplico essas habilidades no desenvolvimento de soluções tecnológicas inovadoras.";
  
  const fullAbout = "Sou Pedro Henrique De Lima Arêas, tenho 19 anos e atuo como desenvolvedor front-end. Há um ano, descobri o mundo da programação através de um vídeo no TikTok, em um momento crucial de transição na minha carreira. Me apaixonei instantaneamente pelo desenvolvimento front-end e pelo poder transformador das interfaces digitais.\n\nMinha jornada profissional começou muito antes da tecnologia. Durante grande parte da minha vida, joguei futebol em clubes de destaque do Rio de Janeiro, minha cidade natal. Como atleta, desenvolvi habilidades essenciais de liderança, trabalhando em equipe e tomando decisões estratégicas sob pressão. Em 2024 estava  no último ano do ensino médio, aos 18 anos e sem contrato definido, optei por redirecionar minha carreira profissional.\n\nEm 2024, iniciei minha trajetória corporativa como estagiário em call center, onde rapidamente fui promovido a líder de equipe. Essa ascensão se repetiu em minha segunda empresa, mas o ponto de virada veio através do networking com a equipe de T.I., que me proporcionou a oportunidade de atuar como desenvolvedor front-end.\n\nHoje, combino minha experiência em liderança, comprometimento e trabalho em equipe com minha paixão pela programação. Busco constantemente aprimorar minhas habilidades técnicas através de cursos especializados, mantendo sempre o foco em me tornar um programador de excelência. Meu objetivo é contribuir com soluções inovadoras que transformem a experiência dos usuários e agreguem valor real aos negócios.";

  const { displayedText, elementRef } = useInViewTypewriter({ 
    text: showFullAbout ? fullAbout : shortAbout,
    speed: 10
  });

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in">Sobre Mim</h2>
        <Card className="p-8 hover:shadow-lg transition-shadow animate-fade-in hover-scale">
          <div ref={elementRef} className="text-lg text-foreground leading-relaxed whitespace-pre-line">
            {displayedText}
            {displayedText.length < (showFullAbout ? fullAbout.length : shortAbout.length) && (
              <span className="animate-pulse">|</span>
            )}
          </div>
          {!showFullAbout && displayedText.length >= shortAbout.length && (
            <Button 
              onClick={() => setShowFullAbout(true)}
              variant="ghost" 
              className="mt-6 text-primary hover:text-primary/80"
            >
              Ler história completa →
            </Button>
          )}
        </Card>
      </div>
    </section>
  );
};

export default Index;
