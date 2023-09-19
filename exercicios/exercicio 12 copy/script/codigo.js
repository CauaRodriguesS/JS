function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var res = document.querySelector("#resultado")
    var nasc = document.querySelector("#nascimento").value;


    if (nasc.lenght === 0 || nasc > ano) {
        alert("Não foi possível verificar, por favor, verifique os dados e tente novamente.");
    }
    else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - nasc
        res.style.textAlign = "center"
        var genero = ''
        if (fsex[0].checked) {
            genero = "homem"
            res.innerHTML = `detectamos um ${genero} de ${idade} de idade`
        }
        else if (fsex[1].checked) {
            genero = "mulher"
            res.innerHTML = `detectamos uma ${genero} de ${idade} de idade`
            
        }



    }

}
