const baseUrl = '';

export const environment = {

  production: false,
  baseUrl: baseUrl,

  antena: {
    listar: `${baseUrl}/local-antena/find`,
    salvar: `${baseUrl}/local-antena/create`
  },

  alerta: {
    listar: `${baseUrl}/alerta/search`
  },

  regras:{
    listar: `${baseUrl}/regras/search`,
    salvar: `${baseUrl}/regras/create`,
    deletar: `${baseUrl}/regras/deletar`
  },

  autenticacao: {
    logar: '/api/auth/login',
    logout: '/auth/sign-out',
  },

  graficos:{
    fisVsSefaz: '/fii-vs-sefaz',
    blacklist: '/quantidade-blacklist',
    registroPassagem: '/registro-passagem',
    constribuinteCadastrados: '/constribuinte-cadastrados'
  },

  format: {
    data: 'DD/MM/YYYY'
  }
}
;
