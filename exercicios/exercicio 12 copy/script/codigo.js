function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.querySelector("#nascimento")
    var res = document.getElementById("resultado")
    if(nasc.value.length > ano || nasc.value.length == 0 || nasc.value == "0"){
        alert("error,verifique os dados inseridos")
    }else{
        var sexo = document.getElementsByName("radsex")
        var idade = ano - Number(nasc.value)
        res.innerHTML = `idade detectada de ${idade} idade`
        var genero = ""
        if(sexo[0].checked){
            alert("homem")
        }
        else if(sexo[1].checked){
            alert("mulher")
        }
    }
    



}