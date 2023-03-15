const flashcards = document.querySelector(".flashcards");
const criarCx = document.querySelector(".criar-card");
const pergunta = document.querySelector("#pergunta");
const resposta = document.querySelector("#resposta");
let myLocal = localStorage.getItem("itens")
  ? JSON.parse(localStorage.getItem("itens"))
  : [];

function excluir() {
  localStorage.clear();
  flashcards.innerHTML = "";
  myLocal = [];
}

function cancelar() {
  criarCx.style.display = "none";
}
function criar() {
  criarCx.style.display = "flex";
}

function salvar() {
  let flashcardInfo = {
    perg: pergunta.value,
    resp: resposta.value,
  };

  myLocal.push(flashcardInfo);
  localStorage.setItem("itens", JSON.stringify(myLocal));

  addCard(myLocal[myLocal.length - 1]);
  pergunta.value = "";
  resposta.value = "";
}

myLocal.forEach(addCard);
function addCard(txt) {
  criarCx.style.display = "none";

  if (txt.perg.length >= 1 && txt.resp.length >= 1) {
    let div = document.createElement("div");
    let h2perg = document.createElement("h2");
    let h2resp = document.createElement("h2");
    let btn = document.createElement("button");

    div.className = "flashcard";
    h2perg.setAttribute("style", "text-align: justify");
    h2perg.innerHTML = txt.perg;

    h2resp.setAttribute(
      "style",
      "text-align: center; display: none; color: green"
    );
    h2resp.innerHTML = txt.resp;

    btn.innerHTML = "mostrar/esconder";

    div.appendChild(h2perg);
    div.appendChild(h2resp);
    div.appendChild(btn);
    btn.addEventListener("click", () => {
      if (h2resp.style.display == "none") {
        h2resp.style.display = "block";
      } else {
        h2resp.style.display = "none";
      }
    });
    flashcards.appendChild(div);
  }
}
