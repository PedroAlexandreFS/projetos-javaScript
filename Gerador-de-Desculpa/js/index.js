const culpados = ["O estagiário", "o servidor", "O Chat-Gpt", "Minha internet", "Meu computador", "A Equipe"];

const acoes = ["Deletou sem querer", "derrubou de propósito", "entrou em loop infinito com", "Esqueceu de salva", "travou completamente"];

const motivo = ["um ponto e virgula esquecido.", "um  café derramado no servidor", "uma atualização feita na sexta feira as 18h.", "Um commit direto na branch principal.", "um erro que só acontece no meu computador."];

const botaoDark = document.getElementById("btn-dark");
botaoDark.addEventListener("click", DarkMode);
function DarkMode() {
    document.body.classList.toggle("dark-mode");
    const botaoDark = document.getElementById("btn-dark");
    if (document.body.classList.contains("dark-mode")) {
        botaoDark.innerHTML = "light mode"
    } else {
        botaoDark.innerHTML = "dark mode"
    }
};



const botaogirar = document.getElementById("btn-roleta");
botaogirar.addEventListener("click", roletar);

function roletar() {
    console.log("roletou")
    const culpadoAleatorio = Math.floor(Math.random() * culpados.length);
    const culpadoEscolhido = culpados[culpadoAleatorio];
    document.getElementById("roleta-culpado").innerHTML = culpadoEscolhido;

    const acoesAleatorio = Math.floor(Math.random() * acoes.length);
    const acoesEscolhido = acoes[acoesAleatorio];
    document.getElementById("roleta-acao").innerHTML = acoesEscolhido;

    const motivoAleatorio = Math.floor(Math.random() * motivo.length);
    const motivoEscolhido = motivo[motivoAleatorio];
    document.getElementById("roleta-motivo").innerHTML = motivoEscolhido;


    const desculpaAtual = {
        culpado: culpadoEscolhido,
        acao: acoesEscolhido,
        motivo: motivoEscolhido
    };

    localStorage.setItem("ultimaDescupa", JSON.stringify(desculpaAtual));

};



const dadosSalvos = localStorage.getItem("ultimaDescupa");

if (dadosSalvos) {

    const descupaSalva = JSON.parse(dadosSalvos);
    document.getElementById("roleta-culpado").innerHTML = descupaSalva.culpado;
    document.getElementById("roleta-acao").innerHTML = descupaSalva.acao;
    document.getElementById("roleta-motivo").innerHTML = descupaSalva.motivo;
};