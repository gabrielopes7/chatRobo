let hora = new Date();
let horaAtual = hora.getHours();
let minutoAtual = hora.getMinutes();

let horaMensagem = document.getElementById("balaoFala");

function iniciar(){
    let botao = document.getElementById("botaoIniciar");
    let corpoChat = document.getElementById("corpoPrincipal");
    let criaDiv = document.createElement("div");

    criaDiv.setAttribute("id", "textoRobo");
    corpoChat.append(criaDiv)
    


    

    botao.style.display = "none";

}

