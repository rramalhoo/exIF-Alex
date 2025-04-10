function IMC() {
    let peso = parseFloat(document.getElementById("peso").value)
    let altura = parseFloat(document.getElementById("altura").value)
    let IMC = peso / (altura * altura)
    let msg = ''

    if (IMC < 18.5) {
        msg = 'Você está <strong>abaixo do peso</strong>, seu IMC é:'
    }
    if (IMC >= 18.5 && IMC <= 24.9) {
        msg = 'Seu peso está <strong>normal</strong>, seu IMC é:'
    }
    if (IMC >= 25 && IMC <= 29.9) {
        msg = 'Você está com <strong>sobrepeso</strong>, seu IMC é:'
    }
    if (IMC >= 30 && IMC <= 34.9) {
        msg = 'Você está com <strong>obesidade grau 1</strong>, seu IMC é: '
    }
    if (IMC >= 35 && IMC <= 39.9) {
        msg = 'Você está com <strong>obesidade grau 2</strong>, seu IMC é:'
    }
    if (IMC >= 40) {
        msg = 'Você está com <strong>obesidade grau 3</strong>, seu IMC é:'
    }

    document.getElementById("resposta").innerHTML = msg + '' + IMC.toFixed(1)


}

function media() {
    let nota1 = parseFloat(document.getElementById("prv1").value)
    let nota2 = parseFloat(document.getElementById("prv2").value)
    let media = (nota1 + nota2) / 2
    let msg = ''

    if (media >= 7) {
        msg = '<strong>Aprovado</strong>, com nota: '
    }
    if (media <= 5 && media >= 6.9) {
        msg = '<strong>Recuperação</strong>, com nota: '
    }
    if (media < 5) {
        msg = '<strong>Retido</strong>, com nota: '
    }

    document.getElementById("resposta2").innerHTML = msg + '' + media


}