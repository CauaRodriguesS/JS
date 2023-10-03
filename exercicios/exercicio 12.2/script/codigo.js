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
        var genero = " "
        var imagem = document.createElement('img')
        imagem.setAttribute('id','foto')
        if(sexo[0].checked){
            genero = "masculino"
           if(idade >= 0 && idade <= 14 ){
            imagem.setAttribute('src','crianca-homem.jpg')
            alert("validou")
           }else if(idade < 21){
            //adulto

           }else if(idade < 60 ){

            //velho
           }
        }
        else if(sexo[1].checked){
            genero = "feminino"
            if(idade >= 0 && idade <= 14 ){
                //crianca
    
               }else if(idade < 21){
                //adulto
    
               }else if(idade < 60 ){
    
                //velho
               }
        }
        res.style.textAlign="center"
        res.style.fontFamily = "arial"
        res.innerHTML = `detectamos que o genero é ${genero} com  a idade de ${idade} de idade`
    
    }
    



}