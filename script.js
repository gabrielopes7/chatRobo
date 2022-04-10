function hora(t){
  let hora = new Date();
  let horaAtual = hora.getHours();
  let minutoAtual = hora.getMinutes();
  return [horaAtual, minutoAtual];
}

// Devo criar outra função para que eu possa colocar o horário nos balões já criados.

function horaMensagem(h, m) {
  let hora = document.getElementsByClassName("hora");

    if (m < 10) {
      return hora.innerHTML = h + ":0" + m;
    } else {
      return hora.innerHTML = h + ":" + m;
    }

}

function criarBaloes(){
  let textoUser = document.createElement("div");
  let textoRobo = document.createElement("div");
  let fotoRobo = document.createElement("div");
  let divUser = document.createElement("div");
  let divRobo = document.createElement("div");
  let divHoraUser = document.createElement("div");
  let divHoraRobo = document.createElement("div");
  let corpoChat = document.getElementById("corpoPrincipal");

  let horaMinuto = hora();

  textoUser.setAttribute("class", "textoUser");
  textoRobo.setAttribute("class", "textoRobo");
  fotoRobo.setAttribute("class", "fotoRobo");
  divUser.setAttribute("class", "balaoFala");
  divRobo.setAttribute("class", "balaoFala");

  divHoraUser.setAttribute("class", "hora");
  divHoraRobo.setAttribute("class", "hora");

  divHoraUser.innerHTML =  horaMensagem(horaMinuto[0], horaMinuto[1])
  divHoraRobo.innerHTML =  horaMensagem(horaMinuto[0], horaMinuto[1])

  corpoChat.appendChild(textoUser);
  textoUser.appendChild(divUser);
  textoUser.appendChild(divHoraUser);
  

  setTimeout(() => {
    corpoChat.appendChild(textoRobo);
    textoRobo.appendChild(fotoRobo);
    textoRobo.appendChild(divRobo);
    textoRobo.appendChild(divHoraRobo);
  },30);

  setTimeout(() => {
    horaMensagem(horaMinuto[0], horaMinuto[1])
  },40);

  return [divUser, divRobo];
  
}


function enter(e) {
  
  let key = e.which || e.keyCode;
  if (key == 13) {
    let msgUser = document.getElementById("user").value;
    if (msgUser == "") {
      alert("Escolha uma opção");
      msgUser.focus
    } else {
      let chamaFuncao = criarBaloes();

      switch (msgUser) {
        case "1":

          if(hora[0] >= 0 && hora[0] <= 12){
            chamaFuncao[0].innerText = "Bom dia!";
            chamaFuncao[1].innerText = "Bom dia!";
            
          } else if (hora[0] > 17 && hora[0] <= 23){
            chamaFuncao[0].innerText = "Boa noite!";
            chamaFuncao[1].innerText = "Boa noite!";
            
          } else{
            chamaFuncao[0].innerText = "Boa tarde!";
            chamaFuncao[1].innerText = "Boa tarde!";
            
          }
          break; 







        case "2":
          chamaFuncao[0].innerText = "Recomende-me um livro, por favor!"

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
          
          chamaFuncao[1].innerText = livros[Math.floor(Math.random() * (livros.length))]
          break;
        case "3":
          const url = "http://api-public.guidebox.com/v2/";
          fetch(url)
            .then((res)=>{
              return res.json();
            })
            .then((data) =>{          // Buscar uma API que faça o uso de catálogo netflix ou prime
              console.log(data)
            })

          
        

          break;
        default:
          console.log("Digite o valor correto");
      }
    }
  }
}

// Próximo passo é buscar uma api de catálogo de séries para poder recomendar uma ao usúario.
// Os balões criados estão resolvidos, agora falta colocar no balões que já estão