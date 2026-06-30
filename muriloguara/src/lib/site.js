// ───────────────────────────────────────────────────────────────────────────
// Conteúdo central do site. Centralizar aqui facilita revisão/edição do texto
// sem mexer nos componentes. Textos com base em prática clínica de
// fisioterapia, acupuntura e quiropraxia — ajuste livre conforme o Dr. Murilo.
// ───────────────────────────────────────────────────────────────────────────

export const profissional = {
  nome: 'Murilo Guará',
  titulo: 'Fisioterapeuta',
  especialidades: 'Fisioterapia · Acupuntura · Quiropraxia',
  crefito: 'CREFITO 162811-F',
  clinica: 'Centro Integrativo Bastos',
  // Ajuste os contatos reais aqui:
  whatsapp: '5591999999999', // só dígitos, com DDI 55
  whatsappLabel: '(91) 99999-9999',
  instagram: 'https://instagram.com/',
  email: 'contato@muriloguara.com.br',
  cidade: 'Belém · PA',
  enderecoLinhas: ['Centro Integrativo Bastos', 'Belém — Pará'],
}

export const mensagemWhatsApp = encodeURIComponent(
  'Olá, Dr. Murilo! Gostaria de agendar uma avaliação. Pode me passar os horários disponíveis?',
)

export const linkWhatsApp = `https://wa.me/${profissional.whatsapp}?text=${mensagemWhatsApp}`

export const nav = [
  { label: 'Início', href: '#inicio' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Jornada', href: '#jornada' },
  { label: 'Dúvidas', href: '#faq' },
]

// As três frentes da logo: coluna (fisio/quiro) + agulha (acupuntura)
export const especialidades = [
  {
    id: 'fisioterapia',
    icone: 'fisio',
    titulo: 'Fisioterapia',
    resumo:
      'Recuperação do movimento e alívio da dor com terapia manual, exercício terapêutico e reeducação postural — sempre guiados por avaliação clínica.',
    pontos: [
      'Reabilitação de lesões e pós-operatório',
      'Fortalecimento e estabilização articular',
      'Terapia manual e mobilização',
    ],
  },
  {
    id: 'acupuntura',
    icone: 'agulha',
    titulo: 'Acupuntura',
    resumo:
      'Estímulo de pontos específicos para modular a dor, reduzir inflamação e equilibrar o sistema nervoso. Técnica milenar com respaldo científico crescente.',
    pontos: [
      'Dores crônicas e agudas',
      'Enxaqueca e tensão muscular',
      'Ansiedade, insônia e estresse',
    ],
  },
  {
    id: 'quiropraxia',
    icone: 'coluna',
    titulo: 'Quiropraxia',
    resumo:
      'Ajustes articulares precisos que restauram a mobilidade da coluna e das articulações, aliviando compressões e melhorando a função neuromuscular.',
    pontos: [
      'Dores na coluna (cervical, dorsal e lombar)',
      'Hérnias de disco e nervo ciático',
      'Disfunções articulares e travamentos',
    ],
  },
]

// Condições frequentemente atendidas
export const condicoes = [
  'Dor lombar e cervical',
  'Hérnia de disco',
  'Nervo ciático',
  'Enxaqueca e cefaleia tensional',
  'Lesões esportivas',
  'Tendinites e bursites',
  'LER / DORT',
  'Má postura e dores posturais',
  'Estresse, ansiedade e insônia',
  'Reabilitação pós-cirúrgica',
]

// Jornada do paciente — etapas
export const jornada = [
  {
    n: '01',
    titulo: 'Avaliação individualizada',
    texto:
      'Anamnese detalhada, testes funcionais e exame físico para entender a origem real da sua queixa — não apenas o sintoma.',
  },
  {
    n: '02',
    titulo: 'Diagnóstico funcional',
    texto:
      'Identificamos as causas mecânicas e neuromusculares envolvidas e definimos objetivos claros para o tratamento.',
  },
  {
    n: '03',
    titulo: 'Plano integrativo',
    texto:
      'Combinação personalizada entre fisioterapia, acupuntura e quiropraxia — a abordagem certa para o seu caso.',
  },
  {
    n: '04',
    titulo: 'Tratamento e evolução',
    texto:
      'Sessões com técnica e acompanhamento contínuo, ajustando o plano conforme sua resposta e progresso.',
  },
  {
    n: '05',
    titulo: 'Autonomia e prevenção',
    texto:
      'Orientações de exercício, postura e hábitos para manter os resultados e evitar recaídas a longo prazo.',
  },
]

// Diferenciais
export const diferenciais = [
  {
    icone: 'integra',
    titulo: 'Abordagem integrativa',
    texto:
      'Três especialidades em um só cuidado. Tratamos a causa por diferentes ângulos para resultados mais consistentes.',
  },
  {
    icone: 'evidencia',
    titulo: 'Baseado em evidência',
    texto:
      'Técnicas atualizadas e raciocínio clínico — nada de protocolos genéricos. Cada conduta tem um porquê.',
  },
  {
    icone: 'pessoa',
    titulo: 'Atendimento humano',
    texto:
      'Tempo, escuta e um plano feito para você. Você entende o que está acontecendo no seu corpo a cada etapa.',
  },
  {
    icone: 'movimento',
    titulo: 'Foco em movimento',
    texto:
      'O objetivo não é só tirar a dor: é devolver função, força e qualidade de vida ao seu dia a dia.',
  },
]

// FAQ
export const faq = [
  {
    q: 'A acupuntura dói?',
    a: 'As agulhas são finíssimas e estéreis, descartáveis. A maioria das pessoas sente apenas um leve formigamento ou peso no ponto. É um procedimento seguro quando realizado por profissional habilitado.',
  },
  {
    q: 'Quantas sessões vou precisar?',
    a: 'Depende da sua queixa, do tempo de evolução e da resposta individual. Após a avaliação, você recebe uma estimativa realista e o plano é reavaliado ao longo do tratamento.',
  },
  {
    q: 'Quiropraxia é seguro para a coluna?',
    a: 'Sim. Os ajustes são feitos após avaliação criteriosa e respeitam os limites de cada articulação. Casos com contraindicação são identificados antes de qualquer manobra.',
  },
  {
    q: 'Preciso de pedido médico ou exames?',
    a: 'Não é obrigatório para iniciar a avaliação fisioterapêutica. Se você já possui exames de imagem (raio-x, ressonância), traga — ajudam a compor o diagnóstico.',
  },
  {
    q: 'Posso combinar as três especialidades?',
    a: 'Sim, e em muitos casos essa é a melhor estratégia. A combinação é definida de forma individual, de acordo com o seu objetivo e a sua condição.',
  },
]

export const stats = [
  { valor: '+10', sufixo: 'anos', label: 'de prática clínica' },
  { valor: '3', sufixo: 'em 1', label: 'especialidades integradas' },
  { valor: '100%', sufixo: '', label: 'avaliação individualizada' },
]
