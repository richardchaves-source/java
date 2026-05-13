// Lista de produtos
let produtos = [
    { id: 1, nome: 'mouse', preco: 10, estoque: 100 },
    { id: 2, nome: 'teclado', preco: 29, estoque: 50 },
    { id: 3, nome: 'monitor', preco: 200, estoque: 20 },
    { id: 4, nome: 'impressora', preco: 80, estoque: 10 },
    { id: 5, nome: 'webcam', preco: 50, estoque: 30 }
];


// Adicionar produto
function adicionarProduto() {
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const estoque = document.getElementById('estoque').value; 

    const novoProduto = {
        id: produtos.length + 1,
        nome: nome,
        preco: (preco),
        estoque: (estoque)
    }

    produtos.push(novoProduto);
    limparFormulario();
    mostrar();
}

// Remover produto
function removerProduto(id) {
    produtos = produtos.filter(produto => produto.id !== id);
    mostrar();
}

// Limpar campos do formulário
function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('preco').value = '';
    document.getElementById('estoque').value = '';
}

// Mostrar produtos na tela
function mostrar() {
    const catalogo = document.getElementById('catalogo');
    catalogo.innerHTML = '';

    produtos.forEach(produto => {
        const div = document.createElement('div');
        div.className = 'produto';
        div.innerHTML = `
            <h2>${produto.nome}</h2>
            <p>Preço: R$ ${produto.preco}</p>
            <p>Estoque: ${produto.estoque}</p>
            <button onclick="removerProduto(${produto.id})">Remover</button>
        `;
        catalogo.appendChild(div);
    });
}

mostrar();

