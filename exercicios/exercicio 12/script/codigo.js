function carregar(){
var img = document.querySelector("#img")
var msg = document.querySelector("#msg")
var data = new Date()
var hora = data.getHours()
var texto = document.querySelector("#texto")
msg.innerHTML = `agora sao ${hora} horas` 
if(hora >= 0 && hora < 12){
    img.src = "../imagens/manhã.jpeg"
    texto.innerHTML = "Bom dia!"
}
else if(hora >= 12 && hora > 18){
    texto.innerHTML = "Boa tarde!"
}
else{
    texto.innerHTML = "Boa noite!"
}
}