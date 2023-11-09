
let obj = fetch('https://api.github.com/users/cauarodriguess').then(function(respostadoserver){
    return respostadoserver.json()
}).then((respostapronta) => {
    console.log(respostapronta)
    return JSON.parse(respostapronta)
})
console.log(obj.name)