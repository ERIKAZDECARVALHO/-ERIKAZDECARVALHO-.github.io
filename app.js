// Inicializando uma lista para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo'); // Obtém o campo de entrada
    const nome = inputAmigo.value.trim(); // Obtém o valor do campo e remove espaços extras

    if (nome === "") {
        alert("Por favor, insira um nome válido!"); // Verifica se o campo está vazio
        return;
    }

    // Adiciona o nome à lista e atualiza a interface
    amigos.push(nome);
    atualizarLista();
    inputAmigo.value = ""; // Limpa o campo de entrada após adicionar o nome
}

// Função para atualizar a lista exibida na interface
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpa a lista atual para evitar duplicatas

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li'); // Cria um item de lista para cada amigo
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li); // Adiciona o item à lista na página
    });
}

// Função para sortear um amigo da lista
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione pelo menos um nome antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length); // Escolhe um índice aleatório
    const amigoSorteado = amigos[indiceSorteado]; // Obtém o nome correspondente

    resultado.innerHTML = `<li>🎉 O amigo sorteado é: <strong>${amigoSorteado}</strong> 🎉</li>`; // Exibe o resultado na tela
}


