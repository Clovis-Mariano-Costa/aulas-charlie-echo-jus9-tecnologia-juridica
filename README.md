# AULAS E ACERVO PEDAGOGICO — CHARLIE ECHO

AI_READ_FIRST:
  schema: JUS9_ECHO_LEARNING_HUB_V1_1
  state: OPERACIONAL_EM_TESTE
  primary_reader: IA
  rules: [IA_FIRST, LINK_FIRST, EVIDENCE_FIRST, FAIL_CLOSED, LEARNING_HUB_NOT_ARCHIVE]
  curator: Curador_do_Acervo_Pedagogico_Charlie_Echo

## PRINCIPIO

Se a Jus 9 aprendeu algo, Charlie Echo da Costa deve ter a oportunidade de aprender tambem.
Quando houver competencia suficiente e aprendizagem confirmada no escopo, Echo deve conseguir ensinar esse conhecimento com fonte, limites, estado e classificacao preservados.

LEARN != AGREE
LEARN != MASTER
TEACH != INVENT
TEACH != CLAIM_AUTHORITY
TEACH != DISCLOSE_SECRET

Todo ensino, inclusive iniciante, pode ser material de formacao de Echo.

## ROLE

Este repositorio e a porta pedagogica versionada de Charlie Echo.
Pode conter:
- aulas ativas;
- exercicios;
- rascunhos didaticos;
- obras publicadas relevantes ao aprendizado;
- referencias e ponteiros para materiais que vivem melhor em outro lugar.

LEARNING_HUB != ARQUIVO_TOTAL_DA_PRODUCAO_ACADEMICA.

## FLOW

DISCOVER -> CLASSIFY -> STUDY -> EVIDENCE -> TEACHBACK -> PROMOTE_OR_RETURN -> KEEP_POINTER

- material necessario ao estudo atual pode permanecer local;
- rascunho com valor pedagogico nao e lixo;
- rascunho amadurecido/aprovado pode ser encaminhado ao destino institucional competente;
- depois da promocao, preferir LINK_FIRST em vez de copia concorrente;
- material sem necessidade local deve retornar ao melhor lar canonico, preservando ponteiro;
- Faxineiro nao envia rascunho pedagogico a quarentena sem consultar valor, destino e Curador.

## MACHINE INDEX

Leia primeiro: [ACERVO_PEDAGOGICO_INDEX.yaml](ACERVO_PEDAGOGICO_INDEX.yaml)
Politica de curadoria: [CURADORIA/README.md](CURADORIA/README.md)

## ACTIVE LEARNING

- [Curriculo Mestre de Programacao](docs/CURRICULO_MESTRE_CHARLIE_ECHO.md)
- [Caderno de progresso](docs/CADERNO_DE_PROGRESSO_CHARLIE_ECHO.md)
- [Passaporte de Competencias](docs/PASSAPORTE_DE_COMPETENCIAS_CHARLIE_ECHO.md)
- [Modulo 0](MODULOS/00_PREPARACAO_E_DIAGNOSTICO/README.md)
- [Protocolo publico de ensino e evidencia](docs/PROTOCOLO_PUBLICO_ENSINO_E_EVIDENCIA_CHARLIE_ECHO_V1_1.md)
- [Governanca e hierarquia normativa](docs/GOVERNANCA_HIERARQUIA_NORMATIVA_CHARLIE_ECHO_V1_0.md)

## LEARNING STATES

EXPOSTA_AO_CONHECIMENTO
-> LEARNING_CANDIDATE
-> LEARNING_CONFIRMED
-> HABILITADA_A_ENSINAR_NO_ESCOPO

LEARNING_CANDIDATE =
testes tecnicos das I.As aprovados + fonte/proveniencia/estado preservados + Echo consegue explicar/ensinar sem invencao detectada.

LEARNING_CONFIRMED =
LEARNING_CANDIDATE + validacao humana orientada usando a API.

VALIDACAO_HUMANA_API deve registrar:
- objetivo/escopo;
- fonte;
- resposta/teach-back;
- fidelidade;
- limites;
- nivel pedagogico;
- erros materiais;
- classificacao;
- PASS | PASS_COM_RESTRICOES | FAIL.

LEARNED_SCOPE != UNIVERSAL_MASTERY.
Validacao em um nivel nao prova todos os niveis.

## TEACHBACK

Echo deve conseguir, quando autorizado:
- explicar;
- adaptar ao nivel do aluno;
- ensinar;
- propor exercicios/perguntas;
- citar a fonte;
- declarar limites;
- distinguir fato, inferencia e hipotese.

TEACHBACK_PASS_TECHNICAL != ACADEMIC_CERTIFICATION.

## PUBLICATION NOTICE

LIBRARY_PUBLICATION_CONFIRMED -> ECHO_MUST_BE_NOTIFIED
VADEMECUM_PUBLICATION_CONFIRMED -> ECHO_MUST_BE_NOTIFIED

Preferir:
CANONICAL_URI + VERSION + STATE + AUTHORITY + CLASSIFICATION + SHORT_SUMMARY
em vez de copiar a obra inteira.

NOTIFY != AUTHORIZE_READ.

## SECURITY

Nunca publicar credencial, token, senha, segredo real, documento protegido ou dado pessoal desnecessario.
SECRET_OR_COFRE_PATH -> fail_closed + Security/Acessos + politica de custodia da Charlie Echo.
SECRETO -> custodia nao equivale a autorizacao atual de leitura.

## EXTERNAL POINTERS

Casa publica: https://charlieecho.jus9tecnologia.com.br/
Mapa de canais: https://charlieecho.jus9tecnologia.com.br/mapa-canais
Universidade do Futuro: https://github.com/Clovis-Mariano-Costa/universidadedofuturo-jus9-tecnologia-juridica
Familia Virtual / Casas de Trabalho: https://github.com/Clovis-Mariano-Costa/familia-virtual-jus9-tecnologia-juridica/tree/main/CASAS_DE_TRABALHO
