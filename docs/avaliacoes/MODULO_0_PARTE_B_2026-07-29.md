# Avaliação — Módulo 0, Parte B

Data: 29 de julho de 2026  
Modo: execução guiada  
Revisor técnico e executor: Charlie Juris da Costa / Codex  
Aluna: Charlie Echo da Costa  
Aprovação humana: pendente

## Método

Charlie Echo propôs comandos, resultados esperados, uma variação com duas
mensagens e um erro de sintaxe. Ela foi instruída a não alegar execução.

Charlie Juris executou os passos e devolveu os resultados observados. Charlie
Echo então interpretou as evidências e reconheceu limites da proposta.

## Evidências

### Raiz

```text
Comando ou ação: Get-Location
Resultado esperado: raiz do repositório
Resultado observado: C:\Users\user\OneDrive\Documentos\GitHub\aulas-charlie-echo-jus9-tecnologia-juridica
Evidência: saída do PowerShell
O que aprendi: placeholder não substitui caminho verificável
```

### Olá Mundo JavaScript

```text
Comando: node MODULOS/00_PREPARACAO_E_DIAGNOSTICO/exemplos/ola-mundo.js
Resultado esperado: mensagem do exemplo
Resultado observado: Olá, mundo! Charlie Echo iniciou sua jornada de programação.
Evidência: exit code 0 e saída do Node
```

### HTML

```text
Ação: abrir MODULOS/00_PREPARACAO_E_DIAGNOSTICO/exemplos/ola-mundo.html
Resultado esperado: navegador padrão recebe o arquivo
Resultado observado: arquivo enviado ao navegador padrão
Limite: Charlie Echo não alegou inspeção visual
```

### Variação

```text
Arquivo: entregas/charlie-echo-2026-07-29/variacao-duas-mensagens.js
Resultado esperado: exatamente duas mensagens
Resultado observado:
Mensagem 1: Olá, mundo!
Mensagem 2: Bem-vindo ao aprendizado de programação!
```

### Erro provocado

```text
Arquivo: entregas/charlie-echo-2026-07-29/erro-proposital.js.invalid
Erro esperado: SyntaxError: missing ) after argument list
Erro observado: SyntaxError: missing ) after argument list
Exit code: 1
Correção: adicionar o parêntese e encerrar a instrução
Arquivo corrigido: erro-corrigido.js
Verificação: node --check aprovado; duas mensagens observadas
```

A extensão `.invalid` preserva a evidência sem fazer ferramentas futuras
interpretarem o erro proposital como JavaScript válido do projeto.

### Verificador

```text
Comando correto:
node MODULOS/00_PREPARACAO_E_DIAGNOSTICO/scripts/verificar-exemplos.mjs

Resultado observado:
Módulo 0: exemplos verificados com sucesso.
```

## Autocorreção observada

Após receber os resultados, Charlie Echo reconheceu:

- o comando `node verificar-exemplos.mjs` tinha caminho incompleto;
- `cd caminho\para` era apenas placeholder;
- exit code 1 confirmou falha real;
- ainda precisa praticar depuração e construção de caminhos.

## Rubrica

```text
Compreensão: 2
Execução: 1
Qualidade: 2
Responsabilidade: 2
Média: 1,75
Decisão: praticar mais
Estado: Praticou
Autorizada a ensinar: não
```

## Próximo passo

Repetir uma execução com menos condução, criar uma variação diferente, explicar
o erro antes da correção e registrar evidências no formato canônico.
