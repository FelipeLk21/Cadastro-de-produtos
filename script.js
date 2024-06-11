const formProjeto = document.getElementById('formProjeto');
const listaProjetos = document.getElementById('listaProjetos');

formProjeto.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;

    if (nome.trim() === '' || descricao.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    adicionarProjeto(nome, descricao);
    limparFormulario();
});

function adicionarProjeto(nome, descricao) {
    const li = document.createElement('li');
    li.innerHTML = `
        <strong>${nome}</strong>
        <p>${descricao}</p>
        <button onclick="marcarConcluido(this)">Concluído</button>
    `;
    listaProjetos.appendChild(li);
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('descricao').value = '';
}

function marcarConcluido(botao) {
    botao.parentNode.classList.toggle('completed');
}
