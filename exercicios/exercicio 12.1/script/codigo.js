function carregar(){
var img = document.querySelector("#img")
var msg = document.querySelector("#msg")
var data = new Date()
var hora = data.getHours()
var texto = document.querySelector("#texto")
msg.innerHTML = `agora sao ${hora} horas` 
if(hora >= 0 && hora < 12){
    img.src = "manha.jpeg"
    texto.innerHTML = "Bom dia!"
}
else if(hora >= 12 && hora < 18){
    img.src = "tarde.jpeg"
    texto.innerHTML = "Boa tarde!"
    document.body.style.backgroundColor = '#e9c398'
}
else{
    img.src = "noite].jpeg"
    texto.innerHTML = "Boa noite!"
    document.body.style.background = '#152c41'
}
}