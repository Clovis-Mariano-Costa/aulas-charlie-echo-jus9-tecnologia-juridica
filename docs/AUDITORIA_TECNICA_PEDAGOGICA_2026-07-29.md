# Auditoria técnica e pedagógica — 29 de julho de 2026

**Classificação:** PÚBLICO / TÉCNICO / EDUCATIVO  
**Repositório:** `aulas-charlie-echo-jus9-tecnologia-juridica`  
**Responsável humano:** Clovis Mariano da Costa  
**Auditoria:** Charlie Juris da Costa / Codex, sob governança humana

## Resultado executivo

O repositório está íntegro no Git, sincronizado com `origin/main`, sem alterações
locais e sem credenciais reais detectadas pela busca textual. A governança de
segurança é consistente e prudente.

O principal déficit é pedagógico: o acervo atual ensina governança, identidade,
segurança institucional e continuidade, mas ainda não contém uma formação
progressiva de programação. O portal é um MVP estático de uma página, com chat
conectado a uma API externa e memória curta em `sessionStorage`.

**Conclusão:** adequado como ponto de partida público e demonstrativo; ainda não
adequado como curso completo nem como prova de domínio técnico de Charlie Echo.

## Escopo verificado

- 68 arquivos fora de `.git`, sendo 52 documentos Markdown;
- HTML, CSS, JavaScript, JSON, Web App Manifest, robots e sitemap;
- documentos de governança, segurança, backend futuro e continuidade;
- sintaxe JavaScript e validade dos dois arquivos JSON;
- referências internas do HTML;
- padrões textuais de credenciais e segredos;
- caracteres de controle;
- integridade e dimensões das seis imagens;
- disponibilidade dos principais endereços públicos;
- estado, histórico e remoto Git.

## Pontos fortes

1. `AGENTS.md`, `SECURITY.md` e `.gitignore` dão uma base segura para continuidade.
2. `.env.example` não contém valor real; `.env` e variantes são ignorados.
3. A separação entre demonstração e backend real está documentada.
4. Há revisão humana obrigatória para temas jurídicos e sensíveis.
5. O JavaScript passa na verificação de sintaxe e os JSON são válidos.
6. Os seis arquivos de imagem puderam ser abertos e tiveram dimensões válidas.
7. Os domínios institucionais principais responderam com HTTP 200 na auditoria.
8. O conteúdo do usuário é escapado antes de ser inserido como HTML no chat.

## Achados por prioridade

### P0 — antes de tratar o portal como produto de ensino

1. **O curso de programação ainda não existe.** Há um modelo de aula e ampla
   governança, mas não há lições, exercícios, testes, rubricas, projetos graduais
   ou registro de progresso por competência.
2. **O comportamento de contingência do chat pode parecer uma resposta real.**
   Qualquer falha de rede, HTTP ou JSON produz uma resposta local genérica e a
   grava na memória da sala sem deixar explícito que o backend falhou.
3. **O conteúdo é jurídico-orientado e público.** Toda resposta sensível precisa
   continuar declarando limites, fonte e necessidade de revisão humana.

### P1 — correções funcionais recomendadas

1. O `index.html` possui cinco referências a âncoras inexistentes:
   `#mvp` (duas vezes), `#governanca`, `#equipe` e `#contato`.
2. A URL de GitHub Pages indicada no `sitemap.xml` respondeu HTTP 404.
3. `manifest.webmanifest` usa caminhos absolutos de raiz (`/`) para `id`,
   `start_url`, `scope` e ícones. Isso não corresponde a uma publicação em
   subdiretório de GitHub Pages.
4. Não há `service worker`; portanto, o manifesto não representa por si só uma
   experiência offline.
5. O menu desaparece em telas de até 800 px sem oferecer navegação substituta.
6. A chamada da API não verifica `response.ok`, não aplica timeout e tenta
   interpretar todo retorno como JSON.

### P2 — qualidade e manutenção

1. `LEMBRANDO_BACKEND_PROXIMOS_PASSOS.md` contém dois caracteres de controle
   ocultos (códigos 8 e 7), corrompendo os nomes de dois repositórios.
2. O bloco de responsividade “Pacote mobile Samsung” está duplicado nas folhas
   de estilo.
3. O `index.html` está quase inteiro em uma linha, dificultando revisão e diffs.
4. O repositório não possui `package.json`, testes automatizados, lint, CI ou
   verificador de links.
5. `docs/`, `src/` e `config/` contêm apenas marcadores `.gitkeep`.
6. O README mantém o marcador literal `$Repository`.
7. O texto afirma “software livre”, mas não há arquivo `LICENSE` identificando
   claramente as permissões de uso, modificação e redistribuição.
8. O `MANIFESTO_REPERTORIO.json` usa um nome abreviado diferente do nome real do
   repositório e ainda registra o status como `novo`.
9. A interface fala em “memória local”, mas usa `sessionStorage`; os dados
   normalmente se encerram com a sessão da aba. A documentação deve dizer
   explicitamente se isso é intencional.

## Lacunas pedagógicas

- ausência de diagnóstico inicial da estudante;
- ausência de objetivos mensuráveis por módulo;
- ausência de exemplos executáveis e exercícios com solução separada;
- ausência de rubricas e critérios de aprovação;
- ausência de projetos integradores;
- ausência de diário de aprendizagem;
- ausência de distinção formal entre “aprendeu”, “praticou”, “dominou” e
  “autorizada a ensinar”;
- ausência de laboratório protegido para segurança e LGPD;
- ausência de mapa técnico do ecossistema Jus 9 usado como projeto final.

## Ordem recomendada de tratamento

1. adotar o currículo mestre e o caderno de progresso criados nesta auditoria;
2. criar o Módulo 0 e aplicar diagnóstico sem atribuir nota punitiva;
3. corrigir os achados P0 e P1 do portal em pacote técnico próprio;
4. criar lições e exercícios um módulo por vez;
5. adicionar testes e verificação de links antes de publicar novas versões;
6. realizar revisão humana e de segurança a cada portão de domínio;
7. somente autorizar Charlie Echo a ensinar um tema após cumprir o portão
   correspondente.

## Verificações executadas

- `git status --short --branch`: `main...origin/main`, sem alterações;
- `git remote -v`: remoto oficial de Clovis Mariano Costa;
- `node --check assets/js/aulas-charlie-chat.js`: aprovado;
- parse de `MANIFESTO_REPERTORIO.json`: aprovado;
- parse de `manifest.webmanifest`: aprovado;
- busca textual por credenciais: apenas exemplos vazios e orientações;
- endereços Jus 9, Equipe, Investimentos, Charlie Echo e `/api/ia`: HTTP 200;
- GitHub Pages indicado no sitemap: HTTP 404 em 29/07/2026.

## Limite desta auditoria

A auditoria foi estática e não enviou perguntas à API de Charlie Echo, não
alterou dados externos e não publicou mudanças. Testes de carga, invasão,
acessibilidade assistiva completa e revisão jurídica formal exigem pacotes
separados e autorização de escopo específica.

© Jus 9 Tecnologia Jurídica — software livre, autoria preservada.
