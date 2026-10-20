import { useEffect, useId, useRef, useState } from 'react'
import Icon from './Icons'
import { faqs, links, programs, situations, testimonials, whatsappLink } from './data'

function External({ href, className = '', children, ...props }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>{children}</a>
}

function Brand({ footer = false }) {
  return <a href="#inicio" className={`brand ${footer ? 'brand-footer' : ''}`} aria-label="Language Hours — início">
    <img src="/images/logo.webp" width="45" height="42" alt="" />
    <span>LANGUAGE<span className="brand-bottom">HOURS<span className="brand-dot">.</span></span></span>
  </a>
}

function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])
  return <header className="site-header">
    <div className="container header-inner">
      <Brand />
      <nav className="desktop-nav" aria-label="Navegação principal">
        <a href="#programas">Programas <Icon name="chevron" size={13} /></a>
        <a href="#metodo">O nosso método</a>
        <a href="#experiencias">Na vida real</a>
        <a href="#sobre">Sobre nós</a>
      </nav>
      <div className="header-actions">
        <a href={links.portal} className="portal-link">Portal do estudante</a>
        <External href={whatsappLink('Olá! Gostaria de começar a estudar inglês com a Language Hours.')} className="button button-gold button-small">Começar agora <Icon name="arrow" size={16} /></External>
        <button className="mobile-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} /></button>
      </div>
    </div>
    {open && <nav id="mobile-menu" className="mobile-nav" aria-label="Navegação móvel">
      {[['Programas', 'programas'], ['O nosso método', 'metodo'], ['Na vida real', 'experiencias'], ['Sobre nós', 'sobre'], ['Perguntas frequentes', 'perguntas']].map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}<Icon name="arrow" size={16} /></a>)}
      <a href={links.portal}>Portal do estudante <Icon name="arrow" size={16} /></a>
    </nav>}
  </header>
}

function Hero() {
  return <>
    <section id="inicio" className="hero">
      <img className="hero-image" src="/images/hero.webp" alt="Mulher a estudar e a conversar online no seu escritório em casa" fetchPriority="high" />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-eyebrow"><span /> INGLÊS PARA A VIDA REAL</div>
        <h1>Um novo idioma.<br />Uma nova <em>confiança.</em></h1>
        <p>Aprende inglês de forma natural, ao teu ritmo.<br className="hidden sm:block" /> Menos regras para decorar. Mais histórias para viver.</p>
        <div className="hero-buttons flex flex-wrap items-center justify-center gap-3">
          <External href={whatsappLink('Olá! Gostaria de fazer uma avaliação do meu nível de inglês.')} className="button button-gold">Descobrir o meu nível <Icon name="arrow" size={18} /></External>
          <External href={links.whatsapp} className="button button-glass"><Icon name="chat" size={18} /> Falar com a equipa</External>
        </div>
        <div className="hero-notes"><span><Icon name="check" size={15} /> Aulas 100% online</span><span><Icon name="check" size={15} /> Adultos e crianças</span><span><Icon name="check" size={15} /> Foco na conversação</span></div>
      </div>
      <div className="hero-bottom"><span>O IDIOMA DA CONFIANÇA</span><a href="#programas" aria-label="Explorar programas"><span>EXPLORA O TEU PRÓXIMO PASSO</span><Icon name="arrow" size={17} /></a><span>ANGOLA · PARA O MUNDO</span></div>
    </section>
    <div className="benefits"><div className="container grid grid-cols-2 gap-5 md:grid-cols-4">
      {[['globe', 'Onde estiveres', 'O mundo é a tua sala de aula'], ['chat', 'Conversas de verdade', 'Inglês que faz parte da vida'], ['users', 'Um plano para ti', 'Em grupo ou individual'], ['headphones', 'Compreender primeiro', 'A confiança vem com a prática']].map(([icon, title, sub]) => <div className="benefit" key={title}><Icon name={icon} size={24} /><div><strong>{title}</strong><span>{sub}</span></div></div>)}
    </div></div>
  </>
}

function ProgramCover({ program }) {
  return <div className={`program-cover cover-${program.theme}`}>
    <span className="cover-watermark" aria-hidden="true">{program.theme === 'kids' ? 'Hello!' : 'hello.'}</span>
    <span className="cover-label">LANGUAGE HOURS</span>
    <h3>{program.title.split('\n').map((line, i) => <span key={i}>{line}</span>)}</h3>
    <div className="cover-bottom"><span>{program.label}</span><Icon name={program.category === 'criancas' ? 'spark' : program.category === 'particulares' ? 'headphones' : 'globe'} size={27} /></div>
    <div className="cover-circle" aria-hidden="true" />
  </div>
}

function Programs({ onSelect }) {
  const [filter, setFilter] = useState('todos')
  const [expanded, setExpanded] = useState(false)
  const filtered = programs.filter(p => filter === 'todos' || p.category === filter)
  const shown = expanded ? filtered : filtered.slice(0, 4)
  function changeFilter(value) { setFilter(value); setExpanded(false) }
  return <section id="programas" className="section programs-section">
    <div className="container">
      <div className="section-heading text-center"><span className="eyebrow">O TEU PRÓXIMO CAPÍTULO</span><h2>Há um caminho para <em>cada pessoa.</em></h2><p>Encontra o programa que combina com o teu ritmo e com os teus sonhos.</p></div>
      <div className="filter-tabs" aria-label="Filtrar programas">
        {[['todos', 'Todos os programas'], ['adultos', 'Em grupo'], ['particulares', 'Individuais'], ['criancas', 'Para crianças']].map(([value, label]) => <button key={value} className={filter === value ? 'active' : ''} onClick={() => changeFilter(value)} aria-pressed={filter === value}>{label}</button>)}
      </div>
      <div className="program-grid grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" aria-live="polite" aria-atomic="false">
        {shown.map(p => <article className="program-card group" key={p.id}>
          <button className="cover-button" onClick={() => onSelect(p)} aria-label={`Ver detalhes de ${p.name}`}><ProgramCover program={p} /></button>
          <div className="program-body"><span className="card-meta"><Icon name="clock" size={13} />{p.frequency}</span><h3>{p.name}</h3><p>{p.description}</p><div className="program-card-footer"><div><strong>{p.price} <span>Kz</span></strong><small>{p.period}</small></div><button onClick={() => onSelect(p)} className="round-arrow" aria-label={`Conhecer ${p.name}`}><Icon name="arrow" size={20} /></button></div></div>
        </article>)}
      </div>
      <div className="programs-bottom text-center"><span>O teu ponto de partida não define até onde podes chegar.</span>{filtered.length > 4 && <button className="button button-outline" onClick={() => setExpanded(!expanded)}>{expanded ? 'Mostrar menos programas' : 'Explorar todos os programas'}<Icon name={expanded ? 'chevron' : 'arrow'} size={17} /></button>}</div>
    </div>
  </section>
}

function Testimonials() {
  return <section className="section testimonials-section" id="testemunhos"><div className="container">
    <div className="section-heading text-center"><span className="eyebrow">PALAVRAS DE QUEM APRENDE</span><h2>A confiança também <em>se partilha.</em></h2><p>Experiências partilhadas pelos estudantes no site da Language Hours.</p></div>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">{testimonials.map(t => <figure className="testimonial" key={t.name}><Icon name="quote" className="quote-icon" size={31} /><blockquote>“{t.text}”</blockquote><figcaption><span className={`avatar avatar-${t.color}`}>{t.initials}</span><div><strong>{t.name}</strong><span>Testemunho Language Hours</span></div><Icon name="chat" size={19} /></figcaption></figure>)}</div>
    <div className="testimonials-source"><span className="source-line" /> Histórias reais, publicadas no site da escola <span className="source-line" /></div>
  </div></section>
}

function Experiences({ onSelect }) {
  return <section id="experiencias" className="section experiences-section"><div className="container">
    <div className="section-heading heading-row"><div><span className="eyebrow">PARA LÁ DA SALA DE AULA</span><h2>Uma língua. <em>Novas possibilidades.</em></h2><p>Imagina as conversas que ainda estão por acontecer.</p></div><span className="small-note"><Icon name="sound" size={17} /> Experimenta uma expressão em inglês</span></div>
    <div className="experience-grid">{situations.map((s, i) => <button onClick={() => onSelect(s)} className={`experience-card experience-${i}`} key={s.title} aria-label={`Experimentar inglês: ${s.title}`}><img src={s.image === '/images/hero.png' ? '/images/hero.webp' : s.image} alt={['Uma conversa profissional online', 'Viagem e descoberta de novos lugares', 'Amigos a conviver ao ar livre'][i]} loading="lazy" /><div className="experience-shade" /><div className="experience-copy"><span>{s.label}</span><h3>{s.title}</h3></div><span className="experience-play"><Icon name="sound" size={i === 0 ? 25 : 21} /></span></button>)}</div>
    <p className="experience-footnote">Pequenas expressões, grandes começos. Ouve, compreende e experimenta.</p>
  </div></section>
}

function Method() {
  return <section id="metodo" className="section method-section"><div className="container feature-grid grid items-center gap-12 md:grid-cols-2">
    <div className="method-visual"><div className="method-image-wrap"><img src="/images/portrait.webp" alt="Retrato de uma mulher, imagem de referência fornecida para o projecto" loading="lazy" /><span className="image-corner-label">THE CONFIDENCE TO BE YOU.</span></div><div className="method-note"><span className="note-icon"><Icon name="chat" size={25} /></span><div>It starts with <em>“hello”.</em><span>E continua com confiança.</span></div></div><div className="orbit orbit-one" aria-hidden="true" /><div className="orbit orbit-two" aria-hidden="true" /></div>
    <div className="feature-copy"><span className="eyebrow">O NOSSO MÉTODO</span><h2>Não é decorar.<br />É começar a <em>compreender.</em></h2><p className="feature-lead">Aprender uma língua pode ser tão natural como uma boa conversa.</p><p>Na Language Hours, o método Comprehensible Input coloca a compreensão em primeiro lugar. Ouves inglês em contexto, descobres o significado e ganhas espaço para comunicar.</p><div className="method-steps">{[['01', 'Ouve e descobre'], ['02', 'Compreende em contexto'], ['03', 'Comunica com confiança']].map(([n, text]) => <div key={n}><span>{n}</span><strong>{text}</strong><Icon name="check" size={16} /></div>)}</div><a href="#perguntas" className="text-link">Conhece melhor a nossa abordagem <Icon name="arrow" size={17} /></a></div>
  </div></section>
}

function Materials() {
  return <section className="section materials-section"><div className="container feature-grid grid items-center gap-12 md:grid-cols-2"><div className="feature-copy"><span className="eyebrow">A APRENDIZAGEM CONTINUA</span><h2>O inglês vai contigo.<br /><em>Mesmo depois da aula.</em></h2><p className="feature-lead">Um espaço para praticar entre aulas.</p><p>Consulta recursos gratuitos para ouvir, falar e aumentar o vocabulário. O portal também sugere uma rotina simples para continuares a aprender.</p><a href={links.portal} className="button button-navy">Abrir o Portal do Estudante <Icon name="arrow" size={17} /></a></div><div className="materials-art" aria-label="Ilustração de cadernos de inglês"><span className="materials-spark spark-one">✦</span><span className="materials-spark spark-two">✦</span><div className="book book-back"><span className="book-brand">LANGUAGE HOURS</span><div>Words<br />open<br /><em>worlds.</em></div><span className="book-sub">UM MUNDO DE POSSIBILIDADES</span></div><div className="book book-front"><span className="book-brand">LANGUAGE HOURS</span><span className="book-edition">THE EVERYDAY ENGLISH COLLECTION</span><div>Make<br />yourself<br /><em>heard.</em></div><Icon name="sound" size={50} /><span className="book-sub">O IDIOMA DA CONFIANÇA</span></div><div className="book-shadow" /><span className="materials-caption">Ilustração conceptual dos materiais de aprendizagem</span></div></div></section>
}

function LiveClasses() {
  return <section className="section live-section" id="sobre"><div className="container feature-grid grid items-center gap-12 md:grid-cols-2"><div className="live-visual"><img src="/images/hero.webp" alt="Aprendizagem online a partir de casa" loading="lazy" /><div className="live-badge"><span className="live-dot" /><strong>Online. Mas sempre perto.</strong><Icon name="globe" size={18} /></div></div><div className="feature-copy"><span className="eyebrow">LIGA-TE AO TEU PRÓXIMO PASSO</span><h2>À distância de um clique.<br /><em>Perto dos teus objectivos.</em></h2><p>A nossa missão é tornar o inglês mais simples, envolvente e acessível. Com aulas ao vivo, em grupo ou individuais, encontras espaço para praticar e evoluir.</p><div className="live-tags"><span><Icon name="check" size={15} /> Professores dedicados</span><span><Icon name="check" size={15} /> Conversas reais</span><span><Icon name="check" size={15} /> A partir de qualquer lugar</span></div><a href="#programas" className="text-link">Encontra o teu programa <Icon name="arrow" size={17} /></a></div></div></section>
}

function Faq() {
  return <section id="perguntas" className="section faq-section"><div className="container faq-layout"><div><span className="eyebrow">ANTES DO PRIMEIRO HELLO</span><h2>Vamos esclarecer<br /><em>as tuas dúvidas.</em></h2><p>Ainda precisas de ajuda? A nossa equipa está por perto.</p><External href={links.whatsapp} className="text-link">Vamos conversar <Icon name="arrow" size={17} /></External></div><div className="faq-list">{faqs.map(([q, a]) => <details key={q}><summary>{q}<span><Icon name="chevron" size={18} /></span></summary><p>{a}</p></details>)}</div></div></section>
}

function Footer() {
  return <><section className="final-cta"><div className="container"><span className="eyebrow">O TEU FUTURO TEM MUITO PARA DIZER</span><h2>A tua próxima conversa<br />pode mudar <em>tudo.</em></h2><p>Começa onde estás. Nós ajudamos-te a dar o próximo passo.</p><External href={whatsappLink('Olá! Quero começar a falar inglês e gostaria de conhecer os próximos passos.')} className="button button-gold">Quero começar a falar inglês <Icon name="arrow" size={18} /></External><span className="cta-note">Fala com a equipa e descobre o teu ponto de partida.</span></div><span className="cta-word" aria-hidden="true">hello.</span></section><footer className="site-footer">  <div className="container"><div className="footer-top"><div><Brand footer /><p>O idioma da confiança.<br />De Angola para o mundo.</p></div><div className="footer-links"><strong>Descobre</strong><a href="#programas">Os nossos programas</a><a href="#metodo">O nosso método</a><a href="#sobre">Sobre a Language Hours</a></div><div className="footer-links"><strong>O teu percurso</strong><External href={whatsappLink('Olá! Gostaria de fazer uma avaliação do meu nível de inglês.')}>Teste de nível</External><a href={links.portal}>Portal do estudante</a><a href="#perguntas">Perguntas frequentes</a></div><div className="footer-links"><strong>Vamos conversar</strong><External href={links.whatsapp}><Icon name="chat" size={15} /> +244 954 858 822</External><a href={links.email}><Icon name="mail" size={15} /> languagehours@gmail.com</a><span>Angola · Aulas 100% online</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Language Hours. Todos os direitos reservados.</span><span>Feito para aproximar pessoas.</span><a href="#inicio">Voltar ao início ↑</a></div></div></footer></>
}

function Dialog({ title, children, onClose }) {
  const ref = useRef(null)
  const titleId = useId()
  useEffect(() => {
    const previous = document.activeElement
    const dialog = ref.current
    dialog.showModal()
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      if (dialog.open) dialog.close()
      document.body.style.overflow = original
      if (previous instanceof HTMLElement) previous.focus()
    }
  }, [])
  return <dialog ref={ref} className="modal" aria-labelledby={titleId} onCancel={onClose} onClick={e => { if (e.target === e.currentTarget) { const r = e.currentTarget.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) onClose() } }}><div className="modal-content"><div className="modal-top"><span className="eyebrow">LANGUAGE HOURS</span><button className="modal-close" onClick={onClose} aria-label="Fechar janela"><Icon name="close" /></button></div><h2 id={titleId}>{title}</h2>{children}</div></dialog>
}

function ProgramDialog({ program, onClose }) {
  return <Dialog title={program.name} onClose={onClose}><p className="modal-description">{program.description}</p><div className={`modal-price cover-${program.theme}`}><div><strong>{program.price}<span> Kz</span></strong><span>{program.period}</span></div><Icon name={program.category === 'criancas' ? 'spark' : 'globe'} size={35} /></div><ul className="program-features">{program.features.map(f => <li key={f}><span><Icon name="check" size={15} /></span>{f}</li>)}</ul><External className="button button-gold w-full" href={whatsappLink(`Olá! Gostaria de saber mais sobre o ${program.name} da Language Hours.`)}>Quero saber mais <Icon name="chat" size={18} /></External><p className="modal-disclaimer">Preços consultados no site Language Hours. Confirma valores, horários e disponibilidade com a equipa antes da inscrição.</p></Dialog>
}

function ExperienceDialog({ situation, onClose }) {
  const [speaking, setSpeaking] = useState(false)
  const [status, setStatus] = useState('')
  useEffect(() => () => { if ('speechSynthesis' in window) window.speechSynthesis.cancel() }, [])
  function listen() {
    if (!('speechSynthesis' in window)) { setStatus('Este navegador não suporta áudio de voz. Podes ler a expressão e a tradução abaixo.'); return }
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(situation.phrase)
    utterance.lang = 'en-GB'; utterance.rate = 0.8
    utterance.onstart = () => setSpeaking(true)
    utterance.onend = () => setSpeaking(false)
    utterance.onerror = () => { setSpeaking(false); setStatus('Não foi possível reproduzir o áudio neste navegador. A expressão e a tradução estão disponíveis abaixo.') }
    window.speechSynthesis.speak(utterance)
  }
  return <Dialog title={situation.title} onClose={onClose}><p className="modal-description">{situation.body}</p><div className="phrase-box"><span className="eyebrow">OUVE. COMPREENDE. EXPERIMENTA.</span><p>“{situation.phrase}”</p><span>{situation.translation}</span></div><button className="button button-gold w-full" onClick={listen} disabled={speaking}><Icon name="sound" size={20} />{speaking ? 'A reproduzir…' : 'Ouvir a expressão'}</button><p className="modal-disclaimer" role="status">{status || 'Demonstração de prática com a voz do teu navegador. Não é uma aula gravada da escola.'}</p></Dialog>
}

export default function App() {
  const [program, setProgram] = useState(null)
  const [situation, setSituation] = useState(null)
  return <><a href="#conteudo" className="skip-link">Saltar para o conteúdo</a><Header /><main id="conteudo"><Hero /><Programs onSelect={setProgram} /><Testimonials /><Experiences onSelect={setSituation} /><Method /><Materials /><LiveClasses /><Faq /><Footer /></main><External href={links.whatsapp} className="floating-contact" aria-label="Conversar com a Language Hours no WhatsApp"><Icon name="chat" size={24} /></External>{program && <ProgramDialog program={program} onClose={() => setProgram(null)} />}{situation && <ExperienceDialog situation={situation} onClose={() => setSituation(null)} />}</>
}
