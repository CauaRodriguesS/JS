let nome = new String("caua rodrigues")
console.log(nome)
console.log(nome.search(/DRI/i))// "i" para nao ser casesentive
console.log(nome.match(/o/g)) // g para buscar todos dos caracteres
console.log(nome.match(/o/gi)) // pode ter dois 
console.log(nome.replace(/a/ig,"teste"))
/* 
replace = substitui
search = procura e retorna a primeira posiçao
match = procura caracteres especificos
*/
