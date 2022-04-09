let hora = new Date();
let horaAtual = hora.getHours();
let minutoAtual = hora.getMinutes();

function horaMensagem(h, m) {
  let hora = document.getElementsByClassName("hora");
  for (let i = 0; i < hora.length; i++) {
    if (m < 10) {
      hora[i].innerHTML = h + ":0" + m;
    } else {
      hora[i].innerHTML = h + ":" + m;
    }
  }
}


function enter(e) {
  
  let key = e.which || e.keyCode;
  if (key == 13) {
    let msgUser = document.getElementById("user").value;
    if (msgUser == "") {
      alert("Escolha uma opção");
      msgUser.focus
    } else {
      switch (msgUser) {
        case "1":
          let textoUser = document.createElement("div");
          let textoRobo = document.createElement("div");
          let fotoRobo = document.createElement("div");
          let divUser = document.createElement("div");
          let divRobo = document.createElement("div");
          let divHoraUser = document.createElement("div");
          let divHoraRobo = document.createElement("div");
          let corpoChat = document.getElementById("corpoPrincipal");

          textoUser.setAttribute("class", "textoUser");
          textoRobo.setAttribute("class", "textoRobo");
          fotoRobo.setAttribute("class", "fotoRobo");
          divUser.setAttribute("class", "balaoFala");
          divRobo.setAttribute("class", "balaoFala");

          divHoraUser.setAttribute("class", "hora");
          divHoraRobo.setAttribute("class", "hora")

          corpoChat.appendChild(textoUser);
          textoUser.appendChild(divUser);
          textoUser.appendChild(divHoraUser);
          

          setTimeout(() => {
            corpoChat.appendChild(textoRobo);
            textoRobo.appendChild(fotoRobo);
            textoRobo.appendChild(divRobo);
            textoRobo.appendChild(divHoraRobo);
          },30);
          
          
          
          
          if(horaAtual >= 0 && horaAtual <= 12){
            divUser.innerText = "Bom dia!";
            divRobo.innerText = "Bom dia!";
          } else if (horaAtual > 17 && horaAtual <= 23){
            divUser.innerText = "Boa noite!"
            divRobo.innerText = "Boa noite!";
          } else{
            divUser.innerText = "Boa tarde!"
            divRobo.innerText = "Boa tarde!";
          }
          setTimeout(() => {
            horaMensagem(horaAtual, minutoAtual)
          },40)
          break;
        case "2":
          let textoUser2 = document.createElement("div");
          let textoRobo2 = document.createElement("div");
          let fotoRobo2 = document.createElement("div");
          let divUser2 = document.createElement("div");
          let divRobo2 = document.createElement("div");
          let divHoraUser2 = document.createElement("div");
          let divHoraRobo2 = document.createElement("div");
          let corpoChat2 = document.getElementById("corpoPrincipal");

          textoUser2.setAttribute("class", "textoUser");
          textoRobo2.setAttribute("class", "textoRobo");
          fotoRobo2.setAttribute("class", "fotoRobo");
          divUser2.setAttribute("class", "balaoFala");
          divRobo2.setAttribute("class", "balaoFala");

          divUser2.innerText = "Recomende-me um livro, por favor!"

          divHoraUser2.setAttribute("class", "hora");
          divHoraRobo2.setAttribute("class", "hora")

          corpoChat2.appendChild(textoUser2);
          textoUser2.appendChild(divUser2);
          textoUser2.appendChild(divHoraUser2);
          
          let livros = [
            "Em Busca do Tempo Perdido (1913-1927), de Marcel Proust",
            "Ulysses (1922), de James Joyce",
            "Dom Quixote (1605), de Miguel de Cervantes",
            "O Grande Gatsby (1925), de F. Scott Fitzgerald",
            "Cem Anos de Solidão (1967), Gabriel García Márquez",
            "Moby Dick (1851), de Herman Melville",
            "Guerra e Paz (1865), Lev Tolstói",
            "Lolita (1955), de Vladimir Nabokov",
            "Hamlet (1609), de William Shakespeare",
            "O Apanhador no Campo de Centeio (1945), de J.D. Salinger",
          ]
          
          divRobo2.innerText = livros[Math.floor(Math.random() * (livros.length))]

          setTimeout(() => {
            corpoChat2.appendChild(textoRobo2);
            textoRobo2.appendChild(fotoRobo2);
            textoRobo2.appendChild(divRobo2);
            textoRobo2.appendChild(divHoraRobo2);
          },30);
          
          
          

          setTimeout(() => {
            horaMensagem(horaAtual, minutoAtual)
          },40)
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

// Próximo passo é buscar uma api de catálogo de séries para poder recomendar uma ao usúario.