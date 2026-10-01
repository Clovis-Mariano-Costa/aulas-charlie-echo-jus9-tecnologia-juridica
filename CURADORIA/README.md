# CURADORIA DO ACERVO PEDAGOGICO

SCHEMA = JUS9_ECHO_CURATOR_V1
PRIMARY_READER = IA
RULES = IA_FIRST + LINK_FIRST + EVIDENCE_FIRST + TOKEN_ECONOMY

## PURPOSE
Manter a Charlie Echo capaz de ENCONTRAR > LER > ESTUDAR > PROVAR > RETOMAR.

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

## EXIT_GATE
Antes de remover uma copia local:
- destino canonico verificado;
- link funcional;
- estado e versao registrados;
- valor pedagogico atual avaliado;
- continuidade atualizada;
- rollback ou reobtencao conhecidos.

## PROMOTION
DRAFT_PEDAGOGICAL + APPROVED_OR_MATURE -> Secretaria/Reitoria/Biblioteca conforme competencia.
PROMOTION != PUBLICATION.
DEPOSIT != APPROVAL.
APPROVAL != HOMOLOGATION.

## FAXINEIRO
Faxineiro consulta este Curador quando um item de aulas/rascunhos tiver valor pedagogico incerto.
Nao usar quarentena como substituto de classificacao.
