const baseUrl = '';

export const environment = {

  production: false,
  baseUrl: baseUrl,

  antena: {
    listar: `${baseUrl}/local-antena/find`,
    salva: `${baseUrl}/local-antena/create`
  }

}
;
