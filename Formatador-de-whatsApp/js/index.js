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

    if (formatacaotexto === "*") {
        let negrito = `<strong>${inputtexto}</strong>`;
        resultadotexto.innerHTML = negrito
    } else if (formatacaotexto === "_") {
        let italico = `<em>${inputtexto}</em>`;
        resultadotexto.innerHTML = italico;

    } else if (formatacaotexto === "~") {
        let tachado = `<del>${inputtexto}</del>`;
        resultadotexto.innerHTML = tachado;

    } else if (formatacaotexto === "```") {
        let monospace = `<code>${inputtexto}</code>`;
        resultadotexto.innerHTML = monospace;
    }

})


btncopia.addEventListener('click', function () {
    let textocopia = texto.value;
    navigator.clipboard.writeText(textocopia);
    alert("texto copiado");
})