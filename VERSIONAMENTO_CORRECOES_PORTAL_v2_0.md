# Versionamento — Correções do portal v2.0

**Data:** 29 de julho de 2026  
**Classificação:** PÚBLICO / TÉCNICO / EDUCATIVO

## Correções

- a falha da API agora aparece de forma explícita;
- orientação local recebe rótulo próprio e não entra na memória como resposta da IA;
- chamadas possuem limite de 20 segundos, verificação HTTP e validação do JSON;
- âncoras quebradas foram substituídas por destinos reais;
- navegação móvel recebeu botão acessível;
- a memória foi descrita corretamente como temporária e restrita à aba;
- manifesto PWA passou a usar caminhos relativos compatíveis com subdiretório;
- referência a sitemap indisponível foi retirada do `robots.txt`;
- manifesto do repositório foi atualizado;
- caracteres de controle do documento de próximos passos foram removidos;
- HTML foi formatado para manutenção e revisão.

## Limite

GitHub Pages ainda precisa estar habilitado e validado antes de anunciar
publicamente um sitemap desse domínio. Esta versão não presume que a publicação
esteja ativa.

## Verificação

```powershell
node --check assets/js/aulas-charlie-chat.js
node MODULOS/00_PREPARACAO_E_DIAGNOSTICO/scripts/verificar-exemplos.mjs
```

© Jus 9 Tecnologia Jurídica — autoria preservada.
