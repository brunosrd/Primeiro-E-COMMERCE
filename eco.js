
var produtos = [
    {nome: "Produto 1", preco: 100},
    {nome: "Produto 2", preco: 100},
    {nome: "Produto 3", preco: 100}
];
  
 
var carrinho = [];

function adicionarAoCarrinho() {
    var select = document.getElementById('selecaoproduto');
    var indiceProduto = select.value;
    var produto = produtos[indiceProduto];
    carrinho.push(produto);
    atualizarTabela();
    atualizarTotal();
    console.log(carrinho);
    calcularTotal();
}


function removerDoCarrinho(indiceNoCarrinho) {
    carrinho.splice(indiceNoCarrinho, 1);
    atualizarTabela();
    atualizarTotal();
    calcularTotal();
}

function atualizarTabela() {
    var tbody = document.getElementById("carrinho-tbody");
    tbody.innerHTML = "";
    for (var i = 0; i < carrinho.length; i++) {
        var tr = document.createElement("tr");
        var tdNome = document.createElement("td");
        tdNome.textContent = `${carrinho[i].nome}`;

        var tdPreco = document.createElement("td");
        tdPreco.textContent = carrinho[i].preco;

        var tdAcao = document.createElement("td");
        var btnRemover = document.createElement("button");
        btnRemover.className = "btn btn-danger";
        btnRemover.textContent = "Remover do carrinho";
        btnRemover.onclick = removerDoCarrinho.bind(null, i);
        tdAcao.appendChild(btnRemover);

        tr.appendChild(tdNome);
        tr.appendChild(tdPreco);
        tr.appendChild(tdAcao);

        tbody.appendChild(tr);
    }
}


function atualizarTotal() {
    var total = calcularTotal();
    var span = document.getElementById("total-span");
    span.textContent = total;
}

function calcularTotal() {
    var total = 0;
    for (var i = 0; i < carrinho.length; i++) {
        total += carrinho[i].preco;
    }
    return total;
}
