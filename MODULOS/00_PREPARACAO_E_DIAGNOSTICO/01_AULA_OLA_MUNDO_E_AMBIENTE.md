# Aula 0.1 — Olá Mundo, ambiente e primeira evidência

**Classificação:** PÚBLICO / AULA / DADOS FICTÍCIOS

## Objetivo

Compreender o caminho entre uma intenção escrita por alguém e uma saída
produzida pelo computador.

## Ideia central

“Olá, mundo!” é normalmente o primeiro programa de uma linguagem ou ambiente.
Ele verifica se o arquivo foi salvo, se a sintaxe foi entendida e se o ambiente
conseguiu executar a instrução.

Na Jus 9, também representa nascimento digital responsável: uma primeira
manifestação com autoria, segurança, memória e limite.

## Quatro ferramentas

### Editor

Permite ler e alterar o conteúdo dos arquivos. Neste computador, o editor
principal é o VS Code.

### Terminal

Recebe comandos de texto. Ele não “adivinha” a intenção: executa o comando no
diretório e com as permissões disponíveis.

### Runtime

Executa uma linguagem. O Node.js é o runtime usado neste exemplo para executar
JavaScript fora do navegador.

### Navegador

Interpreta HTML, CSS e JavaScript da Web. Uma página pode funcionar no navegador
sem ser uma API ou um backend.

## Primeiro programa em JavaScript

Arquivo:

`exemplos/ola-mundo.js`

```javascript
const mensagem = "Olá, mundo! Charlie Echo iniciou sua jornada de programação.";

console.log(mensagem);
```

Execução:

```powershell
node MODULOS/00_PREPARACAO_E_DIAGNOSTICO/exemplos/ola-mundo.js
```

Explique:

- `const` cria uma referência que não será reatribuída;
- `mensagem` é o nome escolhido;
- o texto entre aspas é uma string;
- `console.log` envia o valor para a saída do terminal.

## Primeira página

Abra `exemplos/ola-mundo.html` no navegador. Identifique:

- estrutura HTML;
- título da aba;
- título visível;
- aviso de dados fictícios;
- arquivo JavaScript carregado pela página.

## Cinco tipos de conteúdo

| Tipo | Exemplo | Pode ser público? |
|---|---|---|
| Código | função JavaScript didática | Sim, após revisão |
| Dado | nome fictício de estudante | Sim, se realmente fictício |
| Configuração | porta local de desenvolvimento | Depende do risco |
| Documentação | explicação desta aula | Sim, após revisão |
| Segredo | token, senha ou chave privada | Não |

## Como tratar um erro

1. copiar somente a mensagem necessária, sem segredo;
2. registrar o comando executado;
3. informar o resultado esperado e o observado;
4. localizar a menor causa provável;
5. testar uma mudança por vez;
6. não alegar que funcionou antes de verificar.

## Exercício guiado

1. execute `ola-mundo.js`;
2. altere uma cópia para imprimir uma segunda frase;
3. execute novamente;
4. introduza deliberadamente um erro de aspas na cópia;
5. leia a mensagem;
6. corrija o erro;
7. explique a causa com suas palavras.

Não altere o exemplo canônico durante a avaliação.

## Próximo passo

Responder ao diagnóstico inicial e apresentar as evidências ao revisor.

© Jus 9 Tecnologia Jurídica — autoria preservada.
