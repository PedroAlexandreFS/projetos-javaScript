let texto = document.querySelector('#texto');
let formatacao = document.querySelector('#formatacao');
let textoOriginal = "";
let = btncopia = document.querySelector("#btn-copia");
let resultadotexto = document.querySelector("#resultado-formatacao");

texto.addEventListener("input", function () {
    textoOriginal = texto.value;
})

formatacao.addEventListener("change", function () {
    let inputtexto = textoOriginal;
    let formatacaotexto = formatacao.value;

    let textoformatado = `${formatacaotexto}${inputtexto}${formatacaotexto}`;
    texto.value = textoformatado;

    //criando o objeto com as tags(valor do select)
    const Tags = {
        "*": "strong",
        "_": "em",
        "~": "del",
        "```": "code"
    };

    //variavel da tag escolhida
    const TagsEscolhidas = Tags[formatacaotexto];


    if (TagsEscolhidas) {

        const tag = document.createElement(TagsEscolhidas);

        tag.textContent = inputtexto;

        resultadotexto.replaceChildren(tag);


    }


    btncopia.addEventListener('click', function () {
        let textocopia = texto.value;
        navigator.clipboard.writeText(textocopia);
        alert("texto copiado");
    })
})