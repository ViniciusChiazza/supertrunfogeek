var carta1 = {
  nome: "Guts, o Espadachim Negro",
  imagem: "https://giffiles.alphacoders.com/189/189992.gif",
  atributos: {
    força: 8,
    habilidade: 7,
    coragem: 10
  }
};
var carta2 = {
  nome: "Darth Vader, o escolhido",
  imagem:
    "https://i.pinimg.com/originals/0b/1c/23/0b1c2307c83e1ebdeed72e41b9a058ad.gif",
  atributos: {
    força: 10,
    habilidade: 7,
    coragem: 5
  }
};
var carta3 = {
  nome: "O pistoleiro sem nome",
  imagem:
    "https://i.pinimg.com/originals/21/6e/41/216e41eeb2be13f136e62de35636377e.gif",
  atributos: {
    força: 3,
    habilidade: 9,
    coragem: 5
  }
};
var carta4 = {
  nome: "Raziel, o ladrão de almas",
  imagem: "https://c.tenor.com/0dWgEgHxZTgAAAAC/legacy-of-kain-raziel.gif",
  atributos: {
    força: 6,
    habilidade: 8,
    coragem: 8
  }
};
var carta5 = {
  nome: "Solid Snake, o soldado perfeito",
  imagem: "https://i.makeagif.com/media/9-25-2015/1JBEcn.gif",
  atributos: {
    força: 6,
    habilidade: 10,
    coragem: 8
  }
};
var carta6 = {
  nome: "Dracula, o principe das trevas",
  imagem: "https://thumbs.gfycat.com/GiftedFondAmericanshorthair-max-1mb.gif",
  atributos: {
    força: 8,
    habilidade: 9,
    coragem: 8
  }
};
var carta7 = {
  nome: "Dante, o viajante do inferno",
  imagem: "https://j.gifs.com/ANPRVP.gif",
  atributos: {
    força: 8,
    habilidade: 8,
    coragem: 7
  }
};
var carta8 = {
  nome: "Kratos, o Deicida",
  imagem:
    "http://pa1.narvii.com/6288/34a75d61505489f48d648b982903e975d56c3b2f_00.gif",
  atributos: {
    força: 10,
    habilidade: 8,
    coragem: 9
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  cartaMaquina = "";
  cartaJogador = "";
  var numeroCartaMaquina = parseInt(Math.random() * 8);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 8);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 8);
  }
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.innerHTML =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaMaquina.style.backgroundImage = `url()`;

  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "<p class='resultado-final'>Venceu</p>";
  } else if (valorCartaJogador < valorCartaMaquina) {
    elementoResultado.innerHTML = "<p class='resultado-final'>Perdeu</p>";
  } else {
    elementoResultado.innerHTML = "<p class='resultado-final'>Empatou</p>";
  }

  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnSortear").disabled = false;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      ": " +
      cartaJogador.atributos[atributo] +
      "</input><br>";
  }

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  console.log(moldura + nome + tagHTML + opcoesTexto + "</div>");
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      ": " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  console.log(moldura + nome + tagHTML + opcoesTexto + "</div>");
}