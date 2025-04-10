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