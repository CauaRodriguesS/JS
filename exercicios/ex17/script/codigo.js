function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
   if(num.Value.length == 0){
       alert('erro')
   }else{
       let n = Number(num.value)
       let c = 1
       while(c <= 10){
           let item = document.createElement('option')
           item.text = ` ${n} x ${ c} = ${ c * n}`
           tab.appendChild(item)
           c++
       }
   }
    

}