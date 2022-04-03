let hora = new Date();
let horaAtual = hora.getHours();
let minutoAtual = hora.getMinutes();

function horaMensagem(h, m) {
  let hora = document.getElementsByClassName("hora");
  for (let i = 0; i < hora.length; i++){
    if (m < 10) {
     hora[i].innerHTML += h + ":0" + m;
    } else {
      hora[i].innerHTML += h + ":" + m;
    }
    
  }
}

function enter(e){
  let key = e.which || e.keyCode;
  if(key == 13){
    let msgUser = document.getElementById("user").value;
    if (msgUser == ""){
      alert("Escolha uma opção");
    }else{
      switch (msgUser){
        case "1":
          console.log("Deu certo");
          break;
        case "2":
          console.log("Correto");
          break;
        case "3":
          console.log("Tô indo");
          break
        default:
          console.log("Digite o valor correto")
      }

    }
  }
  
  
  
}

horaMensagem(horaAtual, minutoAtual);
