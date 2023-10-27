var num = document.querySelector("#fnum")
var lista = document.querySelector("#flista")
var resultado = document.querySelector("#res")
var valores = []
function isnumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if (isnumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        var option = document.createElement('option')
        option.innerHTML = ` o valor adicionado é ${num.value}`
        lista.appendChild(option)
        resultado.innerHTML = " "

    } else {
        alert("valor invalido")
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert("vazio")
    } else {
        let soma = 0
        resultado.innerHTML = " "
        let menor = valores[0]
        let maior = valores[0]
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            } else if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        let media = (soma / valores.length)
        let total = valores.length
        resultado.innerHTML += `<p>ao todo temos ${total} numeros cadastrados</p>`
        resultado.innerHTML += `<p>o maior numero adicionado é ${maior} e o menor é ${menor} </p>`
        resultado.innerHTML += `<p>a soma de todos os elementos é de ${soma} </p>`
        resultado.innerHTML += `<p>a media é de ${media}</p>`
    }
}