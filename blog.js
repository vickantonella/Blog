function gerenciarUsuario() {
  const nome = document.getElementById("nome-usuario").value;
  const email = document.getElementById("email-usuario").value;
  
  if (nome !== "" && email !== "") {
    alert("Olá, " + nome + ". Seja bem-vindo(a)!");
    document.getElementById("resultado").textContent = "Mensagem exibida no alert";
    
    // Limpar os campos
    document.getElementById("nome-usuario").value = "";
    document.getElementById("email-usuario").value = "";
  }
}

  //---------------------
function criarPostagem() {
    // Obter os valores dos campos do formulário
  var titulo = document.getElementById("titulo").value;
  var conteudo = document.getElementById("conteudo").value;
  
    // Criar um novo elemento de postagem
  var postagem = document.createElement("div");
  
    // Adicionar o título e o conteúdo da postagem como filhos do elemento de postagem
  var tituloElemento = document.createElement("h2");
    tituloElemento.textContent = titulo;
  var conteudoElemento = document.createElement("p");
    conteudoElemento.textContent = conteudo;
    postagem.appendChild(tituloElemento);
    postagem.appendChild(conteudoElemento);
  
   // Obter a referência para o container de postagens
  var container = document.getElementById("postagens-container");

  // Verifica se o título e o conteúdo foram preenchidos
  if (!titulo || !conteudo) {
    alert('Por favor, preencha o Título e o Conteúdo da postagem.');
    return false;
  }

  // Verificar se existem postagens existentes no container
  if (container.firstChild) {
    // Inserir a nova postagem antes da primeira postagem existente
    container.insertBefore(postagem, container.firstChild);
  } else {
    // Caso não existam postagens, simplesmente adicionar a nova postagem ao container
    container.appendChild(postagem);
  }
  // Se tudo estiver OK, envia o formulário
  alert('A postagem foi realizada com sucesso!');
  return true;
}

//------------------//
function validarComentario() {
  const nome = document.getElementById('nome').value;
  const comentario = document.getElementById('comentario').value;

  // Verifica se o nome e o comentário foram preenchidos
  if (!nome || !comentario) {
    alert('Por favor, preencha o nome e o comentário.');
    return false;
  }

  // Verifica se o comentário tem pelo menos 10 caracteres
  if (comentario.length < 10) {
    alert('O comentário deve ter pelo menos 10 caracteres.');
    return false;
  }

  // Se tudo estiver OK, envia o formulário
  alert('Comentário enviado com sucesso!');
  adicionarComentario(nome, comentario); // Chamada para adicionar o comentário à lista
  return true;
}

document.querySelector('form').addEventListener('submit', (event) => {
  if (!validarComentario()) {
    event.preventDefault();
  }
});

function adicionarComentario(nome, comentario) {
  var comentarioHTML = '<p><strong>' + nome + '</strong>: ' + comentario + '</p>';

  document.getElementById('comentarios').innerHTML += comentarioHTML;

  // Limpar os campos do formulário
  document.getElementById('nome').value = '';
  document.getElementById('comentario').value = '';
}

//--------------//

function compartilharFacebook() {
  // Obtém o título e a URL do post
  var tituloPost = document.getElementById("teste").textContent;
  var urlPost = window.location.href;

  // Constrói a URL de compartilhamento do Facebook
  var urlCompartilhamento = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(urlPost) + "&quote=" + encodeURIComponent(tituloPost);

  // Abre uma nova janela ou guia com a página de compartilhamento do Facebook
  window.open(urlCompartilhamento, "_blank");
}

function compartilharTwitter() {
  // Obtém o título e a URL do post
  var tituloPost = document.getElementById("teste").textContent;
  var urlPost = window.location.href;

  // Constrói a URL de compartilhamento do Twitter
  var urlCompartilhamento = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(tituloPost) + "&url=" + encodeURIComponent(urlPost);

  // Abre uma nova janela ou guia com a página de compartilhamento do Twitter
  window.open(urlCompartilhamento, "_blank");
}

function compartilharWhatsApp() {
  // Obtém o título e a URL do post
  var tituloPost = document.getElementById("teste").textContent;
  var urlPost = window.location.href;

  // Constrói a mensagem de compartilhamento para o WhatsApp
  var mensagemCompartilhamento = encodeURIComponent(tituloPost + "\n\n" + urlPost);

  // Constrói o link de compartilhamento do WhatsApp
  var linkCompartilhamento = "https://api.whatsapp.com/send?text=" + mensagemCompartilhamento;

  // Abre uma nova janela ou guia com o link de compartilhamento do WhatsApp
  window.open(linkCompartilhamento, "_blank");
}

