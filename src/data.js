export const links = {
  website: 'https://www.languagehours.com/',
  whatsapp: 'https://wa.me/244954858822',
  email: 'mailto:languagehours@gmail.com',
  portal: 'https://www.languagehours.com/portal-do-estudante',
}

export function whatsappLink(message) {
  return `${links.whatsapp}?text=${encodeURIComponent(message)}`
}

export const programs = [
  { id: 'mundo', name: 'Plano Mundo', category: 'adultos', label: 'Em grupo', theme: 'blue', tag: 'O teu primeiro passo', price: '60.000', period: '/ 4 meses', frequency: '3 aulas por semana', title: 'O teu inglês.\nUm mundo novo.', description: 'Aprende em grupo, ganha confiança e leva o inglês para a tua vida.', features: ['Turmas de 20 ou mais estudantes', 'Aulas online 3 vezes por semana', 'Acesso ao Speaking Club', 'Pagamento quadrimestral'] },
  { id: 'mundo-imersao', name: 'Plano Mundo Imersão', category: 'adultos', label: 'Em grupo', theme: 'gold', tag: 'Mais prática, mais confiança', price: '100.000', period: '/ trimestre', frequency: '5 aulas por semana', title: 'Mergulha\nno inglês.', description: 'Turmas pequenas e mais contacto com o inglês ao longo da semana.', features: ['Aulas em turmas pequenas', 'Aulas online 5 vezes por semana', 'Acesso ao Speaking Club', 'Pagamento trimestral'] },
  { id: 'prestigio', name: 'Plano Prestígio', category: 'particulares', label: 'Individual', theme: 'sage', tag: 'Ao teu ritmo', price: '50.000', period: '/ mês', frequency: '2 aulas por semana', title: 'O teu ritmo.\nAs tuas metas.', description: 'Acompanhamento individual e um plano de aprendizagem feito para ti.', features: ['Aulas particulares 2 vezes por semana', 'Plano de aprendizagem personalizado', 'Horário flexível e prioridade no suporte', 'Acesso ao Speaking Club'] },
  { id: 'mundo-infantil', name: 'Plano Mundo Infantil', category: 'criancas', label: 'Para crianças', theme: 'kids', tag: 'Pequenos passos, grandes descobertas', price: '20.000', period: '/ mês', frequency: '3 aulas por semana', title: 'Pequenas vozes.\nGrandes sonhos.', description: 'Inglês em grupo para crescer com curiosidade, compreensão e confiança.', features: ['Aulas em grupo 3 vezes por semana', 'Foco na conversação e compreensão', 'Prática para desenvolver a comunicação', 'Acesso ao Speaking Club'] },
  { id: 'speaking', name: 'Speaking Club', category: 'adultos', label: 'Conversação', theme: 'sage', tag: 'Vamos conversar?', price: '10.000', period: '/ mês', frequency: 'Todos os sábados', title: 'Less fear.\nMore speaking.', description: 'Um espaço seguro para praticar conversas reais, sem medo de errar.', features: ['Encontros ao vivo todos os sábados', 'Foco na conversação e prática real', 'Ambiente sem julgamentos'] },
  { id: 'elite', name: 'Plano Elite', category: 'particulares', label: 'Individual', theme: 'blue', tag: 'Mais perto dos teus objectivos', price: '75.000', period: '/ mês', frequency: '3 aulas por semana', title: 'Mais inglês.\nMais possibilidades.', description: 'Mais sessões individuais para desenvolveres a tua comunicação.', features: ['Aulas particulares 3 vezes por semana', 'Plano personalizado', 'Horário flexível e prioridade no suporte', 'Acesso ao Speaking Club'] },
  { id: 'imersao', name: 'Plano Imersão', category: 'particulares', label: 'Individual', theme: 'gold', tag: 'Inglês no teu dia a dia', price: '125.000', period: '/ mês', frequency: '5 aulas por semana', title: 'Faz do inglês\num hábito.', description: 'Contacto frequente com a língua e acompanhamento particular.', features: ['Aulas particulares 5 vezes por semana', 'Foco na compreensão, fala e confiança', 'Imersão em inglês', 'Acesso ao Speaking Club'] },
  { id: 'vip', name: 'Plano VIP', category: 'particulares', label: 'Individual', theme: 'blue', tag: 'Acompanhamento com a fundadora', price: '200.000', period: '/ mês', frequency: '5 aulas por semana', title: 'Uma experiência\nsó tua.', description: 'Aulas particulares com a fundadora, orientadas para as tuas metas.', features: ['Aulas com a fundadora da Language Hours', '5 aulas por semana', 'Horário flexível', 'Acesso ao Speaking Club', 'Disponibilidade a confirmar com a equipa'] },
  { id: 'speaking-infantil', name: 'Speaking Club Infantil', category: 'criancas', label: 'Para crianças', theme: 'kids', tag: 'Aprender a conversar', price: '10.000', period: '/ mês', frequency: 'Sábados, às 11h de Angola', title: 'Hello,\nnovos amigos!', description: 'Um espaço interactivo para os mais pequenos praticarem inglês.', features: ['Encontros ao vivo aos sábados, às 11h de Angola', 'Conversação e compreensão', 'Ambiente divertido e interactivo'] },
  { id: 'prestigio-infantil', name: 'Plano Prestígio Infantil', category: 'criancas', label: 'Para crianças', theme: 'sage', tag: 'Um ritmo só seu', price: '40.000', period: '/ mês', frequency: '2 aulas por semana', title: 'Confiança\npara crescer.', description: 'Aulas particulares adaptadas ao nível e ao ritmo da criança.', features: ['2 aulas particulares por semana', 'Aulas adaptadas à criança', 'Foco na comunicação e confiança', 'Acesso ao Speaking Club'] },
  { id: 'elite-infantil', name: 'Plano Elite Infantil', category: 'criancas', label: 'Para crianças', theme: 'gold', tag: 'Mais tempo para descobrir', price: '60.000', period: '/ mês', frequency: '3 aulas por semana', title: 'Descobrir.\nCompreender. Falar.', description: 'Mais frequência para praticar vocabulário e comunicação.', features: ['3 aulas particulares por semana', 'Conversação, vocabulário e compreensão', 'Acesso ao Speaking Club'] },
  { id: 'imersao-infantil', name: 'Plano Imersão Infantil', category: 'criancas', label: 'Para crianças', theme: 'kids', tag: 'Inglês todos os dias', price: '100.000', period: '/ mês', frequency: '5 aulas por semana', title: 'Um mundo\nde descobertas.', description: 'Uma experiência intensiva com prática constante da língua.', features: ['5 aulas particulares por semana', 'Imersão e desenvolvimento intensivo', 'Acesso ao Speaking Club'] },
]

export const testimonials = [
  { name: 'Juliana Costa', initials: 'JC', color: 'gold', text: 'A Language Hours transformou minha vida. Finalmente, falo inglês com segurança em reuniões e em casa.' },
  { name: 'Ricardo Mendes', initials: 'RM', color: 'blue', text: 'O foco em conversação real me ajudou a superar o medo de falar em público. O curso é realmente prático.' },
  { name: 'Beatriz Silva', initials: 'BS', color: 'sage', text: 'Nunca imaginei que fosse possível aprender inglês sem passar horas a estudar gramática. Sinto-me como um bebé a aprender a sua primeira língua.' },
]

export const faqs = [
  ['Preciso de saber inglês para começar?', 'Não. Há programas para quem está a começar do zero e para quem já tem conhecimentos. O teste de nivelamento ajuda a equipa a encontrar o ponto de partida adequado para ti.'],
  ['Como funciona o método?', 'A Language Hours utiliza Comprehensible Input: contacto com inglês que consegues compreender, em situações reais. A compreensão e a conversação são o centro da aprendizagem.'],
  ['As aulas são online?', 'Sim. Todas as aulas são online e ao vivo. Podes participar a partir de um computador, tablet ou telemóvel, com ligação à internet.'],
  ['Como faço a inscrição e o pagamento?', 'Entra em contacto com a equipa pelo WhatsApp para fazer a avaliação de nível, escolher um plano e receber ajuda com a inscrição. A equipa também confirma o horário e as opções de pagamento disponíveis.'],
  ['Recebo um certificado?', 'A Language Hours anuncia a emissão de um certificado no final de cada nível de proficiência, com registo da evolução e das horas de estudo. Confirma as condições com a equipa.'],
]

export const situations = [
  { title: 'Na tua carreira.', label: 'INGLÊS QUE ABRE PORTAS', image: '/images/hero.png', phrase: 'It’s a pleasure to meet you. Let me introduce myself.', translation: 'É um prazer conhecer-te. Deixa-me apresentar-me.', body: 'Uma apresentação pode ser o início de uma nova oportunidade. Começa por ouvir e compreender esta frase de uma conversa profissional.' },
  { title: 'Nas tuas viagens.', label: 'O MUNDO MAIS PERTO', image: '/images/travel.jpg', phrase: 'Hi! Could you help me find my way to the station?', translation: 'Olá! Podes ajudar-me a encontrar o caminho para a estação?', body: 'Pedir indicações é uma forma simples de começar uma conversa. Ouve a frase e imagina a situação.' },
  { title: 'No teu dia a dia.', label: 'CONVERSAS COM CONFIANÇA', image: '/images/conversation.jpg', phrase: 'How was your day? Tell me all about it.', translation: 'Como foi o teu dia? Conta-me tudo.', body: 'O inglês também vive nas pequenas conversas. Uma pergunta simples pode aproximar pessoas.' },
]
