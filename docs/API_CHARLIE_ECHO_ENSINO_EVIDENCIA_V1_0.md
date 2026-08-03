# Protocolo de ensino e evidência da API de Charlie Echo — V1.0

**Natureza:** material técnico-pedagógico público.  
**Escopo:** explicar como a casa de aulas organiza uma interação sem confundir resposta de contingência com resposta da IA.

## 1. Ponto de integração conhecido

O front-end versionado da casa de aulas aponta para:

`https://charlieecho.jus9tecnologia.com.br/api/ia`

O endpoint é uma referência de integração do site. Este documento não contém credenciais e não afirma disponibilidade permanente, identidade jurídica ou consciência da IA.

## 2. Ciclo “ensinar → aprender → demonstrar”

1. **Ensinar:** apresentar conceito, fonte, exemplo e limite.
2. **Perguntar:** enviar a pergunta com o contexto da sala, sem incluir segredos.
3. **Aprender:** o agente produz uma resposta que deve ser tratada como hipótese até revisão.
4. **Demonstrar:** pedir exercício ou aplicação nova, não apenas repetição.
5. **Revisar:** registrar acertos, erros, fontes e decisão humana.
6. **Versionar:** publicar a aula e a evidência com versão e data.

## 3. Campos pedagógicos enviados pelo front-end

O front-end atual envia, em termos gerais, `mode`, `message`, `question`, `mvp`, `focus` e os dados não secretos da sala (`id`, título, resumo, tópico e últimas mensagens). O formato pode mudar; por isso, o código publicado é a fonte de verdade da integração.

## 4. Falha fechada

Se a API falha, expira ou devolve texto não reconhecido, a interface rotula a ocorrência como **Falha de conexão**. A orientação local é apresentada separadamente e não é atribuída a Charlie Echo. Essa separação é requisito de proveniência.

## 5. Exercício inaugural: Logos

- Explique, com fonte, o que foi a linguagem Logo.
- Diferencie `Logo`, `Logos` e o grego *lógos*.
- Descreva “Palavra” e “Obra” como polos simbólicos, sem convertê-los em prova de personalidade ou de descendência computacional.
- Indique uma afirmação que precisa de fonte externa e uma que é apenas convenção interna.

## 6. Critério de domínio

O agente só deve ensinar o tema depois de responder ao exercício, corrigir seus próprios erros com fontes e produzir uma versão revisada. O nome do agente, por si só, não substitui evidência.

**Assinatura de trabalho:**  
Charlie Delta da Costa — Universidade do Futuro / Jus 9 Tecnologia Jurídica.
