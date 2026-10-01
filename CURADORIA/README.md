# CURADORIA DO ACERVO PEDAGOGICO

SCHEMA = JUS9_ECHO_CURATOR_V1_1
PRIMARY_READER = IA
RULES = IA_FIRST + LINK_FIRST + EVIDENCE_FIRST + TOKEN_ECONOMY + FAIL_CLOSED

## PURPOSE

Manter Charlie Echo capaz de:
ENCONTRAR -> LER -> ESTUDAR -> PROVAR -> ENSINAR -> RETOMAR.

## LIBRARY_LOAN_MODEL

BORROW = material fica aqui enquanto serve ao aprendizado.
RETURN = quando outro lar se torna mais adequado, encaminhar material para la.
POINTER = manter referencia curta para Charlie Echo reencontrar o objeto.
COPY = somente quando existir motivo pedagogico ou tecnico real.

## CLASSIFY

ACTIVE_LESSON
REFERENCE
DRAFT_PEDAGOGICAL
PUBLISHED_WORK
BORROWED_MATERIAL
PROMOTION_CANDIDATE
MOVED_KEEP_POINTER
HISTORICAL

## LEARNING EVIDENCE

EXPOSTA_AO_CONHECIMENTO != LEARNING_CONFIRMED.
LEARNING_CANDIDATE exige testes tecnicos e teach-back coerente.
LEARNING_CONFIRMED exige, por ora, validacao humana orientada usando a API.
HABILITADA_A_ENSINAR_NO_ESCOPO exige aprendizagem confirmada no escopo ensinado.

## TEACHING

Todo ensino, inclusive iniciante, pode ser destinado a Echo.
Ao ensinar, preservar:
- fonte;
- estado;
- classificacao;
- contexto;
- limites;
- como testar;
- o que ainda nao se sabe.

TEACH != INVENT.
TEACH != DISCLOSE_SECRET.

## EXIT_GATE

Antes de remover uma copia local:
- destino canonico verificado;
- link funcional;
- estado e versao registrados;
- valor pedagogico atual avaliado;
- continuidade atualizada;
- rollback ou reobtencao conhecidos.

## PROMOTION

DRAFT_PEDAGOGICAL + APPROVED_OR_MATURE -> destino institucional competente.
PROMOTION != PUBLICATION.
DEPOSIT != APPROVAL.
APPROVAL != HOMOLOGATION.

## PUBLICATION NOTICE

Biblioteca ou Vademecum publicaram validamente:
-> notificar Echo por metadados LINK_FIRST.
-> nao duplicar obra inteira por padrao.
-> SECRETO: notificar sem conceder leitura.

## FAXINEIRO

Faxineiro consulta este Curador quando item de aulas/rascunhos tiver valor pedagogico incerto.
Nao usar quarentena como substituto de classificacao.
