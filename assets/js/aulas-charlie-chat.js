(function(){
  'use strict';

  const scope = 'aulas';
  const input = document.getElementById('aulas-question');
  const send = document.getElementById('aulas-send');
  const out = document.getElementById('aulas-response');
  const status = document.getElementById('aulas-status');
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu-principal');
  const API_URL = 'https://charlieecho.jus9tecnologia.com.br/api/ia';
  const REQUEST_TIMEOUT_MS = 20000;

  if (!input || !send || !out) return;

  function escapeHtml(text){
    return String(text || '').replace(/[&<>"]/g, function(ch){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch];
    });
  }

  function linkify(text){
    return escapeHtml(text)
      .replace(/https:\/\/[^\s<>"']+/g, function(raw){
        let url = raw;
        let suffix = '';
        while (/[),.;:!?]$/.test(url)) {
          suffix = url.slice(-1) + suffix;
          url = url.slice(0, -1);
        }
        return '<a href="' + url + '" target="_blank" rel="noopener noreferrer">' + url + '</a>' + suffix;
      })
      .replace(/\n/g, '<br>');
  }

  function setStatus(text){ if (status) status.textContent = text; }

  function answer(text, source){
    out.dataset.source = source || 'local';
    const label = source === 'api'
      ? 'Resposta da Charlie Echo'
      : source === 'error'
        ? 'Falha de conexão'
        : source === 'local'
          ? 'Orientação local — não é resposta da IA'
          : '';
    out.innerHTML = (label ? '<strong class="response-label">' + label + '</strong>' : '') + linkify(text);
  }

  function key(){ return 'jus9CharlieEchoRooms_' + scope + '_v2'; }

  function createRoom(title){
    const now = new Date().toISOString();
    return {
      id: scope + '-' + Date.now(),
      title: title || 'Sala de aula',
      status: 'active',
      createdAt: now,
      updatedAt: now,
      summary: '',
      currentTopic: '',
      lastUserIntent: '',
      messages: []
    };
  }

  function load(){
    try {
      const data = JSON.parse(sessionStorage.getItem(key()) || 'null');
      if (data && Array.isArray(data.rooms) && data.rooms.length) {
        data.rooms.forEach(function(room){
          if (!room.status) room.status = 'active';
          if (!Array.isArray(room.messages)) room.messages = [];
        });
        return data;
      }
    } catch (error) {}
    const first = createRoom('Sala de aula 1');
    return {activeId:first.id, rooms:[first]};
  }

  function save(data){
    try { sessionStorage.setItem(key(), JSON.stringify(data)); } catch (error) {}
  }

  function active(){
    const data = load();
    let room = data.rooms.find(function(item){ return item.id === data.activeId && item.status !== 'deleted'; })
      || data.rooms.find(function(item){ return item.status === 'active'; })
      || data.rooms.find(function(item){ return item.status !== 'deleted'; });
    if (!room) {
      room = createRoom('Sala de aula 1');
      data.rooms.unshift(room);
    }
    data.activeId = room.id;
    save(data);
    return room;
  }

  function summarize(room){
    const messages = (room.messages || []).slice(-8).map(function(message){
      return message.role + ': ' + message.content;
    }).join(' | ');
    room.summary = messages.slice(0, 1000);
    const lastUserMessage = (room.messages || []).filter(function(message){ return message.role === 'user'; }).slice(-1)[0];
    room.currentTopic = lastUserMessage && lastUserMessage.content
      ? lastUserMessage.content.slice(0, 160)
      : room.currentTopic || '';
    return room;
  }

  function remember(user, assistant){
    const data = load();
    let room = data.rooms.find(function(item){ return item.id === data.activeId; });
    if (!room) room = active();
    room.messages = room.messages || [];
    room.messages.push({role:'user', content:user, at:new Date().toISOString()});
    room.messages.push({role:'assistant', content:assistant, at:new Date().toISOString()});
    room.messages = room.messages.slice(-24);
    room.updatedAt = new Date().toISOString();
    summarize(room);
    save(data);
    render();
  }

  function render(){
    const data = load();
    const list = document.querySelector('[data-room-list="' + scope + '"]');
    if (!list) return;
    list.innerHTML = '';
    data.rooms.filter(function(room){ return room.status !== 'deleted'; }).forEach(function(room){
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'chat-room-pill'
        + (room.id === data.activeId ? ' active' : '')
        + (room.status === 'archived' ? ' archived' : '');
      button.textContent = (room.status === 'archived' ? '[arquivada] ' : '') + room.title;
      button.addEventListener('click', function(){
        data.activeId = room.id;
        save(data);
        render();
        answer('Sala aberta: ' + room.title + '. Posso continuar por esta memória temporária.', 'local');
      });
      list.appendChild(button);
    });
  }

  function wireRooms(){
    render();
    const newButton = document.querySelector('[data-room-new="' + scope + '"]');
    const renameButton = document.querySelector('[data-room-rename="' + scope + '"]');
    const archiveButton = document.querySelector('[data-room-archive="' + scope + '"]');
    const deleteButton = document.querySelector('[data-room-delete="' + scope + '"]');

    if (newButton) newButton.addEventListener('click', function(){
      const data = load();
      const room = createRoom('Sala de aula ' + (data.rooms.filter(function(item){ return item.status !== 'deleted'; }).length + 1));
      data.rooms.unshift(room);
      data.activeId = room.id;
      save(data);
      render();
      answer('Nova sala temporária criada.', 'local');
    });

    if (renameButton) renameButton.addEventListener('click', function(){
      const data = load();
      const room = data.rooms.find(function(item){ return item.id === data.activeId; });
      if (!room) return;
      const title = prompt('Novo nome da sala:', room.title || 'Sala de aula');
      if (!title) return;
      room.title = title.trim().slice(0, 80) || room.title;
      room.updatedAt = new Date().toISOString();
      save(data);
      render();
      answer('Sala renomeada para: ' + room.title, 'local');
    });

    if (archiveButton) archiveButton.addEventListener('click', function(){
      const data = load();
      const room = data.rooms.find(function(item){ return item.id === data.activeId; });
      if (!room) return;
      room.status = room.status === 'archived' ? 'active' : 'archived';
      save(data);
      render();
      answer(room.status === 'archived' ? 'Sala arquivada.' : 'Sala reativada.', 'local');
    });

    if (deleteButton) deleteButton.addEventListener('click', function(){
      const data = load();
      const room = data.rooms.find(function(item){ return item.id === data.activeId; });
      if (!room || !confirm('Excluir esta sala e sua memória temporária?')) return;
      room.status = 'deleted';
      const next = data.rooms.find(function(item){ return item.status !== 'deleted'; });
      if (next) {
        data.activeId = next.id;
      } else {
        const fresh = createRoom('Sala de aula 1');
        data.rooms.unshift(fresh);
        data.activeId = fresh.id;
      }
      save(data);
      render();
      answer('Sala e memória temporária excluídas.', 'local');
    });
  }

  function contextual(question, room){
    const history = (room.messages || []).slice(-16).map(function(message){
      return (message.role === 'user' ? 'Usuário' : 'Charlie Echo') + ': ' + message.content;
    }).join('\n');
    return [
      'Contexto da sala ' + room.title + ':',
      room.summary || 'Sem resumo anterior.',
      history ? 'Histórico recente:\n' + history : '',
      'Pergunta atual: ' + question
    ].filter(Boolean).join('\n\n');
  }

  function localGuidance(question){
    const normalized = String(question || '').toLowerCase();
    if (normalized.indexOf('responsabilidade social') >= 0 && normalized.indexOf('empresa') >= 0) {
      return 'Para estudar enquanto a conexão não volta: organize o tema em conceito, exemplo prático, risco de propaganda vazia, indicador verificável e revisão humana.';
    }
    if (/\b(resuma|resumo|sintetize)\b/.test(normalized)) {
      return 'Para preparar o resumo localmente: separe tese central, conceitos, exemplo, risco e exercício guiado.';
    }
    if (/\b(minuta|modelo|plano|roteiro)\b/.test(normalized)) {
      return 'Estrutura local sugerida: título, objetivo, público-alvo, limite, conceitos, exemplo, risco, exercício e revisão humana.';
    }
    return 'Sua pergunta foi preservada na caixa de texto. Aguarde a conexão voltar e tente novamente; nenhuma resposta foi atribuída à Charlie Echo.';
  }

  async function ask(){
    const question = input.value.trim();
    if (!question) {
      answer('Escreva a pergunta da aula para continuar.', 'local');
      return;
    }

    const room = active();
    const controller = new AbortController();
    const timeout = setTimeout(function(){ controller.abort(); }, REQUEST_TIMEOUT_MS);
    send.disabled = true;
    setStatus('Conectando à casa da Charlie Echo...');
    answer('Aguardando resposta confirmada da API.', 'local');

    try {
      const message = contextual(question, room);
      const response = await fetch(API_URL, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        signal: controller.signal,
        body:JSON.stringify({
          mode:'estudantes',
          message:message,
          question:message,
          mvp:'aulas-charlie-echo',
          focus:'aula, exercício guiado, revisão humana e governança',
          room:{
            id:room.id,
            title:room.title,
            summary:room.summary,
            currentTopic:room.currentTopic,
            messages:(room.messages || []).slice(-16)
          }
        })
      });

      const raw = await response.text();
      let data = null;
      try { data = raw ? JSON.parse(raw) : null; } catch (error) {}
      if (!response.ok) {
        const detail = data && (data.error || data.message || data.detail);
        throw new Error(detail || 'HTTP ' + response.status);
      }

      const reply = data && (data.reply || data.answer || data.text);
      if (!reply || typeof reply !== 'string') {
        throw new Error('Resposta sem texto reconhecido');
      }

      answer(reply, 'api');
      remember(question, reply);
      setStatus('Resposta confirmada recebida e registrada na memória temporária da sala.');
    } catch (error) {
      const reason = error && error.name === 'AbortError'
        ? 'tempo limite de 20 segundos excedido'
        : (error && error.message ? error.message : 'falha de conexão');
      answer('A API não respondeu: ' + reason + '.\n\n' + localGuidance(question), 'error');
      setStatus('Falha explícita: a orientação local não foi gravada como resposta da Charlie Echo.');
    } finally {
      clearTimeout(timeout);
      send.disabled = false;
    }
  }

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', function(){
      const open = menu.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
  }

  wireRooms();
  send.addEventListener('click', ask);
  input.addEventListener('keydown', function(event){
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) ask();
  });
})();
