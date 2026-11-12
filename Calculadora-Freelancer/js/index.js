"use strict"

//variaveis
let caixaRMensal = document.querySelector('#RMensal');
let caixaRFixa = document.querySelector('#RFixa');
let caixaHoras = document.querySelector('#Horas');
let caixaDMes = document.querySelector('#DMes');
let caixaHorasPro = document.querySelector('#HorasPro');
let caixaMarSegu = document.querySelector('#MarSegu');
let formCal = document.querySelector('#FormCal');


formCal.addEventListener('submit', function (e) {

    e.preventDefault()
    
    //total de horas trabalhadas no mês
    let Horas = Number(caixaHoras.value);
    let diasM = Number(caixaDMes.value);

    let horasM = Horas * diasM;

    //calculando o valor da hora
    let rendaM = Number(caixaRMensal.value);
    let rendaF = Number(caixaRFixa.value);

    let valorH = (rendaM + rendaF) / horasM;

    //calculando o custo base do projeto
    let horasPro = Number(caixaHorasPro.value);

    let valorpro = valorH * horasPro;

    //calculando a margem de seguraça
    let margenS = Number(caixaMarSegu.value);

    let valorF = (margenS / 100) * valorpro;

    let valorfinal = valorpro + valorF;

    document.querySelector('#ValoHora').textContent = "R$" + valorH.toFixed(2);
    document.querySelector('#ValoPro').textContent ="R$" + valorfinal.toFixed(2);


    


})



