const obs = [
    {
        "nome":"caua",
        "idade":17,
        "esta_trabalhando":true,
        "profissao":{
            "profissao":"programador",
            "empresa":"felix",
            "salario":1200.19
            
        },
        "hobbies":["programas","correr","lutar"]
        
    }
]
const JSONdata = JSON.stringify(obs) // passa para json
console.log(JSONdata)
const objdata = JSON.parse(JSONdata) // passa para obj  
console.log(objdata)
objdata.map((pessoa) =>{
console.log(pessoa.nome)
})
