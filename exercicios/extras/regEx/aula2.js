let nome = "caua rodrigueeeeeees santossssssssss silvau 1002"
let email = "caua.@slaoq.com"

console.log(nome)
console.log(nome.match(/[a-f|0-9]/ig))
//metacaracteres
console.log(nome.match(/\d/ig))// \d de digitos
console.log(nome.match(/\s/ig))// \s espaços
console.log(nome.match(/\bs/ig))// \b dword
//quantificadores
console.log(nome.match(/e+|s+/ig)) // o + ve da string completa
console.log(nome.match(/au*/ig)) // o * ve totalmente
console.log(nome.match(/au?/ig)) // o ? é x ou y