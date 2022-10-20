const Produto = {
    nome: String,
    quantidade: Number,
    tipo: String,
 }

function salvar() {
    // Cria o seu novo objeto Produto.
  var meuProduto = Object.create(Produto);

    meuProduto.nome = nomeProduto.value;
    meuProduto.quantidade = quantProduto.value;
    meuProduto.tipo = produtos.value;

  
    let tr = document.createElement("tr");
    
    tr.insertCell(0).innerHTML = nomeProduto.value;
    tr.insertCell(1).innerHTML = produtos.value;
    tr.insertCell(2).innerHTML = nomeProduto.value;
    tr.insertCell(3).innerHTML = quantProduto.value;
    document.getElementById("bodyTable").appendChild(tr);
}
  
    //Salva o produto na lista de estoque