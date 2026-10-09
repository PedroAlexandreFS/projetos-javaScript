const botao = document.getElementById("btn-resultado");
botao.addEventListener("click", function () {

    //Pegando o valor do produto
    let valorProduto = document.getElementById("valorProduto").value;

    //convetendo o texto em número real
    valorProduto = parseFloat(valorProduto);

    //pegando a quantidade de parcelas
    const qtdParcelas = parseInt(document.getElementById("QuantidadeParcelas").value);
    //fazendo a formula para calcular juros compostos

    let parcelaIndice = 0;
    if (qtdParcelas <= 3) {
        parcelaIndice = 0
    } else if (qtdParcelas <= 6) {
        parcelaIndice = 1.5
    } else {
        parcelaIndice = 2.5
    };

    let valorParcela = 0;
    if (parcelaIndice === 0) {
        valorParcela = valorProduto / qtdParcelas;
    } else {
        const i = parcelaIndice / 100
        const formulaCima = i * Math.pow((1 + i), qtdParcelas);
        const formulabaixo = Math.pow((1 + i), qtdParcelas) - 1;
        valorParcela = valorProduto * (formulaCima / formulabaixo);

    }

    const parcelaFormatada = valorParcela.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("resultado").innerHTML = "O valor  da parcela é: " + parcelaFormatada;






});






