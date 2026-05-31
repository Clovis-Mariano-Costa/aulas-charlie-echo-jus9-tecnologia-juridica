# Protocolo de links externos e downloads — Aulas Charlie Echo

Data: 2026-05-30  
Classificacao: PUBLICO / OPERACIONAL / SANITIZADO

## Regra para interfaces futuras

Toda interface conversacional criada neste repertorio deve:

- reconhecer pedidos como `me passe o link`, `qual e o site`, `URL`, `onde acesso`, `onde encontro`, `download` e `baixar`;
- responder com URL publica completa iniciada por `https://`;
- transformar a URL exibida em link clicavel;
- abrir sites externos em nova aba com `rel="noopener noreferrer"`;
- explicar brevemente o destino do link;
- avaliar links externos conforme o contexto, sem limitar a resposta a catalogo fechado;
- priorizar fontes primarias oficiais e dominios institucionais coerentes, especialmente `gov.br`, `jus.br`, `leg.br`, `mp.br`, `def.br` e `edu.br`;
- nao recusar um link apenas porque ele pertence a dominio externo a Jus 9;
- pedir confirmacao em fonte oficial quando nao houver confianca suficiente na URL exata;
- nunca publicar link de cofre, segredo, credencial, token ou dado pessoal.

## Referencias conhecidas

Usar o catalogo versionado da casa publica Charlie Echo apenas como memoria inicial de referencias conhecidas, sem tratar o arquivo como lista fechada:

`charlieecho-jus9-tecnologia-juridica/data-publica/links-confiaveis-jus9.json`

## Revisao humana

Links novos e arquivos publicos novos exigem revisao humana antes de publicacao.
