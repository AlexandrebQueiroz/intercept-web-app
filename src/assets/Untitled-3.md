 
 
 [
 {
 "codigoLocal": "162102",
 "latitude": "-15.580657",
 "longitude": "-47.5016257",
 "faixas": "BRASILIA/FORMOSA",
 "dataHoraInsercao": "20/04/2022 18:40:41"
 }
]

/local-antena/find
/local-antena/create 

[
    {
   "codigoLocal": "162102",
   "latitude": "-15.580657",
   "longitude": "-47.5016257",
   "faixas": "BRASILIA/FORMOSA",
   "dataHoraInsercao": "20/04/2022 18:40:41"
    }
   ]


   {
    "id": "1662218862680",
    "nome": "Regra de Feijao",
    "descicao": "Regra de Feijao vigencia temp",
    "tipo": "NFE",
    "importancia": "10",
    "menorEsforco": "10",
    "dataCriacao": "03/09/2022 12:27:42",
    "dataInicioValidade": "03/09/2022 10:00:00",
    "dataValidade": "03/09/2022 10:00:00",
    "status": "ativo",
    "condicaoFormat": "det.vProd >= 5000.00 AND det.ncm = 4546546 AND ide_mdfe.ufPer = 'MG' AND ((LOWER(det.xProd) LIKE '%feijao%' OR (LOWER(det.xProd) LIKE '%feijão%' OR (LOWER(det.xProd) LIKE '%feijoes%' OR (LOWER(det.xProd) LIKE '%feijões%')",
    "regra": "SELECT DISTINCT nfe.chNFe AS identificardor_origem 'NFE' AS tipo_origem ide.dhEmi AS data_origem 'Regra de Feijao vigencia temp' AS motivo_origem 'NFE' AS tipo_notificacao 10 AS importancia 10 AS menor_esforco CONCAT(emit.xLgr,', ', emit.nro,', ', emit.xBairro,', ', emit.xMun,', ', emit.uf,', ', emit.xPais,', ', emit.cep) AS endereco_emissor CONCAT(dest.xLgr,', ', dest.nro,', ', dest.xBairro,', ', dest.xMun,', ', dest.uf,', ', dest.xPais,', ', dest.cep) AS endereco_destinatario 'emitente' AS entidade_origem emit.cpf_cnpj AS cpf_cnpj_emitente emit.xNome AS nome_emitente dest.cpf_cnpj AS cpf_cnpj_destinatario dest.xNome AS nome_destinatario 0 AS latitude_alerta 0 AS longitude_alerta 'null' AS data_envio_alerta 'Pendente' AS status_alerta ide.dhSaiEnt AS data_saida_dt modal.placa_veicTracao AS placa_veiculo FROM intercept_nfe AS nfe JOIN intercept_emit_nfe AS emit ON (nfe.chNFe = emit.chNFe) LEFT JOIN intercept_dest_nfe AS dest ON (nfe.chNFe = dest.chNFe) LEFT JOIN intercept_ide_nfe AS ide ON (nfe.chNFe = ide.chNFe) LEFT JOIN intercept_det_nfe AS det ON (nfe.chNFe = det.chNFe) LEFT JOIN intercept_inf_doc_mdfe AS mdfe_doc ON (nfe.chNFe = mdfe_doc.chNFe) LEFT JOIN intercept_modal_mdfe AS modal ON (mdfe_doc.chMDFe = modal.chMDFe) LEFT JOIN intercept_ide_mdfe AS ide_mdfe ON (mdfe_doc.chMDFe = ide_mdfe.chMDFe) WHERE nfe.chNFe = ':' AND det.vProd >= 5000.00 AND det.ncm = 4546546 AND ide_mdfe.ufPer = 'MG' AND ((LOWER(det.xProd) LIKE '%feijao%' OR (LOWER(det.xProd) LIKE '%feijão%' OR (LOWER(det.xProd) LIKE '%feijoes%' OR (LOWER(det.xProd) LIKE '%feijões%')",
    "condicoes": null,
    "produtos": null
    }

    /regras/search/2022-09-03 12:00:00/2022-09-03 20:20:00


    PRODUTO(1, "(LOWER(det.xProd) LIKE '%VALUE%'"),
    VALOR(2, "det.vProd VALUE"),
    NCM(3, "det.ncm = VALUE"),
    PERCURSO(4, "ide_mdfe.ufPer = 'VALUE'");

    "produtos": [
        {
        "codigo": 1,
        "descricao": "Couro"
        },
        {
        "codigo": 1,
        "descricao": "couro"
        },
        {
        "codigo": 1,
        "descricao": "couros"
        },
        {
        "codigo": 1,
        "descricao": "cour"
        }
    ]


    "det.vProd >= 5000.00 AND det.ncm = 4546546 AND ide_mdfe.ufPer = 'MG' AND ((LOWER(det.xProd) LIKE '%feijao%' OR (LOWER(det.xProd) LIKE '%feijão%' OR (LOWER(det.xProd) LIKE '%feijoes%' OR (LOWER(det.xProd) LIKE '%feijões%')"



    /regras/create

    /regras/search/2022-09-03 12:00:00/2022-09-03 20:20:00