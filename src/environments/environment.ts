const baseUrl = '';

export const environment = {

  production: false,
  baseUrl: baseUrl,

  antena: {
    listar: `${baseUrl}/local-antena/find`,
    salvar: `${baseUrl}/local-antena/create`
  }

}
;
