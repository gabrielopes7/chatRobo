let hora = new Date();
let horaAtual = hora.getHours();
let minutoAtual = hora.getMinutes();

function horaMensagem(h, m) {
  let hora = document.getElementsByClassName("hora");
  for (let i = 0; i < hora.length; i++) {
    if (m < 10) {
      hora[i].innerHTML += h + ":0" + m;
    } else {
      hora[i].innerHTML += h + ":" + m;
    }
  }
}

function enter(e) {
  let key = e.which || e.keyCode;
  if (key == 13) {
    let msgUser = document.getElementById("user").value;
    if (msgUser == "") {
      alert("Escolha uma opção");
    } else {
      switch (msgUser) {
        case "1":
          let textoUser = document.createElement("div");
          let divUser = document.createElement("div");
          let divHoraUser = document.createElement("div");
          let corpoChat = document.getElementById("corpoPrincipal");

          textoUser.setAttribute("class", "textoUser");
          divUser.setAttribute("class", "balaoFala");
          divHoraUser.setAttribute("class", "hora");

          corpoChat.appendChild(textoUser);
          textoUser.appendChild(divUser);
          divUser.innerText = "Opção 1"
          textoUser.appendChild(divHoraUser);

          break;
        case "2":
          console.log("Correto");
          break;
        case "3":
          console.log("Tô indo");
          break;
        default:
          console.log("Digite o valor correto");
      }
    }
  }
}

horaMensagem(horaAtual, minutoAtual);
