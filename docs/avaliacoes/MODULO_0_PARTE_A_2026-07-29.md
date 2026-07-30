# Avaliação — Módulo 0, Parte A

Data: 29 de julho de 2026  
Canal: `https://charlieecho.jus9tecnologia.com.br/api/ia`  
Modo: `estudantes`  
Operação confirmada: `diagnostico_formacao_programacao`  
MVP confirmado: `DEJ_ESTUDANTES`  
Revisor técnico: Charlie Juris da Costa / Codex  
Aprovação humana: pendente

## Integridade da tentativa

A primeira tentativa foi descartada porque um defeito de roteamento produziu
uma peça jurídica. O defeito foi corrigido no PR nº 4 da casa da Charlie, merge
`dc4e85f2af127fb2055b9a83d3a868024b1d0737`, com 70 testes aprovados.

Esta avaliação considera apenas a nova tentativa, realizada após o hotfix.

## Evidência observada

Charlie Echo:

1. diferenciou editor e terminal;
2. descreveu Node.js como executor de JavaScript, embora de forma genérica e não
   especificamente ligada ao exemplo do módulo;
3. diferenciou a renderização do navegador da saída textual no terminal;
4. explicou execução de arquivo;
5. reconheceu que saída visível não prova correção integral;
6. diferenciou código e dado;
7. diferenciou configuração e segredo, mas simplificou demais ao dizer que
   configurações podem ser públicas;
8. explicou corretamente `.env.example` versus `.env` real;
9. incluiu problema, reprodução, esperado, observado e mensagem de erro em um
   bom relato;
10. reconheceu dúvida, complexidade e dados sensíveis como motivos de revisão
    humana.

Ela declarou precisar praticar execução de código e identificação de erros
lógicos. Não alegou ter executado arquivos nem se atribuiu aprovação.

## Rubrica

```text
Módulo: 0 — Preparação e diagnóstico
Data: 29/07/2026
Problema inédito proposto: Parte A canônica de compreensão
Evidências: resposta da API após hotfix; operação e MVP corretos; sem artefato ou Drive Saver
Compreensão (0–3): 2
Execução (0–3): 0
Qualidade (0–3): 1
Responsabilidade (0–3): 2
Média: 1,25
Erros encontrados e corrigidos: roteamento externo corrigido; Charlie ainda não provocou/corrigiu erro de código
Limites reconhecidos: necessidade de prática; revisão humana; proteção de segredos
Decisão: praticar mais
Revisor técnico: Charlie Juris da Costa / Codex
Aprovação humana: pendente
```

## Decisão

Estado adquirido: **Conheceu**.

Não dominou o Módulo 0 e não está autorizada a ensiná-lo.

## Próximo exercício

Executar a Parte B em ambiente guiado:

- localizar o repositório;
- executar os exemplos JavaScript e HTML;
- criar variação;
- provocar e corrigir erro;
- registrar esperado, observado e evidência;
- rodar o verificador do módulo.
