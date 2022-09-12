const baseUrl = '';

export const environment = {

  production: false,
  baseUrl: baseUrl,

  antena: {
    listar: `${baseUrl}/local-antena/find`,
    salvar: `${baseUrl}/local-antena/create`
  },

  regras:{
    listar: `${baseUrl}/regras/search`,
    salvar: `${baseUrl}/regras/create`,
    deletar: `${baseUrl}/regras/deletar`
  },

  autenticacao: {
    logar: '/api/auth/login',
    logout: '/auth/sign-out',
  }

}
;
