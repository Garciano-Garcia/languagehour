import { useEffect } from 'react'
import Icon from './Icons'
import { links, whatsappLink } from './data'

const resources = [
  {
    category: 'COMPREENSÃO ORAL',
    name: 'Listening — British Council',
    description: 'Áudios e atividades de compreensão oral organizados por nível.',
    href: 'https://learnenglish.britishcouncil.org/skills/listening',
    icon: 'headphones',
  },
  {
    category: 'CONVERSAÇÃO',
    name: 'Speaking — British Council',
    description: 'Pratica expressões e situações comuns para comunicar com mais confiança.',
    href: 'https://learnenglish.britishcouncil.org/skills/speaking',
    icon: 'chat',
  },
  {
    category: 'INGLÊS DO DIA A DIA',
    name: 'BBC Learning English',
    description: 'Lições curtas de vocabulário, pronúncia, gramática e compreensão.',
    href: 'https://www.bbc.co.uk/learningenglish/',
    icon: 'globe',
  },
  {
    category: 'VOCABULÁRIO',
    name: 'Cambridge Dictionary',
    description: 'Consulta significados, exemplos e pronúncia de palavras em inglês.',
    href: 'https://dictionary.cambridge.org/',
    icon: 'book',
  },
  {
    category: 'PARA CRIANÇAS',
    name: 'LearnEnglish Kids',
    description: 'Jogos, histórias, músicas e atividades para crianças.',
    href: 'https://learnenglishkids.britishcouncil.org/',
    icon: 'spark',
  },
]

const studyPlan = [
  ['Segunda-feira', 'Ouve um áudio curto e anota três palavras novas.', '15 min', 'headphones'],
  ['Terça-feira', 'Repete em voz alta algumas frases que ouviste.', '10 min', 'chat'],
  ['Quarta-feira', 'Lê uma história ou um texto simples em inglês.', '15 min', 'book'],
  ['Quinta-feira', 'Revê o vocabulário e cria frases com palavras novas.', '10 min', 'spark'],
  ['Sábado', 'Pratica uma conversa ou participa no Speaking Club.', '30 min', 'users'],
]

function PortalBrand() {
  return <a href="/" className="student-brand" aria-label="Language Hours — página inicial">
    <img src="/images/logo.webp" width="42" height="39" alt="" />
    <span>LANGUAGE<span>HOURS<span className="brand-dot">.</span></span></span>
  </a>
}

export default function StudentPortal() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Portal do Estudante — Language Hours'
    return () => { document.title = previousTitle }
  }, [])

  return <div className="student-portal">
    <a href="#conteudo-estudante" className="skip-link">Saltar para o conteúdo</a>
    <header className="student-header">
      <div className="container student-header-inner">
        <PortalBrand />
        <a className="student-home-link" href="/">Voltar ao site <Icon name="arrow" size={16} /></a>
      </div>
    </header>

    <main id="conteudo-estudante">
      <section className="student-hero">
        <div className="container student-hero-inner">
          <div>
            <span className="student-eyebrow"><span /> PORTAL DO ESTUDANTE</span>
            <h1>O teu inglês<br />continua <em>aqui.</em></h1>
            <p>Encontra recursos para praticar entre aulas e cria uma rotina que funciona para ti. Um passo de cada vez, ao teu ritmo.</p>
            <a className="button button-gold" href="#recursos">Explorar materiais <Icon name="arrow" size={18} /></a>
          </div>
          <aside className="student-welcome-card">
            <span className="student-welcome-icon"><Icon name="book" size={25} /></span>
            <span className="student-eyebrow">LEMBRETE</span>
            <p>Não precisas de compreender tudo. Começa pelo que consegues compreender hoje.</p>
            <span className="student-welcome-caption">Ouve · Compreende · Comunica</span>
          </aside>
        </div>
      </section>

      <section className="student-section" id="recursos">
        <div className="container">
          <div className="student-section-heading">
            <div><span className="eyebrow">A TUA CAIXA DE FERRAMENTAS</span><h2>Recursos para continuares <em>a aprender.</em></h2></div>
            <p>Selecionámos recursos gratuitos de plataformas externas. Abrem num novo separador e podem ter os seus próprios termos de utilização.</p>
          </div>
          <div className="student-resource-grid">
            {resources.map(resource => <article className="student-resource-card" key={resource.name}>
              <span className="student-resource-icon"><Icon name={resource.icon} size={21} /></span>
              <span className="student-resource-category">{resource.category}</span>
              <h3>{resource.name}</h3>
              <p>{resource.description}</p>
              <a href={resource.href} target="_blank" rel="noopener noreferrer">Abrir recurso <Icon name="external" size={15} /></a>
            </article>)}
          </div>
        </div>
      </section>

      <section className="student-section student-plan-section" id="plano-semanal">
        <div className="container student-plan-layout">
          <div className="student-plan-intro">
            <span className="eyebrow">PEQUENOS PASSOS, GRANDES AVANÇOS</span>
            <h2>Uma rotina simples <em>para praticar.</em></h2>
            <p>Este é apenas um exemplo de rotina de estudo. Ajusta os dias e o tempo à tua disponibilidade e confirma os horários das aulas com a equipa.</p>
            <a className="text-link" href={whatsappLink('Olá! Sou estudante e gostaria de confirmar os meus horários de aula.')}>Confirmar os meus horários <Icon name="arrow" size={16} /></a>
          </div>
          <div className="student-plan-list">
            {studyPlan.map(([day, activity, duration, icon]) => <article className="student-plan-item" key={day}>
              <span className="student-plan-icon"><Icon name={icon} size={19} /></span>
              <div><strong>{day}</strong><p>{activity}</p></div>
              <span className="student-plan-duration"><Icon name="clock" size={14} />{duration}</span>
            </article>)}
          </div>
        </div>
      </section>

      <section className="student-help">
        <div className="container student-help-inner">
          <div><span className="eyebrow">PRECISAS DE AJUDA?</span><h2>A equipa está por perto.</h2><p>Fala connosco para esclarecer dúvidas sobre aulas, horários ou o teu plano.</p></div>
          <a className="button button-gold" href={whatsappLink('Olá! Sou estudante da Language Hours e preciso de ajuda.') } target="_blank" rel="noopener noreferrer"><Icon name="chat" size={18} /> Falar com a equipa</a>
        </div>
      </section>
    </main>

    <footer className="student-footer">
      <div className="container"><a href="/">Language Hours</a><span>Recursos externos de aprendizagem; a disponibilidade e o conteúdo são geridos pelos respetivos fornecedores.</span><a href="#conteudo-estudante">Voltar ao topo ↑</a></div>
    </footer>
  </div>
}
